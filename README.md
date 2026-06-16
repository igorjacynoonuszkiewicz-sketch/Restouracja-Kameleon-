# Dim Sum Ramen — strona restauracji

Immersyjna, w pełni responsywna strona dla **Dim Sum Ramen** — kameralnej japońsko-azjatyckiej ramenowni w Food Hallu Montownia w Gdańsku, prowadzonej przez Paulinę i Wojciecha Sornatów.

## Stos technologiczny

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** (konfiguracja motywu w `src/index.css` przez `@theme`, bez `tailwind.config.js`)
- **three.js** + **@react-three/fiber** + **@react-three/drei** — proceduralna scena 3D z miską ramenu, parą i unoszącymi się pierożkami
- **GSAP** + `ScrollTrigger` — animacje wejścia sekcji i parallax przy scrollu

## Sekcje

Home (hero z 3D miską ramenu), O nas, Menu, Galeria, Opinie, Rezerwacje, Kontakt — wszystkie treści w języku polskim.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Build produkcyjny:

```bash
npm run build
```

## Znane ograniczenia

- Formularz rezerwacji jest obecnie frontendowy — nie wysyła jeszcze powiadomień e-mail/SMS ani nie zapisuje rezerwacji w żadnym backendzie.
- Pozycje i ceny w menu to przykładowa treść oparta na publicznie dostępnych informacjach o restauracji — wymaga weryfikacji przed produkcyjnym wdrożeniem.
- Zdjęcia w galerii to autorskie ilustracje SVG (nie prawdziwe fotografie), aby uniknąć problemów licencyjnych.
- Godziny otwarcia i telefon kontaktowy odnoszą się do recepcji Food Hallu Montownia, a nie do dedykowanej linii konkretnego stoiska.
