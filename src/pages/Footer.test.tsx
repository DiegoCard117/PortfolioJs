import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import emailjs from '@emailjs/browser';
import { LanguageProvider } from '../i18n/LanguageContext';
import { Footer } from './Footer';

vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn() },
}));

function renderFooter() {
  return render(
    <LanguageProvider>
      <Footer />
    </LanguageProvider>,
  );
}

function fillAndSubmit() {
  fireEvent.change(screen.getByLabelText('Seu email'), { target: { value: 'diego@example.com' } });
  fireEvent.change(screen.getByLabelText('Sua mensagem'), { target: { value: 'Olá, tudo bem?' } });
  fireEvent.click(screen.getByRole('button', { name: 'Enviar mensagem' }));
}

describe('Footer', () => {
  beforeEach(() => {
    localStorage.setItem('lang', 'pt');
    vi.mocked(emailjs.send).mockReset();
  });

  it('sends the form data to EmailJS and shows a success message', async () => {
    vi.mocked(emailjs.send).mockResolvedValue({ status: 200, text: 'OK' });

    renderFooter();
    fillAndSubmit();

    expect(await screen.findByText(/Mensagem enviada/)).toBeInTheDocument();
    expect(emailjs.send).toHaveBeenCalledWith(
      'service_j0jkvh7',
      'template_q1d917c',
      { email: 'diego@example.com', message: 'Olá, tudo bem?' },
      'VnsPHOsUeXYDnMl_d',
    );
  });

  it('shows an error message when EmailJS fails', async () => {
    vi.mocked(emailjs.send).mockRejectedValue(new Error('network error'));

    renderFooter();
    fillAndSubmit();

    expect(await screen.findByText(/Algo deu errado/)).toBeInTheDocument();
  });
});
