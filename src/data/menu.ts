export interface MenuItem {
  name: string
  description: string
  price: string
  /** Pojemność porcji, np. „800 ml" (głównie rameny). */
  volume?: string
  /** Rodzaj bulionu, np. „drobiowy" / „warzywny". */
  broth?: string
  /** Baza smakowa (tare), np. „na sosie sojowym". */
  tare?: string
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
    intro: 'Miska 800 ml — bulion warzony godzinami, autorska baza tare i świeże dodatki.',
    items: [
      {
        name: 'Tantanmen',
        price: '48 zł',
        volume: '800 ml',
        broth: 'drobiowy',
        tare: 'na paście sezamowej i orzechowej',
        description:
          'Ostre mięso mielone, jajko ajitsuke, czerwona cebula, pak choi, pasta tobanjan, olej rayu.',
        tags: ['bestseller', 'pikantne'],
      },
      {
        name: 'Ebi Ramen',
        price: '49 zł',
        volume: '800 ml',
        broth: 'drobiowy',
        tare: 'na mleku kokosowym, pomidorach i paście tom yum',
        description:
          'Krewetki w panko, pieczony pomidor, czerwona cebula, edamame, narutomaki, kiełki mung, olej czosnkowy.',
      },
      {
        name: 'Miso Ramen',
        price: '46 zł',
        volume: '800 ml',
        broth: 'drobiowy',
        tare: 'na paście miso',
        description: 'Chashu, jajko ajitsuke, dymka, kimchi, narutomaki, olej czosnkowy.',
      },
      {
        name: 'Torikatsu Ramen',
        price: '48 zł',
        volume: '800 ml',
        broth: 'drobiowy',
        tare: 'na sosie sojowym',
        description: 'Kurczak w panko, jajko ajitsuke, dymka, narutomaki, olej z palonego pora.',
      },
      {
        name: 'Shoyu Ramen',
        price: '42 / 46 zł',
        volume: '800 ml',
        broth: 'drobiowy',
        tare: 'na sosie sojowym',
        description:
          'Chashu, jajko ajitsuke, dymka, marynowane kiełki mung, narutomaki, olej z palonego pora.',
        tags: ['bestseller'],
      },
      {
        name: 'Wege Ramen',
        price: '44 zł',
        volume: '800 ml',
        broth: 'warzywny',
        tare: 'na sosie sojowym',
        description:
          'Pieczone pomidory, grzyby shimeji, kiełki mung, edamame, pak choi, czerwona cebula, narutomaki, olej z palonego pora.',
        tags: ['wege'],
      },
    ],
  },
  {
    id: 'dimsum',
    title: 'Dim Sum',
    subtitleJp: '点心',
    intro: 'Pierożki lepione ręcznie i gotowane na parze — jeden po drugim, na bieżąco w trakcie serwisu.',
    items: [
      {
        name: 'Prawn Shumai',
        price: '44 zł',
        description: 'Krewetki gambas, marchewka, pędy bambusa, szczypiorek.',
      },
      {
        name: 'Beef Chinese Five Spices',
        price: '39 zł',
        description: 'Wołowina, przyprawa pięć smaków, czerwona cebula, pieczarki.',
      },
      {
        name: 'Steamed Chicken',
        price: '37 zł',
        description: 'Kurczak, imbir, kasztany wodne, czerwona cebula, biała rzodkiew, pieczarki.',
      },
      {
        name: 'Steamed Shrimp & Crab',
        price: '44 zł',
        description: 'Krewetki, dorsz, paluszki krabowe, imbir, szczypiorek, biała rzodkiew.',
      },
      {
        name: 'Steamed Pork & Spinach',
        price: '36 zł',
        description: 'Wieprzowina, świeży szpinak, imbir, kasztany wodne, szczypiorek, biała rzodkiew.',
      },
      {
        name: 'Spinach & Cheese',
        price: '34 zł',
        description: 'Świeży szpinak, ser.',
        tags: ['wege'],
      },
      {
        name: 'Vege Dim Sum',
        price: '34 zł',
        description: 'Imbir, kasztany wodne, szczypiorek, biała rzodkiew.',
        tags: ['wege'],
      },
      {
        name: 'Custard Bun',
        price: '9 zł',
        description:
          'Chińska bułeczka z nadzieniem budyniowym, podawana z sosem truskawkowym lub czekoladowym.',
        tags: ['na słodko'],
      },
    ],
  },
  {
    id: 'zestawy',
    title: 'Zestawy',
    subtitleJp: '盛り合わせ',
    intro: 'Najlepszy sposób, by spróbować przekroju naszych pierożków.',
    items: [
      {
        name: 'Special Set',
        price: '45 zł',
        description: 'Zestaw 12 pierożków — po 2 sztuki każdego rodzaju dim sum.',
        tags: ['12 szt.'],
      },
      {
        name: 'Set Mini',
        price: '25 zł',
        description: 'Zestaw 6 pierożków — po 1 sztuce każdego rodzaju dim sum.',
        tags: ['6 szt.'],
      },
    ],
  },
  {
    id: 'dodatki',
    title: 'Dodatki i napoje',
    subtitleJp: '一品',
    intro: 'Dorzuć coś do ramenu lub ugaś pragnienie czymś orientalnym.',
    items: [
      { name: 'Jajko ajitsuke', description: 'Marynowane jajko o płynnym żółtku, 1 szt.', price: 'wg karty' },
      { name: 'Boczek chashu', description: 'Dodatkowa porcja wolno pieczonego boczku chashu.', price: 'wg karty' },
      { name: 'Mięso mielone', description: 'Dodatkowa porcja pikantnego mięsa mielonego.', price: 'wg karty' },
      { name: 'Edamame', description: 'Strąki zielonej soi parowane z solą morską.', price: 'wg karty', tags: ['wege'] },
      { name: 'Ramune', description: 'Oryginalna japońska lemoniada gazowana.', price: 'wg karty' },
      { name: 'Mogu Mogu', description: 'Napój z kawałkami owoców.', price: 'wg karty' },
    ],
  },
]

export const menuNote =
  '* Karta i ceny mają charakter orientacyjny i mogą się zmieniać. Aktualne menu oraz pełną listę dodatków i napojów znajdziesz na miejscu w Montowni lub w naszych relacjach na Instagramie.'
