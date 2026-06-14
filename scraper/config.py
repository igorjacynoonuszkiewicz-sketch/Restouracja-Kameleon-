from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
OUTPUT_DIR = BASE_DIR / "output"
LOGS_DIR = BASE_DIR / "logs"
CHECKPOINT_FILE = OUTPUT_DIR / "checkpoint.json"
CSV_OUTPUT = OUTPUT_DIR / "restauracje_gdansk.csv"
REPORT_OUTPUT = OUTPUT_DIR / "raport_leads.txt"

PLACES_API_URL = "https://places.googleapis.com/v1/places:searchText"

# Multiple search queries to collect 100+ restaurants across Gdańsk districts
SEARCH_QUERIES = [
    "restauracje Gdańsk Śródmieście",
    "restauracje Gdańsk Wrzeszcz",
    "restauracje Gdańsk Oliwa",
    "restauracje Gdańsk Zaspa",
    "restauracje Gdańsk Brzeźno",
    "restauracje Gdańsk Chełm",
]

MAX_RESULTS = 120
REQUEST_DELAY_S = 0.3  # polite delay between API calls

FIELD_MASK = ",".join([
    "places.id",
    "places.displayName",
    "places.formattedAddress",
    "places.nationalPhoneNumber",
    "places.rating",
    "places.userRatingCount",
    "places.websiteUri",
    "places.googleMapsUri",
    "nextPageToken",
])

SOCIAL_AND_DELIVERY_DOMAINS = {
    "facebook.com", "fb.com",
    "instagram.com",
    "twitter.com", "x.com",
    "tiktok.com",
    "youtube.com",
    "linkedin.com",
    "ubereats.com",
    "glovo.com",
    "wolt.com",
    "pyszne.pl",
    "bolt.food",
    "restaumatic.com",
    "tripadvisor.com",
    "tripadvisor.pl",
    "yelp.com",
    "zomato.com",
    "thefork.com",
    "lafourchette.com",
    "opentable.com",
    "sites.google.com",
    "menu.pl",
    "menulog.com",
    "mjam.net",
    "lieferando.de",
    "foodpanda.com",
}

UNCERTAIN_PATTERNS = [
    r"\.restaumatic\.com",
    r"system\.restaurant",
    r"gastropunkt\.pl",
]
