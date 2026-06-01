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

---

## 📋 Backlog (prioritised)

### High value
- [ ] **Offline / PWA** — service worker to cache the app + guides + map tiles so it works on the plane / abroad with no data *(needs hosting on GitHub Pages to take effect)*
- [ ] **Cross-device cloud sync (Supabase)** — true multi-device persistence *(needs a free Supabase project + URL/key from Grant)*
- [x] **Direct-to-Rabat** flight info update ✈️

### Medium
- [x] **Map polish (part)** — animated plane flying along the next-trip arc ✈️  ·  [ ] still: cluster the dense Australian pins
- [x] Expanded Brisbane, Auckland, Barcelona, Whitsundays, Gold Coast, Melbourne, Miami, Fuerteventura to 8/8/10
- [ ] **Weather / best-time** mini-widget per destination
- [ ] **Language mini-quiz** ("how do you say…?") using the phrases data
- [ ] Compress the Poppie PNGs (~20 MB → ~1.5 MB) for faster loads *(needs an image tool / external compressor)*

### Polish / delight
- [ ] First-run onboarding tip from Poppie
- [ ] Map: tap a country to filter guides to it
- [ ] "Share / print a passport page" for a trip
- [ ] Sound effects / haptics (subtle, toggleable)
- [ ] Remove unused Madagascar/Antarctica photo entries (cleanup)
- [ ] Per-destination "fun fact of the day" rotation

### Needs Grant's input / accounts
- [ ] Supabase project (cloud sync) — create free project, share URL + anon key
- [ ] Turn on GitHub Pages (for a shareable URL + PWA/offline)

---

## 🆕 New tasks (added as they come up)
- [x] **Packing on its own screen** + collapsed packing-progress card on the Upcoming page
- [x] Replace Poppie poses with transparent versions + use her bigger (hero + every destination hero)
- [x] **Rabat is a DIRECT flight from Dublin** — Getting there now shows nonstop ~3h45 ✈️
