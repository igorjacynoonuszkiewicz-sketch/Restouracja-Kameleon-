import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { ramen, menuNote } from '../../data/menu'

export default function Menu() {
  const [featured, ...rest] = ramen

  return (
    <section id="ramen" className="relative py-24 md:py-36 bg-ink">
      <div className="absolute inset-0 bg-blueprint opacity-[0.25]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading index="02" kicker="Ramen" title="Cztery miski. Każda warzona godzinami." meta="拉麺 · ceny w zł" />

        {/* Wybór szefa — Tantanmen */}
        <Reveal>
          <article className="grid md:grid-cols-2 border border-line mb-5" style={{ borderRadius: 'var(--radius)' }}>
            {/* Placeholder zdjęcia — uczciwie oznaczony */}
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[22rem] border-b md:border-b-0 md:border-r border-line bg-ink-2 overflow-hidden">
              <div className="absolute inset-0 bg-blueprint opacity-[0.5]" />
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(214,138,60,0.18), transparent 70%)' }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <span className="t-meta text-bone-dim/70 text-[0.625rem] mb-2">[ tu zdjęcie realnego Tantanmen ]</span>
                <span className="font-display text-bone/30 text-5xl italic">担々麺</span>
              </div>
              <span className="absolute top-4 left-4 t-meta text-amber">● wybór szefa</span>
            </div>

            {/* Opis */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="t-h2 text-bone">{featured.name}</h3>
                <span className="font-mono text-lg text-amber whitespace-nowrap">{featured.price}</span>
              </div>
              <p className="t-body text-bone-dim">{featured.description}</p>
            </div>
          </article>
        </Reveal>

        {/* Pozostałe rameny — hairline rows */}
        <div className="border-x border-line" style={{ borderRadius: 'var(--radius)' }}>
          {rest.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <article className="group grid md:grid-cols-[1fr_auto] gap-x-8 gap-y-2 px-6 md:px-10 py-7 border-t border-b last:border-b border-line">
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="t-h3 text-bone group-hover:text-sesame transition-colors">{item.name}</h3>
                    {item.tag && <span className="t-meta text-amber text-[0.625rem]">{item.tag}</span>}
                  </div>
                  <p className="t-body text-bone-dim max-w-2xl">{item.description}</p>
                </div>
                <span className="font-mono text-lg text-amber md:text-right md:pl-8 self-start whitespace-nowrap">
                  {item.price}
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="t-body text-bone-dim/70 text-sm max-w-2xl mt-8">{menuNote}</p>
      </div>
    </section>
  )
}
