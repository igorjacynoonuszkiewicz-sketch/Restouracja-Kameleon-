#!/usr/bin/env python3
"""
Scraper restauracji bez własnej strony WWW — Gdańsk.
Wymaga klucza API: ustaw zmienną środowiskową GOOGLE_PLACES_API_KEY
lub przekaż flagą --api-key.

Uruchomienie:
  export GOOGLE_PLACES_API_KEY="AIza..."
  python3 run_scraper.py

  lub: python3 run_scraper.py --api-key AIza... --max-results 120
"""

import argparse
import csv
import logging
import math
import os
import sys
from datetime import datetime
from pathlib import Path

from scraper.config import (
    CSV_OUTPUT, LOGS_DIR, MAX_RESULTS, OUTPUT_DIR, REPORT_OUTPUT,
)
from scraper.places_api import fetch_restaurants
from scraper.website_classifier import (
    STATUS_NO_WEBSITE, STATUS_VERIFY, classify_website,
)

CSV_FIELDS = [
    "Nazwa", "Adres", "Telefon", "Ocena",
    "Liczba_opinii", "Link_Google_Maps", "Status_Strony", "URL_Strony",
]


def setup_logging() -> None:
    LOGS_DIR.mkdir(parents=True, exist_ok=True)
    fmt = "%(asctime)s [%(levelname)s] %(message)s"
    logging.basicConfig(
        level=logging.INFO,
        format=fmt,
        handlers=[
            logging.FileHandler(LOGS_DIR / "scraper.log", encoding="utf-8"),
            logging.StreamHandler(sys.stdout),
        ],
    )


def write_csv(rows: list[dict]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    with open(CSV_OUTPUT, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_FIELDS, delimiter=";", extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)
    logging.getLogger(__name__).info("CSV zapisany: %s  (%d wierszy)", CSV_OUTPUT, len(rows))


def write_report(rows: list[dict]) -> None:
    no_website = [r for r in rows if r["Status_Strony"] == STATUS_NO_WEBSITE]
    verify = [r for r in rows if r["Status_Strony"] == STATUS_VERIFY]
    has_website = [r for r in rows if r["Status_Strony"] not in (STATUS_NO_WEBSITE, STATUS_VERIFY)]

    def sort_key(r: dict) -> float:
        try:
            rating = float(r.get("Ocena") or 0)
            reviews = int(r.get("Liczba_opinii") or 0)
            return rating * math.log1p(reviews)
        except Exception:
            return 0.0

    top20 = sorted(no_website, key=sort_key, reverse=True)[:20]
    pct = len(no_website) / max(len(rows), 1) * 100

    lines = [
        "=" * 65,
        "RAPORT LEADÓW: RESTAURACJE BEZ WŁASNEJ STRONY WWW — GDAŃSK",
        f"Data analizy: {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "=" * 65,
        "",
        "PODSUMOWANIE:",
        f"  Łącznie przeanalizowanych restauracji : {len(rows)}",
        f"  Brak własnej strony WWW               : {len(no_website)}",
        f"  Posiada własną stronę                 : {len(has_website)}",
        f"  Do ręcznej weryfikacji                : {len(verify)}",
        f"  % bez strony (z przeanalizowanych)    : {pct:.1f}%",
        "",
        "=" * 65,
        "TOP 20 NAJLEPSZYCH LEADÓW",
        "(sortowane wg: ocena × log(liczba opinii))",
        "=" * 65,
    ]

    for i, r in enumerate(top20, 1):
        lines += [
            "",
            f"#{i:>2}. {r.get('Nazwa', '—')}",
            f"      Adres    : {r.get('Adres', '—')}",
            f"      Telefon  : {r.get('Telefon') or 'brak'}",
            f"      Ocena    : {r.get('Ocena', '—')} ★ ({r.get('Liczba_opinii', '—')} opinii)",
            f"      Maps URL : {r.get('Link_Google_Maps', '—')}",
        ]

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    REPORT_OUTPUT.write_text("\n".join(lines), encoding="utf-8")
    print("\n".join(lines))
    logging.getLogger(__name__).info("Raport zapisany: %s", REPORT_OUTPUT)


def main() -> None:
    parser = argparse.ArgumentParser(description="Scraper restauracji Google Maps — Gdańsk")
    parser.add_argument(
        "--api-key",
        default=os.environ.get("GOOGLE_PLACES_API_KEY", ""),
        help="Klucz Google Places API (lub ustaw GOOGLE_PLACES_API_KEY)",
    )
    parser.add_argument(
        "--max-results", type=int, default=MAX_RESULTS,
        help=f"Docelowa liczba restauracji (domyślnie {MAX_RESULTS})",
    )
    args = parser.parse_args()

    setup_logging()
    log = logging.getLogger(__name__)

    if not args.api_key:
        log.error(
            "Brak klucza API!\n"
            "Ustaw: export GOOGLE_PLACES_API_KEY='AIza...'\n"
            "lub podaj: python3 run_scraper.py --api-key AIza..."
        )
        sys.exit(1)

    log.info("Start — cel: %d restauracji", args.max_results)

    restaurants = fetch_restaurants(args.api_key, args.max_results)
    log.info("Zebrano %d restauracji z API", len(restaurants))

    rows: list[dict] = []
    for r in restaurants:
        status, cleaned_url = classify_website(r.website_url)
        row = {
            "Nazwa": r.name,
            "Adres": r.address,
            "Telefon": r.phone,
            "Ocena": r.rating,
            "Liczba_opinii": r.review_count,
            "Link_Google_Maps": r.maps_url,
            "Status_Strony": status,
            "URL_Strony": cleaned_url,
        }
        rows.append(row)

        icon = "BRAK" if status == STATUS_NO_WEBSITE else ("VER?" if status == STATUS_VERIFY else "ok  ")
        print(f"  [{icon}] {r.name[:45]:<45} | {r.rating} ★ ({r.review_count})")

    write_csv(rows)
    write_report(rows)
    log.info("Gotowe.")


if __name__ == "__main__":
    main()
