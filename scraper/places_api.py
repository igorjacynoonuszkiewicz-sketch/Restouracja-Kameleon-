import logging
import time
from dataclasses import dataclass, field
from typing import Iterator

import requests

from scraper.config import FIELD_MASK, PLACES_API_URL, REQUEST_DELAY_S, SEARCH_QUERIES

log = logging.getLogger(__name__)


@dataclass
class PlaceResult:
    place_id: str = ""
    name: str = ""
    address: str = ""
    phone: str = ""
    rating: str = ""
    review_count: str = ""
    maps_url: str = ""
    website_url: str = ""

    @property
    def review_count_int(self) -> int:
        try:
            return int(self.review_count)
        except Exception:
            return 0

    @property
    def rating_float(self) -> float:
        try:
            return float(self.rating)
        except Exception:
            return 0.0


def _parse_place(raw: dict) -> PlaceResult:
    return PlaceResult(
        place_id=raw.get("id", ""),
        name=raw.get("displayName", {}).get("text", ""),
        address=raw.get("formattedAddress", ""),
        phone=raw.get("nationalPhoneNumber", ""),
        rating=str(round(raw["rating"], 1)) if raw.get("rating") else "",
        review_count=str(raw.get("userRatingCount", "")),
        maps_url=raw.get("googleMapsUri", ""),
        website_url=raw.get("websiteUri", ""),
    )


def fetch_restaurants(api_key: str, max_results: int) -> list[PlaceResult]:
    """Collect unique restaurants from Google Places Text Search API."""
    session = requests.Session()
    session.headers.update({
        "Content-Type": "application/json",
        "X-Goog-Api-Key": api_key,
        "X-Goog-FieldMask": FIELD_MASK,
    })

    seen_ids: set[str] = set()
    results: list[PlaceResult] = []

    for query in SEARCH_QUERIES:
        if len(results) >= max_results:
            break

        page_token: str | None = None
        page_num = 0

        while len(results) < max_results:
            body: dict = {
                "textQuery": query,
                "languageCode": "pl",
                "pageSize": 20,
            }
            if page_token:
                body["pageToken"] = page_token

            try:
                resp = session.post(PLACES_API_URL, json=body, timeout=15)
                resp.raise_for_status()
            except requests.RequestException as e:
                log.error("API error for query '%s' page %d: %s", query, page_num, e)
                break

            data = resp.json()

            if "error" in data:
                log.error("API returned error: %s", data["error"].get("message"))
                break

            places = data.get("places", [])
            if not places:
                log.info("No more results for: %s", query)
                break

            new_count = 0
            for raw in places:
                pid = raw.get("id", "")
                if pid and pid not in seen_ids:
                    seen_ids.add(pid)
                    results.append(_parse_place(raw))
                    new_count += 1

            page_num += 1
            log.info("Query '%s' page %d: +%d new (total %d)", query, page_num, new_count, len(results))

            page_token = data.get("nextPageToken")
            if not page_token:
                break

            time.sleep(REQUEST_DELAY_S)

        time.sleep(REQUEST_DELAY_S)

    return results[:max_results]
