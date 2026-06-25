import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { site } from '../../data/site'

export default function About() {
  return (
    <section id="historia" className="relative py-24 md:py-36 bg-ink-2">
      <div className="absolute inset-0 bg-grain opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading index="01" kicker="Historia" title="Dwoje ludzi, jedna obsesja: zrobić wszystko od podstaw." meta={`Założyciele · ${site.owners}`} />

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-14">
          {/* Treść — gęsta, konkretna */}
          <Reveal className="lg:col-span-7 space-y-5 t-body text-bone-dim">
            <p>
              <span className="text-bone">{site.owners}</span> to para restauratorów zakochanych w&nbsp;Japonii. DimSum &amp;
              Ramen wzięło się z&nbsp;jednego uporu: gotować dokładnie tak, jak sami chcieliby zjeść — bez skrótów, bez
              mieszanek z&nbsp;paczki, bez „prawie".
            </p>
            <p>
              Dlatego wszystko powstaje tutaj, na miejscu i&nbsp;własnoręcznie. Wywar do ramenu warzy się godzinami, aż
              złapie głębię. Tare — sojowe, sezamowe, tom-yumowe — składane są ręcznie. Pierożki dim sum lepione są jeden
              po&nbsp;drugim, w&nbsp;trakcie serwisu. To nie sieciówka. To rzemiosło, które trzeba poczuć w&nbsp;pierwszej
              łyżce.
            </p>
            <p>
              Miejsce ma swój ciężar: <span className="text-bone">Food Hall Montownia</span> mieści się w&nbsp;zabytkowej
              hali montażu U-Bootów na&nbsp;terenie dawnej Stoczni Gdańskiej — cegła, stal, dwunastometrowy bar,
              postindustrialna surowość Gdańska. W&nbsp;tej scenografii japońska precyzja brzmi jak należy: gorąco, ostro,
              dokładnie.
            </p>
          </Reveal>

          {/* Cytat + ramka techniczna */}
          <Reveal className="lg:col-span-5" delay={0.12}>
            <figure className="border border-line p-8 md:p-10 h-full flex flex-col justify-between gap-10" style={{ borderRadius: 'var(--radius)' }}>
              <blockquote className="t-h2 text-bone text-balance">
                „Gotujemy tak, jak sami chcielibyśmy&nbsp;zjeść.”
              </blockquote>
              <figcaption>
                <div className="rule mb-4" />
                <p className="t-meta text-bone-dim">{site.owners}</p>
                <p className="t-meta text-bone-dim/60 mt-1.5 text-[0.625rem]">Założyciele · szef kuchni</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
