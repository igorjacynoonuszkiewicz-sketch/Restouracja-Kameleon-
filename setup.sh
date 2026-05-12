#!/usr/bin/env bash
# Pobiera narzędzia AI do marketingu

mkdir -p tools

if [ ! -d tools/stable-diffusion-webui ]; then
    git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git tools/stable-diffusion-webui
fi

if [ ! -d tools/openshorts ]; then
    git clone https://github.com/mutonby/openshorts.git tools/openshorts
fi

cp marketing/openshorts-config.env.example tools/openshorts/.env
echo "Gotowe. Uzupelnij klucze API w tools/openshorts/.env"
echo "Nastepnie uruchom: bash marketing/start-tools.sh"
