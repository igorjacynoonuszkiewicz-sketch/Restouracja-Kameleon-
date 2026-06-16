import { useCallback, useEffect, useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import TiltCard from '../ui/TiltCard'
import GalleryIllustration from '../ui/GalleryIllustration'
import { galleryItems } from '../../data/gallery'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(() => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length)), [])
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length)),
    [],
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, next, prev])

  const active = activeIndex !== null ? galleryItems[activeIndex] : null

  return (
    <section id="galeria" className="relative py-28 md:py-36 bg-ink-2 overflow-hidden">
      <div className="absolute inset-0 bg-seigaiha-full opacity-[0.05]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="Galeria"
          kanji="写真"
          title="Smaki w kadrze"
          subtitle="Dania i wnętrze naszej kameralnej izakaya w Montowni."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 [perspective:1200px]">
          {galleryItems.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 0.08} className={i % 5 === 0 ? 'col-span-2 row-span-2' : ''}>
              <TiltCard maxTilt={12} className="rounded-2xl overflow-hidden cursor-pointer group h-full" onClick={() => setActiveIndex(i)}>
                <div className="relative aspect-square h-full">
                  <GalleryIllustration kind={item.kind} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="font-display text-lg text-cream">{item.title}</h4>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ink/60 border border-gold/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={close}
        >
          <button
            aria-label="Zamknij"
            onClick={close}
            className="absolute top-6 right-6 w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            aria-label="Poprzednie"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Następne"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-2xl overflow-hidden border border-gold/30 lantern-glow">
              <GalleryIllustration kind={active.kind} className="w-full aspect-square" />
            </div>
            <div className="text-center mt-6">
              <h3 className="font-display text-2xl text-cream mb-2">{active.title}</h3>
              <p className="text-cream-dim font-light">{active.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
