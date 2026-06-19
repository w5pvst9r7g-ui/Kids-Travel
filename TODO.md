# 🐱 Poppy's Atlas — Ideas & Improvements Tracker

A living checklist so nothing gets lost. **When we get sidetracked by a new request, add it here and tick things off as they ship.**

Last updated: 2026-06-09

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
- [x] Profile login (Jean-Luc / Hailey, default PIN 1985) with per-profile data
- [x] **Change PIN** in Settings — set a new four-digit code once signed in (saved on device)
- [x] Kids pick their own avatar icon
- [x] **Per-user DOB filtering** (Jean-Luc 2016, Hailey 2019 — hide trips before they were born)

### Engagement
- [x] **💌 Mail** — message a fellow explorer: text, emoji quick-bar + full picker, and voice notes (🎙️ up to 30s); chat bubbles, unread badge, per-chat clear
- [x] **Postcards** — cross-device delivery with no backend: Send shares a link (text/emoji) or file (voice) via the device share sheet; tapping/opening it imports into the other device's Mail (validated, deduped); also rides Cloud sync
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
- [x] **First-class design pass (verified with real headless-browser screenshots)** — self-hosted fonts (Baloo 2 + Nunito + Caveat woff2, offline, no FOUT, no third-party); fixed full-width "Open in Maps" bars → compact pills; replaced the repeated stale "Wishlist" card tag with **varied, colour-coded region tags**; elevated the login into a bespoke **"Explorer Pass"** (ticket border, hand-placed icon). Confirmed the boarding-pass / passport / countdown / badges / world pages read as custom, not templated.
- [x] **Photo overhaul — no generic placeholders, captions match images** — removed all random LoremFlickr/Picsum stock from destination photos (curated Wikimedia only → on-brand themed gradient as the only fallback); **matched every "what to see / fun" thumbnail to the right gallery photo by attraction name** (Eiffel Tower→Eiffel, Table Mountain→cableway…); **clamped galleries to their curated images** (no more caption-only gradient tiles) and **derived accurate captions from the image filenames** so every photo matches its caption; added **curated iconic photos for guide-less journal trips** (Dublin Ha'penny Bridge, San Francisco Golden Gate, Washington Capitol, Switzerland Matterhorn, Austria Hallstatt — found via web search); cat-story covers now fall back to a Poppy illustration, never random stock. Heroes were already curated to iconic shots. CI guards: no picsum anywhere; every guide-less trip has a curated photo.

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
- [x] Sound effects / haptics (subtle, toggleable) — generated tones + `navigator.vibrate` buzz on taps/quiz/badges (off by default)

### Needs Grant's input / accounts
- [ ] Supabase project (cloud sync) — create free project, share URL + anon key
- [ ] Turn on GitHub Pages (for a shareable URL + PWA/offline)

---

## 🆕 New tasks (added as they come up)
- [x] **Cat-spotting badges** — four new Explorer Badges tied to the Morocco Cat Counter: 😺 Cat Spotter (10), 😼 Purr-fessional (25), 🙀 Feline Fanatic (50), 👑 Sultan of Cats (100). They unlock live as you log cats (toast + confetti), with progress bars, and reconcile on reset.
- [x] **Current trip stays "Happening now"** — a trip is shown as the live current trip from its departure date until ~10 nights later: the countdown hero becomes "🧳 Happening now! · You're there!" and the Upcoming page gets a "Happening now ✈️" section, while it also counts as visited / badges. Future trips still countdown as normal.
- [x] **Austria & Switzerland tick the Snow badge** — the snowy winter Alps trips now count toward ❄️ Snow Seeker (alongside Iceland/Lapland & any Snow-region place)
- [x] **Trips auto-complete on their date** — once an upcoming trip's departure date arrives, it automatically flips to "visited" and counts toward Countries visited, badges, the journal & stats (e.g. Rabac/Morocco today). Future trips stay in Upcoming; done in-memory each session so it's always correct (verified: Rabat→visited + Desert Explorer badge, future trips untouched).
- [x] **🐱 Morocco Cat Counter** — a new tab on the Morocco pages (Rabat & Fez share one tally): tap the big "Spotted a cat!" button → pick 🐱 Kitten (2 pts) or 🐈 Big cat (1 pt) → pick a coat colour from 9 patterned swatches (black & white, ginger, tabby, calico, tortoiseshell…) → it logs the sighting (swatch chips), totals up cat points / big cats / kittens, with a tasty toast + emoji burst. Saved per explorer, night-mode styled, reset with the themed confirm.
- [x] **"Share this place" button** — every destination now has a Share button that fires the per-destination deep-link share (title / "Check out X!" text / #place link), making the new shareable links reachable from the guide itself
- [x] **Shareable destination deep-links** — every destination now has a bookmarkable URL (#place/paris); opening a shared link drops you straight into that guide after sign-in, the Share button on a destination shares its direct link ("Check out Paris on Poppy's Atlas!"), and the URL updates/clears as you navigate — all without disturbing the back-button stack (verified end-to-end + lightbox-within-deeplink + 0 console errors)
- [x] **Meaningful page titles** — the browser tab / history entry now reflects where you are ("Paris · Poppy's Atlas", "Badges · Poppy's Atlas"…) instead of a static title, so the back button and open tabs make sense
- [x] **Esc clears search; CI verified green** — pressing Escape in the Explore search now clears it (and resets the grid); also confirmed GitHub Actions CI is passing on main for all recent commits
- [x] **Modals animate in** — all dialog cards (settings, cloud, avatar, change-PIN, postcard, confirm) now gently scale + fade in with a soft spring instead of popping, with a fading backdrop (reduced-motion aware)
- [x] **On-brand confirm dialog** — replaced the jarring native confirm() for destructive actions (delete a trip, restore sample trips) with a themed Poppy dialog (🐾 + Cancel/coral action), focus-trapped, Esc=cancel, focus restored on close. Verified Cancel keeps / Confirm removes
- [x] **Packing completion celebration** — checking off the last item now celebrates with confetti, a win chime and a "🎒 All packed for {city} — ready for adventure!" toast (only at the moment of completion), matching the foodie/badge rewards
- [x] **Styled toasts replace native alerts** — journal import/export, restore and add-trip validation now use the app's own toast (success or "⚠️ Oops!" error) instead of jarring browser alert() popups; the one rare critical storage-failure warning stays a blocking alert
- [x] **Journal save feedback** — saving a trip now confirms with a toast ("🎉 …added to your journal!" for new, "✏️ Trip updated!" for edits); edits previously gave no feedback at all
- [x] **A11y: lightbox returns focus** — closing the photo lightbox (gallery, food, or spot) now returns keyboard focus to the exact image that opened it, instead of dropping focus to the page top
- [x] **A11y: dialogs return focus** — closing Settings, Cloud sync, the avatar picker or the Poppy pop-up now returns keyboard focus to the control that opened it (shared modalCapture/modalRestore), completing the modal focus-management pattern
- [x] **A11y: complete focus management** — the cat-story reader now also returns focus to its cover on close, so every overlay in the app (lightbox, story, settings, cloud, avatar, pop-up) restores focus to its trigger — verified across all of them
- [x] **Fix: error toasts looked like success** — failures (out of room, mic blocked, bad postcard file…) showed a green "✓ Nice!"; toasts now take an error variant ("⚠️ Oops!" in coral) so problems read as problems
- [x] **Friendlier map states** — the map loading/error/offline states are now clean centred layouts (big icon, clear heading, short explanation, ↻ Try again) instead of a cramped run-on sentence — what kids on restricted school/guest Wi‑Fi actually see
- [x] **Icon stat tiles** — the travel-stats tiles (below the Atlas Map) now each carry an emoji icon above the number (🌍 countries, 🧭 adventures, ✈️ km, 📅 coming up, 🍴 foods) for a more visual, scannable, colourful look
- [x] **Bahamas added as a visited country** — a 2025 hop from the Miami trip (Nassau), counts for both Jean-Luc & Hailey on the World page, badges and stats; curated Wikimedia photos added so the guide-less trip still shows imagery
- [x] **Tactile pill controls** — added uniform `:active` press feedback to all filter chips / sort tabs / food toggles, matching the buttons - [x] **Design review + nav polish** nav for a consistently responsive feel
- [x] **Design review + nav polish** — full desktop/mobile/320px UX pass (confirmed: 1160px max-width container, responsive padding, nav holds to 320px with no overflow, constrained text measures, cohesive palette). Refined the bottom-nav active tab: gradient depth, springy lift, enlarged icon + tactile press feedback (reduced-motion aware). *(Note: couldn't install a "UX UI Pro" MCP — MCP servers are configured in Claude Code settings, not installable from this sandbox — so the review used the headless-browser workflow.)*
- [x] **Fix: cloud sync / dialog modals wouldn't close** — the back-button history stack corrupted when one modal opened another (Settings → Cloud), leaving the ✕ dead; reverted dialog modals (settings, cloud, avatar, Poppy pop-up) to plain show/hide and kept the back-button stack only for full-screen content layers (lightbox, story, detail)
- [x] **🍽️ "Yummy food" tab on every destination** — a new guide section with the country's signature dishes, snacks, drinks and kid-pleasing sweet treats (croissants, churros, pavlova, Turkish delight, ice kacang…), each with a kid-friendly description and a colour-coded tag (Main / Snack / Sweet treat / Drink). Covers all 37 destinations via 18 cuisines, light + night mode.
- [x] **Real food photos** — each dish card is now photo-forward, pulling a high-resolution professional lead photo from Wikipedia (free, CORS, ~640px, sized for retina) with a per-dish article-title map for accuracy; falls back to the food emoji on the themed gradient if a photo can't load. Lazy-loaded + cached when the Food tab is opened. (Pipeline verified via stubbed fetch — real photos appear on the live site where Wikimedia hosts aren't blocked.)
- [x] **Food in the quiz** — the destination quiz now asks "Which yummy food comes from {country}?" (3 per place), with wrong answers drawn from other countries' dishes; carefully excludes the country's own dishes from the decoys so there's never a second correct answer (handles the Turkey/Türkiye duplicate and shared dishes like Pavlova/Baklava).
- [x] **Food photos cached to disk** — resolved Wikipedia photo URLs now persist in localStorage (capped at 300), so repeat visits resolve instantly with zero summary-API calls (verified: 6 fetches first visit → 0 after reload) and the images work offline once in the browser cache.
- [x] **Tap a dish photo to enlarge** — food photos now open big in a single-image lightbox (reuses the existing lightbox with a no-arrows "one" mode), with the dish name as caption, zoom-in cursor, full keyboard/ARIA, and back-button/✕/swipe to close.
- [x] **Foodie passport** — each dish has a "🍴 Tried it?" toggle; tick the ones you've tasted and a live "X tried" counter climbs. Saved per explorer, with two new badges: **Little Foodie** (try 5) and **Master Taster** (try 15), wired into the badge progress bars. (Verified: toggle, counter, badge unlock at 5, and persistence across reloads.)
- [x] **Search by food** — Explore search now also matches dish names, so a kid who loves churros, croissants, pavlova or baklava can type the food and find where to get it (verified: churros → the 3 Spanish spots, croissant → Paris, laksa → Singapore).
- [x] **Foodie stat + tasty feedback** — the Badges page now shows a "Foods tried" stat alongside countries/adventures/km; ticking a dish off pops a little burst of that dish's emoji (reuses a new generalised `emojiBurst`, reduced-motion aware).
- [x] **Richer printable passport** — the printout now also tallies **Badges earned** and **Foods tried** (when any), so the keepsake reflects the full collection, not just trips/km.
- [x] **Auto dark mode** — night mode now follows the device's `prefers-color-scheme` for first-time visitors (and live-updates if they flip their system theme), until they explicitly tap the 🌙/☀️ toggle — at which point their choice is saved and wins. Verified all four cases (dark/light device, toggle, reload).
- [x] **Every photo enlarges** — the "What to see" and "Fun stuff to do" spot photos are now tappable to open big in the single-image lightbox (keyboard + ARIA + zoom-in cursor), so all photos across the app (gallery, food, spots) behave consistently.
- [x] **Badge filter** — the Badges page now has All / ✅ Earned / 🔒 To earn tabs (with live counts) so kids can focus on what they've collected or what's left; the "closest badge to earn" nudge hides under the Earned view. Friendly empty states for each.
- [x] **Continent drill-down on the World page** — tap a collected continent in the "Continents collected" strip to filter your explored countries to just that continent (heading updates + ✕ Show all); tap again to clear. Verified Europe → its 9 countries, toggle restores all 16.
- [x] **⭐ Poppy's favourite dish** — each country's signature dish (Tagine, Paella, Pastel de nata, Cheeseburger…) now wears a "Poppy's favourite" ribbon on the Food tab, giving the mascot personality and pointing kids to the must-try.
- [x] **"Tasted everything" reward** — tick off every dish from a country and the Food tab celebrates with a "🏅 You've tasted every dish in {country}!" banner + confetti + a win chime. Mobile QA pass found no regressions across food/badges screens.
- [x] **Smarter "Surprise me"** — the 🎲 button now prefers a place the kid hasn't visited or booked yet (better for discovery), only falling back to anywhere once they've seen them all.
- [x] **Food test coverage** — the CI smoke suite now guards the food feature: every destination's country has a dish list, every dish is a valid `[emoji, name, description, tag]` tuple, every cuisine includes a sweet treat, and the Food tab stays registered — so future edits can't silently break it.
- [x] **Food photo loading shimmer** — while each dish's Wikipedia photo is being fetched, its frame shows a subtle shimmer (removed on load or failure, reduced-motion aware) for a more polished "loading" feel than the emoji just sitting there.
- [x] **"Tasty fact" per cuisine** — the Food tab now opens with a fun, true food fact for that country ("The French eat ~30,000 tonnes of snails a year!", "Turkish ice cream is so stretchy you can eat it with a knife and fork!") in a handwritten note. All 18 cuisines covered + a CI check guards it.
- [x] Cat stories: cover (name) on the tab → opens a full-screen page-turner (5–7 pages, story arc) with the cat narrating in a speech bubble
- [x] **Local cat’s tale** tab on every destination (37 tales) + 5-chapter series for the 3 upcoming trips

### 🔁 Continuous-improvement loop (10-min ticks)
- [x] **Realistic airliner** replaces the paper plane everywhere (swept wings, engines, twin contrails puffing into clouds); cloudy-sky splash/login backdrops; map plane aligned to the flight arc heading
- [x] **Tap feedback on nav** — every bottom-tab press now gives a gentle tap chime + haptic buzz
- [x] **Mobile "Did you know?"** — the hero fun-fact (hidden <620px) now surfaces below the hero in the handwritten font on phones
- [x] **Quiz answer reveal** — after each question, an inline feedback line: green "Nailed it!" praise when right, coral "Not quite — the answer is **X**" when wrong (both the destination quiz and the language mini-quiz) so kids learn from every answer
- [x] **Journey timeline** — the Journal now has a 🗂️ Cards / 🧭 Timeline toggle; Timeline lays every trip on a dashed flight-path line grouped by year (newest first, "Still to come" up top), each stop showing the flag, city, the explorer's age that year ("Jean-Luc was 7"), star rating & an Upcoming badge — tap any stop to open its guide
- [x] **Boarding-pass fun fact** — each "Getting there" pass now adds a handwritten kid-friendly line derived from the real flight time + distance: "long enough to watch about 10 movies 🍿, and you'll fly 8,800 km — about 22% of the way around the whole planet 🌍"
- [x] **Smooth photo fade-in** — every framed photo (heroes, cards, galleries, spot thumbnails, cat covers) now gently fades in as it decodes instead of popping, with a graceful fallback to the on-brand gradient if it never loads (reduced-motion users skip the fade)
- [x] **Section-tab scroll affordance** — the 8 guide tabs no longer look "cut off": replaced an always-on right-edge fade with smart left/right fade hints that appear only when there are more tabs to scroll to in that direction (toggled on scroll/resize)
- [x] **Swipe gestures** — the photo lightbox and the cat-story reader now respond to left/right swipes on touch devices (kids swipe naturally), alongside the existing arrows/buttons; vertical scrolls are ignored so it never hijacks scrolling
- [x] **Tappable "Did you know?"** — the hero fact card (desktop & mobile) is now a button: tap it for a fresh random fact (with a soft pop + pop sound), and it restarts the gentle auto-rotate; labelled "tap! 🔀" with a hover lift and full keyboard/ARIA support
- [x] **Back-button support (full)** — the Android / PWA back gesture (and browser Back) now steps back through the app instead of exiting: it closes the photo lightbox, cat-story reader, and every modal (settings, cloud sync, avatar picker, Poppy pop-up), and from a destination it returns to the list you came from (Explore *or* the World page), not out of the app. In-app ✕/Esc/back buttons all route through one history stack — with a re-entrancy guard so the "close everything on Esc" handler and dual keydown listeners only pop once. Navigating away from a destination via the tab bar is handled safely (guarded no-op, never a wrong jump). Verified across detail/modal/Esc/nav-away paths with simulated back navigation.
- [x] **Smarter Explore search** — search now also matches by **region** (beach/city/snow/wildlife) and **continent** (e.g. "europe" → 14 places, "africa", "asia"), not just name/country/tagline; shows a live "N places match …" count and an updated placeholder so kids can discover by theme or part of the world
- [x] **Pack for any upcoming trip** — the Packing screen previously only showed the *next* trip; it now has a trip-picker row (each chip shows the city + live x/y progress, "✓ packed" when done) so kids can switch between all upcoming adventures, each with its own region-aware checklist
- [x] **Back-to-top button** — a floating ↑ button fades in after you scroll down a long page (destination guides, Explore, World, Journal) and whisks you back to the top; sits above the mobile tab bar, night-mode styled, reduced-motion aware
- [x] **Night-mode audit** — confirmed all of this session's new components (boarding-pass fun fact, journey timeline, packing trip-picker, quiz reveal, search count) render correctly in dark theme
- [x] **Faster hero loads (LCP)** — the big above-the-fold hero photos (Explore spotlight + destination detail) now load `eager` with `fetchpriority="high"`, while the dozens of card/gallery thumbnails stay lazy — so the largest image paints sooner without eagerly pulling everything
- [x] **Content + a11y audit** — confirmed all 37 destinations have ≥4 attractions / kids spots / photos plus highlights, tips, phrases and a local-cat tale; badge unlocks already celebrate (confetti + toast + sound); "Surprise me" slot-machine reel is delightful
- [x] **"Hear it" pronunciation** — every phrase on the *Talk like a local* tab now has a 🔊 button that speaks the word aloud in the right language using the device's built-in voice (free, offline-capable, 12 languages mapped to BCP-47). Pulses while speaking; gracefully hidden if the browser has no speech synthesis. A real language-learning upgrade beyond the phonetic guide.
- [x] **Onboarding now covers all 5 tabs** — added a 📔 Journal line ("record every trip, earn passport stamps and see your journey timeline") so first-run kids learn about the whole app, not just 4 of 5 sections
- [x] **Hear-it in the phrase game too** — answering a *Talk like a local* phrase-game question now shows a 🔊 button on the "say it like" line to hear the correct word aloud (no console errors found in a full cross-view health check)
- [ ] *(next)* more polish
- [x] Incorporate cats into badges: Story Sniffer / Cat Whisperer / Tale Master (read N tales)
- [x] Easter egg: poke any Poppy → full-screen grumpy Poppy with a funny insult (pops in)
- [x] **Packing on its own screen** + collapsed packing-progress card on the Upcoming page
- [x] Replace Poppy poses with transparent versions + use her bigger (hero + every destination hero)
- [x] **Rabat is a DIRECT flight from Dublin** — Getting there now shows nonstop ~3h45 ✈️
