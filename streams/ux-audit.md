# Globie's Atlas — UX / Accessibility / Mobile / Robustness Audit

Audited file: `/home/user/Kids-Travel/index.html` (single self-contained file, 1325 lines, vanilla HTML/CSS/JS + Leaflet via CDN + localStorage).
All contrast ratios below were computed against the actual palette in `:root` (WCAG 2.x relative-luminance formula). Line numbers refer to the audited file.

---

## Executive summary — top 5 fixes

1. **P0 — No visible keyboard focus anywhere; core controls are not keyboard/AT operable.** The destination cards, filter chips, detail tabs, the star-rating picker and the brand link are clickable `div`/`article`/`span` elements (or buttons with `outline:none` implied by the design) with no `:focus-visible` styling, no `tabindex`, no `role`, and no keyboard handlers. A keyboard or switch user literally cannot open a destination or set a rating. Fix: make cards/chips/stars real buttons (or add `role`/`tabindex`/Enter+Space handlers) and add a global `:focus-visible` ring. (See A11Y-1, A11Y-2, A11Y-3.)

2. **P0 — Text-on-color contrast fails WCAG AA across the brand palette.** White on teal `#13B5AC` = **2.55:1**, white on coral `#FF8366` (active detail tab) = **2.42:1**, `--muted #939CB2` body text = **2.75:1**, `--teal-d` links = **3.55:1**. These are the primary nav-active state, the active tab, all hint/caption/"reviews" text, and every link — all below the 4.5:1 (or 3:1 large) threshold. Fix: darken the active/link tokens and the muted token (concrete hex values in A11Y-4).

3. **P1 — iOS standalone/PWA + safe-area + 100vh are only half-handled.** `apple-mobile-web-app-status-bar-style` is missing, the sticky header and `main` ignore `env(safe-area-inset-top/left/right)` (content slides under the notch in landscape), and `#map`/`.hero` use raw `vh` which jumps under the iOS Safari toolbar. The manifest also has only one SVG icon (`sizes:"any"`) and `start_url:"."` resolved from a `blob:`/`file:` context, which is unreliable for "Add to Home Screen". Fix in MOBILE-1..4.

4. **P1 — Tap targets and the bottom tab bar are below the 44–48px minimum and overlap the sticky section-nav.** Tab-bar buttons (`padding:7px 2px`) and the small Edit/Delete entry buttons are ~30–34px tall; the detail `.snav` sticks at `top:66px` but the header is taller than 66px on mobile, so the sticky tab strip overlaps/hides under the header. Fix in MOBILE-5, MOBILE-6.

5. **P1 — User notes are the one XSS-adjacent surface and broken images are common on flaky connections.** Notes are escaped for `<` only (`note.replace(/</g,'&lt;')`) — `"` and `>` and attribute contexts are fine here because notes render as text content, but the **custom city / country / emoji fields are interpolated raw into `innerHTML`** in the map popup, passport card and detail with no escaping at all (e.g. `t.city`, `t.country`, `t.emoji`). A city named `<img src=x onerror=...>` executes. Plus every card fires a live `loremflickr` network request with no real fallback when offline. Fix in ROBUST-1, ROBUST-2.

---

## ACCESSIBILITY

### A11Y-1 (P0) — Clickable cards/chips are not keyboard-operable
**Where:** `renderGrid()` line ~1064 (`<article class="dcard" onclick="openDest(...)">`), `.featured` button is fine, but `renderFilters()` chips are `<button>` (OK), and the brand link uses `onclick` returning false (line 379). The destination **cards** and gallery are the problem: `<article onclick>` has no `tabindex`, no `role="button"`, no key handler.
**Why:** Keyboard, screen-reader and switch users cannot open any destination — the primary action of the Explore view is unreachable. WCAG 2.1.1 (Keyboard), 4.1.2 (Name/Role/Value).
**Fix:** Render the card as a button-semantics element and add a key handler. Minimal change in `renderGrid()`:
```js
return `<article class="dcard" role="button" tabindex="0"
   aria-label="Explore ${d.name}, ${d.country}"
   onclick="openDest('${d.id}')"
   onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openDest('${d.id}')}">
```
Add to CSS so Space doesn't scroll oddly and focus is obvious (see A11Y-4 ring).

### A11Y-2 (P0) — Star-rating picker has no role, no labels, no keyboard support
**Where:** `buildRatePick()` line ~1214 — `<span data-v="${v}">` with a click listener only. `setRating()` line ~1219.
**Why:** This is a form control (rating) built from non-focusable `<span>`s with no `role`, no `aria-checked`, no name. Keyboard users can't rate; screen readers announce nothing. WCAG 4.1.2, 2.1.1.
**Fix:** Use a radiogroup pattern:
```js
function buildRatePick(){
  const r=document.getElementById('ratepick');
  r.setAttribute('role','radiogroup');
  r.setAttribute('aria-label','How fun was it, 1 to 5 stars');
  r.innerHTML=[1,2,3,4,5].map(v=>
    `<span role="radio" tabindex="${v===1?0:-1}" aria-checked="false"
       aria-label="${v} star${v>1?'s':''}" data-v="${v}">${starSVG(false)}</span>`).join('');
  r.querySelectorAll('span').forEach(s=>{
    s.addEventListener('click',()=>setRating(+s.dataset.v));
    s.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();setRating(+s.dataset.v);}
      if(e.key==='ArrowRight'||e.key==='ArrowUp'){e.preventDefault();setRating(Math.min(5,formRating+1));document.querySelector(`#ratepick [data-v="${formRating}"]`).focus();}
      if(e.key==='ArrowLeft'||e.key==='ArrowDown'){e.preventDefault();setRating(Math.max(1,formRating-1));document.querySelector(`#ratepick [data-v="${formRating}"]`).focus();}
    });
  });
}
function setRating(n){
  formRating=n;
  document.querySelectorAll('#ratepick span').forEach(s=>{
    const v=+s.dataset.v;
    s.innerHTML=starSVG(v<=n);
    s.setAttribute('aria-checked', v===n?'true':'false');
    s.tabIndex = (v===n||(n===0&&v===1)) ? 0 : -1;
  });
}
```

### A11Y-3 (P0) — Detail tabs are not a tab widget; no ARIA, no keyboard
**Where:** `openDest()` line ~1090 (`#dtabs` buttons) and the panel switch listener ~1124. They are `<button>`s (focusable, good) but carry no `role="tab"`, `aria-selected`, `aria-controls`, and arrow-key navigation; panels have no `role="tabpanel"`/`aria-labelledby`.
**Why:** Screen readers announce 5 generic buttons with no relationship to the panels; the expected Left/Right arrow tab behaviour is absent. WCAG 4.1.2; ARIA Authoring Practices "Tabs".
**Fix:** When building tabs/panels:
```js
document.getElementById('dtabs').setAttribute('role','tablist');
document.getElementById('dtabs').innerHTML=tabs.map((t,i)=>
  `<button role="tab" id="tab-${t[0]}" aria-controls="panel-${t[0]}"
     aria-selected="${i===0}" tabindex="${i===0?0:-1}"
     class="${i===0?'active':''}" data-p="${t[0]}">${t[1]}</button>`).join('');
// panels:
`<div class="panel ${i===0?'active':''}" id="panel-${t[0]}"
    role="tabpanel" aria-labelledby="tab-${t[0]}" tabindex="0" ${i!==0?'hidden':''}>...`
```
In the click handler also set `aria-selected`/`tabindex`/`hidden`, and add `keydown` on the tablist for ArrowLeft/ArrowRight to move focus and activate.

### A11Y-4 (P0) — Colour contrast failures (verified) + no focus-visible ring
**Where:** `:root` tokens (lines 25–27) and their use sites.
**Verified ratios (need ≥4.5:1 normal text, ≥3:1 large/UI):**
| Use | Pair | Ratio | Verdict |
|---|---|---|---|
| nav.top active, maplink, hero "who" pill bg | white on `--teal #13B5AC` | **2.55** | fail |
| `.snav button.active` (detail tab) | white on `--coral #FF8366` | **2.42** | fail |
| `--muted #939CB2` (hints, captions, "x reviews", footnotes, empty state) | on white | **2.75** | fail |
| links `a{color:--teal-d}` , `.dcard .foot`, `.btn-text` | `--teal-d #0E9890` on white | **3.55** | fail for normal text |
| `.eyebrow` coral-d | `#F46A4B` on white | **3.0** | fail for small text |
**Why:** These are pervasive (every link, every hint, the active nav and active tab). WCAG 1.4.3 / 1.4.11.
**Fix:** Darken the accent tokens; the kid aesthetic is preserved because these are accents, not large fills. All replacements below were contrast-verified:
```css
:root{
  --teal-d:#0A7F78;   /* links & teal text: 4.86:1 on white; white-on-teal-d 4.86:1 */
  --muted:#5E6480;    /* hints/captions/reviews/footnotes: 5.82:1 on white */
  --coral-d:#D1492C;  /* eyebrows / active tab bg: 4.47:1 on white (round to AA) */
}
```
For white-on-fill states, darken the *background* of the active state rather than the text (white-on-`--teal` was 2.55, white-on-`--coral` 2.42):
```css
nav.top button.active{background:var(--teal-d)}        /* white on #0A7F78 = 4.86:1 */
.snav button.active{background:var(--coral-d);border-color:var(--coral-d)} /* white on #D1492C = 4.47:1 */
.maplink{background:var(--teal-d);box-shadow:0 4px 0 0 #075f59}
.hero .who span{color:var(--teal-d)}                   /* pill text 4.86:1 */
```
**Focus ring (single global rule — covers A11Y-1/2/3 too):**
```css
:focus-visible{outline:3px solid var(--grape);outline-offset:2px;border-radius:6px}
.dcard:focus-visible{outline-offset:-3px}
/* keep existing :focus on inputs but also: */
a:focus-visible,button:focus-visible,[role=button]:focus-visible,[role=tab]:focus-visible,[role=radio]:focus-visible{
  outline:3px solid var(--grape);outline-offset:2px}
```
`--grape #7C6CF4` on white is 3.6:1 — fine as a non-text focus indicator (WCAG 1.4.11 needs 3:1 for the ring against adjacent colour).

### A11Y-5 (P1) — Heading order / landmarks
**Where:** `<header class="site">` has no `role`/label; there is no `<h1>` on the Map (`#map-view`) and Journal (`#trips`) views — they start at `<h2>`; the Explore hero `<h1>` (line 414) and detail `<h1>` (line 208/1086) are both present, so when SPA-switching views there are intermittently zero or two `<h1>`s in the a11y tree (hidden views are still in DOM via `display:none`, which removes them from AT — acceptable, but the Map/Journal views never get an `h1`).
**Why:** Each "page" view should expose one top-level heading; landmark labelling helps AT navigation. WCAG 1.3.1, 2.4.6.
**Fix:** Add `role="banner"` is implicit on `<header>` only if it's a top-level header (it is — OK). Wrap nav in label, and promote the per-view section heads:
```html
<nav class="top" aria-label="Primary">
<nav class="tabbar" aria-label="Primary">
```
Give each view an h1 (visually styled as today's h2) or add `aria-labelledby` to each `<section class="view">` pointing at its heading. Simplest: change the Map/Journal `<h2>` to `<h1>` and adjust `.section-head h1{font-size:...}` to match.

### A11Y-6 (P1) — Icon-only buttons lack accessible names
**Where:** Tab-bar buttons *do* have visible text labels (good). But: the Edit/Delete entry buttons (`renderPassport()` line ~1237) have text ("Edit"/"Delete") — OK. The **back** button (line 435) has visible "All places" — OK. The real gaps: the `aria-hidden="true"` brand SVG is fine; the **map markers/popups** and the decorative stickers are fine. Remaining: `.btn-yellow`/`.btn-teal` hero buttons use emoji-in-text (announced as "globe showing Europe-Africa Choose a place") — acceptable. **`<select id="fDest">` and number inputs have `<label for>` — good.** The one true miss: the **filter chips** include an emoji glyph followed by text inside the button; screen readers will read the emoji name. Low impact.
**Fix (optional):** wrap chip emoji in `<span aria-hidden="true">`:
```js
`<button class="chip ${r===activeRegion?'active':''}" data-r="${r}">
   <span aria-hidden="true">${regionEmoji[r]||''}</span> ${r}</button>`
```
Do the same for emoji inside the hero CTA buttons and `.btn` save button.

### A11Y-7 (P1) — Images: hero/decorative alt and meaningful alt
**Where:** `pimg()` line 511 sets `alt="${alt}"` where alt is sometimes the destination name (good), sometimes the photo caption (good), but the **explore hero** image (line 408) is `alt=""` (correctly decorative) while the **dcard, gallery, entry** images carry alt — OK. Problem: gallery images get `alt=p[1]` *and* a visible `<figcaption>` with the same text → duplicated announcement. And every `frame` also contains a `.sticker` emoji that is not `aria-hidden`.
**Why:** Redundant/duplicate alt is verbose; unlabelled emoji stickers add noise. WCAG 1.1.1.
**Fix:** For gallery figures, set `alt=""` since the caption already describes them:
```js
const gallery=d.photos.map((p,i)=>`<figure ...><div class="frame" ...>${sticker(d.emoji)}${pimg(p[0],p[2],700,560,'')}</div><figcaption>${p[1]}</figcaption></figure>`)
```
And mark stickers decorative in `sticker()`:
```js
function sticker(emoji){return `<span class="sticker" aria-hidden="true">${emoji||'🌍'}</span>`;}
```

### A11Y-8 (P1) — Map is invisible to screen readers
**Where:** `#map` div (line 453) / `initMap()` line 1152. Leaflet builds an interactive raster map but there is no text alternative summarising the trips.
**Why:** AT users get an unlabeled application region with draggable tiles and no equivalent of the journey data. WCAG 1.1.1.
**Fix:** Label the region and provide a visually-hidden text summary that mirrors the stats/markers:
```html
<div id="map" role="application" aria-label="World map of your trips. A text summary follows."></div>
<div id="mapSummary" class="sr-only" aria-live="polite"></div>
```
```css
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
```
In `initMap()` after building markers:
```js
document.getElementById('mapSummary').textContent =
  'Home base Dublin. ' + trips.map(t=>`${t.city}, ${t.country||''}, ${t.planned?'coming up':t.year}`).join('. ') + '.';
```

### A11Y-9 (P2) — Reduced-motion coverage gaps
**Where:** `@media(prefers-reduced-motion:reduce)` exists for `.bob`, `.reveal`, `.plane`, and `drawArc()`/`confetti()` are JS-gated by `reduceMotion`. **Not covered:** `.dcard:hover{transform...rotate}`, `.entry:hover` rotate, the `@keyframes fadeup` on `.panel.active` (line 221), the `@keyframes fall` confetti class (CSS only fires when JS adds it — JS-gated, OK), the `frame img` scale-on-hover transition, and `.hero` countdown none. The fadeup panel animation runs even with reduced-motion on.
**Why:** Vestibular-sensitive users still get motion on tab switches and hovers. WCAG 2.3.3 (AAA, but cheap to honour).
**Fix:** Broaden the media query:
```css
@media(prefers-reduced-motion:reduce){
  .panel.active{animation:none}
  .dcard:hover,.entry:hover{transform:none}
  .dcard:hover .frame img,.frame img{transition:none}
  *{scroll-behavior:auto !important}
}
```
Also note `window.scrollTo({behavior:'smooth'})` in `showView()` (line 1015) and the hero "Choose a place" smooth scroll ignore reduced-motion; gate them:
```js
const scrollBehavior = reduceMotion ? 'auto' : 'smooth';
window.scrollTo({top:0,behavior:scrollBehavior});
```

---

## MOBILE / iOS

### MOBILE-1 (P1) — Safe-area insets only applied to the tab bar
**Where:** Only `.tabbar` uses `env(safe-area-inset-bottom)` (line 100). The sticky `.site` header (line 82), `main` (line 108) and full-bleed `.hero`/`.dhero` ignore `safe-area-inset-top/left/right`. With `viewport-fit=cover` (line 5) in landscape on a notched iPhone, the brand logo and nav slide under the notch and edge content is clipped by the rounded corners.
**Why:** Content obscured by the notch/curved corners; this is the direct consequence of opting into `viewport-fit=cover`.
**Fix:**
```css
.site .wrap{padding-left:max(var(--pad),env(safe-area-inset-left));
            padding-right:max(var(--pad),env(safe-area-inset-right))}
.site{padding-top:env(safe-area-inset-top)}
main{padding-left:max(var(--pad),env(safe-area-inset-left));
     padding-right:max(var(--pad),env(safe-area-inset-right))}
@media(max-width:760px){ body{padding-bottom:calc(66px + env(safe-area-inset-bottom))} }
```

### MOBILE-2 (P1) — iOS standalone status bar style missing
**Where:** `<head>` lines 7–9 have `theme-color`, `apple-mobile-web-app-capable`, `apple-mobile-web-app-title`, but **no** `apple-mobile-web-app-status-bar-style`.
**Why:** Without it, the iOS standalone status bar defaults to `default` (opaque white) which is fine, but combined with `viewport-fit=cover` you usually want `black-translucent` so the status bar overlays your safe-area-padded header. As-is the top area can look inconsistent.
**Fix:**
```html
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="mobile-web-app-capable" content="yes" />  <!-- modern, non-deprecated alias -->
```
(`apple-mobile-web-app-capable` is deprecated in favour of `mobile-web-app-capable`; keep both.)

### MOBILE-3 (P1) — 100vh / dynamic viewport on hero and map
**Where:** `.hero{min-height:clamp(330px,50vh,470px)}` (line 132), `.dhero{min-height:clamp(290px,44vh,420px)}` (line 200), `#map{height:min(60vh,560px)}` (line 287).
**Why:** On iOS Safari `vh` is computed against the *largest* (toolbar-hidden) viewport, so when the toolbar is shown the map/hero is taller than the visible area and the bottom is hidden until you scroll; resizing as the toolbar collapses causes jumps. Leaflet's map height also benefits from a stable value.
**Fix:** Use `dvh` with a `vh` fallback:
```css
.hero{min-height:clamp(330px,50vh,470px);min-height:clamp(330px,50dvh,470px)}
.dhero{min-height:clamp(290px,44vh,420px);min-height:clamp(290px,44dvh,420px)}
#map{height:min(60vh,560px);height:min(60dvh,560px)}
.maperr{height:min(60vh,560px);height:min(60dvh,560px)}
```

### MOBILE-4 (P1) — Manifest correctness for Add-to-Home-Screen
**Where:** PWA IIFE lines 1307–1313. Manifest built as a `blob:` URL with `start_url:"."`, a single icon `sizes:"any" type:"image/svg+xml"`, no `purpose:"maskable"`, no 192/512 PNG.
**Why:** (a) `start_url:"."` resolves relative to the **blob** document base on some engines, not the page — unreliable; (b) Android/Chrome installability wants at least a 192px and 512px icon and many launchers won't use an SVG; (c) iOS ignores the web manifest for the home-screen icon and uses `apple-touch-icon` — which here is a `data:` SVG, and **iOS historically does not accept SVG apple-touch-icons**, so the home-screen icon may fall back to a screenshot.
**Fix:**
- Set an explicit absolute `start_url`:
```js
const m={name:"Globie's Atlas",short_name:"Globie",
  start_url:location.pathname,scope:location.pathname.replace(/[^/]+$/,''),
  display:"standalone",background_color:"#FFFCF5",theme_color:"#13B5AC",
  icons:[{src:uri,sizes:"512x512",type:"image/svg+xml",purpose:"any maskable"}]};
```
- Provide a raster `apple-touch-icon` (180×180 PNG data-URI) so the iOS home-screen icon is reliable. Easiest: rasterise the SVG to a 180px PNG offline and inline it; or accept the limitation and document it. Minimum: keep the SVG but add `sizes="180x180"` on the link (line 10):
```html
<link id="appicon" rel="apple-touch-icon" sizes="180x180" href="" />
```
(Still note iOS-SVG caveat — a PNG is the robust answer.)

### MOBILE-5 (P1) — Tap targets below 44×44 CSS px
**Where:** `.tabbar button{padding:7px 2px;font-size:.7rem}` with a 24px icon → ~38px tall (line 101–103); `.entry .acts button{padding:8px}` → ~30–34px (line 355); `.snav button{padding:9px 16px}` → ~36px; `.chip{padding:9px 17px}` → ~36px; `.back{padding:9px 16px}`; `.btn-text{padding:9px 6px}`.
**Why:** Apple HIG and WCAG 2.5.5/2.5.8 want ≥44px (AAA) / ≥24px (AA) touch targets; sub-40px controls cause mis-taps for kids especially.
**Fix:** Enforce a min height on interactive controls:
```css
.tabbar button{min-height:48px;padding-top:8px}
.entry .acts button{min-height:44px}
.snav button,.chip,.back{min-height:44px}
nav.top button{min-height:44px}
.ratepick svg{width:38px;height:38px;padding:3px}  /* current 32px + spacing → ~44px hit area */
```

### MOBILE-6 (P1) — Sticky section-nav overlaps the header
**Where:** `.snav{position:sticky;top:66px}` (line 212). The header `.site` height on mobile is the brand mark (46px) + padding (11+11) + border ≈ **70–80px**, not 66px. The detail tab strip therefore sticks behind/under the header, and panel anchors scroll under it.
**Why:** Tabs become partly hidden/overlapped when scrolling the detail view on phones.
**Fix:** Drive both from a CSS variable measured to the real header height:
```css
:root{--header-h:74px}
@media(max-width:760px){:root{--header-h:70px}}
.snav{top:calc(var(--header-h) + env(safe-area-inset-top))}
```
Or measure at runtime:
```js
function syncHeader(){document.documentElement.style.setProperty('--header-h',
  document.querySelector('.site').offsetHeight+'px');}
addEventListener('resize',syncHeader); syncHeader();
```

### MOBILE-7 (P2) — Leaflet pinch/scroll conflict & overscroll
**Where:** `initMap()` line 1156 sets `scrollWheelZoom:false` (good for desktop trackpads) but leaves `dragging`/`touchZoom` on. On a phone, one-finger drag on the map traps the page scroll — a known "scroll trap" since the map is tall (60vh).
**Why:** Users can get stuck scrolling inside the map and can't scroll past it.
**Fix:** Require two fingers to pan on touch, and stop body overscroll/rubber-banding:
```js
map=L.map('map',{worldCopyJump:true,minZoom:1,scrollWheelZoom:false,
  dragging:!L.Browser.mobile, tap:false}).setView([32,8],2);
if(L.Browser.mobile){ map.dragging.disable();
  map.once('focus',()=>map.scrollWheelZoom.enable());
}
```
A friendlier pattern: enable `map.dragging` only after a tap on the map (Leaflet.GestureHandling does this; without the plugin, the two-finger hint via `map.touchZoom` stays on). Also add:
```css
body{overscroll-behavior-y:none}
#map{touch-action:pan-x pan-y}
```

### MOBILE-8 (P2) — Images don't degrade on flaky connections
**Where:** `pimg()` line 511 — every card/gallery/popup is a live `loremflickr.com` request (`onerror` only sets `.failed` → opacity:0, revealing the gradient + sticker, which is a decent fallback). But: there's no `width`/`height` attribute → layout shift; `loading="lazy"` is set (good) but offscreen detail galleries still preload when opened; and the **explore hero** image (line 408) is **not** lazy and not sized.
**Why:** On 3G/offline the page shows many spinning requests and CLS as images pop in; the hero is the largest and blocks LCP.
**Fix:** The CSS already reserves space via `aspect-ratio` on `.dcard .frame` and `.entry .pic`, so CLS is limited — good. Add explicit dimensions and `decoding="async"` in `pimg()` and keep the hero decorative + sized:
```js
const pimg=(kw,lock,w,h,alt='')=>`<img loading="lazy" decoding="async" width="${w}" height="${h}" alt="${alt}" src="${flick(kw,lock,w,h)}" onerror="this.classList.add('failed')">`;
```
The gradient+emoji fallback on `.failed` is genuinely good — call it out as a strength. Consider `fetchpriority="low"` on gallery images.

---

## UX FLOWS

### UX-1 (P1) — "Add to journal" custom flow can silently create an unmappable trip
**Where:** `readForm()` lines 1250–1255. For `__custom`, if the user leaves lat/lng blank, `parseFloat('')||null` → `null`, the trip saves but `initMap()` skips it (`if(t.lat==null||t.lng==null) return;` line 1166) and stats exclude its distance. The user gets confetti and a journal card but **no map pin**, with no explanation.
**Why:** Silent dead-end: "I added it but it's not on my map."
**Fix:** Either require coordinates or tell the user. Minimal honest fix in `readForm()`:
```js
if(sel==='__custom'){
  const city=document.getElementById('fCity').value.trim();
  if(!city){alert('Please type a place name 🙂');return null;}
  const lat=parseFloat(document.getElementById('fLat').value);
  const lng=parseFloat(document.getElementById('fLng').value);
  if((document.getElementById('fLat').value||document.getElementById('fLng').value)
     && (isNaN(lat)||isNaN(lng))){alert('Add both latitude and longitude (or leave both blank).');return null;}
  return {destId:null,city,country:'',flag:'',emoji:document.getElementById('fEmoji').value.trim()||'📍',
    lat:isNaN(lat)?null:lat,lng:isNaN(lng)?null:lng,year,planned,rating:formRating,note};
}
```
And add a hint near the lat/lng fields: "Add coordinates to see it on your map (optional)."

### UX-2 (P1) — Detail tabs are not discoverable as scrollable on mobile
**Where:** `.snav` (line 212) is `overflow-x:auto` with hidden scrollbars and 5 tabs that overflow ~360px viewports. There's no fade/affordance, so kids may not realise "Best for kids" exists off-screen.
**Why:** Key content (ratings, Maps links — arguably the most useful tab) is hidden with no visual cue.
**Fix:** Add a right-edge fade and ensure the active tab scrolls into view:
```css
.snav{position:relative;-webkit-mask-image:linear-gradient(90deg,#000 88%,transparent);
      mask-image:linear-gradient(90deg,#000 88%,transparent)}
```
```js
tb.addEventListener('click',()=>{ /* ...existing... */
  tb.scrollIntoView({inline:'center',block:'nearest',behavior:reduceMotion?'auto':'smooth'});
});
```

### UX-3 (P2) — No empty state for the Map view; first-run map can be confusing
**Where:** `#map-view` always renders. With seed data there are pins, but if a user deletes all trips, the map shows only the Dublin home pin with no guidance, and stats read 0.
**Why:** Mild dead-end; the Journal has a nice empty state, the Map doesn't.
**Fix:** In `initMap()` after building, if only home exists, drop a popup/notice:
```js
if(bounds.length===1){
  L.marker([HOME.lat,HOME.lng]).addTo(layer); // already there
  document.getElementById('mapSummary')?.insertAdjacentText('beforeend',' No trips yet — add one in the Journal.');
}
```
Or show a banner above the legend: "Add a trip in your Journal to chart your first flight path!"

### UX-4 (P2) — Edit doesn't scroll the form into view on mobile reliably / no focus move
**Where:** `editTrip()` line 1277 does `scrollIntoView` on `.formcard` but focus stays on the (now re-rendered) Edit button which may be removed; on mobile the sticky form is below the list, so the user is moved but the first field isn't focused.
**Why:** Minor disorientation; AT users aren't told edit mode started.
**Fix:**
```js
showView('trips');
const fc=document.querySelector('.formcard');
fc.scrollIntoView({behavior:reduceMotion?'auto':'smooth'});
document.getElementById('fYear').focus({preventScroll:true});
// announce:
formTitle.setAttribute('role','status'); // or aria-live region
```

### UX-5 (P2) — Delete uses native confirm(); fine, but no undo and confetti only on add
**Where:** `delTrip()` line 1279 `confirm(...)`. Acceptable. Note seed trips can be deleted with no way to restore them (no reset).
**Fix (optional):** Add a "Reset to sample trips" affordance in the Journal footer for recoverability, or a brief toast with Undo. Low priority for a personal app.

### UX-6 (P2) — Navigation labels differ between desktop and mobile
**Where:** Desktop nav says "Explore / Atlas Map / Travel Journal" (line 396–398); tab bar says "Explore / Map / Journal" (line 499–501). Minor inconsistency; both are clear. No action required, but unify wording for polish.

---

## ROBUSTNESS / PERF

### ROBUST-1 (P0) — Stored XSS via custom city/country/emoji fields
**Where:** Custom-trip fields are interpolated raw into `innerHTML` in three places:
- `renderPassport()` line ~1233: `<h4>${t.city}</h4>`, `<div class="c">${t.flag||''} ${t.country||''}</div>`
- `initMap()` popup line ~1174: `<div class="ttl">${t.city}</div>`, `${t.country||''}`
- emoji: `sticker(t.emoji||...)` → `${emoji}` into `innerHTML`.
Notes are partially escaped (`note.replace(/</g,'&lt;')`) but city/country/emoji are **not escaped at all**. A custom trip named `<img src=x onerror=alert(1)>` (typed by anyone with access to this browser, or imported) executes when the journal/map renders.
**Why:** Self-XSS is low-stakes on a single-user local app, but it's a real injection and trivially avoidable; also a stray `<` breaks rendering. P0 because it's a security defect with a one-line fix.
**Fix:** Add one escaper and use it for *all* user-derived strings:
```js
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,m=>(
  {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
```
Then replace interpolations: `esc(t.city)`, `esc(t.country)`, `esc(t.flag)`, `esc(t.note)` (replaces the `.replace(/</g,...)`), and in `sticker()` → `${esc(emoji||'🌍')}`. Also escape the custom `t.emoji` and the `kw`/`alt` passed into `pimg()` if it can come from `t.city` (it does, in map popup/passport `kw=...t.city`) — `alt="${alt}"` with an unescaped `"` would break out of the attribute:
```js
const pimg=(kw,lock,w,h,alt='')=>`<img ... alt="${esc(alt)}" src="${flick(kw,lock,w,h)}" ...>`;
```
(`flick()` already `encodeURIComponent`s the keyword for the URL — good.)

### ROBUST-2 (P1) — localStorage failures are swallowed; quota/private-mode loss is silent
**Where:** `loadTrips()` line 971 and `saveTrips()` line 973 both `catch(e){}` and do nothing. In Safari Private Mode (older iOS) `setItem` throws QuotaExceededError; the user adds trips, sees confetti, but nothing persists and they're never told.
**Why:** Silent data loss; the whole value prop ("it'll be here when you come back") quietly fails.
**Fix:** Detect and warn once:
```js
let storageOK=true;
function saveTrips(){
  try{localStorage.setItem(LS_KEY,JSON.stringify(trips));}
  catch(e){
    if(storageOK){storageOK=false;
      alert("Heads up: this browser won't let me save your journal (private mode or full storage). Your trips will be lost when you close the tab.");}
  }
}
```
Also guard `JSON.parse` corruption in `loadTrips()` — it already try/catches and falls back to seeds (good), but a *partial* parse returning a non-array would break `.filter`/`.map`. Harden:
```js
function loadTrips(){
  try{const s=localStorage.getItem(LS_KEY);
    if(s){const v=JSON.parse(s); if(Array.isArray(v)) return v;}
  }catch(e){}
  return JSON.parse(JSON.stringify(SEED_TRIPS));
}
```

### ROBUST-3 (P1) — `showView()` throws if Leaflet/DOM unexpected; map errors only partly handled
**Where:** `initMap()` line 1154 handles `typeof L==='undefined'` (good). But `showView('map')` calls `setTimeout(initMap,90)` (line 1014); if `initMap` throws for any other reason (e.g. `map.fitBounds` with a single degenerate bound), it's an uncaught async error. Also `document.getElementById(ids[v])` (line 1012) throws if `v` is unknown.
**Why:** A thrown error in the map path can leave the view half-switched.
**Fix:** Guard the lookup and wrap map init:
```js
function showView(v){
  const ids={explore:'explore',map:'map-view',trips:'trips',detail:'detail'};
  const target=document.getElementById(ids[v]||ids.explore);
  ...
  if(v==='map') setTimeout(()=>{try{initMap();}catch(e){
    const el=document.getElementById('map'); el.className='maperr';
    el.textContent='Map could not load right now.';}},90);
}
```

### ROBUST-4 (P2) — Network image request volume
**Where:** Explore grid renders 10 destination images (each ~800×540) up front; opening a detail fires 6 gallery + 1 hero; the map popups each fetch an image on open. With seed data the Journal renders 5. All from `loremflickr` (which itself redirects/serves random images, sometimes slow).
**Why:** ~10–25 third-party image requests on a flaky connection; loremflickr is not a CDN you control and can be slow or rate-limited, and `?lock=` gives stable-ish images but still a network hop.
**Fix:** Lazy-load already helps for offscreen cards. Additional cheap wins: keep `loading="lazy"` (present) and add `decoding="async"`+dimensions (ROBUST/MOBILE-8); only build detail panels' gallery images when the Photos tab is first shown (defer `gallery` innerHTML until that tab activates) to avoid 6 requests on every detail open:
```js
// build panels with photos panel empty; on first activate, inject `gallery`
```
For true offline resilience, consider bundling a couple of local fallback gradients (already the `.failed` behaviour) — current fallback is acceptable.

### ROBUST-5 (P2) — `confetti()` appends 70 nodes; fine, but not reduced-motion-announced & runs on every add
**Where:** `confetti()` line 991 — gated by `reduceMotion` (good), removes nodes after 3s (good). No leak. Minor: 70 forced reflows via `appendChild` in a loop; negligible at this scale. No fix needed; noted as verified-OK.

### ROBUST-6 (P2) — Year input accepts anything; planned/visited logic edge cases
**Where:** `readForm()` `parseInt(fYear)||currentYear` (line 1247) — a year like `99999` or `-5` is accepted and shown. `renderStats()` sorts and computes fine, but a planned trip with a past year, or a visited trip with a future year, isn't validated.
**Why:** Cosmetic data-quality issue (kid types "20226"), not a crash.
**Fix:** Clamp:
```js
let year=parseInt(document.getElementById('fYear').value,10);
if(!Number.isFinite(year)||year<1900||year>2100) year=new Date().getFullYear();
```
Set `min`/`max`/`step` on the input too: `<input id="fYear" type="number" min="1950" max="2100" ...>`.

---

## Verified strengths (don't "fix")
- `prefers-reduced-motion` is genuinely respected for the mascot bob, reveal-on-scroll, plane animation, arc draw and confetti (JS-gated) — good baseline; only the gaps in A11Y-9 remain.
- Broken-image fallback (`.failed` → gradient + emoji sticker) is a thoughtful, on-brand graceful degradation.
- Form fields use proper `<label for>` associations and the `<select>` is a native control (accessible by default).
- Notes are at least partially escaped; map popup escapes `<` in notes.
- Map has a real no-connection fallback (`.maperr`) when Leaflet fails to load.
- `loadTrips()` falls back to seed data on parse failure.

## Priority rollup
- **P0:** A11Y-1 (card keyboard), A11Y-2 (star picker), A11Y-3 (tabs), A11Y-4 (contrast + focus ring), ROBUST-1 (stored XSS).
- **P1:** A11Y-5, A11Y-6, A11Y-7, A11Y-8, MOBILE-1, MOBILE-2, MOBILE-3, MOBILE-4, MOBILE-5, MOBILE-6, UX-1, UX-2, ROBUST-2, ROBUST-3.
- **P2:** A11Y-9, MOBILE-7, MOBILE-8, UX-3, UX-4, UX-5, UX-6, ROBUST-4, ROBUST-5, ROBUST-6.
