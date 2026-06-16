export type IllustrationKind =
  | 'shoyu'
  | 'tantanmen'
  | 'dimsum'
  | 'interior'
  | 'folding'
  | 'lanterns'
  | 'steam'
  | 'ingredients'

export interface GalleryItem {
  id: string
  kind: IllustrationKind
  title: string
  caption: string
}

export const galleryItems: GalleryItem[] = [
  { id: 'g1', kind: 'shoyu', title: 'Shoyu Ramen', caption: 'Sklarowany rosół sojowy z chashu i jajkiem marynowanym.' },
  { id: 'g2', kind: 'dimsum', title: 'Dim Sum', caption: 'Pierożki lepione ręcznie, jeden po drugim.' },
  { id: 'g3', kind: 'folding', title: 'Rzemiosło', caption: 'Każdy pierożek składany ręcznie, na bieżąco.' },
  { id: 'g4', kind: 'tantanmen', title: 'Tantanmen', caption: 'Sezamowo-orzechowy wywar z pikantnym mięsem.' },
  { id: 'g5', kind: 'interior', title: 'Wnętrze', caption: 'Kameralna izakaya w hali Montowni.' },
  { id: 'g6', kind: 'lanterns', title: 'Lampiony', caption: 'Ciepłe światło i japońskie akcenty.' },
  { id: 'g7', kind: 'steam', title: 'Para i aromat', caption: 'Bulion warzony godzinami, serwowany wrzący.' },
  { id: 'g8', kind: 'ingredients', title: 'Składniki', caption: 'Świeże, sezonowe, wybierane każdego dnia.' },
]
