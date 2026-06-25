import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import HallScene from '../ui/HallScene'
import { site, openingHours, proof } from '../../data/site'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(
      root.querySelectorAll('.hero-line'),
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, delay: 0.2 },
    )

    const ctx = gsap.context(() => {
      gsap.to(sceneRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
      })
    })

    return () => {
      tl.kill()
      ctx.revert()
    }
  }, [])

  const today = openingHours[new Date().getDay() === 0 ? 0 : new Date().getDay() <= 4 ? 1 : 2]

  return (
    <section id="home" ref={containerRef} className="relative min-h-[100svh] flex flex-col overflow-hidden bg-ink">
      {/* Scena hali — industrialny klimat dawnej stoczni */}
      <div ref={sceneRef} className="absolute inset-y-[-6%] right-[-10%] sm:right-[-4%] md:right-0 w-[120%] sm:w-[78%] md:w-[60%]">
        <HallScene className="w-full h-full" />
      </div>

      {/* Kalka techniczna + ziarno */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.25]" />
      <div className="absolute inset-0 bg-grain opacity-50" />

      {/* Maska czytelności po lewej + dół */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink from-5% via-ink/85 via-42% to-transparent to-74% md:via-32% md:to-62%" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      {/* Treść */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-32">
          <div className="max-w-2xl">
            <p className="hero-line t-meta text-bone-dim mb-7 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-amber">●</span>
              Food Hall Montownia
              <span className="text-line-2">/</span>
              dawna Stocznia Gdańska
            </p>

            <h1 className="hero-line t-display text-bone mb-7">
              Składali tu okręty.
              <br />
              <span className="text-sesame italic">My</span> — miskę ramenu.
            </h1>

            <p className="hero-line t-body text-bone-dim max-w-md mb-9">
              Autorska kuchnia japońska i&nbsp;chińska w&nbsp;zabytkowej hali dawnej Stoczni Gdańskiej. Wywar warzony
              godzinami, makaron i&nbsp;pierożki lepione na&nbsp;miejscu — w&nbsp;sercu Food Hall Montownia.
            </p>

            <div className="hero-line flex flex-wrap items-center gap-3">
              <a
                href="#ramen"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-amber text-ink t-meta hover:bg-amber-deep transition-colors"
                style={{ borderRadius: 'var(--radius)' }}
              >
                Zobacz ramen
                <span aria-hidden>→</span>
              </a>
              <a
                href="#lokalizacja"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-line-2 text-bone t-meta hover:border-bone transition-colors"
                style={{ borderRadius: 'var(--radius)' }}
              >
                Jak dojść
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pasek metadanych — styl dokumentacji stoczniowej */}
      <div className="relative z-10 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
          <Meta label="Koordynaty" value={`${site.geo.lat.toFixed(4)}° N · ${site.geo.lng.toFixed(4)}° E`} />
          <Meta label="Skala" value={`${proof.bowlsPerMonth} misek / mc`} />
          <Meta label="Dziś" value={today.display} className="hidden md:block" />
          <Meta label="Kuchnia" value="JP · CN" className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}

function Meta({ label, value, className = '' }: { label: string; value: string; className?: string }) {
  return (
    <div className={`py-4 md:py-5 px-4 md:px-6 first:pl-0 ${className}`}>
      <p className="t-meta text-bone-dim/70 mb-1.5 text-[0.625rem]">{label}</p>
      <p className="font-mono text-sm text-bone">{value}</p>
    </div>
  )
}
