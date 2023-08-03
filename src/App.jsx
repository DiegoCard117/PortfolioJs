import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { AboutMe } from './pages/AboutMe';
import { Footer } from './pages/Footer';
import './assets/css/style.css'


export default function App() {
  return (
    <>
      <Home />
      <Portfolio />
      <AboutMe/>
      <Footer />
    </>
  )
}