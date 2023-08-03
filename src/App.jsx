import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { AboutMe } from './pages/AboutMe';
import { Footer } from './pages/Footer';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './assets/css/style.css'
import './assets/css/about.css'
import './assets/css/menu.css'
import './assets/css/home.css'
import './assets/css/footer.css'
import './assets/css/portfolio.css'

import { Design } from './components/Design'

export default function App() {
  return (
    <>
      <Design/>
      <Home />
      <Portfolio />
      <AboutMe/>
      <Footer />
    </>
  )
}