import { lazy, Suspense, useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import SmokeWisps from '../ui/SmokeWisps'

const RamenBowlScene = lazy(() => import('../three/RamenBowlScene'))

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(root.querySelectorAll('.hero-kicker'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
      .fromTo(root.querySelectorAll('.hero-title'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
      .fromTo(root.querySelectorAll('.hero-sub'), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.6')
      .fromTo(root.querySelectorAll('.hero-cta'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, '-=0.5')
      .fromTo(root.querySelectorAll('.hero-scroll'), { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.3')

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        backgroundPositionY: '60px',
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => {
      tl.kill()
      ctx.revert()
    }
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-seigaiha-full opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 75% 30%, rgba(156,28,46,0.22), transparent), radial-gradient(ellipse 70% 60% at 20% 80%, rgba(201,162,90,0.08), transparent)',
        }}
      />
      <div className="absolute inset-0 bg-grain opacity-40" />

      <div className="absolute inset-0 md:translate-x-[8%] opacity-90">
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-24">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-crimson/30 via-gold/10 to-transparent blur-2xl animate-pulse-glow" />
            </div>
          }
        >
          <RamenBowlScene />
        </Suspense>
        <SmokeWisps className="inset-x-0 bottom-[18%] h-1/2 hidden sm:block" count={7} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-ink from-0% via-ink/80 via-32% to-transparent to-62% md:from-ink md:from-0% md:via-ink/70 md:via-30% md:to-transparent md:to-58%" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink from-0% via-transparent via-25% to-transparent" />

      <span
        aria-hidden
        className="kanji-watermark absolute -bottom-10 right-0 text-[18rem] md:text-[26rem] select-none"
      >
        麺
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-2xl">
          <p className="hero-kicker text-gold text-xs md:text-sm uppercase tracking-[0.35em] mb-5 flex items-center gap-3">
            <span className="font-jp text-base">和食</span>
            Food Hall Montownia · Gdańsk
          </p>
          <h1 className="hero-title font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-cream mb-6">
            Zanurz się
            <br />w <span className="text-gradient-gold italic">smaku</span> Japonii
          </h1>
          <p className="hero-sub text-cream-dim text-base md:text-lg font-light leading-relaxed max-w-lg mb-10">
            Autentyczny ramen warzony godzinami i ręcznie lepione dim sum — wszystko robione od podstaw, z miłości do
            japońskiej kuchni. Kameralna izakaya w sercu Montowni.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="hero-cta group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm uppercase tracking-[0.18em] font-medium text-ink bg-gradient-to-r from-gold-light via-gold to-copper shadow-[0_8px_30px_-8px_rgba(201,162,90,0.6)] hover:shadow-[0_8px_40px_-4px_rgba(201,162,90,0.85)] hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <span className="relative z-10">Zobacz menu</span>
              <span className="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#rezerwacje"
              className="hero-cta inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm uppercase tracking-[0.18em] font-medium text-cream border border-gold/50 hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5 transition-all"
            >
              Rezerwacja
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-dim z-10">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  )
}
