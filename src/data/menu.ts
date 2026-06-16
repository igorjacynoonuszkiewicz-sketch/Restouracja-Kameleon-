export interface MenuItem {
  name: string
  description: string
  price: string
  tags?: string[]
}

export interface MenuCategory {
  id: string
  title: string
  subtitleJp: string
  intro: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'ramen',
    title: 'Ramen',
    subtitleJp: '拉麵',
    intro: 'Wywar warzony godzinami, makaron i dodatki przygotowywane każdego dnia od zera.',
    items: [
      {
        name: 'Shoyu Ramen',
        description:
          'Klasyczny, sklarowany rosół na bazie sosu sojowego, chashu z wieprzowiny, jajko marynowane, nori, bambus, szczypiorek.',
        price: '38 zł',
        tags: ['bestseller'],
      },
      {
        name: 'Tantanmen',
        description:
          'Gęsty wywar wieprzowy na bazie sezamu i masła orzechowego, pikantne mięso mielone, czerwona cebula, jajko marynowane, pak choi, ostry olej rayu.',
        price: '42 zł',
        tags: ['pikantne'],
      },
      {
        name: 'Ramen Wege',
        description:
          'Klarowny wywar warzywny, tofu smażone na maśle, grzyby shiitake, pak choi, kukurydza, marynowane jajko (opcja wegańska bez jajka).',
        price: '36 zł',
        tags: ['wege'],
      },
      {
        name: 'Ramen Sezonowy',
        description:
          'Autorska kompozycja szefa kuchni, zmienna w zależności od sezonu i dostępnych składników — zapytaj o dzisiejszą wersję.',
        price: 'wg karty dnia',
        tags: ['specjalność'],
      },
    ],
  },
  {
    id: 'dimsum',
    title: 'Dim Sum',
    subtitleJp: '点心',
    intro: 'Pierożki lepione ręcznie, jeden po drugim, na bieżąco w trakcie serwisu.',
    items: [
      {
        name: 'Gyoza Wieprzowe',
        description: 'Smażone pierożki z farszem z wieprzowiny, kapusty i czosnku, podawane z sosem ponzu.',
        price: '28 zł',
      },
      {
        name: 'Pierożki Krewetkowe',
        description: 'Delikatne pierożki na parze z nadzieniem z krewetek i bambusa, w przezroczystym cieście.',
        price: '32 zł',
      },
      {
        name: 'Pierożki Wege',
        description: 'Nadzienie ze szpinaku, grzybów shiitake i tofu, gotowane na parze.',
        price: '26 zł',
        tags: ['wege'],
      },
      {
        name: 'Pierożki Kurczak-Czosnek',
        description: 'Smażone na złoto, z aromatycznym farszem z kurczaka, czosnku i imbiru.',
        price: '28 zł',
      },
    ],
  },
  {
    id: 'dodatki',
    title: 'Dodatki',
    subtitleJp: '一品',
    intro: 'Małe talerze, które dopełniają posiłek.',
    items: [
      { name: 'Bao Bun z Wołowiną', description: 'Puszysta parowana bułka z duszoną wołowiną i sosem hoisin.', price: '18 zł' },
      { name: 'Edamame', description: 'Strąki zielonej soi parowane z solą morską.', price: '14 zł', tags: ['wege'] },
      { name: 'Kimchi Domowe', description: 'Fermentowana kapusta pekińska, przygotowywana na miejscu.', price: '10 zł', tags: ['wege'] },
      { name: 'Frytki Panko', description: 'Słodkie ziemniaki w panierce panko, podawane z sosem chili-majo.', price: '16 zł', tags: ['wege'] },
    ],
  },
]

export const menuNote =
  '* Menu i ceny mają charakter orientacyjny i mogą się zmieniać. Aktualną kartę dnia znajdziesz na miejscu w Montowni lub w naszych relacjach na Instagramie.'
