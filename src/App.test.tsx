import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the hero and the resume download link without crashing', () => {
    render(<App />);

    // the hero name is split into per-letter spans for the entrance animation,
    // so the accessible name (from aria-label) is what should be asserted on
    expect(screen.getByRole('heading', { name: 'Diego Cardoso' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Baixar currículo|Download resume/ })).toHaveAttribute(
      'href',
      expect.stringContaining('/resume/'),
    );
  });
});
