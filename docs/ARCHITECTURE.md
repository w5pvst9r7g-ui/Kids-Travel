# Architecture — Poppy's Atlas

Everything is in `index.html`: one `<style>` block, the markup, then one `<script>`.
No modules, no bundler. This map helps you find things fast (line numbers drift —
grep the named symbols).

## Layout of index.html

1. **`<head>`** — meta (viewport, theme-color), manifest + apple-touch-icon links,
   inline critical setup.
2. **`<style>`** — design tokens in `:root`, then component CSS, then
   `@media(max-width:760px)` (mobile: hides `nav.top`, shows `.tabbar`) and
   `html.night …` overrides. Claymorphism tokens: `--clay`, `--shadow*`, `--r*`.
3. **Markup** — login screen, modals (see below), `nav.top`, then `<main>` with one
   `<section class="view" id="…">` per view, then the mobile `.tabbar`.
4. **`<script>`** — data blocks → helpers → per-feature render functions → boot.

## Views & navigation

`showView(v)` maps a view key → section id and calls the right render fn. Keys:
`explore, upcoming, map, trips (Journal), badges, messages (Mail), cats (Cat Atlas),
world, packing, detail`. **Two nav bars** must both carry every top-level view:
`nav.top` (desktop, text buttons) and `.tabbar` (mobile, SVG-icon buttons). Titles
per view come from the `VT` map in `showView`.

Deep-links: `#place/<id>` opens a destination after sign-in; `setDocTitle` keeps the
tab/history sensible; back-button support via the `_kt` layer stack (`ktOpen`/`ktBack`).

## Data & storage

- **Trips** — `loadTrips()/saveTrips()`, DOB-filtered per profile; `reconcileTrips()`
  flips planned→visited once a trip's date passes; `currentTrip()`/`isUnderway()`
  keep a trip "Happening now" for `DEFAULT_TRIP_NIGHTS` (10) or `t.nights`.
- **Destinations** — `DESTS[]` (guides, flight info, region, coords). Photos in
  `PHOTOS`, local-cat stories in `LOCAL_CATS`, phrases in `LANG_PHRASES`/`DEST_LANG`,
  food in `FOOD_BY_COUNTRY`/`FOOD_FACTS`.
- **Per-profile keys** — `dataKey(base)` → `globie_atlas_<base>_v9_<profile>`
  (ach, quizBest, pack, catsRead, triedFoods, storiesRead, wishlist, messages…).
- **Achievements** — `ACHIEVEMENTS[]` tested against `achContext()`;
  `badgeProgress()` drives progress bars; `checkAchievements()` toasts + confetti.
- **Cat sightings** — a **shared** store (not profile-suffixed). See CAT-ATLAS.md.

## Maps (Leaflet)

Lazy multi-CDN loader: `ensureLeaflet(cb)` / `ensureLeafletCss()` / `loadFrom` try
several CDNs. The atlas map (`initMap`) draws curved flight paths from dual home
bases. The cat map (`buildCatMap`/`renderCatMarkers`) uses `L.divIcon` pins. If
Leaflet can't load, both show a friendly "needs the internet" fallback with retry.

## Resilience patterns

- Photo fallback chain: curated → LoremFlickr → Picsum → gradient.
- `localStorage` writes are wrapped in try/catch; quota handled where it matters
  (cat photos evict oldest — see CAT-ATLAS.md).
- `prefers-reduced-motion` honoured (`reduceMotion`) — gate animations on it.
- Modals: add to `MODAL_SEL`, add an Escape branch, use `modalCapture/Restore`.

## Service worker (`sw.js`)

- HTML navigations: **network-first** with `cache: 'no-store'` → new deploys are
  never masked by a stale cache; offline falls back to the cached shell.
- Static assets: **cache-first**, filled on first fetch.
- `CACHE = 'poppie-atlas-vN'` — bump N only to invalidate the asset precache.
  You rarely need to bump it for `index.html` changes (it's network-first).

## Tests (`test/smoke.test.js`)

Parses `index.html`, evaluates the script in a jsdom-ish stub, then opens every
destination/view, runs quizzes/actions, and asserts invariants: all referenced
local assets exist, no image > 600 KB, ≥40 achievements, no Google Fonts link, food
data integrity, no stray "Poppie" casing, DOCTYPE/viewport/theme-color/manifest
present. Add assertions here when you add data that could rot.

## Headless QA recipe

`/tmp/chromium` + `puppeteer-core` (`/tmp/node_modules`). Boot: load the file URL,
`signIn('hailey')`, `skipSplash()`, `closeOnboard()`. Stub `getCurrentPosition`
(override the method, don't reassign `navigator.geolocation`) and `window.L` if you
need the map. Seed `localStorage` to drive data-dependent UI. Screenshot to the
scratchpad. Keep these scripts out of the repo.
