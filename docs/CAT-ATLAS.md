# World Cat Atlas — subsystem spec

The cat-spotting game is the app's headline feature. It started as a Morocco-only
per-kid counter and grew into a **shared, cross-trip world atlas** with photos, a
map, a dedicated view, and a slideshow. This is the durable spec.

## Data model (shared, not per-profile)

- **Key:** `WORLD_CAT_KEY = 'globie_atlas_worldcats_v1'` — deliberately **not**
  profile-suffixed, so every explorer contributes to **one** shared atlas.
- **Shape:** `{ log: [ sighting… ], colors: {colorId: count} }`
- **Sighting:** `{ id, t:'big'|'kit', c:<coatId|null>, ts, by:<profileId|'guest'>,
  country?, lat?, lng?, hasPhoto?:1, legacy?:true }`
  - `by` = who logged it (attribution + leaderboard).
  - `country` = tagged from `currentDest.country` at log time (may be empty for a
    quick-log with no active destination).
  - `lat/lng` = real GPS only (added asynchronously after logging, if permitted).
  - `hasPhoto` = a flag; the photo itself is stored separately (see Photos).
- **Photos:** stored **one-per-key**, `CATPHOTO_PRE + id` = `globie_atlas_catphoto_<id>`,
  as compressed JPEG data URLs — kept **out** of the main atlas JSON so saves stay
  small and photos can be evicted independently. `saveCatPhoto` evicts oldest photos
  on `QuotaExceededError` and retries.

## Migration

`migrateCatsToWorld()` (runs once per page load, id-deduped, idempotent) imports the
old per-profile `globie_atlas_catcount_<country>_v9_<profile>` counters into the
shared store: deterministic ids `mig_<country>_<by>_<ts|nN>`, `by`/`country` from the
key, GPS carried over (approx points dropped), and legacy big/kit **counts padded**
with `{c:null, legacy:true}` entries so totals match even when the old capped log was
shorter than the count. Do not reintroduce a persistent "migrated" flag — the earlier
one fired before data existed and skipped the import; the session-scoped guard +
id-dedup is correct.

## Core functions

- `worldCats()` / `saveWorldCats(o)` — read/write the shared store.
- `catData(d)` — returns a **view** `{big,kit,log,colors,_world:true}` in the shape
  the older UI expects (big/kit derived from the log). `d` is ignored for storage.
- `catLogSighting(type, colorId, {country})` — append a sighting, returns its `id`.
- `catAtlasStats()` — the rich roll-up used by the page **and** badges:
  `{total, big, kit, points(=big+2·kit), located, photos, coats{}, coatCount,
  countries{}, countryCount, byProfile{}, log}`.
- `catUIRefresh()` — re-sync every cat surface after a change (banner, Morocco board,
  Cat Atlas page if active, map if open). Call it after any log/photo/reset.
- `catWho(id)` — profile id → display name (for attribution).

## Entry points (how a user reaches it)

- **FAB** — floating 🐱 button (`#catFab`), visible after login on every screen
  (`updateCatFab()`), opens the **quick-log** modal (`openCatQuick`): type → coat →
  logs → GPS pin → confetti → "Logged!" screen with **📷 photo**, log-another, and
  see-the-atlas actions.
- **Landing banner** — `#catBanner` on Explore, live stats via `updateCatBanner()`,
  taps through to the Cats view.
- **Cats view** (`renderCatAtlas` → `#catAtlasBody`) — the hub. Sections:
  rank hero, 6-stat board, action row (Spotted a cat / Open map / **📸 Slideshow** —
  the slideshow button is **always shown**; with 0 photos it toasts a prompt),
  `catxLeaderboard` (family league by `byProfile`), `catxDex` (9-coat collection,
  locked/greyed until found), `catxByCountry`, `catxFeed` (recent, with photo
  thumbnails), `catxStatsCard` (reuses `catStatsHTML`), `catxBadges`.
- **Morocco destination tab** — still renders the (now global) board via
  `catCounterHTML`/`catBoardHTML`. Redundant with the Cats view but harmless; kept.

## Map

`openCatMap`/`buildCatMap`/`renderCatMarkers` — full-world view fitting all located
pins. Photo sightings render a **photo thumbnail pin** (60px) with a small emoji
badge; others render a coat-coloured teardrop. Popups show coat/type/country/who/date
and the photo when present. Modal `#catMapModal`.

## Slideshow

`openCatSlide`/`catSlideShow`/`catSlideNext/Prev/Toggle` + `#catSlideModal`.
Full-screen, cinematic: gathers every `hasPhoto` sighting (newest first), Ken Burns
zoom, caption overlay, 4s auto-advance progress bar, play/pause, prev/next, dot nav,
keyboard (←/→/space/Esc). Registered in `MODAL_SEL` + the Escape handler.

## Badges

Cat badges live in `ACHIEVEMENTS[]`, tested against `achContext()` which now carries
`cats` (total), `catCoats`, `catCountries`, `catPhotos`. Ladder: `cat_spot10…300`
(worldwide wording), plus `cat_coats` (all 9 coats), `cat_world` (3 countries),
`cat_photog` (≥1 photo). Add matching entries to `badgeProgress()` when adding a badge.

## Coats

`CAT_COLORS` — 9 coat swatches (tuxedo, ginger, grey, tabby, calico, tortie, black,
white, siamese). `CAT_RANKS` — the rank ladder (Cat Curious … Meow-narch).

## Gotchas / lessons

- **Never store big photo data URLs inside the main atlas JSON** — separate keys, or
  every save gets heavy and risks quota. Keep only the `hasPhoto` flag inline.
- Keep **all** log/photo/reset paths calling `catUIRefresh()` so the banner, board,
  page, and map never drift out of sync.
- The slideshow/entry points must not be gated on having data you might not have yet
  (the Slideshow button was once hidden until a photo existed — a discovery bug).
- In headless QA the map won't load (Leaflet CDN blocked) — that's expected; test the
  data/markers logic by stubbing `window.L`, and trust the live map.
