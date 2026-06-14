#!/bin/bash
set -e

echo "=== Instalacja zależności ==="
pip3 install -q requests

echo ""
echo "=== Setup zakończony ==="
echo ""
echo "Jak uruchomić:"
echo "  1. Zdobądź darmowy klucz API Google Places:"
echo "     https://console.cloud.google.com/apis/library/places-backend.googleapis.com"
echo ""
echo "  2. Ustaw klucz:"
echo "     export GOOGLE_PLACES_API_KEY='AIza...'"
echo ""
echo "  3. Uruchom:"
echo "     python3 run_scraper.py"
echo "     python3 run_scraper.py --max-results 150"
