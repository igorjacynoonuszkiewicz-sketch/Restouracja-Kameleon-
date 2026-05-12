"""
Skrypt automatycznie generujący 30 zdjęć marketingowych przez Stable Diffusion API.
Uruchom SD WebUI z flagą --api przed użyciem tego skryptu.

Użycie:
    python marketing/generate-all.py --model-image marketing/modelka-reference.jpg
"""

import argparse
import base64
import json
import os
import time
from pathlib import Path

import requests

SD_API = "http://localhost:7860"

NEGATIVE = (
    "ugly, deformed, disfigured, bad anatomy, extra limbs, missing limbs, "
    "watermark, text, logo, signature, blurry, low quality, cartoon, anime, "
    "drawing, painting, illustration, 3d render, bad hands, extra fingers, "
    "NSFW explicit"
)

BODIES = {
    "body1-shorts-modelujace": {
        "white": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless sculpting bike shorts bodysuit, form-fitting, minimalist studio background pure white, soft box lighting, SKIMS style editorial, full body shot, confident pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless sculpting bike shorts bodysuit, form-fitting, neutral beige background, warm golden hour lighting, SKIMS style editorial, 3/4 body shot, hands on hips pose, luxury fashion brand photography, photorealistic, 8k",
        ],
        "black": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless sculpting bike shorts bodysuit, form-fitting, dark moody studio background, dramatic side lighting, SKIMS style editorial, full body shot, elegant pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless sculpting bike shorts bodysuit, form-fitting, concrete wall background, urban editorial lighting, SKIMS style editorial, 3/4 body shot, looking over shoulder, luxury fashion brand photography, photorealistic, 8k",
        ],
        "coffee": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a coffee brown seamless sculpting bike shorts bodysuit, form-fitting, warm cream background, soft natural lighting, SKIMS style editorial, full body shot, relaxed natural pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a coffee brown seamless sculpting bike shorts bodysuit, form-fitting, warm terracotta background, golden hour lighting, SKIMS style editorial, 3/4 body shot, hand through hair pose, luxury fashion brand photography, photorealistic, 8k",
        ],
    },
    "body2-krotki-rekaw": {
        "white": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless short sleeve crew neck bodysuit thong, fitted, minimalist studio white background, soft diffused lighting, SKIMS style editorial, full body shot, arms relaxed at sides, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless short sleeve crew neck bodysuit, fitted, light gray background, soft window light, SKIMS style editorial, waist up shot, slight side angle, luxury fashion brand photography, photorealistic, 8k",
        ],
        "black": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless short sleeve crew neck bodysuit thong, fitted, dark studio background, dramatic spotlight, SKIMS style editorial, full body shot, power pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless short sleeve crew neck bodysuit, fitted, matte black background, rim lighting, SKIMS style editorial, waist up shot, chin up confident pose, luxury fashion brand photography, photorealistic, 8k",
        ],
        "coffee": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a chocolate brown seamless short sleeve crew neck bodysuit thong, fitted, warm beige linen background, soft natural daylight, SKIMS style editorial, full body shot, casual relaxed pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a chocolate brown seamless short sleeve crew neck bodysuit, fitted, warm ochre background, afternoon golden light, SKIMS style editorial, waist up shot, hand resting on neck, luxury fashion brand photography, photorealistic, 8k",
        ],
    },
    "body3-ramiaczka": {
        "white": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless sculpting spaghetti strap bodysuit thong, adjustable straps, body contouring, pure white studio background, butterfly lighting, SKIMS style editorial, full body shot, hands on waist, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white seamless sculpting spaghetti strap bodysuit, adjustable thin straps, light marble background, bright airy lighting, SKIMS style editorial, 3/4 body shot, slight profile angle, luxury fashion brand photography, photorealistic, 8k",
        ],
        "black": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless sculpting spaghetti strap bodysuit thong, adjustable straps, body contouring, dark studio charcoal background, dramatic chiaroscuro lighting, SKIMS style editorial, full body shot, confident stance, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black seamless sculpting spaghetti strap bodysuit, adjustable thin straps, deep navy background, moody editorial lighting, SKIMS style editorial, 3/4 body shot, looking to the side, luxury fashion brand photography, photorealistic, 8k",
        ],
        "coffee": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a mocha brown seamless sculpting spaghetti strap bodysuit thong, adjustable straps, body contouring, warm sand background, soft warm lighting, SKIMS style editorial, full body shot, relaxed elegant pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a mocha brown seamless sculpting spaghetti strap bodysuit, adjustable thin straps, warm terracotta wall background, sunset golden light, SKIMS style editorial, 3/4 body shot, arms slightly raised, luxury fashion brand photography, photorealistic, 8k",
        ],
    },
    "body4-dzianina-square": {
        "white": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white ribbed knit sleeveless square neck bodysuit, form-fitting, minimalist clean white studio background, soft box lighting, SKIMS style editorial, full body shot with light gray sweatpants, casual chic pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white ribbed knit sleeveless square neck bodysuit, form-fitting, off-white linen background, natural morning light, SKIMS style editorial, waist up tight shot, hand at chin, jewelry visible, luxury fashion brand photography, photorealistic, 8k",
        ],
        "black": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black ribbed knit sleeveless square neck bodysuit, form-fitting, dark studio background, moody directional lighting, SKIMS style editorial, full body shot with black jeans, effortless editorial pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black ribbed knit sleeveless square neck bodysuit, form-fitting, concrete texture background, urban editorial lighting, SKIMS style editorial, waist up tight shot, looking straight into camera, luxury fashion brand photography, photorealistic, 8k",
        ],
        "coffee": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a coffee brown ribbed knit sleeveless square neck bodysuit, form-fitting, warm caramel background, cozy warm lighting, SKIMS style editorial, full body shot with cream trousers, relaxed editorial pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a coffee brown ribbed knit sleeveless square neck bodysuit, form-fitting, warm wood panel background, soft golden afternoon light, SKIMS style editorial, waist up tight shot, hand running through hair, luxury fashion brand photography, photorealistic, 8k",
        ],
    },
    "body5-dlugi-rekaw": {
        "white": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white long sleeve O-neck thong bodysuit, sleek fitted, pure white studio background, even soft lighting, SKIMS style editorial, full body shot, standing tall elegant pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a white long sleeve O-neck bodysuit, sleek fitted, light creamy background, bright window light, SKIMS style editorial, 3/4 body shot, arms crossed stylishly, luxury fashion brand photography, photorealistic, 8k",
        ],
        "black": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black long sleeve O-neck thong bodysuit, sleek fitted, deep dark studio background, dramatic spotlight, SKIMS style editorial, full body shot, powerful commanding pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a black long sleeve O-neck bodysuit, sleek fitted, dark gray gradient background, rim and key light, SKIMS style editorial, 3/4 body shot, side profile arms elegantly placed, luxury fashion brand photography, photorealistic, 8k",
        ],
        "coffee": [
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a caramel brown long sleeve O-neck thong bodysuit, sleek fitted, warm cream beige background, soft natural lighting, SKIMS style editorial, full body shot, effortless relaxed pose, luxury fashion magazine quality, photorealistic, 8k",
            "professional fashion photography, beautiful young woman with long straight black hair, olive skin tone, wearing a caramel brown long sleeve O-neck bodysuit, sleek fitted, warm terracotta tone background, golden sunset lighting, SKIMS style editorial, 3/4 body shot, hand on hip slight lean, luxury fashion brand photography, photorealistic, 8k",
        ],
    },
}


def image_to_base64(path: str) -> str:
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode()


def generate_image(prompt: str, model_b64: str, output_path: Path) -> None:
    payload = {
        "prompt": prompt,
        "negative_prompt": NEGATIVE,
        "steps": 30,
        "cfg_scale": 7,
        "width": 768,
        "height": 1024,
        "sampler_name": "DPM++ 2M Karras",
        "alwayson_scripts": {
            "instantid": {
                "args": [
                    model_b64,
                    0.8,
                    0.8,
                ]
            }
        },
    }

    resp = requests.post(f"{SD_API}/sdapi/v1/txt2img", json=payload, timeout=120)
    resp.raise_for_status()

    data = resp.json()
    img_b64 = data["images"][0]
    img_bytes = base64.b64decode(img_b64)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_bytes(img_bytes)
    print(f"  Zapisano: {output_path}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--model-image", required=True, help="Ścieżka do zdjęcia modelki")
    args = parser.parse_args()

    if not os.path.exists(args.model_image):
        print(f"Błąd: nie znaleziono pliku {args.model_image}")
        return

    model_b64 = image_to_base64(args.model_image)
    output_base = Path("marketing/output")

    total = sum(len(prompts) for body in BODIES.values() for prompts in body.values())
    done = 0

    for body_name, colors in BODIES.items():
        for color, prompts in colors.items():
            for i, prompt in enumerate(prompts, start=1):
                output_path = output_base / body_name / f"{color}-{i}.png"

                if output_path.exists():
                    print(f"  Pomijam (już istnieje): {output_path}")
                    done += 1
                    continue

                done += 1
                print(f"[{done}/{total}] Generuję: {body_name} / {color} / {i}")
                try:
                    generate_image(prompt, model_b64, output_path)
                except Exception as e:
                    print(f"  Błąd: {e}")

                time.sleep(1)

    print(f"\nGotowe! Zdjęcia zapisane w: {output_base.resolve()}")


if __name__ == "__main__":
    main()
