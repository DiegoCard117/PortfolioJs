import React, { useState } from 'react';

import emailjs from '@emailjs/browser';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function sendEmail(e: { preventDefault: () => void; }) {
    e.preventDefault();

    if (email === '' || message === '') {
      alert(t.footer.fillFieldsAlert);
      return;
    }

    setStatus('sending');

    const templateParams = {
      email: email,
      message: message
    };

    emailjs.send(
      "service_j0jkvh7",
      "template_q1d917c",
      templateParams,
      "VnsPHOsUeXYDnMl_d"
      ).then(() => {
        setStatus('sent');
        setEmail("");
        setMessage("");
      }, () => {
        setStatus('error');
      });
  }

  return (
    <div id='footer' className="section footer">
      <div className='section-inner footer-inner'>
        <div className='footer-main'>
          <span className='eyebrow'>{t.footer.eyebrow}</span>
          <h2 className='footer-title'>{t.footer.title}</h2>
          <p className='footer-intro'>{t.footer.intro}</p>

          <form className='footer-form' onSubmit={sendEmail}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t.footer.emailPlaceholder}
              aria-label={t.footer.emailPlaceholder}
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <textarea
              id="msg"
              name="message"
              placeholder={t.footer.messagePlaceholder}
              aria-label={t.footer.messagePlaceholder}
              rows={4}
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <button type='submit' className='contact-btn' disabled={status === 'sending'}>
              {status === 'sending' ? t.footer.sending : t.footer.send}
            </button>

            {status === 'sent' && <p className='form-status form-status-ok'>{t.footer.sentMessage}</p>}
            {status === 'error' && <p className='form-status form-status-error'>{t.footer.errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
