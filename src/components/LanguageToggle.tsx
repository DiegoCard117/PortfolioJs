import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="language-toggle" role="group" aria-label="Idioma / Language">
      <button
        type="button"
        className={lang === 'pt' ? 'active' : ''}
        onClick={() => setLang('pt')}
        aria-pressed={lang === 'pt'}
      >
        PT
      </button>
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
