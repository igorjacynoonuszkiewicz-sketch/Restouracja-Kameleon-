// ─────────────────────────────────────────────────────────────────────────
// Jedno źródło prawdy: godziny, lokalizacja, kontakt, liczby.
// Zmieniaj dane TYLKO tutaj — sekcje, stopka i schema.org czytają stąd.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'DimSum & Ramen',
  tagline: 'Ramen robiony od podstaw w halach dawnej Stoczni Gdańskiej.',

  address: {
    venue: 'Food Hall Montownia',
    street: 'ul. Lisia Grobla 7',
    postal: '80-860',
    city: 'Gdańsk',
    district: 'Młode Miasto',
  },

  geo: { lat: 54.36192, lng: 18.65082 },

  // Para restauratorów — twórcy
  owners: 'Paulina i Wojciech',

  instagram: {
    handle: '@dimsum.ramen.montownia',
    url: 'https://www.instagram.com/dimsum.ramen.montownia/',
  },

  // Telefon recepcji food hallu (nie dedykowana linia stoiska)
  phone: { display: '+48 782 041 777', tel: '+48782041777' },

  maps: {
    link: 'https://maps.app.goo.gl/pVyCsCbiK6nNWCB66',
    embed:
      'https://www.google.com/maps?q=' +
      encodeURIComponent('Montownia Food Hall, Lisia Grobla 7, 80-860 Gdańsk') +
      '&output=embed',
  },
} as const

// Godziny otwarcia — pojedyncze źródło dla sekcji, stopki i danych strukturalnych.
export interface OpeningRow {
  label: string
  days: string[] // dni tygodnia (schema.org)
  opens: string // HH:MM (24h)
  closes: string // HH:MM (24h, "24:00" = północ)
  display: string
}

export const openingHours: OpeningRow[] = [
  {
    label: 'Niedziela',
    days: ['Sunday'],
    opens: '11:00',
    closes: '22:00',
    display: '11:00 — 22:00',
  },
  {
    label: 'Poniedziałek — Czwartek',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '13:00',
    closes: '23:00',
    display: '13:00 — 23:00',
  },
  {
    label: 'Piątek — Sobota',
    days: ['Friday', 'Saturday'],
    opens: '13:00',
    closes: '24:00',
    display: '13:00 — północ',
  },
]

// Dowód / liczby — używane w sekcji „Liczby" i jako mikro-metadane.
export const proof = {
  bowlsPerMonth: '5000',
  bowlsLine: '5000 misek ramenu miesięcznie — każda tak samo pyszna.',
} as const
