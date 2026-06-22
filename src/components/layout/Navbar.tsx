import { useEffect, useState } from 'react'

/* ─────────────────────────────────────────────────────────────────────────────
   Hand-crafted sketch icons — each one themed to the Dim Sum Ramen brand.
   All use organic bezier paths, round caps/joins and 1.6–2 px strokes to
   evoke a Japanese calligraphy / sumi-e brush-sketch feeling.
───────────────────────────────────────────────────────────────────────────── */

function IconMen() {
  // 麺 kanji — the restaurant's own logo character
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
      <text
        x="12" y="20" textAnchor="middle" fontSize="19"
        fontFamily="'Shippori Mincho', serif"
        fill="currentColor" fontWeight="600"
      >麺</text>
    </svg>
  )
}

function IconBowl() {
  // Ramen bowl — sketch side-view: ellipse rim, curved body, wavy noodles, chopsticks
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden>
      {/* Rim */}
      <path d="M4 9 Q12 6.5 20 9" strokeWidth="2"/>
      {/* Bowl body */}
      <path d="M4 9 Q4.5 17.5 12 19 Q19.5 17.5 20 9" strokeWidth="1.7"/>
      {/* Noodle waves */}
      <path d="M7.5 11.5 Q9.5 9.8 11.5 11.5 Q13.5 13.2 15.5 11.5" strokeWidth="1.2"/>
      <path d="M8 14 Q10 12.5 12 14 Q14 15.5 16 14" strokeWidth="1.1"/>
      {/* Chopstick left */}
      <path d="M9.5 3 Q10.5 5.5 11 8.5" strokeWidth="1.5"/>
      {/* Chopstick right */}
      <path d="M13 2.5 Q13.5 5 13.5 8.5" strokeWidth="1.5"/>
    </svg>
  )
}

function IconLantern() {
  // Paper lantern (提灯) — the gallery light motif
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden>
      {/* Hanging cord */}
      <line x1="12" y1="1.5" x2="12" y2="4.5" strokeWidth="1.3"/>
      {/* Top cap */}
      <path d="M8.5 4.5 Q12 3.5 15.5 4.5" strokeWidth="1.7"/>
      {/* Lantern body */}
      <path d="M8.5 4.5 C5.5 6.5 5.5 14.5 8.5 16.5" strokeWidth="1.7"/>
      <path d="M15.5 4.5 C18.5 6.5 18.5 14.5 15.5 16.5" strokeWidth="1.7"/>
      {/* Horizontal ribs */}
      <path d="M6.2 8 Q12 7 17.8 8" strokeWidth="1.1"/>
      <path d="M5.8 11 Q12 10 18.2 11" strokeWidth="1.1"/>
      <path d="M6.2 14 Q12 13 17.8 14" strokeWidth="1.1"/>
      {/* Bottom cap */}
      <path d="M8.5 16.5 Q12 17.5 15.5 16.5" strokeWidth="1.7"/>
      {/* Tassel */}
      <line x1="12" y1="17.5" x2="12" y2="21" strokeWidth="1.3"/>
      <path d="M10.5 21 Q12 22 13.5 21" strokeWidth="1.2"/>
    </svg>
  )
}

function IconKokoro() {
  // 心 kanji — heart/soul, represents "O nas" (our story)
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
      <text
        x="12" y="20" textAnchor="middle" fontSize="19"
        fontFamily="'Shippori Mincho', serif"
        fill="currentColor" fontWeight="600"
      >心</text>
    </svg>
  )
}

function IconSakura() {
  // Cherry blossom — 5 organic petals + center
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden>
      {/* 5 petals: organic teardrop paths from center out */}
      <path d="M12 12 C11 9.5 10 7 12 5 C14 7 13 9.5 12 12" strokeWidth="1.4"/>
      <path d="M12 12 C14.5 11.5 17 10.5 18.2 8.5 C16.5 7 14 8 12 12" strokeWidth="1.4"/>
      <path d="M12 12 C14.3 14 15.5 16.5 14 18.5 C12 18 11.5 15.5 12 12" strokeWidth="1.4"/>
      <path d="M12 12 C9.7 14 8.5 16.5 10 18.5 C12 18 12.5 15.5 12 12" strokeWidth="1.4"/>
      <path d="M12 12 C9.5 11.5 7 10.5 5.8 8.5 C7.5 7 10 8 12 12" strokeWidth="1.4"/>
      {/* Center stigma */}
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>
      {/* Tiny stamen dots */}
      <circle cx="12" cy="9.5" r="0.5" fill="currentColor" stroke="none"/>
      <circle cx="13.8" cy="10.5" r="0.5" fill="currentColor" stroke="none"/>
      <circle cx="13.2" cy="13.5" r="0.5" fill="currentColor" stroke="none"/>
      <circle cx="10.8" cy="13.5" r="0.5" fill="currentColor" stroke="none"/>
      <circle cx="10.2" cy="10.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconCrane() {
  // Origami crane (折り鶴) — angular geometry, no curves (origami = folded geometry)
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden>
      {/* Left wing */}
      <path d="M12 10 L3 7 L12 4 L12 10" strokeWidth="1.6"/>
      {/* Right wing */}
      <path d="M12 10 L21 7 L12 4 L12 10" strokeWidth="1.6"/>
      {/* Body upper */}
      <path d="M12 10 L10 15 L12 13 L14 15 L12 10" strokeWidth="1.5"/>
      {/* Tail */}
      <path d="M10 15 L9 19 M14 15 L15 19" strokeWidth="1.4"/>
      {/* Neck */}
      <path d="M12 4 L13.5 2 L15.5 1" strokeWidth="1.5"/>
      {/* Head */}
      <circle cx="15.5" cy="1.2" r="1.1" fill="currentColor" stroke="none"/>
      {/* Beak */}
      <path d="M15.5 2 L17.5 3" strokeWidth="1.2"/>
    </svg>
  )
}

function IconTorii() {
  // Torii gate (⛩) — portal/entrance, contact/connection
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden>
      {/* Curved top crossbeam */}
      <path d="M1.5 8 Q12 4 22.5 8" strokeWidth="2.2"/>
      {/* Second crossbeam */}
      <line x1="4.5" y1="11.5" x2="19.5" y2="11.5" strokeWidth="1.7"/>
      {/* Left pillar with base extensions */}
      <line x1="8" y1="6.5" x2="8" y2="22" strokeWidth="1.8"/>
      <path d="M5.5 22 L10.5 22" strokeWidth="1.5"/>
      {/* Right pillar with base extensions */}
      <line x1="16" y1="6.5" x2="16" y2="22" strokeWidth="1.8"/>
      <path d="M13.5 22 L18.5 22" strokeWidth="1.5"/>
      {/* Top finial */}
      <line x1="12" y1="1.5" x2="12" y2="4" strokeWidth="1.5"/>
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

const links = [
  { href: '#home',      label: 'Home',     icon: <IconMen /> },
  { href: '#menu',      label: 'Menu',     icon: <IconBowl /> },
  { href: '#galeria',   label: 'Galeria',  icon: <IconLantern /> },
  { href: '#o-nas',     label: 'O nas',    icon: <IconKokoro /> },
  { href: '#opinie',    label: 'Opinie',   icon: <IconSakura /> },
  { href: '#rezerwacje',label: 'Rezerwuj', icon: <IconCrane /> },
  { href: '#kontakt',   label: 'Kontakt',  icon: <IconTorii /> },
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
      {/* ── Desktop top bar ── */}
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
      <nav className="fixed bottom-0 inset-x-0 z-50 lg:hidden border-t border-gold/25"
           style={{ background: 'linear-gradient(to top, rgba(10,8,7,0.98) 0%, rgba(18,13,11,0.95) 100%)', backdropFilter: 'blur(12px)' }}>
        <div className="flex items-stretch h-[4.25rem]">
          {links.map((link) => {
            const isActive = activeSection === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex-1 flex flex-col items-center justify-center gap-1 transition-all duration-300 min-w-0 px-0.5 ${
                  isActive ? 'text-gold' : 'text-cream-dim/60 hover:text-cream-dim'
                }`}
              >
                {/* Icon wrapper — active gets a soft gold glow pill */}
                <span className={`flex items-center justify-center w-9 h-8 rounded-xl transition-all duration-300 ${
                  isActive ? 'bg-gold/15 shadow-[0_0_12px_2px_rgba(201,162,90,0.18)]' : ''
                }`}>
                  {link.icon}
                </span>
                {/* Label */}
                <span className={`text-[8.5px] tracking-widest leading-none truncate w-full text-center font-light transition-all ${
                  isActive ? 'text-gold' : 'text-cream-dim/50'
                }`}
                  style={{ fontFamily: 'var(--font-sans)' }}>
                  {link.label.toUpperCase()}
                </span>
                {/* Active dot indicator */}
                {isActive && (
                  <span className="absolute bottom-1 w-1 h-1 rounded-full bg-gold opacity-70" />
                )}
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
