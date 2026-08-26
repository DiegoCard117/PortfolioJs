import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider } from '../i18n/LanguageContext';
import { Menu } from './Menu';

beforeEach(() => {
  localStorage.setItem('lang', 'pt');
});

function renderMenu() {
  return render(
    <LanguageProvider>
      <Menu />
    </LanguageProvider>,
  );
}

describe('Menu', () => {
  it('renders all navigation links pointing to the right sections', () => {
    renderMenu();

    expect(screen.getByRole('link', { name: 'Início' })).toHaveAttribute('href', '#home');
    expect(screen.getByRole('link', { name: 'Projetos' })).toHaveAttribute('href', '#works');
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog');
    expect(screen.getByRole('link', { name: 'Sobre mim' })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '#footer');
  });

  it('toggles the open state and accessible label when the menu icon is clicked', () => {
    renderMenu();

    const toggle = screen.getByRole('button', { name: 'Abrir menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggle);

    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true');
  });
});
