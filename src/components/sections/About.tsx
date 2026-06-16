import { lazy, Suspense } from 'react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const FloatingDumplings = lazy(() => import('../three/FloatingDumplings'))

const pillars = [
  {
    kanji: '心',
    title: 'Pasja',
    text: 'Paulina i Wojciech zakochali się w japońskiej kuchni na długo przed otwarciem własnego miejsca — Dim Sum Ramen jest wyznaniem tej miłości.',
  },
  {
    kanji: '技',
    title: 'Rzemiosło',
    text: 'Wojciech, szef kuchni i autor karty, czuwa nad każdym wywarem. Bulion warzy się godzinami, a makaron i pierożki powstają na miejscu.',
  },
  {
    kanji: '真',
    title: 'Autentyczność',
    text: 'Zero skrótów i mieszanek z paczki. Wszystko — od tare po nadzienie pierożków — robione jest od podstaw, każdego dnia na nowo.',
  },
]

export default function About() {
  return (
    <section id="o-nas" className="relative py-28 md:py-36 bg-ink-2 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Suspense fallback={null}>
          <FloatingDumplings count={7} />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 from-0% via-transparent via-50% to-ink/85 to-100%" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading kicker="Nasza historia" kanji="物語" title="Wszystko od podstaw" />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <Reveal y={30}>
            <div className="space-y-5 text-cream-dim text-base md:text-lg font-light leading-relaxed">
              <p>
                <span className="text-cream font-medium">Paulina i Wojciech Sornat</span> prowadzą Dim Sum Ramen —
                kameralną ramenownię w Food Hallu Montownia, w samym sercu Młodego Miasta w Gdańsku. To miejsce
                powstało z prostego powodu: kochają japońską kuchnię i chcieli przybliżyć jej smak gościom w Polsce.
              </p>
              <p>
                Wojciech, szef kuchni i autor karty, stoi za każdym wywarem i każdą kompozycją na talerzu. Filozofia
                kuchni jest jedna —{' '}
                <span className="text-gold font-medium">robić wszystko od podstaw</span>. Rosół na ramen warzy się
                długimi godzinami, makaron i pierożki dim sum lepione są ręcznie, jeden po drugim, a składniki
                wybierane są z uwagą każdego dnia.
              </p>
              <p>
                Efekt? Miska ramenu, która smakuje tak, jak powinna smakować w Tokio — i pierożki, które znikają ze
                stołu, zanim ktoś zdąży zrobić im zdjęcie.
              </p>
            </div>
          </Reveal>

          <Reveal y={30} delay={0.15}>
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl glass-panel p-1 lantern-glow">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-ink-3 via-ink-2 to-ink flex items-center justify-center">
                <div className="absolute inset-0 bg-seigaiha-full opacity-25" />
                <div className="relative text-center px-8">
                  <span className="font-jp text-7xl text-gold block mb-4">麺</span>
                  <p className="font-display text-2xl text-cream italic">"Gotujemy tak,</p>
                  <p className="font-display text-2xl text-cream italic mb-3">jak sami chcielibyśmy zjeść"</p>
                  <span className="text-xs uppercase tracking-[0.3em] text-cream-dim">Paulina &amp; Wojciech Sornat</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <div className="glass-panel rounded-2xl p-8 h-full text-center group hover:border-gold/50 transition-colors duration-300">
                <span className="font-jp text-3xl text-gold/70 group-hover:text-gold transition-colors block mb-4">
                  {p.kanji}
                </span>
                <h3 className="font-display text-xl text-cream mb-3">{p.title}</h3>
                <p className="text-sm text-cream-dim font-light leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
