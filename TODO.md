# 🐱 Poppy's Atlas — Ideas & Improvements Tracker

A living checklist so nothing gets lost. **When we get sidetracked by a new request, add it here and tick things off as they ship.**

Last updated: 2026-06-01

---

## ✅ Done

### Core app
- [x] Standalone single-file app (`index.html`) — Explore / Upcoming / Map / Journal / Badges
- [x] Destination guides with tabs: Getting there, Country, Photos, What to see, Best for kids, **Talk like a local**, Quiz
- [x] 39 destinations (incl. all real visited cities + wishlist)
- [x] Interactive atlas map with **dual home bases** (Australia → Dublin) and curved flight paths
- [x] Travel journal (add/edit/delete, star ratings, notes, passport stamps)
- [x] Real family itinerary (TripIt, 2016+); Maldives/Kandima combined

### Identity & people
- [x] Poppy the cat mascot (real photo `poppie.jpg` + 11 pose PNGs used throughout)
- [x] Profile login (Jean-Luc / Hailey, PIN 1985) with per-profile data
- [x] Kids pick their own avatar icon
- [x] **Per-user DOB filtering** (Jean-Luc 2016, Hailey 2019 — hide trips before they were born)

### Engagement
- [x] 40 Explorer Badges (reconcile with live itinerary; 15 still to earn)
- [x] Surprise-me 🎲, per-destination quiz, Poppy speech bubble
- [x] Dramatic countdown to next trip + **"It's today!" celebration**
- [x] **Packing checklist** per upcoming trip (region-aware, progress bar)

### Content & media
- [x] Curated Wikimedia hero+gallery photos for all 39 destinations
- [x] Bulletproof photo fallback chain (curated → LoremFlickr → Picsum → gradient)
- [x] Photo lightbox (tap to enlarge, swipe/arrow/Esc)
- [x] Expanded guides (8 attractions / 8 kid spots / 10 photos / highlights + tips): Maldives, Sunshine Coast, **Rabat**, Sydney, Singapore, Paris, London, Cape Town, Los Angeles
- [x] Click-through "What to see" → Google Maps
- [x] Map/Journal ⇄ Explore deep links + "✓ Visited" chips

### Quality
- [x] Accessibility pass (keyboard, focus rings, contrast, screen-reader map summary)
- [x] Mobile/iOS (safe-area, dvh, 44px targets, bottom tab bar)
- [x] Security (escape user input), localStorage failure handling
- [x] Multi-CDN Leaflet loader (map works even if one CDN is blocked)

---

## 🔜 In progress
- [x] **Hero photo upgrade** — 17 less-iconic heroes swapped for more "wow" shots (Whitehaven aerial, Flinders St at night, Avon punting, Düden Falls…)
- [x] **UI refresh (soft modern pastel)** — warm-cream palette, muted sage/blush/butter/lavender accents; deepened solid CTAs for readable white text
- [x] **Boarding-pass "Getting there" tile** + **passport-page "The country" tile** (replaced the plain meta tiles Grant disliked)
- [x] **Photos in "What to see" + "Fun stuff to do"** — each spot now has a thumbnail; "Best for kids" renamed to **🎢 Fun stuff to do**
- [x] **Photo captions back in step** — gallery + lightbox now use the curated caption that matches each image
- [x] **Story cat photo** — show the full square photo in a rounded frame (no more circular clipping that cut the cat off), bias crop to the face, lead the keyword with "cat" so the image actually contains one
- [x] **🌍 Countries of the World page** — click the "Countries visited" stat (or the Badges button) → list of countries you've explored + the **top 5 you haven't**, sortable by most popular / most beautiful / biggest / most people (77-country curated dataset)
- [x] **Fix spot photo overlap** — reset the default `<figure>` margin that was pushing the What-to-see / Fun-stuff thumbnails over the text
- [x] **Multiple cat stories for upcoming trips** — Coco (Maldives), Banjo (Sunshine Coast) & Zellij (Rabat) now each have **3 tales** (cover badges Tale 1/2/3); other places keep their single story
- [x] **Added the missing Faro (Algarve), Portugal trip** — May 2026 ✈️🇵🇹
- [x] **Quiz expanded** — 30–52 question pool per destination (capitals, money, flags, continents, sights, things-to-do, true-facts, phrases, world size/population comparisons); a fresh, varied **random 5** each play
- [x] **Spot photos re-fixed** — bulletproof fixed-size square thumbnails (no more overlap/misalignment)
- [x] **Splash screen** after PIN (branded, flying plane, personalised "Welcome back") + personalised countdown greeting
- [x] **Destination search** on Explore (name/country, with clear button)
- [x] **One-tap "I've been here!"** quick-add from a destination (+toast); CTA reflects visited state
- [x] **Badge progress bars** on locked countable badges + **"closest badge to earn"** motivator
- [x] **Map fixes** — correct home label (Sunshine Coast), **"fly to next trip"** button (shows city / hides when none)
- [x] **Cat story "✓ Read" badges** on finished tales (per profile)
- [x] **225 "Did you know?" facts** from every guide, day-seeded fact-of-the-day
- [x] **Offline service worker** (`sw.js`, registers when hosted) + manifest polished to new palette
- [x] **Explore hero spotlight** — rotating real destination (curated photo, tap to open)
- [x] **Login backdrop** — drifting clouds + flying plane
- [x] **Journal departure date** for upcoming trips → accurate countdowns
- [x] **Visited years on Explore cards**; **continents-collected strip (X/7)** on the World page
- [x] **Optional Supabase cloud sync** (Journal → ☁️ Cloud sync) + favicon, Open Graph share previews, "Share" button, deploy-safe service worker, `main` branch
- [x] **More Poppy boop lines** — 72 generic (incl. 24 cat jokes + light toilet humour) + 14 local-cat insults; mascot renamed Poppie → **Poppy**
- [x] **Extra visited trips** — Dublin (Ireland 🇮🇪), San Francisco + Washington DC (Dec 2022), Switzerland 🇨🇭 + Austria 🇦🇹 (Jan 2023)
- [x] **💖 Dream list (wishlist)** — heart any place (cards, detail), collected on Explore, shown on the map as heart pins, with 2 new badges (Big Dreamer / Sky is the Limit)
- [x] **Major UX upgrade — "Scrapbook Atlas" identity** (less templatey): atlas-paper graticule background; **postcard-style destination cards** (inset photo mat, rotated stamp tags, richer hover lift); **luggage-tag section eyebrows** + hand-drawn dashed title underlines (incl. detail panels); **gallery photos with white scrapbook borders** that lift on hover; **hero postcard frame**; hand-placed (rotated) brand logo; dashed flight-path header/tab-bar edges; lifted "stamp" active tab
- [x] **Scrapbook pt2** — handwritten accent font (Caveat) for photo captions / fact notes / boarding-pass journey; **washi tape** on the feature photo
- [x] **Plane visualisation** — replaced the direction-ambiguous ✈️ emoji (points different ways per platform) with a **paper-plane SVG** rotated to the **exact heading of travel** everywhere (map computes screen bearing; boarding pass / login / splash fly nose-forward) + **contrails**
- [x] **Night mode** — opt-in header toggle (🌙), persisted; remaps the design tokens + key surfaces to a deep night-sky theme
- [x] **Production hardening** — optimised images (8.5 MB → 1 MB via sharp) + maskable PWA icons; committed **smoke-test suite** (`npm test`) + **GitHub Actions CI** (passing); rewritten README; `package.json`/`.gitignore`; `<noscript>` + boot safety-net (no white-screen) + global error guard; CDN preconnects; perf budget (no image > 600 KB, enforced in CI)
- [x] **Opt-in sound effects** — generated tones (no assets) for badge unlocks, quiz answers, boops, story page-turns & wishlist; off by default
- [x] **Settings sheet** — consolidated ⚙️ menu (night mode, sound, replay intro, cloud sync, version); declutters the header; responsive header on phones
- [x] **PWA/SEO completeness** — manifest `id`/`categories`/`display_override`/maskable icons; `og:image:alt` + `og:site_name`; offline indicator; version banner; skip-to-content + `main` landmark

---

## 📋 Backlog (prioritised)

### High value
- [x] **Offline / PWA** — service worker (network-first HTML so deploys stay fresh, cache-first assets), web manifest, **Add-to-home-screen** button, favicon + Open Graph share previews. Live once GitHub Pages serves the branch ✅
- [x] **Cross-device cloud sync (Supabase)** — built! Journal → ☁️ Cloud sync: paste your project URL + anon key + a family code, then Back up / Restore all explorers' data across devices. Dormant until configured. *(needs Grant to create the free project & run the one-line table SQL shown in the dialog)*
- [x] **Spot photos** — "What to see" & "Fun stuff to do" now use the **curated destination photos** (no more random stock)
- [x] **`main` branch** created so GitHub Pages serves from a conventional branch (kept in sync)
- [x] **Direct-to-Rabat** flight info update ✈️

### Medium
- [x] **Map polish** — animated plane along the next-trip arc ✈️ · **dense pins now cluster** (e.g. the Australian east coast collapses to one badge at world zoom and splits apart as you zoom in; tap a cluster to list/zoom)
- [x] Expanded Brisbane, Auckland, Barcelona, Whitsundays, Gold Coast, Melbourne, Miami, Fuerteventura to 8/8/10
- [x] **Language mini-quiz** ("how do you say…?") — phrase-matching game on the Talk-like-a-local tab ✅
- [ ] Compress the Poppy PNGs (~20 MB → ~1.5 MB) for faster loads *(needs an image tool / external compressor)*
- [ ] ~~Weather / best-time mini-widget~~ — **deprioritised**: real weather needs a network API, and each guide's boarding pass already shows the "Best time" to go

### Polish / delight
- [x] **First-run onboarding** — friendly Poppy welcome (once per explorer, personalised, Esc/tap to close) explaining Upcoming / Explore / Map / Badges
- [x] **Printable passport page** — 🖨️ button in the Journal opens a clean one-page passport (name, rank, stats + a stamp grid) you can print or save as PDF
- [x] ~~Fun fact of the day~~ — already covered by the rotating "Did you know?" facts on the Explore hero
- [ ] Map: tap a country to filter guides to it *(needs country polygons / GeoJSON — heavier)*
- [ ] Remove unused Madagascar/Antarctica photo entries *(low value; they sit harmlessly inside a minified blob)*
- [ ] Sound effects / haptics (subtle, toggleable)

### Needs Grant's input / accounts
- [ ] Supabase project (cloud sync) — create free project, share URL + anon key
- [ ] Turn on GitHub Pages (for a shareable URL + PWA/offline)

---

## 🆕 New tasks (added as they come up)
- [x] Cat stories: cover (name) on the tab → opens a full-screen page-turner (5–7 pages, story arc) with the cat narrating in a speech bubble
- [x] **Local cat’s tale** tab on every destination (37 tales) + 5-chapter series for the 3 upcoming trips
- [x] Incorporate cats into badges: Story Sniffer / Cat Whisperer / Tale Master (read N tales)
- [x] Easter egg: poke any Poppy → full-screen grumpy Poppy with a funny insult (pops in)
- [x] **Packing on its own screen** + collapsed packing-progress card on the Upcoming page
- [x] Replace Poppy poses with transparent versions + use her bigger (hero + every destination hero)
- [x] **Rabat is a DIRECT flight from Dublin** — Getting there now shows nonstop ~3h45 ✈️
