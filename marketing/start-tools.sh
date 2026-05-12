#!/usr/bin/env bash
# Uruchamia Stable Diffusion WebUI i OpenShorts równolegle

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "=== Uruchamianie Stable Diffusion WebUI ==="
cd "$ROOT/tools/stable-diffusion-webui"
bash webui.sh --api &
SD_PID=$!

echo "=== Uruchamianie OpenShorts ==="
cd "$ROOT/tools/openshorts"
if [ ! -f .env ]; then
    cp "$ROOT/marketing/openshorts-config.env.example" .env
    echo "UWAGA: Uzupelnij klucze API w tools/openshorts/.env"
fi
docker compose up -d

echo ""
echo "=== Gotowe ==="
echo "Stable Diffusion: http://localhost:7860  (PID: $SD_PID)"
echo "OpenShorts:       http://localhost:5175"
echo ""
echo "Aby zatrzymac:"
echo "  kill $SD_PID          # Stable Diffusion"
echo "  cd tools/openshorts && docker compose down  # OpenShorts"

wait $SD_PID
