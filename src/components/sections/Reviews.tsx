import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Stars from '../ui/Stars'
import { reviews } from '../../data/reviews'

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = (i: number) => setIndex((i + reviews.length) % reviews.length)

  useEffect(() => {
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5500)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const pause = () => timerRef.current && clearInterval(timerRef.current)
  const resume = () => {
    pause()
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5500)
  }

  return (
    <section id="opinie" className="relative py-28 md:py-36 bg-ink overflow-hidden">
      <span aria-hidden className="kanji-watermark absolute top-10 left-0 text-[14rem] select-none">
        声
      </span>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        <SectionHeading kicker="Opinie gości" kanji="評価" title="Co mówią goście" />

        <div className="relative" onMouseEnter={pause} onMouseLeave={resume}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.name} className="w-full flex-shrink-0 px-2">
                  <Reveal>
                    <div className="glass-panel rounded-2xl p-8 md:p-12 text-center">
                      <span className="font-jp text-4xl text-gold/40 block mb-4">"</span>
                      <Stars rating={review.rating} className="justify-center mb-5" />
                      <p className="font-display text-xl md:text-2xl text-cream italic leading-relaxed mb-6">
                        {review.text}
                      </p>
                      <span className="text-sm uppercase tracking-[0.2em] text-gold-light">{review.name}</span>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Poprzednia opinia"
            onClick={() => go(index - 1)}
            className="absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Następna opinia"
            onClick={() => go(index + 1)}
            className="absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              aria-label={`Opinia ${i + 1}`}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-gold' : 'w-1.5 bg-cream-dim/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
