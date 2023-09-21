import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { AboutMe } from './pages/AboutMe';
import { Footer } from './pages/Footer';
import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './assets/css/style.scss';
import './assets/css/menu.scss';
import './assets/css/home.scss';
import './assets/css/footer.scss';
import './assets/css/portfolio.scss';
import './assets/css/about.scss';

import { Design } from './components/Design';

export default function App() {
  return (
    <>
      <Design />
      <Home />
      <Portfolio />
      <AboutMe />
      <Footer />
    </>
  );
}


/* 

*/