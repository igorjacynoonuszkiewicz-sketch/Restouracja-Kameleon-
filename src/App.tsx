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
      <Navbar />
      <main>
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
