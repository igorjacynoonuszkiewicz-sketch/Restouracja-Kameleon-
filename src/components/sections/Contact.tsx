import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const mapQuery = encodeURIComponent('Montownia Food Hall, Lisia Grobla 7, 80-860 Gdańsk')
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`
const mapLink = 'https://maps.app.goo.gl/pVyCsCbiK6nNWCB66'
const instagramLink = 'https://www.instagram.com/dimsum.ramen.pl'

const hours = [
  { day: 'Poniedziałek – Czwartek', time: '11:00 – 22:00' },
  { day: 'Piątek – Sobota', time: '11:00 – 24:00' },
  { day: 'Niedziela', time: '11:00 – 22:00' },
]

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-28 md:py-36 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-seigaiha-full opacity-[0.05]" />
      <span aria-hidden className="kanji-watermark absolute bottom-0 left-0 text-[14rem] select-none">
        連絡
      </span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading kicker="Znajdź nas" kanji="場所" title="Kontakt" align="left" />

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal y={30}>
            <div className="space-y-6">
              <InfoRow icon="pin" title="Adres">
                Food Hall Montownia
                <br />
                ul. Lisia Grobla 7, 80-860 Gdańsk
                <br />
                <span className="text-cream-dim/70 text-sm">Młode Miasto</span>
              </InfoRow>

              <InfoRow icon="clock" title="Godziny otwarcia">
                <div className="space-y-1">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-6 text-sm">
                      <span className="text-cream-dim">{h.day}</span>
                      <span className="text-cream">{h.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-cream-dim/60 mt-2">
                  Godziny mogą się różnić w zależności od dnia i wydarzeń w Montowni.
                </p>
              </InfoRow>

              <InfoRow icon="phone" title="Telefon">
                <a href="tel:+48782041777" className="hover:text-gold transition-colors">
                  +48 782 041 777
                </a>
                <p className="text-xs text-cream-dim/60 mt-1">Recepcja Food Hall Montownia</p>
              </InfoRow>

              <InfoRow icon="instagram" title="Social media">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  @dimsum.ramen.pl
                </a>
              </InfoRow>

              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors"
              >
                Otwórz w Google Maps
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal y={30} delay={0.15}>
            <div className="rounded-2xl overflow-hidden glass-panel p-1.5 h-[420px] lg:h-full">
              <iframe
                title="Mapa — Food Hall Montownia, Gdańsk"
                src={mapEmbedSrc}
                className="w-full h-full rounded-xl"
                style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg) contrast(0.9)' }}
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

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: 'pin' | 'clock' | 'phone' | 'instagram'
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold">
        <Icon name={icon} />
      </div>
      <div className="flex-1">
        <h4 className="font-display text-lg text-cream mb-1">{title}</h4>
        <div className="text-cream-dim font-light leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

function Icon({ name }: { name: 'pin' | 'clock' | 'phone' | 'instagram' }) {
  const common = { viewBox: '0 0 24 24', className: 'w-5 h-5', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 }
  switch (name) {
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="9" r="2.4" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path
            d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A16 16 0 015 6a2 2 0 012-2z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
        </svg>
      )
  }
}
