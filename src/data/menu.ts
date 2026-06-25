export interface MenuItem {
  name: string
  description: string
  price: string // monospace metadane
  tag?: string // pojedyncza etykieta, np. „wybór szefa"
}

// Ramen — prawdziwe pozycje i ceny z karty. Nie wymyślaj nowych.
export const ramen: MenuItem[] = [
  {
    name: 'Tantanmen',
    description:
      'Gęsty, długo gotowany bulion wieprzowy. Tare na paście sezamowej i maśle orzechowym, ostre mięso mielone, czerwona cebula, pak choi, marynowane jajko i olej rayu, który zostawia ciepło na języku. Kremowy, głęboki, pikantny.',
    price: '51 zł',
    tag: 'wybór szefa',
  },
  {
    name: 'Shoyu Ramen',
    description:
      'Klasyka. Długo gotowany bulion drobiowy z tonkotsu, tare z mieszanki sosów sojowych. Yakitori, marynowane jajko, narutomaki — różowa spirala — i dymka.',
    price: '53 zł',
  },
  {
    name: 'Tom Yum Ramen',
    description:
      'Bulion tonkotsu z tare na ostrej paście tom yum i mleku kokosowym. Łosoś, ananas, kiełki mung, kolendra, marynowane jajko. Kwaśno-ostry, rozgrzewający.',
    price: '61 zł',
  },
  {
    name: 'Ramen Truflowy',
    description:
      'Bulion tonkotsu z shoyu tare i truflą. Grzyby enoki, yakitori, sos kabayaki, szczypiorek, marynowane jajko. Pozycja premium.',
    price: '65 zł',
    tag: 'premium',
  },
]

export const menuNote =
  'Ceny ramenu z aktualnej karty. Pełną kartę — z bieżącą ofertą dim sum i dodatków — znajdziesz na miejscu w Montowni oraz w relacjach na Instagramie.'
