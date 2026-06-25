import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { site } from '../../data/site'

interface NavLink {
  href: string
  label: string
  icon: ReactElement
}

const I = (d: string) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
)

const links: NavLink[] = [
  { href: '#home', label: 'Start', icon: I('M3 11l9-8 9 8M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5') },
  { href: '#historia', label: 'Historia', icon: I('M4 5a2 2 0 012-2h12v18H6a2 2 0 01-2-2V5zM8 7h7M8 11h7') },
  { href: '#ramen', label: 'Ramen', icon: I('M3 11h18a9 9 0 01-18 0zM7 11V7M11 11V6M15 11V7') },
  { href: '#dimsum', label: 'Dim Sum', icon: I('M4 14a8 8 0 0116 0zM4 14h16M9 14c0-2 1.3-3 3-3s3 1 3 3') },
  { href: '#liczby', label: 'Liczby', icon: I('M4 20V10M10 20V4M16 20v-7M22 20H2') },
  { href: '#lokalizacja', label: 'Lokalizacja', icon: I('M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12zM12 9.5a2 2 0 100 0z') },
]

const sectionIds = ['home', 'historia', 'ramen', 'dimsum', 'liczby', 'lokalizacja']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

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
      const o = new IntersectionObserver(([e]) => e.isIntersecting && setActive('#' + id), { threshold: 0.25 })
      o.observe(el)
      observers.push(o)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <>
      {/* Pasek górny */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-line py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#home" className="font-display text-xl md:text-2xl text-bone tracking-tight">
            DimSum <span className="text-amber">&amp;</span> Ramen
          </a>

          <nav aria-label="Główna nawigacja" className="hidden lg:flex items-center gap-8">
            {links.slice(1).map((l) => (
              <a
                key={l.href}
                href={l.href}
                aria-current={active === l.href ? 'true' : undefined}
                className={`t-meta text-[0.6875rem] transition-colors ${
                  active === l.href ? 'text-bone' : 'text-bone-dim hover:text-bone'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={site.maps.link}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-amber text-bone t-meta text-[0.625rem] hover:bg-amber-deep transition-colors"
            style={{ borderRadius: 'var(--radius)' }}
          >
            Jak dojść
          </a>
        </div>
      </header>

      {/* Pasek dolny — mobile */}
      <nav aria-label="Nawigacja mobilna" className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-ink/95 backdrop-blur-md border-t border-line">
        <div className="flex items-stretch h-16">
          {links.map((l) => {
            const isActive = active === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? 'true' : undefined}
                className={`flex-1 flex flex-col items-center justify-center gap-1 min-w-0 px-0.5 transition-colors ${
                  isActive ? 'text-amber' : 'text-bone-dim'
                }`}
              >
                <span aria-hidden>{l.icon}</span>
                <span className="font-mono text-[0.5rem] uppercase tracking-wide leading-none truncate w-full text-center">
                  {l.label}
                </span>
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
