import { lazy, Suspense, useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import SmokeWisps from '../ui/SmokeWisps'
import { site, openingHours, proof } from '../../data/site'

const RamenBowlScene = lazy(() => import('../three/RamenBowlScene'))

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(root.querySelectorAll('.hero-line'), { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, delay: 0.25 })

    const ctx = gsap.context(() => {
      gsap.to(sceneRef.current, {
        yPercent: 14,
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
      {/* Kalka techniczna + ziarno */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.4]" />
      <div className="absolute inset-0 bg-grain opacity-50" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 72% 42%, rgba(211,57,43,0.16), transparent 70%)' }}
      />

      {/* Scena 3D — przesunięta w prawo, asymetria */}
      <div ref={sceneRef} className="absolute inset-y-0 right-[-12%] sm:right-[-4%] md:right-0 w-[115%] sm:w-[80%] md:w-[58%] opacity-95">
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full" style={{ background: 'radial-gradient(circle, rgba(214,138,60,0.25), transparent 70%)' }} />
            </div>
          }
        >
          <RamenBowlScene />
        </Suspense>
        <SmokeWisps className="inset-x-0 bottom-[20%] h-1/2 hidden sm:block" count={6} />
      </div>

      {/* Maska czytelności po lewej */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink from-5% via-ink/80 via-40% to-transparent to-72% md:via-30% md:to-60%" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      {/* Treść */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-32">
          <div className="max-w-2xl">
            <p className="hero-line t-meta text-bone-dim mb-7 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-rayu">●</span>
              Food Hall Montownia
              <span className="text-line-2">/</span>
              dawna Stocznia Gdańska
            </p>

            <h1 className="hero-line t-display text-bone mb-7">
              Para nad miską,
              <br />
              <span className="text-sesame italic">stal</span> nad głową.
            </h1>

            <p className="hero-line t-body text-bone-dim max-w-md mb-9">
              {site.tagline} Wywar gotowany godzinami, makaron i pierożki lepione na miejscu — w&nbsp;hali, w&nbsp;której
              składano U-Booty.
            </p>

            <div className="hero-line flex flex-wrap items-center gap-3">
              <a
                href="#ramen"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-rayu text-bone t-meta hover:bg-rayu-deep transition-colors"
                style={{ borderRadius: 'var(--radius)' }}
              >
                Zobacz ramen
                <span aria-hidden>→</span>
              </a>
              <a
                href="#lokalizacja"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-line-2 text-bone t-meta hover:border-bone hover:text-bone transition-colors"
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
