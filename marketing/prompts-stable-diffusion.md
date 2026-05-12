# Prompty Stable Diffusion — Marketing Body

## Wymagane rozszerzenia SD WebUI
Zainstaluj przed generowaniem:
1. **InstantID** — zachowanie twarzy modelki
2. **ControlNet** — kontrola pozy
3. **ADetailer** — poprawki twarzy

Model bazowy: `Realistic Vision V6` lub `epiCRealism`

---

## Ustawienia globalne (dla wszystkich zdjęć)

**Negative prompt (wspólny):**
```
ugly, deformed, disfigured, bad anatomy, extra limbs, missing limbs, watermark, text, logo, signature, blurry, low quality, cartoon, anime, drawing, painting, illustration, 3d render, bad hands, extra fingers, NSFW explicit
```

**Parametry:**
- Steps: 30
- CFG Scale: 7
- Sampler: DPM++ 2M Karras
- Resolution: 768x1024 (portrait)
- InstantID strength: 0.8

---

## Instrukcja używania InstantID z twarzą modelki

1. Otwórz SD WebUI → zakładka **txt2img**
2. W sekcji InstantID załaduj zdjęcie modelki (6a4470b2.jpg)
3. Ustaw IP-Adapter weight: **0.8**, ControlNet weight: **0.8**
4. Wklej prompt poniżej i generuj

---

## BODY 1 — Modelujące z krótką nogawką (bike shorts)

### Białe (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless sculpting bike shorts bodysuit, form-fitting, minimalist studio background pure white, soft box lighting, SKIMS style editorial, full body shot, confident pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — 3/4 crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless sculpting bike shorts bodysuit, form-fitting, neutral beige background, warm golden hour lighting, SKIMS style editorial, 3/4 body shot, hands on hips pose, luxury fashion brand photography, photorealistic, 8k
```

### Czarne (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless sculpting bike shorts bodysuit, form-fitting, dark moody studio background, dramatic side lighting, SKIMS style editorial, full body shot, elegant pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — 3/4 crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless sculpting bike shorts bodysuit, form-fitting, concrete wall background, urban editorial lighting, SKIMS style editorial, 3/4 body shot, looking over shoulder, luxury fashion brand photography, photorealistic, 8k
```

### Kawowe (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a coffee brown seamless sculpting bike shorts bodysuit, form-fitting, warm cream background, soft natural lighting, SKIMS style editorial, full body shot, relaxed natural pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — 3/4 crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a coffee brown seamless sculpting bike shorts bodysuit, form-fitting, warm terracotta background, golden hour lighting, SKIMS style editorial, 3/4 body shot, hand through hair pose, luxury fashion brand photography, photorealistic, 8k
```

---

## BODY 2 — Bezszwowe z krótkim rękawem (crew neck)

### Białe (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless short sleeve crew neck bodysuit thong, fitted, minimalist studio white background, soft diffused lighting, SKIMS style editorial, full body shot, arms relaxed at sides, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — torso crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless short sleeve crew neck bodysuit, fitted, light gray background, soft window light, SKIMS style editorial, waist up shot, slight side angle, luxury fashion brand photography, photorealistic, 8k
```

### Czarne (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless short sleeve crew neck bodysuit thong, fitted, dark studio background, dramatic spotlight, SKIMS style editorial, full body shot, power pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — torso crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless short sleeve crew neck bodysuit, fitted, matte black background, rim lighting, SKIMS style editorial, waist up shot, chin up confident pose, luxury fashion brand photography, photorealistic, 8k
```

### Kawowe (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a chocolate brown seamless short sleeve crew neck bodysuit thong, fitted, warm beige linen background, soft natural daylight, SKIMS style editorial, full body shot, casual relaxed pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — torso crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a chocolate brown seamless short sleeve crew neck bodysuit, fitted, warm ochre background, afternoon golden light, SKIMS style editorial, waist up shot, hand resting on neck, luxury fashion brand photography, photorealistic, 8k
```

---

## BODY 3 — Modelujące na cieniutkich ramiączkach (spaghetti straps)

### Białe (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless sculpting spaghetti strap bodysuit thong, adjustable straps, body contouring, pure white studio background, butterfly lighting, SKIMS style editorial, full body shot, hands on waist, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — 3/4 crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless sculpting spaghetti strap bodysuit, adjustable thin straps, light marble background, bright airy lighting, SKIMS style editorial, 3/4 body shot, slight profile angle, luxury fashion brand photography, photorealistic, 8k
```

### Czarne (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless sculpting spaghetti strap bodysuit thong, adjustable straps, body contouring, dark studio charcoal background, dramatic chiaroscuro lighting, SKIMS style editorial, full body shot, confident stance, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — 3/4 crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless sculpting spaghetti strap bodysuit, adjustable thin straps, deep navy background, moody editorial lighting, SKIMS style editorial, 3/4 body shot, looking to the side, luxury fashion brand photography, photorealistic, 8k
```

### Kawowe (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a mocha brown seamless sculpting spaghetti strap bodysuit thong, adjustable straps, body contouring, warm sand background, soft warm lighting, SKIMS style editorial, full body shot, relaxed elegant pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — 3/4 crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a mocha brown seamless sculpting spaghetti strap bodysuit, adjustable thin straps, warm terracotta wall background, sunset golden light, SKIMS style editorial, 3/4 body shot, arms slightly raised, luxury fashion brand photography, photorealistic, 8k
```

---

## BODY 4 — Dzianinowe bez rękawów (square neck ribbed)

### Białe (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white ribbed knit sleeveless square neck bodysuit, form-fitting, minimalist clean white studio background, soft box lighting, SKIMS style editorial, full body shot with light gray sweatpants, casual chic pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — torso crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white ribbed knit sleeveless square neck bodysuit, form-fitting, off-white linen background, natural morning light, SKIMS style editorial, waist up tight shot, hand at chin, jewelry visible, luxury fashion brand photography, photorealistic, 8k
```

### Czarne (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black ribbed knit sleeveless square neck bodysuit, form-fitting, dark studio background, moody directional lighting, SKIMS style editorial, full body shot with black jeans, effortless editorial pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — torso crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black ribbed knit sleeveless square neck bodysuit, form-fitting, concrete texture background, urban editorial lighting, SKIMS style editorial, waist up tight shot, looking straight into camera, luxury fashion brand photography, photorealistic, 8k
```

### Kawowe (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a coffee brown ribbed knit sleeveless square neck bodysuit, form-fitting, warm caramel background, cozy warm lighting, SKIMS style editorial, full body shot with cream trousers, relaxed editorial pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — torso crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a coffee brown ribbed knit sleeveless square neck bodysuit, form-fitting, warm wood panel background, soft golden afternoon light, SKIMS style editorial, waist up tight shot, hand running through hair, luxury fashion brand photography, photorealistic, 8k
```

---

## BODY 5 — Z długim rękawem (long sleeve O-neck)

### Białe (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white long sleeve O-neck thong bodysuit, sleek fitted, pure white studio background, even soft lighting, SKIMS style editorial, full body shot, standing tall elegant pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — 3/4 crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white long sleeve O-neck bodysuit, sleek fitted, light creamy background, bright window light, SKIMS style editorial, 3/4 body shot, arms crossed stylishly, luxury fashion brand photography, photorealistic, 8k
```

### Czarne (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black long sleeve O-neck thong bodysuit, sleek fitted, deep dark studio background, dramatic dramatic spotlight, SKIMS style editorial, full body shot, powerful commanding pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — 3/4 crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black long sleeve O-neck bodysuit, sleek fitted, dark gray gradient background, rim and key light, SKIMS style editorial, 3/4 body shot, side profile arms elegantly placed, luxury fashion brand photography, photorealistic, 8k
```

### Kawowe (2 zdjęcia)
**Zdjęcie 1 — full body:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a caramel brown long sleeve O-neck thong bodysuit, sleek fitted, warm cream beige background, soft natural lighting, SKIMS style editorial, full body shot, effortless relaxed pose, luxury fashion magazine quality, photorealistic, 8k
```

**Zdjęcie 2 — 3/4 crop:**
```
professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a caramel brown long sleeve O-neck bodysuit, sleek fitted, warm terracotta tone background, golden sunset lighting, SKIMS style editorial, 3/4 body shot, hand on hip slight lean, luxury fashion brand photography, photorealistic, 8k
```
