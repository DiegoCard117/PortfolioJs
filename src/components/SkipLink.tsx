import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a className="skip-link" href="#home">{t.skipLink}</a>
  );
}
