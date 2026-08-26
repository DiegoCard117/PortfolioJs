import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../i18n/LanguageContext';
import { Blog } from './Blog';

function renderBlog() {
  return render(
    <LanguageProvider>
      <Blog />
    </LanguageProvider>,
  );
}

describe('Blog', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders articles fetched from the dev.to API', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve([
          {
            id: 1,
            title: 'Modeling three markets with one rebalancing engine',
            description: '',
            url: 'https://dev.to/diegocard117/example',
            published_at: '2026-01-01',
            reading_time_minutes: 4,
            tag_list: ['django', 'python'],
          },
        ]),
      }),
    );

    renderBlog();

    expect(await screen.findByText('Modeling three markets with one rebalancing engine')).toBeInTheDocument();
  });

  it('falls back to a link to the dev.to profile when the request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));

    renderBlog();

    const link = await screen.findByRole('link', { name: /dev\.to\/diegocard117/ });
    expect(link).toHaveAttribute('href', 'https://dev.to/diegocard117');
  });
});
