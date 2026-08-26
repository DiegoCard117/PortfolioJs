import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

type NowPlayingData = {
  isPlaying: boolean;
  title: string | null;
  artist?: string;
  albumImageUrl?: string | null;
  songUrl?: string;
  error?: boolean;
};

export function NowPlaying() {
  const { t } = useLanguage();

  const [data, setData] = useState<NowPlayingData | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;

    fetch('/api/now-playing')
      .then((res) => {
        if (!res.ok) throw new Error('now-playing request failed');
        return res.json();
      })
      .then((json: NowPlayingData) => {
        if (cancelled) return;
        setData(json);
        setStatus('ready');
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === 'loading') {
    return (
      <div className="now-playing now-playing-loading">
        <span className="now-playing-status">{t.nowPlaying.loading}</span>
      </div>
    );
  }

  if (status === 'error' || !data || data.error || !data.title) {
    return null;
  }

  return (
    <a className="now-playing" href={data.songUrl} target="_blank" rel="noreferrer">
      {data.albumImageUrl && <img className="now-playing-art" src={data.albumImageUrl} alt="" />}
      <div className="now-playing-info">
        <span className="now-playing-eyebrow">
          {data.isPlaying ? t.nowPlaying.playingNow : t.nowPlaying.lastPlayed}
        </span>
        <span className="now-playing-title">{data.title}</span>
        <span className="now-playing-artist">{data.artist}</span>
      </div>
      {data.isPlaying && <span className="now-playing-pulse" aria-hidden="true" />}
    </a>
  );
}
