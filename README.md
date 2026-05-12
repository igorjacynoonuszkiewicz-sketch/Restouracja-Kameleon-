# Restauracja Kameleon — Marketing AI

Zestaw narzędzi AI do marketingu restauracji: generowanie zdjęć dań i filmów na social media.

## Narzędzia

| Narzędzie | Zastosowanie | Katalog |
|-----------|-------------|---------|
| [Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) | Generowanie zdjęć dań, wnętrza, grafik | `tools/stable-diffusion-webui/` |
| [OpenShorts](https://github.com/mutonby/openshorts) | Krótkie filmy na TikTok / Instagram / YouTube | `tools/openshorts/` |

## Szybki start

```bash
# Zainstaluj i uruchom oba narzędzia
bash marketing/start-tools.sh
```

Po uruchomieniu:
- **Stable Diffusion:** http://localhost:7860
- **OpenShorts:** http://localhost:5175

## Pliki marketingowe

- [`marketing/prompts-stable-diffusion.md`](marketing/prompts-stable-diffusion.md) — gotowe prompty do generowania zdjęć restauracyjnych
- [`marketing/workflow.md`](marketing/workflow.md) — krok po kroku jak tworzyć treści marketingowe
- [`marketing/openshorts-config.env.example`](marketing/openshorts-config.env.example) — szablon konfiguracji API

## Wymagania

- Python 3.10+
- Node.js 18+
- Docker (dla OpenShorts)
- GPU (opcjonalnie, przyspiesza Stable Diffusion)
