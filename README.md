# 🐱 Poppy's Atlas — a kids' travel adventure

A polished, offline-capable **travel atlas web app for kids**, guided by **Poppy** the crowned
tuxedo cat. Countdowns to the next trip, photo guides, fun-fact quizzes, local-cat stories,
an interactive flight-path map and a passport of every adventure.

**Live:** https://w5pvst9r7g-ui.github.io/Kids-Travel/

It's a single, dependency-free **`index.html`** — no build step and no server. Open the file
in any modern browser, or deploy the folder to any static host.

---

## Features

- **🔜 Upcoming** — a dramatic countdown ("sleeps to go!") to the next booked trip, a packing
  checklist, and every upcoming adventure.
- **🌍 Explore** — 37 destination guides, each with tabs: *Getting there* (boarding-pass tile),
  *The country* (passport tile), *Photos* (lightbox gallery), *What to see*, *Fun stuff to do*,
  *Local cat* (a full-screen, page-turner story per place), *Talk like a local* (phrases +
  a phrase-matching game) and a fresh **5-question quiz** drawn from a 30–50 question pool.
  Search, region filters, a **💖 dream list** (wishlist) and a rotating destination spotlight.
- **🗺️ Atlas Map** — Leaflet world map drawing curved **flight paths** from the family's home
  bases (Australia → Dublin). Dense pins cluster; a paper-plane animates along the next-trip
  arc, pointed at the true heading with a contrail; dream-list places show as heart pins.
- **📔 Journal** — add/edit/delete trips (with departure dates), star ratings, notes and
  passport stamps. Backup/restore to a file, **print a passport page**, or sync to the cloud.
- **💌 Mail** — send a fellow explorer a friendly note: type a message, pile on **emojis**
  (quick bar + a full kid-safe picker), or record a **voice note** (tap 🎙️, up to 30s). Chat
  bubbles, an unread badge on the nav, per-chat clearing. To reach **another device** with no
  server or sign-up, Send hands the note to the share sheet as a **postcard** — a link (text/
  emoji) or a small file (voice notes too); the other explorer taps it and it drops into their
  Mail. Postcards also ride along with Cloud sync if it's enabled.
- **🐱 World Cat Atlas** — a headline cat-spotting game: a floating quick-log button
  logs a cat from anywhere (type → coat colour → GPS pin → photo), all into **one
  shared atlas** across every trip and both kids. A dedicated **Cats** view collects
  it all — rank, family leaderboard, a 9-coat "Catdex" collection, cats-by-country,
  a recent-sightings feed, stats, and cat badges — plus a world map of photo-thumbnail
  pins and a full-screen **photo slideshow**.
- **🏅 Badges** — 58 reconciling explorer badges with progress bars and a "closest to earn"
  nudge; a **Countries of the World** page (visited list + top-5 to-go by size/population/
  popularity/beauty, and a continents-collected strip).
- **Per-kid profiles** — Jean-Luc & Hailey, PIN-gated (default `1985`, changeable in Settings →
  Secret code), each with their own saved data and date-of-birth trip filtering. Pick your own avatar.
- **Delight** — splash screen, first-run onboarding, an Easter egg (poke Poppy for a joke or
  a sassy insult), confetti, a "scrapbook" visual identity, and an opt-in **night mode**.

## Production qualities

- **PWA / offline** — web manifest, maskable icons (192/512), and a service worker
  (`sw.js`) that's **network-first for HTML** (deploys never go stale) and **cache-first for
  assets** (works on the plane / abroad). Installable via "Add to home screen".
- **Resilient** — multi-CDN lazy loader for Leaflet; a curated→LoremFlickr→Picsum→gradient
  photo fallback chain; `localStorage` failure handling; honours `prefers-reduced-motion`.
- **Accessible** — keyboard nav, focus-visible rings, ARIA roles, a screen-reader map summary,
  44 px touch targets and safe-area / `dvh` mobile handling.
- **Private** — all data lives in the browser by default. Cross-device sync is opt-in and
  goes to *your own* free Supabase project (see below).
- **Performance budget** — every committed image is kept under 600 KB (enforced in CI).

## Repository layout

```
index.html      the entire app (HTML + CSS + vanilla JS)
sw.js           service worker (offline)
icon-*.png      PWA icons (192 / 512 / maskable)
poppie*.png/jpg Poppy mascot art (optimised)
test/           smoke test suite (no deps)
streams/        source data modules folded into index.html (reference only)
TODO.md         living roadmap / changelog
CLAUDE.md       working memory for AI-assisted development (start here)
docs/           ARCHITECTURE.md + CAT-ATLAS.md (technical deep-dives)
```

## Develop & test

No dependencies are required to run the app — just open `index.html`. For the test suite:

```bash
npm test          # runs test/smoke.test.js (Node 18+)
```

The suite parses the app, evaluates its script in a DOM stub, opens **every** destination and
screen, runs quizzes and actions, and asserts data/asset invariants (incl. that all referenced
local files exist and no image exceeds the size budget). CI (`.github/workflows/ci.yml`) runs
it on every push and pull request.

## Deploy

Any static host. **GitHub Pages is automated:** `.github/workflows/pages.yml` publishes
the repo on every push to `main` (it self-enables Pages, so no Settings toggle is
needed). The app is `index.html` at the repo root and uses only relative paths, so it
works from a project subpath.

## Cross-device cloud sync (optional)

Journal → **☁️ Cloud sync**. Create a free [Supabase](https://supabase.com) project, run the
one-line table SQL shown in the dialog, paste your **Project URL** + **anon key** + a shared
**family code**, then Back up / Restore. Data stays entirely in your own account.

## Adding a destination

Open `index.html`, copy an existing object in the `DESTS` array, and fill in its flight info,
country facts, attractions, kid spots and photo keywords. Curated photos and a local-cat story
can be added to the `PHOTOS` and `LOCAL_CATS` data blocks.

## Credits

`poppie-meow-1..5.mp3` — the five real cat sounds Poppy makes when you boop her (a random one
plays each time) — are short clips trimmed from the cat sounds in the
[MeowPad](https://github.com/jiaweizhang1995/MeowPad) project, used under its Apache License 2.0.
