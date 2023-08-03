import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { AboutMe } from './pages/AboutMe';
import { Footer } from './pages/Footer';
import './assets/css/style.css'

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