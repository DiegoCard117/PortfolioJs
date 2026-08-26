import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './LanguageContext';

function Probe() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="nav-home">{t.nav.home}</span>
      <button onClick={() => setLang('en')}>to-en</button>
      <button onClick={() => setLang('pt')}>to-pt</button>
    </div>
  );
}

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the language stored in localStorage on mount', () => {
    localStorage.setItem('lang', 'pt');
    render(<LanguageProvider><Probe /></LanguageProvider>);

    expect(screen.getByTestId('lang')).toHaveTextContent('pt');
    expect(screen.getByTestId('nav-home')).toHaveTextContent('Início');
  });

  it('switches translations, persists the choice, and updates <html lang> to en', () => {
    localStorage.setItem('lang', 'pt');
    render(<LanguageProvider><Probe /></LanguageProvider>);

    fireEvent.click(screen.getByText('to-en'));

    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    expect(screen.getByTestId('nav-home')).toHaveTextContent('Home');
    expect(localStorage.getItem('lang')).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('updates <html lang> to pt-BR when switching back to Portuguese', () => {
    localStorage.setItem('lang', 'en');
    render(<LanguageProvider><Probe /></LanguageProvider>);

    fireEvent.click(screen.getByText('to-pt'));

    expect(document.documentElement.lang).toBe('pt-BR');
  });
});
