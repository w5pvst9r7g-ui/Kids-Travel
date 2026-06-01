# 🐱 Poppie's Atlas — Ideas & Improvements Tracker

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
- [x] Poppie the cat mascot (real photo `poppie.jpg` + 11 pose PNGs used throughout)
- [x] Profile login (Jean-Luc / Hailey, PIN 1985) with per-profile data
- [x] Kids pick their own avatar icon
- [x] **Per-user DOB filtering** (Jean-Luc 2016, Hailey 2019 — hide trips before they were born)

### Engagement
- [x] 40 Explorer Badges (reconcile with live itinerary; 15 still to earn)
- [x] Surprise-me 🎲, per-destination quiz, Poppie speech bubble
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

---

## 📋 Backlog (prioritised)

### High value
- [ ] **Offline / PWA** — service worker to cache the app + guides + map tiles so it works on the plane / abroad with no data *(needs hosting on GitHub Pages to take effect)*
- [ ] **Cross-device cloud sync (Supabase)** — true multi-device persistence *(needs a free Supabase project + URL/key from Grant)*
- [x] **Direct-to-Rabat** flight info update ✈️

### Medium
- [x] **Map polish** — animated plane along the next-trip arc ✈️ · **dense pins now cluster** (e.g. the Australian east coast collapses to one badge at world zoom and splits apart as you zoom in; tap a cluster to list/zoom)
- [x] Expanded Brisbane, Auckland, Barcelona, Whitsundays, Gold Coast, Melbourne, Miami, Fuerteventura to 8/8/10
- [x] **Language mini-quiz** ("how do you say…?") — phrase-matching game on the Talk-like-a-local tab ✅
- [ ] Compress the Poppie PNGs (~20 MB → ~1.5 MB) for faster loads *(needs an image tool / external compressor)*
- [ ] ~~Weather / best-time mini-widget~~ — **deprioritised**: real weather needs a network API, and each guide's boarding pass already shows the "Best time" to go

### Polish / delight
- [x] **First-run onboarding** — friendly Poppie welcome (once per explorer, personalised, Esc/tap to close) explaining Upcoming / Explore / Map / Badges
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
- [x] Easter egg: poke any Poppie → full-screen grumpy Poppie with a funny insult (pops in)
- [x] **Packing on its own screen** + collapsed packing-progress card on the Upcoming page
- [x] Replace Poppie poses with transparent versions + use her bigger (hero + every destination hero)
- [x] **Rabat is a DIRECT flight from Dublin** — Getting there now shows nonstop ~3h45 ✈️
