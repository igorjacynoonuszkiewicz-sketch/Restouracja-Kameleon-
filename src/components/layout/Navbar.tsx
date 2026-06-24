import { useEffect, useState } from 'react'

const links = [
  {
    href: '#home',
    label: 'Home',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    href: '#menu',
    label: 'Menu',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15M3.75 4.5h16.5M3.75 19.5h16.5" />
      </svg>
    ),
  },
  {
    href: '#galeria',
    label: 'Galeria',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    href: '#o-nas',
    label: 'O nas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    href: '#opinie',
    label: 'Opinie',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    href: '#rezerwacje',
    label: 'Rezerwuj',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
  },
  {
    href: '#kontakt',
    label: 'Kontakt',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
]

const sectionIds = ['home', 'o-nas', 'menu', 'galeria', 'opinie', 'rezerwacje', 'kontakt']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection('#' + id) },
        { threshold: 0.25 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <>
      {/* ── Desktop & top bar ── */}
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

          {/* Desktop nav */}
          <nav aria-label="Główna nawigacja" className="hidden lg:flex items-center gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href ? 'true' : undefined}
                className={`text-sm uppercase tracking-[0.15em] transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full ${
                  activeSection === link.href ? 'text-gold after:w-full' : 'text-cream-dim hover:text-gold'
                }`}
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
        </div>
      </header>

      {/* ── Mobile bottom tab bar ── */}
      <nav aria-label="Nawigacja mobilna" className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-ink/95 backdrop-blur-md border-t border-gold/20">
        <div className="flex items-stretch h-16">
          {links.map((link) => {
            const isActive = activeSection === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors min-w-0 px-0.5 ${
                  isActive ? 'text-gold' : 'text-cream-dim'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`w-10 h-7 flex items-center justify-center rounded-xl transition-all ${
                    isActive ? 'bg-gold/20' : ''
                  }`}
                >
                  {link.icon}
                </span>
                <span className="text-[9px] uppercase tracking-wide leading-none truncate w-full text-center">
                  {link.label}
                </span>
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
