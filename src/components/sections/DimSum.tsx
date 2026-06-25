import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function DimSum() {
  return (
    <section id="dimsum" className="relative py-24 md:py-36 bg-ink-2">
      <div className="absolute inset-0 bg-grain opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading index="03" kicker="Dim Sum" title="Chińska połowa karty. Lepiona palcami, nie maszyną." meta="点心 · ręcznie" />

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-stretch">
          {/* Placeholder zdjęcia */}
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/3] border border-line bg-ink overflow-hidden h-full" style={{ borderRadius: 'var(--radius)' }}>
              <div className="absolute inset-0 bg-blueprint opacity-[0.5]" />
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 55%, rgba(227,152,74,0.14), transparent 70%)' }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <span className="t-meta text-bone-dim/70 text-[0.625rem] mb-2">[ tu zdjęcie ręcznie lepionych pierożków ]</span>
                <span className="font-display text-bone/30 text-5xl italic">点心</span>
              </div>
            </div>
          </Reveal>

          {/* Opis */}
          <Reveal className="lg:col-span-6 flex flex-col justify-center" delay={0.12}>
            <div className="space-y-5 t-body text-bone-dim">
              <p>
                Druga połowa naszej kuchni jest chińska. Pierożki dim sum robimy ręcznie — ciasto zarabiane na miejscu,
                farsz składany tego samego dnia, każdy zawijany palcami, jeden po&nbsp;drugim, w&nbsp;trakcie serwisu.
              </p>
              <p>
                Część idzie na&nbsp;parę — delikatne, prześwitujące, miękkie. Część na&nbsp;patelnię — chrupiące na&nbsp;spodzie,
                soczyste w&nbsp;środku. Skradły już niejedno serce i&nbsp;znikają ze&nbsp;stołu, zanim ktoś zdąży zrobić im
                zdjęcie.
              </p>
              <div className="rule my-2" />
              <p className="t-meta text-bone-dim/80 text-[0.6875rem] leading-relaxed normal-case tracking-normal font-sans">
                Oferta dim sum bywa sezonowa — aktualny wybór i ceny podajemy na miejscu w Montowni oraz w relacjach na
                Instagramie.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
