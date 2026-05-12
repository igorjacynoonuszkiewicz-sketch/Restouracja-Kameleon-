# Workflow — Generowanie zdjęć marketingowych

## Co generujemy
5 body × 3 kolory × 2 zdjęcia = **30 zdjęć marketingowych** w stylu SKIMS

---

## KROK 1 — Instalacja Stable Diffusion WebUI

```bash
cd tools/stable-diffusion-webui

# Windows
webui-user.bat

# Linux/Mac
bash webui.sh
```

Poczekaj aż otworzy się http://localhost:7860

---

## KROK 2 — Pobierz model realistyczny

1. Otwórz http://localhost:7860
2. Przejdź do **Models** → Pobierz **Realistic Vision V6**
   - Link: https://civitai.com/models/4201/realistic-vision-v60-b1
3. Umieść plik `.safetensors` w `tools/stable-diffusion-webui/models/Stable-diffusion/`

---

## KROK 3 — Zainstaluj rozszerzenia

W SD WebUI → zakładka **Extensions** → **Install from URL:**

### InstantID (zachowanie twarzy modelki)
```
https://github.com/ZHO-ZHO-ZHO/ComfyUI-InstantID
```

### ControlNet
```
https://github.com/Mikubill/sd-webui-controlnet
```

### ADetailer (poprawki twarzy)
```
https://github.com/Bing-su/adetailer
```

Po instalacji kliknij **Apply and restart UI**.

---

## KROK 4 — Przygotuj zdjęcie modelki

Skopiuj zdjęcie modelki do projektu:
```bash
cp /ścieżka/do/modelka.jpg marketing/modelka-reference.jpg
```

---

## KROK 5 — Konfiguracja InstantID

1. W SD WebUI otwórz zakładkę **txt2img**
2. Przewiń w dół do sekcji **InstantID**
3. Załaduj `marketing/modelka-reference.jpg`
4. Ustaw:
   - **IP-Adapter weight:** 0.8
   - **ControlNet weight:** 0.8
   - **Noise:** 0.0

---

## KROK 6 — Generowanie (ręcznie lub automatycznie)

### Opcja A — Ręcznie (prostsze)
1. Otwórz plik `marketing/prompts-stable-diffusion.md`
2. Kopiuj każdy prompt po kolei do pola w SD WebUI
3. Kliknij **Generate**
4. Zapisz wynik z nazwą np. `body1-white-1.png`

### Opcja B — Automatycznie przez API
```bash
# Włącz API w SD WebUI (dodaj do webui-user.bat/sh):
# --api

# Uruchom skrypt:
python marketing/generate-all.py --model-image marketing/modelka-reference.jpg
```

---

## KROK 7 — Struktura zapisu zdjęć

Zapisuj zdjęcia według schematu:
```
marketing/output/
├── body1-shorts-modelujace/
│   ├── white-1.png
│   ├── white-2.png
│   ├── black-1.png
│   ├── black-2.png
│   ├── coffee-1.png
│   └── coffee-2.png
├── body2-krotki-rekaw/
│   └── ...
├── body3-ramiaczka/
│   └── ...
├── body4-dzianina-square/
│   └── ...
└── body5-dlugi-rekaw/
    └── ...
```

---

## KROK 8 — Post-processing

Po wygenerowaniu każdego zdjęcia:
1. Sprawdź twarz — użyj **ADetailer** jeśli rozmyta
2. Upscale do 2x — użyj **R-ESRGAN 4x+** (w SD WebUI → Extras)
3. Finalna rozdzielczość: **1536x2048** (idealna na sklep)

---

## KROK 9 — Publikacja na social media (OpenShorts)

### Tworzenie reels z body
1. Uruchom OpenShorts: `cd tools/openshorts && docker compose up`
2. Otwórz http://localhost:5175
3. Wgraj krótkie wideo z sesji zdjęciowej
4. OpenShorts automatycznie:
   - Wytnie najlepsze momenty (15–60 sek)
   - Doda napisy po polsku
   - Doda hook text ("NOWE BODY W SKLEPIE 🔥")
5. Opublikuj bezpośrednio na TikTok/Instagram/YouTube

---

## Harmonogram publikacji (propozycja)

| Dzień | Treść |
|-------|-------|
| Pon | Body 1 — zdjęcia białe (2 posty) |
| Wt  | Body 1 — reel TikTok/IG |
| Śr  | Body 2 — zdjęcia czarne (2 posty) |
| Czw | Body 2 — reel TikTok/IG |
| Pt  | Body 3 — zdjęcia kawowe (2 posty) |
| Sob | Body 3 + 4 — reel zbiorczy |
| Nd  | Body 5 — zdjęcia + reel |
