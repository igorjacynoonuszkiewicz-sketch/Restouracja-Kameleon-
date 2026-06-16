import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#o-nas', label: 'O nas' },
  { href: '#menu', label: 'Menu' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#opinie', label: 'Opinie' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-gold/15 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2 group">
          <span className="font-jp text-gold text-xl group-hover:text-gold-light transition-colors">麺</span>
          <span className="font-display text-xl md:text-2xl tracking-wide text-cream">
            Dim Sum <span className="text-crimson-light">Ramen</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.15em] text-cream-dim hover:text-gold transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#rezerwacje"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium text-ink bg-gradient-to-r from-gold-light via-gold to-copper hover:-translate-y-0.5 transition-transform shadow-[0_6px_20px_-6px_rgba(201,162,90,0.6)]"
        >
          Rezerwacja
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-gold"
        >
          <span className={`block h-px w-6 bg-current transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-px w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-current transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 top-0 transition-[clip-path] duration-500 ease-out ${
          open ? '[clip-path:circle(150%_at_100%_0%)]' : '[clip-path:circle(0%_at_100%_0%)]'
        } bg-ink/98 backdrop-blur-md min-h-screen pt-28 px-8`}
      >
        <nav className="flex flex-col gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-display text-cream hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rezerwacje"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit items-center px-6 py-3 rounded-full text-sm uppercase tracking-[0.18em] font-medium text-ink bg-gradient-to-r from-gold-light via-gold to-copper"
          >
            Rezerwacja
          </a>
        </nav>
      </div>
    </header>
  )
}
