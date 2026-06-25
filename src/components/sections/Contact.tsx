import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { site, openingHours } from '../../data/site'

export default function Contact() {
  return (
    <section id="lokalizacja" className="relative py-24 md:py-36 bg-ink-2">
      <div className="absolute inset-0 bg-grain opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          index="05"
          kicker="Lokalizacja"
          title="Lisia Grobla 7. Wejdź w halę, idź na parę."
          meta={`${site.geo.lat.toFixed(4)}° N · ${site.geo.lng.toFixed(4)}° E`}
        />

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
          {/* Dane */}
          <Reveal className="lg:col-span-5 space-y-8">
            <Block label="Adres">
              <p className="t-body text-bone">{site.address.venue}</p>
              <p className="t-body text-bone-dim">
                {site.address.street}
                <br />
                {site.address.postal} {site.address.city} · {site.address.district}
              </p>
            </Block>

            <Block label="Godziny otwarcia">
              <dl className="space-y-2.5">
                {openingHours.map((h) => (
                  <div key={h.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
                    <dt className="t-body text-bone-dim text-[0.95rem]">{h.label}</dt>
                    <dd className="font-mono text-sm text-bone whitespace-nowrap">{h.display}</dd>
                  </div>
                ))}
              </dl>
            </Block>

            <Block label="Kontakt">
              <a href={`tel:${site.phone.tel}`} className="font-mono text-sm text-bone hover:text-amber transition-colors">
                {site.phone.display}
              </a>
              <p className="t-meta text-bone-dim/60 text-[0.5625rem] mt-1.5">Recepcja Food Hall Montownia</p>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-bone hover:text-amber transition-colors block mt-3"
              >
                {site.instagram.handle}
              </a>
            </Block>

            <a
              href={site.maps.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-rayu text-bone t-meta hover:bg-rayu-deep transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Jak dojść — Google Maps
              <span aria-hidden>↗</span>
            </a>
          </Reveal>

          {/* Mapa */}
          <Reveal className="lg:col-span-7" delay={0.12}>
            <div className="border border-line h-[360px] lg:h-full min-h-[360px] overflow-hidden" style={{ borderRadius: 'var(--radius)' }}>
              <iframe
                title="Mapa — Food Hall Montownia, Gdańsk"
                src={site.maps.embed}
                className="w-full h-full"
                style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="t-meta text-bone-dim mb-4">{label}</p>
      <div className="space-y-1">{children}</div>
    </div>
  )
}
