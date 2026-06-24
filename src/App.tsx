import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Menu from './components/sections/Menu'
import Gallery from './components/sections/Gallery'
import Reviews from './components/sections/Reviews'
import Reservation from './components/sections/Reservation'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Przejdź do treści
      </a>
      <Navbar />
      <main id="main" className="pb-16 lg:pb-0">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
