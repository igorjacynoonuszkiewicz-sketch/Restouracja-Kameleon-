import Reveal from '../ui/Reveal'
import { proof } from '../../data/site'

const specs = [
  { k: '100%', label: 'Robione od podstaw', note: 'wywar, makaron, tare, pierożki' },
  { k: 'godziny', label: 'Czas warzenia bulionu', note: 'aż złapie głębię' },
  { k: 'JP · CN', label: 'Dwie kuchnie', note: 'japońska i chińska na jednej karcie' },
  { k: 'U-Boot', label: 'Hala dawnej stoczni', note: 'zabytkowa hala montażu, dziś Montownia' },
]

export default function Proof() {
  return (
    <section id="liczby" className="relative py-24 md:py-36 bg-ink">
      <div className="absolute inset-0 bg-blueprint opacity-[0.3]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="t-meta text-bone-dim mb-8">
            <span className="tag-num">04</span>
            <span className="mx-3 text-line-2">/</span>
            Dowód
          </p>
        </Reveal>

        {/* Bohater liczbowy */}
        <Reveal>
          <div className="border border-line p-8 md:p-14 mb-5" style={{ borderRadius: 'var(--radius)' }}>
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
              <span className="t-display text-rayu leading-none">{proof.bowlsPerMonth}</span>
              <div className="md:pb-3">
                <p className="t-h3 text-bone mb-2">misek ramenu miesięcznie</p>
                <p className="t-body text-bone-dim max-w-md">
                  Każda warzona tak samo — ta sama głębia bulionu w pierwszej i w pięciotysięcznej. Skala, która nie psuje
                  powtarzalności.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Spec-sheet */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-line" style={{ borderRadius: 'var(--radius)' }}>
          {specs.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="border-r border-t border-b border-line h-full px-6 py-8" style={{ borderRadius: 'var(--radius)' }}>
                <p className="font-display text-3xl md:text-4xl text-bone mb-3">{s.k}</p>
                <p className="t-meta text-sesame text-[0.625rem] mb-2">{s.label}</p>
                <p className="t-body text-sm text-bone-dim/80">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
