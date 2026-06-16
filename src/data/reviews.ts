export interface Review {
  name: string
  rating: number
  text: string
  source?: string
}

export const reviews: Review[] = [
  {
    name: 'Anna K.',
    rating: 5,
    text: 'Najlepszy ramen w Gdańsku, bez przesady. Wywar na Tantanmen parzy się godzinami i czuć to w każdej łyżce. Pierożki lepione ręcznie robią różnicę.',
  },
  {
    name: 'Marek W.',
    rating: 5,
    text: 'Kameralne miejsce w Montowni, ale kolejka i tak się tworzy — i słusznie. Shoyu ramen jak z Tokio, jajko marynowane idealne.',
  },
  {
    name: 'Joanna Sz.',
    rating: 5,
    text: 'Widać, że Paulina i Wojciech robią to z pasji. Wege ramen zaskoczył mnie głębią smaku, a dim sum zniknęło ze stołu w minutę.',
  },
  {
    name: 'Tomasz P.',
    rating: 4,
    text: 'Świetny stosunek jakości do ceny jak na food hall. Atmosfera ciemna, nastrojowa, idealna na wieczór z przyjaciółmi.',
  },
  {
    name: 'Kasia M.',
    rating: 5,
    text: 'Pierożki krewetkowe to poezja. Wracam tu za każdym razem, kiedy jestem w Gdańsku, i zawsze próbuję czegoś nowego z karty sezonowej.',
  },
  {
    name: 'Piotr D.',
    rating: 5,
    text: 'Czuć, że wszystko robione jest od podstaw — bulion, makaron, pierożki. To nie jest fast food azjatycki, to rzemiosło.',
  },
]
