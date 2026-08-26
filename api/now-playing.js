const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_URL = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

async function getAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;
  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    throw new Error(`failed to refresh spotify token: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

function trackPayload(track, isPlaying) {
  return {
    isPlaying,
    title: track.name,
    artist: track.artists.map((a) => a.name).join(', '),
    albumImageUrl: track.album?.images?.[0]?.url ?? null,
    songUrl: track.external_urls?.spotify ?? null,
  };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate=30');

  try {
    const accessToken = await getAccessToken();
    const authHeader = { Authorization: `Bearer ${accessToken}` };

    const nowRes = await fetch(NOW_PLAYING_URL, { headers: authHeader });

    if (nowRes.status === 200) {
      const data = await nowRes.json();
      if (data && data.is_playing && data.item) {
        return res.status(200).json(trackPayload(data.item, true));
      }
    }

    const recentRes = await fetch(RECENTLY_PLAYED_URL, { headers: authHeader });
    if (recentRes.ok) {
      const recentData = await recentRes.json();
      const track = recentData.items?.[0]?.track;
      if (track) {
        return res.status(200).json(trackPayload(track, false));
      }
    }

    return res.status(200).json({ isPlaying: false, title: null });
  } catch (error) {
    return res.status(200).json({ isPlaying: false, title: null, error: true });
  }
}
