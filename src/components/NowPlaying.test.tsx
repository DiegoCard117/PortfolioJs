import React from 'react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../i18n/LanguageContext';
import { NowPlaying } from './NowPlaying';

beforeEach(() => {
  localStorage.setItem('lang', 'pt');
});

function renderWidget() {
  return render(
    <LanguageProvider>
      <NowPlaying />
    </LanguageProvider>,
  );
}

describe('NowPlaying', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('shows the currently playing track', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          isPlaying: true,
          title: 'Testando 1 2 3',
          artist: 'Some Band',
          albumImageUrl: 'https://example.com/art.jpg',
          songUrl: 'https://open.spotify.com/track/123',
        }),
      }),
    );

    renderWidget();

    expect(await screen.findByText('Testando 1 2 3')).toBeInTheDocument();
    expect(screen.getByText('Some Band')).toBeInTheDocument();
    expect(screen.getByText('Ouvindo agora')).toBeInTheDocument();
  });

  it('falls back to the last played track when nothing is playing', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          isPlaying: false,
          title: 'Faixa Antiga',
          artist: 'Outra Banda',
          albumImageUrl: null,
          songUrl: 'https://open.spotify.com/track/456',
        }),
      }),
    );

    renderWidget();

    expect(await screen.findByText('Faixa Antiga')).toBeInTheDocument();
    expect(screen.getByText('Ouvi por último')).toBeInTheDocument();
  });

  it('renders nothing when the API has no data or errors out', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ isPlaying: false, title: null }),
      }),
    );

    const { container } = renderWidget();

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(container).toBeEmptyDOMElement();
  });
});
