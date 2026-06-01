# Globie's Atlas — Visual Asset Kit

Original, lightweight, **inline** SVG + CSS for the "Globie's Atlas" kids' travel app. Everything is self-contained (no external files, no libraries), works fully offline, and reuses the existing design tokens.

**Palette vars (already in `index.html`):** `--teal #13B5AC`, `--teal-d #0E9890`, `--coral #FF8366`, `--coral-d #F46A4B`, `--yellow #FFC23C`, `--yellow-d #F0A91E`, `--sky #46B3F0`, `--grape #7C6CF4`, `--green #43C28A`, `--pink #FF7FB0`. Mascot fox colours (kept identical to the existing `GLOBIE`): face/ears `#F58220`, inner-ear `#9A4912`, snout `#FFF3E6`, ink `#2A2433`.

All assets are `aria-hidden="true"` (decorative) unless they carry the mascot's `aria-label`. Every SVG declares `width`/`height`/`viewBox`. Each is comfortably under ~1.5 KB.

---

## Art direction (rationale)

The goal is "a beautifully illustrated kids' travel book" rather than sticker-sheet clip-art. Three rules keep it cohesive:

1. **One construction language.** Everything is built from the same primitives already in the app: soft rounded blobs, 2–3 flat fills, the occasional `2.6`-weight rounded stroke, and tiny white highlight dots (the same trick the mascot's eyes use). No gradients inside spot art, no outlines-on-everything — flat shapes with at most one accent.
2. **Backgrounds whisper, mascot & stickers speak.** Scene SVGs are meant to sit at low opacity behind content (clouds, a dotted flight trail, a sliver of mountains/waves). They use the palette but desaturated by opacity, so headlines and photos always win. The mascot poses and category stickers are the only fully-saturated illustration moments.
3. **Motion is a garnish, gated for safety.** Floating doodles, the card lift, the "stamp thunk", and the globe spin are all small, slow, and wrapped in `@media (prefers-reduced-motion: reduce)` so they vanish for users who ask. The existing `bob` keyframe already follows this pattern — these extend it.

Integration is non-destructive: paste the scene SVGs as background layers, swap the emoji in `sticker()` for the matching `STICKER` entry, add the CSS block to the `<style>`, and reference the new mascot pose constants the same way `GLOBIE` is used today.

---

## 1. Decorative scene SVGs (faint background layers)

### 1a. Soft cloud band
*Where to use:* drop inside `.hero .bg` (above the `<img>`, below `.scrim`) or behind any section as a `position:absolute` layer at `opacity:.5`. Uses `currentColor`, so set the colour via the parent (`color:#fff` over photos, or `color:var(--sky)` on light sections).

```html
<svg class="scene-clouds" width="340" height="120" viewBox="0 0 340 120" fill="currentColor" aria-hidden="true">
  <g opacity=".9">
    <path d="M40 86c-16 0-26-11-24-24 1-11 11-18 22-16 3-13 16-21 29-17 8 2 13 8 15 15 13-2 24 6 24 18 0 13-11 24-26 24z"/>
    <path d="M210 70c-13 0-21-9-20-20 1-9 9-15 18-13 2-10 13-17 23-14 7 2 11 7 12 13 11-2 20 5 20 15 0 11-9 20-21 20z"/>
    <ellipse cx="150" cy="104" rx="46" ry="11" opacity=".5"/>
  </g>
</svg>
```

### 1b. Dotted paper-plane flight trail
*Where to use:* an overlay across the top of the hero, or as a horizontal flourish above `.section-head`. Absolutely positioned, `opacity:.7`. The dashed loop mimics the in-app route arc; the little plane reuses the app's plane silhouette idea. Trail = `--yellow`, plane = `currentColor`.

```html
<svg class="scene-trail" width="320" height="90" viewBox="0 0 320 90" fill="none" aria-hidden="true">
  <path d="M6 78 C70 78 78 20 150 26 C214 31 220 70 300 40"
        stroke="var(--yellow)" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 9"/>
  <g fill="currentColor" transform="translate(296 34) rotate(-26)">
    <path d="M0 0 L22 7 L0 14 L6 7 Z"/>
    <path d="M7 7 L18 -2 L13 8 Z" opacity=".75"/>
  </g>
</svg>
```

### 1c. Tiny mountains, waves & sun strip
*Where to use:* a footer flourish, the bottom edge of a hero, or behind the Map header. Sits at `opacity:.5`. Self-coloured from the palette so it reads even on white. Drop the `<rect>` baseline if you want it transparent.

```html
<svg class="scene-land" width="360" height="120" viewBox="0 0 360 120" aria-hidden="true">
  <circle cx="300" cy="34" r="20" fill="var(--yellow)"/>
  <g fill="var(--yellow)" opacity=".6" stroke="var(--yellow)" stroke-width="3" stroke-linecap="round">
    <path d="M300 8v-7M324 34h7M276 34h-7M318 16l5-5M282 16l-5-5"/>
  </g>
  <path d="M0 96 L70 44 L120 84 L170 40 L240 96 Z" fill="var(--teal)"/>
  <path d="M120 84 L170 40 L210 70 L150 96 Z" fill="var(--teal-d)" opacity=".85"/>
  <path d="M70 44 L86 58 L74 62 Z" fill="#fff" opacity=".85"/>
  <path d="M170 40 L184 53 L173 57 Z" fill="#fff" opacity=".85"/>
  <path d="M0 96h360v24H0z" fill="var(--sky)" opacity=".4"/>
  <path d="M0 102c20 6 40 6 60 0s40-6 60 0 40 6 60 0 40-6 60 0 40 6 60 0 40-6 60 0"
        fill="none" stroke="var(--sky)" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>
</svg>
```

---

## 2. Globie mascot pose variants

Same SVG construction as the existing `GLOBIE` (orange face blob, cream snout, ink eyes with white catch-lights, triangle nose, curved smile). Each is a drop-in `const` you can use anywhere `GLOBIE` is used, e.g.
`GLOBIE_WAVE.replace('class="globie"','class="globie bob"')`. All carry an `aria-label` (they ARE the character), not `aria-hidden`.

### 2a. Globie waving
*Where to use:* the hero "Hi, I'm Globie!" badge (`#heroGlobie`) and onboarding moments.

```js
const GLOBIE_WAVE = `<svg class="globie" viewBox="0 0 100 100" aria-label="Globie the fox waving hello">
  <path d="M24 34 L33 10 L50 30 Z" fill="#F58220"/><path d="M76 34 L67 10 L50 30 Z" fill="#F58220"/>
  <path d="M30 30 L34 16 L43 28 Z" fill="#9A4912"/><path d="M70 30 L66 16 L57 28 Z" fill="#9A4912"/>
  <path d="M50 26 C72 26 84 42 84 57 C84 76 69 88 50 88 C31 88 16 76 16 57 C16 42 28 26 50 26 Z" fill="#F58220"/>
  <path d="M50 52 C63 52 73 61 73 70 C73 81 62 88 50 88 C38 88 27 81 27 70 C27 61 37 52 50 52 Z" fill="#FFF3E6"/>
  <circle cx="39" cy="55" r="5" fill="#2A2433"/><circle cx="61" cy="55" r="5" fill="#2A2433"/>
  <circle cx="40.6" cy="53.4" r="1.7" fill="#fff"/><circle cx="62.6" cy="53.4" r="1.7" fill="#fff"/>
  <path d="M50 67 l-6 -6 h12 z" fill="#2A2433"/>
  <path d="M44 73 Q50 79 56 73" fill="none" stroke="#2A2433" stroke-width="2.6" stroke-linecap="round"/>
  <g class="globie-wave" style="transform-origin:80px 70px">
    <path d="M78 78 Q86 70 84 60" fill="none" stroke="#F58220" stroke-width="7" stroke-linecap="round"/>
    <circle cx="84" cy="57" r="6" fill="#FFF3E6"/>
  </g></svg>`;
```

### 2b. Globie with a backpack
*Where to use:* "Choose a place" / planning sections, or beside the journal form as a packing cue.

```js
const GLOBIE_PACK = `<svg class="globie" viewBox="0 0 100 100" aria-label="Globie the fox wearing a backpack">
  <path d="M19 64 C13 60 12 50 18 47 L30 52 L30 70 Z" fill="var(--coral)"/>
  <rect x="15" y="49" width="9" height="6" rx="3" fill="var(--coral-d)"/>
  <path d="M24 34 L33 10 L50 30 Z" fill="#F58220"/><path d="M76 34 L67 10 L50 30 Z" fill="#F58220"/>
  <path d="M30 30 L34 16 L43 28 Z" fill="#9A4912"/><path d="M70 30 L66 16 L57 28 Z" fill="#9A4912"/>
  <path d="M50 26 C72 26 84 42 84 57 C84 76 69 88 50 88 C31 88 16 76 16 57 C16 42 28 26 50 26 Z" fill="#F58220"/>
  <path d="M50 52 C63 52 73 61 73 70 C73 81 62 88 50 88 C38 88 27 81 27 70 C27 61 37 52 50 52 Z" fill="#FFF3E6"/>
  <circle cx="39" cy="55" r="5" fill="#2A2433"/><circle cx="61" cy="55" r="5" fill="#2A2433"/>
  <circle cx="40.6" cy="53.4" r="1.7" fill="#fff"/><circle cx="62.6" cy="53.4" r="1.7" fill="#fff"/>
  <path d="M50 67 l-6 -6 h12 z" fill="#2A2433"/>
  <path d="M44 73 Q50 79 56 73" fill="none" stroke="#2A2433" stroke-width="2.6" stroke-linecap="round"/></svg>`;
```

### 2c. Globie pointing
*Where to use:* tooltips, "tap any place" hints, or pointing toward the map/CTA.

```js
const GLOBIE_POINT = `<svg class="globie" viewBox="0 0 100 100" aria-label="Globie the fox pointing the way">
  <path d="M24 34 L33 10 L50 30 Z" fill="#F58220"/><path d="M76 34 L67 10 L50 30 Z" fill="#F58220"/>
  <path d="M30 30 L34 16 L43 28 Z" fill="#9A4912"/><path d="M70 30 L66 16 L57 28 Z" fill="#9A4912"/>
  <path d="M50 26 C72 26 84 42 84 57 C84 76 69 88 50 88 C31 88 16 76 16 57 C16 42 28 26 50 26 Z" fill="#F58220"/>
  <path d="M50 52 C63 52 73 61 73 70 C73 81 62 88 50 88 C38 88 27 81 27 70 C27 61 37 52 50 52 Z" fill="#FFF3E6"/>
  <circle cx="39" cy="55" r="5" fill="#2A2433"/><circle cx="61" cy="55" r="5" fill="#2A2433"/>
  <circle cx="40.6" cy="53.4" r="1.7" fill="#fff"/><circle cx="62.6" cy="53.4" r="1.7" fill="#fff"/>
  <path d="M50 67 l-6 -6 h12 z" fill="#2A2433"/>
  <path d="M44 73 Q50 79 56 73" fill="none" stroke="#2A2433" stroke-width="2.6" stroke-linecap="round"/>
  <g>
    <path d="M70 74 L90 66" stroke="#F58220" stroke-width="7" stroke-linecap="round"/>
    <circle cx="92" cy="65" r="6" fill="#FFF3E6"/>
    <circle cx="95" cy="62" r="2" fill="#F58220"/>
  </g></svg>`;
```

### 2d. Sleepy / zzz Globie (empty state)
*Where to use:* replace the bobbing `GLOBIE` inside the `.empty` block of the journal (currently rendered at `index.html` line ~1223). Closed eyes + floating "z"s read instantly as "nothing here yet".

```js
const GLOBIE_SLEEPY = `<svg class="globie" viewBox="0 0 100 100" aria-label="Globie the fox napping">
  <path d="M24 34 L33 10 L50 30 Z" fill="#F58220"/><path d="M76 34 L67 10 L50 30 Z" fill="#F58220"/>
  <path d="M30 30 L34 16 L43 28 Z" fill="#9A4912"/><path d="M70 30 L66 16 L57 28 Z" fill="#9A4912"/>
  <path d="M50 26 C72 26 84 42 84 57 C84 76 69 88 50 88 C31 88 16 76 16 57 C16 42 28 26 50 26 Z" fill="#F58220"/>
  <path d="M50 52 C63 52 73 61 73 70 C73 81 62 88 50 88 C38 88 27 81 27 70 C27 61 37 52 50 52 Z" fill="#FFF3E6"/>
  <path d="M34 55 q5 4 10 0" fill="none" stroke="#2A2433" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M56 55 q5 4 10 0" fill="none" stroke="#2A2433" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M50 67 l-6 -6 h12 z" fill="#2A2433"/>
  <path d="M45 74 q5 3 10 0" fill="none" stroke="#2A2433" stroke-width="2.4" stroke-linecap="round"/>
  <g fill="var(--grape)" class="globie-zzz" font-family="var(--display)" font-weight="800">
    <text x="74" y="32" font-size="13">z</text>
    <text x="84" y="22" font-size="9">z</text>
  </g></svg>`;
```

---

## 3. Category "sticker" spot-illustrations

Flat, 2–3 colours, rounded — drop-in replacements for the plain emoji in `sticker()` (`index.html` line ~984). They render at the same place the emoji does (centered on image fallbacks), so keep the `100×100` viewBox and the `.sticker` wrapper. Each maps to a `region`: Beach / City / Snow / Wildlife.

Suggested wiring — keep emoji as the fallback:

```js
const STICKER = {
  Beach: BEACH_SVG, City: CITY_SVG, Snow: SNOW_SVG, Wildlife: WILD_SVG
};
// in sticker(): accept the dest and prefer the spot art when a region matches
function sticker(emoji, region){
  const art = region && STICKER[region];
  return `<span class="sticker">${art || (emoji||'🌍')}</span>`;
}
```

### 3a. Beach
*Where to use:* `region:'Beach'` cards (Maldives, etc.). Sun + palm + wave, on a transparent ground.

```js
const BEACH_SVG = `<svg viewBox="0 0 100 100" width="64" height="64" aria-hidden="true">
  <circle cx="68" cy="30" r="13" fill="var(--yellow)"/>
  <path d="M40 60 C40 44 30 38 18 40 C30 38 38 32 40 60Z" fill="var(--green)"/>
  <path d="M40 60 C40 46 52 38 64 44 C52 40 44 40 40 60Z" fill="var(--green)"/>
  <path d="M40 60 C42 46 56 44 66 54 C54 46 44 46 40 60Z" fill="#3aa876"/>
  <rect x="38" y="58" width="5" height="26" rx="2.5" fill="var(--coral-d)"/>
  <path d="M10 84 q14 -8 28 0 t28 0 t28 0" fill="none" stroke="var(--sky)" stroke-width="4" stroke-linecap="round"/>
</svg>`;
```

### 3b. City
*Where to use:* `region:'City'` cards (Rabat, Lisbon, etc.). Skyline of rounded buildings + sun.

```js
const CITY_SVG = `<svg viewBox="0 0 100 100" width="64" height="64" aria-hidden="true">
  <circle cx="78" cy="24" r="10" fill="var(--yellow)"/>
  <rect x="16" y="46" width="20" height="42" rx="5" fill="var(--sky)"/>
  <rect x="40" y="30" width="20" height="58" rx="5" fill="var(--grape)"/>
  <rect x="64" y="52" width="20" height="36" rx="5" fill="var(--coral)"/>
  <path d="M50 30 l0 -8 m-4 4 h8" stroke="var(--grape)" stroke-width="3" stroke-linecap="round"/>
  <g fill="#fff" opacity=".85">
    <rect x="22" y="54" width="4" height="4" rx="1"/><rect x="22" y="64" width="4" height="4" rx="1"/>
    <rect x="46" y="40" width="4" height="4" rx="1"/><rect x="46" y="52" width="4" height="4" rx="1"/>
    <rect x="70" y="60" width="4" height="4" rx="1"/><rect x="70" y="70" width="4" height="4" rx="1"/>
  </g>
</svg>`;
```

### 3c. Snow
*Where to use:* `region:'Snow'` cards (Lapland). Snowy peaks + falling flakes.

```js
const SNOW_SVG = `<svg viewBox="0 0 100 100" width="64" height="64" aria-hidden="true">
  <path d="M8 82 L34 36 L52 64 L66 42 L92 82 Z" fill="var(--sky)"/>
  <path d="M34 36 L44 54 L34 58 L24 54 Z" fill="#fff"/>
  <path d="M66 42 L73 54 L66 57 L59 54 Z" fill="#fff"/>
  <path d="M8 82 q42 -10 84 0" fill="#fff"/>
  <g stroke="var(--grape)" stroke-width="2.4" stroke-linecap="round">
    <path d="M28 20 v8 M24 24 h8 M25 21 l6 6 M31 21 l-6 6"/>
    <path d="M70 16 v6 M67 19 h6 M68 17 l4 4 M72 17 l-4 4"/>
  </g>
</svg>`;
```

### 3d. Wildlife
*Where to use:* `region:'Wildlife'` cards (Madagascar, Antarctica). A friendly paw-print on a leaf — generic enough for any animal destination.

```js
const WILD_SVG = `<svg viewBox="0 0 100 100" width="64" height="64" aria-hidden="true">
  <path d="M22 78 C18 50 40 26 78 22 C74 60 52 82 22 78 Z" fill="var(--green)"/>
  <path d="M30 70 C40 52 54 40 72 30" fill="none" stroke="#3aa876" stroke-width="3" stroke-linecap="round"/>
  <g fill="var(--coral-d)">
    <ellipse cx="48" cy="58" rx="9" ry="11"/>
    <circle cx="38" cy="46" r="4.5"/><circle cx="48" cy="42" r="4.5"/>
    <circle cx="58" cy="46" r="4.5"/><circle cx="64" cy="55" r="4"/>
  </g>
</svg>`;
```

---

## 4. Refined micro-interaction CSS

Paste this block into the `<style>` in `index.html`. It extends the existing `bob`/`reveal` patterns and is fully **gated behind `prefers-reduced-motion`** at the bottom.

```css
/* ---- hero doodle float / gentle parallax ---- */
.scene-clouds,.scene-trail,.scene-land{position:absolute;pointer-events:none;z-index:1}
.float-slow{animation:floaty 9s ease-in-out infinite}
.float-mid {animation:floaty 6s ease-in-out infinite .4s}
@keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

/* a plane that drifts along its trail (use on .scene-trail) */
.scene-trail{animation:drift 14s ease-in-out infinite}
@keyframes drift{0%,100%{transform:translateX(0)}50%{transform:translateX(10px) translateY(-4px)}}

/* ---- mascot pose accents ---- */
.globie-wave{animation:wave 1.6s ease-in-out infinite}
@keyframes wave{0%,100%{transform:rotate(0)}25%{transform:rotate(-18deg)}75%{transform:rotate(14deg)}}
.globie-zzz{animation:zzz 3s ease-in-out infinite}
@keyframes zzz{0%{opacity:0;transform:translateY(4px)}40%{opacity:1}100%{opacity:0;transform:translateY(-8px)}}

/* ---- nicer card hover (supersedes the plain .dcard:hover lift) ---- */
.dcard{transition:transform .25s cubic-bezier(.2,.7,.2,1),box-shadow .25s}
.dcard:hover{transform:translateY(-7px) rotate(-.5deg) scale(1.012);box-shadow:var(--shadow)}
.dcard:hover .frame img{transform:scale(1.07)}
.dcard:active{transform:translateY(-2px) scale(.997)}

/* ---- "stamp thunk" — for the .featured .stamp / .yr ribbons / when a trip is saved ---- */
.stamp-thunk{animation:thunk .5s cubic-bezier(.2,1.4,.4,1) both}
@keyframes thunk{
  0%{opacity:0;transform:rotate(-3deg) scale(2.4)}
  55%{opacity:1;transform:rotate(-3deg) scale(.9)}
  72%{transform:rotate(-3deg) scale(1.08)}
  100%{transform:rotate(-3deg) scale(1)}
}

/* ---- globe spin — for the .brand .mark or any globe icon on hover ---- */
.spin-globe{transition:transform .6s ease}
.brand:hover .spin-globe,.spin-globe.go{animation:spin 1.1s cubic-bezier(.4,0,.2,1)}
@keyframes spin{to{transform:rotate(360deg)}}

@media (prefers-reduced-motion: reduce){
  .float-slow,.float-mid,.scene-trail,
  .globie-wave,.globie-zzz,
  .stamp-thunk,.spin-globe,
  .brand:hover .spin-globe,.spin-globe.go{animation:none}
  .dcard,.dcard:hover{transform:none;transition:none}
  .dcard:hover .frame img{transform:none}
}
```

**Notes**
- `stamp-thunk`: add the class to `.featured .stamp` on render, or to a freshly-saved journal `.yr` ribbon, for a satisfying "stamped in the passport" beat. Re-trigger by toggling the class (remove → reflow → add).
- `spin-globe`: add `class="spin-globe"` to the `<g>` inside `.brand .mark` so the globe spins on logo hover; the `.go` variant lets JS spin it on a save/celebration.
- The float classes (`float-slow`/`float-mid`) go on the scene SVGs from §1 so clouds/sun/plane drift independently for a parallax feel.

---

## 5. Decorative dashed "route divider"

*Where to use:* between major sections (e.g. before each `.section-head`, or replacing the `✦ ✦ ✦` mini-rule in `.footnote`). Full-bleed responsive: `preserveAspectRatio="none"` lets the dashes stretch while the end pins/plane stay crisp. Trail = `--yellow`, pins = `--coral` / `--teal`.

```html
<svg class="route-divider" width="100%" height="34" viewBox="0 0 600 34"
     preserveAspectRatio="none" fill="none" aria-hidden="true" role="presentation">
  <path d="M14 17 Q300 -10 586 17" preserveAspectRatio="none"
        stroke="var(--yellow)" stroke-width="2.5" stroke-dasharray="2 9" stroke-linecap="round"/>
  <g transform="translate(14 17)">
    <circle r="6" fill="var(--coral)"/><circle r="2.4" fill="#fff"/>
  </g>
  <g transform="translate(586 17)">
    <circle r="6" fill="var(--teal)"/><circle r="2.4" fill="#fff"/>
  </g>
  <path d="M300 6 l9 3 l-9 3 l2 -3 z" fill="var(--coral-d)"/>
</svg>
```

Pairs with this optional CSS so it sits with comfortable breathing room and the dashes stay sharp at any width:

```css
.route-divider{display:block;width:100%;height:34px;margin:40px auto;overflow:visible}
```

---

## Integration checklist

1. **Scenes (§1):** paste into `.hero .bg` and/or before section heads as absolutely-positioned layers; add `float-slow`/`float-mid` for drift; keep `opacity` ~.4–.7.
2. **Mascot poses (§2):** add the four `const`s next to `GLOBIE`; use `GLOBIE_WAVE` for `#heroGlobie`, `GLOBIE_SLEEPY` in the `.empty` journal state, `GLOBIE_POINT`/`GLOBIE_PACK` for hints/CTAs.
3. **Stickers (§3):** add the four `const`s + `STICKER` map; extend `sticker(emoji, region)` and pass `d.region` / `t`'s region at the existing call sites — emoji stays as fallback.
4. **Motion CSS (§4):** append the block to `<style>`; it overrides the current `.dcard` hover and adds the new keyframes, all reduced-motion-safe.
5. **Divider (§5):** drop the SVG between sections or in place of the `✦ ✦ ✦` footnote rule.

No external requests, no build step — everything is inline and offline-ready.
