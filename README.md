# DimSum & Ramen — strona restauracji

Strona dla **DimSum & Ramen** — autorskiej kuchni japońskiej i chińskiej w **Food Hall Montownia** w Gdańsku, prowadzonej przez Paulinę i Wojciecha. Lokal mieści się w zabytkowej hali montażu U-Bootów dawnej Stoczni Gdańskiej.

## Kierunek wizualny

Opiniotwórczy system designu zakorzeniony w trzech rzeczach: **para z bulionu**, **dawna stocznia / hala U-Bootów**, **japońska precyzja**.

- Ciemna baza (smoła stoczniowa, prawie czarna), ciepło bulionu (bursztyn / sezam) jako neutrale.
- **Jeden** akcent — czerwień rayu (`--color-rayu`).
- **Monospace** (JetBrains Mono) na metadanych: ceny, godziny, koordynaty, numery sekcji.
- Hairline / ramki techniczne zamiast kart z cieniem; **jeden** promień zaokrąglenia (2px) na całą stronę.
- Display serif **Fraunces**, treść **Inter**, metadane **JetBrains Mono**.
- Skala typograficzna jako system (`.t-display`, `.t-h1`…`.t-meta` w `src/index.css`).

## Stos technologiczny

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** (motyw w `src/index.css` przez `@theme`, bez `tailwind.config.js`)
- **three.js** + **@react-three/fiber** + **@react-three/drei** — proceduralna miska ramenu z parą (jeden „bold moment", lazy-loaded, fallback CSS)
- **GSAP** + `ScrollTrigger` — animacje wejścia sekcji i parallax sceny 3D

## Sekcje

1. **Hero** — obietnica, miska ramenu z parą (3D), pasek metadanych w stylu dokumentacji stoczniowej.
2. **Historia** (`#historia`) — Paulina i Wojciech, „wszystko od podstaw", kontekst Montowni i U-Bootów.
3. **Ramen** (`#ramen`) — karta dań jako bohater; Tantanmen wyróżniony jako wybór szefa.
4. **Dim Sum** (`#dimsum`) — ręcznie lepione pierożki, chińska połowa karty.
5. **Liczby** (`#liczby`) — spec-sheet z liczbą 5000 misek miesięcznie.
6. **Lokalizacja** (`#lokalizacja`) — adres, godziny (monospace), mapa, „jak dojść".

## Jedno źródło prawdy

- **`src/data/site.ts`** — adres, koordynaty, Instagram, telefon, godziny otwarcia (czytane też przez sekcje i stopkę), liczba misek.
- **`src/data/menu.ts`** — pozycje i ceny ramenu.
- Dane strukturalne `Restaurant` (JSON-LD) oraz godziny w `index.html` należy utrzymywać zgodne z `src/data/site.ts`.

## Uruchomienie

```bash
npm install
npm run dev      # tryb deweloperski
npm run build    # build produkcyjny (tsc + vite)
npm run preview  # podgląd buildu
npm run lint
```

## SEO i dostępność (a11y)

- Pełne meta + Open Graph / Twitter Cards w `index.html`, obraz podglądu `public/og-image.png`.
- Dane strukturalne JSON-LD typu `Restaurant` (adres, godziny, kuchnia, widełki cen, geolokalizacja).
- `robots.txt` i `sitemap.xml` w `public/`.
- Link „przejdź do treści", `aria-current` w nawigacji, widoczny focus klawiatury, pełne wsparcie `prefers-reduced-motion`, fallback CSS dla pary gdy 3D się nie ładuje.

> **Przed wdrożeniem** zamień placeholder domeny `https://dimsumramen.pl/` (w `index.html`, `public/robots.txt`, `public/sitemap.xml`) na docelowy adres.

## Znane ograniczenia

- Zdjęcia ramenu i dim sum to świadome placeholdery z notatką „tu zdjęcie realnego…" — do podmiany na prawdziwe fotografie dań.
- Pozycje i ceny ramenu odzwierciedlają publicznie dostępną kartę — zweryfikuj przed publikacją. Oferta dim sum bywa sezonowa i podawana jest na miejscu, dlatego nie zawiera sztucznych cen.
- Godziny otwarcia i telefon odnoszą się do Food Hall Montownia — potwierdź dedykowaną linię stoiska, jeśli istnieje.
- `public/og-image.png` warto odświeżyć pod aktualny branding (DimSum & Ramen).
