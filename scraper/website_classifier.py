import re
from urllib.parse import urlparse
from scraper.config import SOCIAL_AND_DELIVERY_DOMAINS, UNCERTAIN_PATTERNS

STATUS_NO_WEBSITE = "Brak własnej strony WWW"
STATUS_HAS_WEBSITE = "Posiada własną stronę"
STATUS_VERIFY = "Do ręcznej weryfikacji"


def classify_website(url: str | None) -> tuple[str, str]:
    """Return (status_label, cleaned_url)."""
    if not url or not url.strip():
        return STATUS_NO_WEBSITE, ""

    url = url.strip()
    parsed = urlparse(url.lower())

    if parsed.scheme not in ("http", "https"):
        return STATUS_VERIFY, url

    domain = parsed.netloc.removeprefix("www.")

    for blocked in SOCIAL_AND_DELIVERY_DOMAINS:
        if domain == blocked or domain.endswith("." + blocked):
            return STATUS_NO_WEBSITE, url

    for pattern in UNCERTAIN_PATTERNS:
        if re.search(pattern, url.lower()):
            return STATUS_VERIFY, url

    return STATUS_HAS_WEBSITE, url
