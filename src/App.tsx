import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { AboutMe } from './pages/AboutMe';
import { Footer } from './pages/Footer';
import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

import './assets/css/style.scss';
import './assets/css/menu.scss';
import './assets/css/home.scss';
import './assets/css/footer.scss';
import './assets/css/portfolio.scss';
import './assets/css/blog.scss';
import './assets/css/about.scss';

import { LanguageProvider } from './i18n/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
import { SkipLink } from './components/SkipLink';

export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <SkipLink />
        <LanguageToggle />
        <Home />
        <Portfolio />
        <Blog />
        <AboutMe />
        <Footer />
        <Analytics />
      </MotionConfig>
    </LanguageProvider>
  );
}