# Poppie's Atlas — Detailed UI/UX Review

Reviewer: senior product designer · Date: 2026-06-01
Scope: `/home/user/Kids-Travel/index.html` (single file). Reviewed from code only (no browser).
Goal: keep it playful, but make it feel premium and cohesive — less "out of the box". One accent does the heavy lifting; photos and illustration carry the colour.

All line references are to the current `index.html`.

---

## TL;DR — the diagnosis

The app is well built and feature-rich, but the "generic" feeling comes from a small set of repeated habits, not from any one screen:

1. **Too many accents at full saturation.** `--teal`, `--coral`, `--yellow`, `--sky`, `--grape`, `--green`, `--pink` all appear at peak chroma, often in the same viewport (e.g. the `meta-item .k` is `--coral-d`, the nav active is `--teal`, the snav active is `--coral`, the journey rule is `--teal`, the quiz markers are `--grape`). Nothing wins, so nothing feels intentional.
2. **One card recipe used everywhere:** `background:var(--surface); border:2px solid var(--line); border-radius:var(--r); box-shadow:var(--shadow-sm)`. It's on `.route`, `.meta-item`, `.factcard`, `.spot`, `.phrase`, `.qcard`, `.stat`, `.formcard`, `.packbox`… Repetition is good, but the 2px hairline border on a near-white surface is the single biggest "default Bootstrap" tell.
3. **The info tiles (`.meta-item`, `.route`) are the weakest moment** — they read as a label + value with no visual idea behind them, on the most-visited screen (the destination detail). This is the owner's #1 ask and it's correct.
4. **Eight uppercase-emoji pills in `.snav`** plus eight more in the data labels = a lot of shouting. The default-pill look (`border:2px solid var(--line); border-radius:999px`) repeats in nav.top, chips, snav, filters, jtool — five near-identical pill systems.

The fixes below are restraint-first: pick a palette, replace the universal hairline-card with a small set of intentional surfaces, redesign the two tile groups around real motifs (boarding pass + passport facts), and quiet the pill systems.

---

## A. Colour scheme — three options

Current `:root` (lines 24–38) has 7 accent hues plus tints. Below, each option keeps Baloo 2 + Nunito and the warm paper `--bg`, but **collapses to one hero accent + one supporting accent + a reserved "reward" colour (yellow/gold)**, and lets destination photography supply the rest of the colour. Region/category and gamification colours (the `--g1/--g2` frame gradients, badge `--ac`) stay as-is — they're data-driven and fine.

Contrast notes are against the surface the colour sits on; AA body text needs 4.5:1, large/bold text and UI needs 3:1.

### Option 1 — "Atlas Teal" (recommended) — *warm paper, deep-teal ink, coral kept only for play*
Evolution of today, not a reinvention — lowest risk, biggest cohesion win.

```css
:root{
  /* surfaces */
  --bg:#FBF7EF;            /* slightly warmer, less yellow than #FFFCF5 */
  --surface:#FFFFFF;
  --surface-2:#F3EFE6;     /* sand, replaces the very-yellow #FFF8EC */
  --surface-sunk:#EFE9DD;  /* NEW: recessed wells (inputs, tracks) */
  /* ink */
  --ink:#1E2A3A;           /* deeper, calmer than #26324A */
  --ink-2:#4A566E;
  --muted:#6B7186;
  /* lines */
  --line:#E7E1D4;          /* warm hairline that belongs to the paper, not cool grey */
  --line-2:#EDE7DA;
  /* ONE hero accent */
  --teal:#0FA39A; --teal-d:#0A7269; --teal-soft:#E3F4F2;
  /* ONE play accent (coral) — buttons / "fun" moments only */
  --coral:#FB7B5B; --coral-d:#B23A14; --coral-soft:#FDE9E2;
  /* reward only (badges, countdown, gold stamps) */
  --yellow:#F2B53C; --yellow-d:#C98A12;
  /* keep for data/gamification, do NOT use for chrome */
  --sky:#46B3F0; --grape:#7C6CF4; --green:#43C28A; --pink:#FF7FB0;
}
```
- **Mood:** sun-warmed map paper with a confident teal sea — calm, premium, still cheerful.
- **Who uses what:** teal = primary nav active, links, focus-within, the "journey" rail, kid-facts accent. Coral = primary CTA buttons + the snav active + "fun fact" markers only. Yellow/gold = badges, countdown, passport stamps. Photos carry everything else.
- **Contrast:** `--ink #1E2A3A` on `--surface` ≈ 13.6:1 (AAA). `--teal-d #0A7269` on `--surface` ≈ 5.0:1 (AA body, AA UI). `--coral-d #B23A14` on `--surface` ≈ 5.4:1 (AA). White on `--coral #FB7B5B` ≈ 2.9:1 — **fix already needed today**: keep CTA text white but it's borderline; the boarding-pass/buttons below put white on `--coral-d` borders/shadows, and for the snav-active use `--coral-d` background (you already do this in the a11y block, line 390 — keep it). White on `--teal #0FA39A` ≈ 2.6:1, so **teal buttons should use white text on `--teal-d` fill** (see button system, §D).

### Option 2 — "Expedition" — *cooler, more grown-up; navy + a single warm pop*
For a slightly older-kid, "junior National Geographic" feel.

```css
:root{
  --bg:#F6F4EF; --surface:#FFFFFF; --surface-2:#EEECE4; --surface-sunk:#E8E5DB;
  --ink:#16233A; --ink-2:#3E4A63; --muted:#697089;
  --line:#E4E0D6; --line-2:#ECE8DD;
  --teal:#1E7F86; --teal-d:#0E5A60; --teal-soft:#E0F0F1;  /* deep lagoon, the hero */
  --coral:#F4663F; --coral-d:#9E2F12; --coral-soft:#FBE3DA; /* the single warm pop */
  --yellow:#E8A92E; --yellow-d:#B27C0F;
  --sky:#3F92D6; --grape:#6E5FE0; --green:#3DA97A; --pink:#E76E9C;
}
```
- **Mood:** field-notebook / expedition log — desaturated, editorial, lets photos sing.
- **Who uses what:** same role map as Option 1 but everything is one notch deeper, so it reads more "designed". Best if you also reduce the candy-button `0 5px 0` hard shadows (see §D).
- **Contrast:** ink ≈ 14:1; `--teal-d #0E5A60` ≈ 6.6:1; `--coral-d #9E2F12` ≈ 6.7:1 — all comfortably AA/AAA.

### Option 3 — "Lagoon Pop" — *brightest, most "toy", closest to today*
If the owner wants to stay punchy for younger kids.

```css
:root{
  --bg:#FFFDF6; --surface:#FFFFFF; --surface-2:#FFF6E3; --surface-sunk:#FBEFD6;
  --ink:#21304C; --ink-2:#4C5878; --muted:#5E6480;
  --line:#EDE4D2; --line-2:#F4EEDC;
  --teal:#14B8AE; --teal-d:#077A72; --teal-soft:#DAF6F3;
  --coral:#FF7A57; --coral-d:#B83A12; --coral-soft:#FFE6DD;
  --yellow:#FFC23C; --yellow-d:#E09A12;
  --sky:#46B3F0; --grape:#7C6CF4; --green:#43C28A; --pink:#FF7FB0;
}
```
- **Mood:** tropical lagoon, high-energy — basically today, but with one disciplined rule applied (below).
- **The discipline:** even keeping these hues, **stop using `--coral-d` for the tiny uppercase `.k` / `.eyebrow` labels everywhere** (lines 57, 248, 419, 568, 582). Make labels `--muted` or `--teal-d`, and reserve coral for actions and "fun" tags. That one change does 70% of the cohesion work.
- **Contrast:** `--teal-d #077A72` ≈ 5.4:1 AA; `--coral-d #B83A12` ≈ 5.6:1 AA. Watch `--yellow` text — `#5a3d00` on `--yellow` is fine (≈ 6:1), keep that pairing.

**Recommendation: Option 1 ("Atlas Teal").** It is the smallest diff from the current tokens, fixes the "too yellow paper + cool grey lines on warm bg" mismatch (today `--line:#ECEFF6` is cool blue-grey sitting on a warm cream `--bg` — a subtle but real source of the cheap look), and enforces *teal = system / coral = play / gold = reward*. It also keeps the existing teal theme-color and brand mark on-brand.

> Also update the `<meta name="theme-color">` (line 7) and the login gradient (line 502) to the chosen teal/`--teal-d`.

---

## B. Detail info tiles redesign (the #1 ask)

Current markup is generated at **lines 4413–4430**; styles at **lines 236–267**. The `.route` + `.meta-grid` and the country `.meta-grid` are four identical grey label/value boxes with a coral micro-label — functional, charmless.

The idea: **"Getting there" becomes a boarding pass / ticket**, and **"The country" becomes a passport ID page**. Both motifs are on-theme, give real hierarchy, and reuse the data you already pass (`HOME.code`, `gt.to`, `gt.toName`, `gt.flightTime`, `gt.distance`, `gt.tz`, `gt.best`, `gt.route`, and `ci.capital/language/currency/population/tz`).

### B1. "Getting there" → boarding pass

Replace the `get:` panel string (lines 4414–4424) with this. It keeps the animated plane and all data fields, but reframes them as a torn-stub boarding pass with a clear route header and a labelled fact strip.

```js
get:`<h3 class="blockhead">✈️ Getting there</h3><p class="sub">From your home base in ${HOME.name}</p>
  <div class="bpass">
    <div class="bpass-main">
      <div class="bpass-top">
        <span class="bpass-brand">🐾 Poppie Air · Boarding pass</span>
        <span class="bpass-flight">${nonstopBadge(gt.flightTime)}</span>
      </div>
      <div class="bpass-route">
        <div class="ap"><span class="code">${HOME.code}</span><span class="nm">${HOME.name}</span></div>
        <div class="path" aria-hidden="true">
          <svg viewBox="0 0 200 28" preserveAspectRatio="none"><path d="M2 22 Q100 -6 198 22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="2 7" stroke-linecap="round"/></svg>
          <span class="plane">✈️</span>
        </div>
        <div class="ap right"><span class="code">${gt.to}</span><span class="nm">${esc(gt.toName)}</span></div>
      </div>
      <dl class="bpass-facts">
        ${fact('🕑','Flight time',gt.flightTime)}
        ${fact('📏','Distance',gt.distance)}
        ${fact('🕰️','Time zone',gt.tz)}
        ${fact('🌤️','Best time',gt.best)}
      </dl>
    </div>
    <div class="bpass-stub" aria-hidden="true">
      <span class="bpass-stub-code">${gt.to}</span>
      <span class="bpass-stub-seat">SEAT ${seatFor(d.id)}</span>
      <span class="bpass-stub-bars"></span>
    </div>
  </div>
  <div class="journey"><div class="k">✈️ The journey</div>${esc(gt.route)}</div>`,
```

Helper functions (add near the `meta` helper, line 4384):

```js
// emoji-prefixed labelled fact row used inside the boarding pass / passport
const fact=(icon,k,v)=>`<div class="ifact"><span class="ifact-ic" aria-hidden="true">${icon}</span><dt class="k">${k}</dt><dd class="v">${esc(v)}</dd></div>`;
// pull a "nonstop / direct / 1 stop" pill out of the flightTime string
const nonstopBadge=(ft)=>{const s=(ft||'').toLowerCase();
  if(s.includes('nonstop')||s.includes('direct')) return '<b class="ok">Nonstop ✅</b>';
  if(s.includes('1 stop')) return '<b class="stop">1 stop</b>';
  return '<b class="stop">Check stops</b>';};
// stable pseudo seat like "12A" from the id, just for charm
const seatFor=(id)=>((id.length*7)%30+1)+'ABCDF'[id.length%5];
```
> Note: `nonstopBadge` is cosmetic; the full detail (e.g. "~3 h 45 (direct ✈️)") still shows in the Flight-time fact, so no information is lost.

CSS — add after `.route` (and you can delete the old `.route .ap` / `.meta-item` rules once nothing else uses them; `.meta-item` is only used in these two panels):

```css
/* ===== boarding pass (Getting there) ===== */
.bpass{display:flex;border-radius:20px;overflow:hidden;box-shadow:var(--shadow);
  background:var(--surface);position:relative}
.bpass-main{flex:1;min-width:0;padding:20px 22px;
  background:linear-gradient(180deg,#fff, color-mix(in srgb, var(--teal-soft) 60%, #fff))}
.bpass-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px}
.bpass-brand{font-family:var(--display);font-weight:800;font-size:.8rem;letter-spacing:.02em;color:var(--teal-d)}
.bpass-flight b{font-family:var(--display);font-weight:800;font-size:.72rem;letter-spacing:.04em;
  text-transform:uppercase;padding:5px 11px;border-radius:999px}
.bpass-flight .ok{background:var(--teal-soft);color:var(--teal-d)}
.bpass-flight .stop{background:var(--surface-2);color:var(--ink-2)}
.bpass-route{display:flex;align-items:center;gap:14px}
.bpass-route .ap{display:flex;flex-direction:column;min-width:0}
.bpass-route .ap.right{text-align:right;align-items:flex-end}
.bpass-route .ap .code{font-family:var(--display);font-size:2.4rem;font-weight:800;color:var(--ink);line-height:.95}
.bpass-route .ap .nm{font-size:.74rem;font-weight:800;letter-spacing:.04em;color:var(--muted);
  text-transform:uppercase;max-width:14ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.bpass-route .path{flex:1;min-width:90px;position:relative;height:28px;display:flex;align-items:center;color:var(--teal)}
.bpass-route .path svg{width:100%;height:28px;overflow:visible}
.bpass-route .path .plane{position:absolute;font-size:1rem;animation:planeMove 3.6s ease-in-out infinite}
/* fact strip */
.bpass-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:18px 0 0;
  padding-top:16px;border-top:2px dashed var(--line)}
.ifact{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;
  column-gap:9px;align-items:center}
.ifact-ic{grid-row:1/3;width:34px;height:34px;border-radius:11px;display:flex;align-items:center;
  justify-content:center;font-size:1.05rem;background:var(--surface-2)}
.ifact .k{font-size:.66rem;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);font-weight:800;margin:0}
.ifact .v{font-family:var(--display);font-weight:700;font-size:1rem;color:var(--ink);line-height:1.2;margin:0}
/* tearaway stub */
.bpass-stub{flex:none;width:104px;display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:8px;padding:18px 12px;color:#fff;background:var(--teal-d);position:relative}
.bpass-stub:before,.bpass-stub:after{content:"";position:absolute;left:-9px;width:18px;height:18px;
  border-radius:50%;background:var(--bg)}                 /* notch the perforation */
.bpass-stub:before{top:-9px}.bpass-stub:after{bottom:-9px}
.bpass-stub-code{font-family:var(--display);font-weight:800;font-size:1.5rem}
.bpass-stub-seat{font-size:.66rem;font-weight:800;letter-spacing:.08em;opacity:.85}
.bpass-stub-bars{width:60%;height:38px;background-image:repeating-linear-gradient(90deg,#fff 0 2px,transparent 2px 5px);
  opacity:.85;border-radius:2px}
@media(max-width:560px){
  .bpass{flex-direction:column}
  .bpass-stub{width:100%;flex-direction:row;justify-content:space-between;padding:12px 20px}
  .bpass-stub:before{top:-9px;left:auto;right:32px}.bpass-stub:after{bottom:auto;top:-9px;left:32px}
  .bpass-stub-bars{width:80px;height:24px}
  .bpass-facts{grid-template-columns:repeat(2,1fr)}
  .bpass-route .ap .code{font-size:1.9rem}
}
@media(prefers-reduced-motion:reduce){.bpass-route .path .plane{animation:none;left:46%}}
```
Why this is better: a real motif (everyone recognises a boarding pass), a genuine type hierarchy (giant airport codes are the hero, facts are clearly secondary), the "nonstop vs stops" signal is surfaced as a glanceable pill, and the perforated teal stub gives it craft without new colours. `color-mix` has full support in current evergreen browsers; if you want zero risk, swap the `--bg`/`--teal-soft` mixes for the flat tokens.

### B2. "The country" → passport ID page

Replace the `info:` panel's `meta-grid` line (4426) with a passport block; keep the two `factcard`s below.

```js
info:`<h3 class="blockhead">🌍 All about ${esc(d.country)}</h3><p class="sub">The facts that make it special</p>
  <div class="passid">
    <div class="passid-head">
      <span class="passid-flag" aria-hidden="true">${d.flag||'🌍'}</span>
      <div><div class="passid-title">${esc(d.country)}</div>
           <div class="passid-sub">Passport of facts</div></div>
      <span class="passid-stamp" aria-hidden="true">✦</span>
    </div>
    <dl class="passid-grid">
      ${fact('🏛️','Capital',ci.capital)}
      ${fact('🗣️','Language',ci.language)}
      ${fact('💰','Money',ci.currency)}
      ${fact('👪','People',ci.population)}
    </dl>
  </div>
  <div class="twocol" style="margin-top:18px">
    <div class="factcard"><h4>🤔 Did you know?</h4><ol>${ci.fun.map(f=>`<li>${esc(f)}</li>`).join('')}</ol></div>
    <div class="factcard kid"><h4>🧒 Just for kids</h4><ol>${ci.kid.map(f=>`<li>${esc(f)}</li>`).join('')}</ol></div>
  </div>`,
```

CSS:

```css
/* ===== passport facts (The country) ===== */
.passid{border-radius:20px;overflow:hidden;box-shadow:var(--shadow);
  background:
    radial-gradient(120% 90% at 100% 0,var(--teal-soft) 0,transparent 55%),
    var(--surface);
  border:1px solid var(--line)}
.passid-head{display:flex;align-items:center;gap:14px;padding:16px 22px;border-bottom:2px dashed var(--line)}
.passid-flag{font-size:2.2rem;line-height:1;filter:drop-shadow(0 3px 5px rgba(0,0,0,.18))}
.passid-title{font-family:var(--display);font-weight:800;font-size:1.4rem;color:var(--ink);line-height:1}
.passid-sub{font-size:.72rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--teal-d);margin-top:3px}
.passid-stamp{margin-left:auto;font-size:1.4rem;color:var(--teal);opacity:.5;transform:rotate(-12deg)}
.passid-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px 26px;margin:0;padding:20px 22px}
@media(max-width:560px){.passid-grid{grid-template-columns:1fr}}
/* .ifact rows are shared with the boarding pass */
```

This reuses the exact same `.ifact` row component as the boarding pass, so the two panels feel like a set, and the country facts now have a clear "document header" giving them context (flag + country name) instead of four floating boxes.

### B3. Small win for the two `factcard`s (lines 254–265)
They're fine but the dashed `2px` separators + coral circle numbers read a touch busy next to the new passport. Quiet them:
- Make the number bullets `--teal-soft` fill with `--teal-d` text (kid card stays gold). One fewer coral.
- Replace `border-top:2px dashed var(--line)` between `li`s with `border-top:1px solid var(--line)` for a calmer, more editorial list.

---

## C. Detail tab nav (`.snav`) polish

Current (lines 222–228, 390, 403): eight white pills with 2px borders, coral-d active, horizontally scrolling with a mask. The "default pill" feel comes from the border + the emoji-in-every-label. Two directions — pick one:

### C1 (recommended) — underline / segmented "ticket tabs", no borders
Drop the per-button border, let the bar carry one hairline, and use a sliding-ish underline for active. Cleaner, more app-like, still scrolls.

```css
.snav{position:sticky;top:calc(var(--header-h) + env(safe-area-inset-top));z-index:900;
  display:flex;gap:4px;overflow-x:auto;margin:24px 0 4px;padding:6px 2px;
  background:color-mix(in srgb,var(--bg) 88%, transparent);backdrop-filter:blur(10px);
  border-bottom:2px solid var(--line);-webkit-overflow-scrolling:touch;scrollbar-width:none;
  -webkit-mask-image:linear-gradient(90deg,#000 92%,transparent);mask-image:linear-gradient(90deg,#000 92%,transparent)}
.snav::-webkit-scrollbar{display:none}
.snav button{background:none;border:none;white-space:nowrap;padding:11px 14px 12px;border-radius:12px 12px 0 0;
  font-family:var(--display);font-weight:800;font-size:.92rem;color:var(--muted);
  position:relative;transition:color .15s, background .15s;flex:none;min-height:44px}
.snav button:hover{color:var(--ink);background:color-mix(in srgb,var(--teal-soft) 55%, transparent)}
.snav button:after{content:"";position:absolute;left:14px;right:14px;bottom:-2px;height:3px;border-radius:3px;
  background:var(--coral);transform:scaleX(0);transform-origin:center;transition:transform .2s}
.snav button.active{color:var(--ink);background:none}
.snav button.active:after{transform:scaleX(1)}
@media(prefers-reduced-motion:reduce){.snav button:after{transition:none}}
```
Also recommend **trimming the emoji** in the tab labels (line 4379) to at most the first 3–4 tabs, or dropping them entirely here — the underline already does the work and 8 emoji + 8 words is the noisiest strip in the app. The detail `blockhead` headings keep their emoji, so nothing is lost.

### C2 — keep pills but make them a true segmented control
If the owner likes pills: put a single pill *track* behind them (`background:var(--surface-2);border-radius:999px;padding:4px`), remove per-button borders, active = solid `--teal-d` pill, inactive = transparent. Reads as one control instead of eight stickers.

Either way: **align the active colour with whatever §A chooses** — right now snav-active is coral (228) but overridden to coral-d (390); pick one and make it match the boarding-pass accent so the detail screen has a single "action" colour.

---

## D. Holistic polish — specific offenders & fixes

### D1. The universal hairline card (biggest "out of the box" tell)
**Offenders:** `.route` (237), `.meta-item` (247), `.factcard` (254), `.spot` (278), `.stat` (312), `.phrase` (613), `.qcard` (459), `.formcard` (333), `.packbox` (565), `.entry` (351), `.dcard` (186), `.badge-ribbon` (302), `.ach` (421). All share `border:2px solid var(--line)` on near-white.
**Fix:** define an intentional surface scale and stop bordering everything.
```css
:root{
  --card:0 1px 2px rgba(30,42,58,.04), 0 8px 24px -16px rgba(30,42,58,.22); /* resting card */
  --card-h:0 2px 4px rgba(30,42,58,.05), 0 18px 40px -20px rgba(30,42,58,.30); /* hover/raised */
}
```
- Content cards (`.factcard`, `.spot`, `.phrase`, `.qcard`, `.stat`): **drop the 2px border, use `box-shadow:var(--card)`**, optional `border:1px solid var(--line)` only if you want a crisp edge. The difference between a 2px outline and a soft shadow is most of the premium gap.
- Keep dashed borders intentional and rare (empty states, the boarding-pass perforation, the journey divider) — they read as "playful" only when they're not also on every solid card.

### D2. Button system — too many one-off shadows, weak contrast
**Offenders:** `.btn-primary/-teal/-yellow/-ghost` (67–74) plus `.maplink` (289), `.pop-explore` (490), `.catnav` (635), `.entry-explore` (492), `.jtool` (589), `.btn-surprise` (439) — each invents its own fill + `0 Npx 0` hard shadow. The `0 5px 0` "candy" shadow is charming but used inconsistently (some buttons have it, some don't).
**Fixes:**
- Standardise on **one** elevation recipe (`--btn-shadow:0 4px 0 0 rgba(0,0,0,.12)`) and let each variant only set its fill + pressed state.
- **Contrast:** white on `--teal` (`#0FA39A`/`#14B8AE`) is ~2.6–2.9:1 — below AA for the bold ~16px label. Fill teal buttons with `--teal-d` (white passes) and keep `--teal` for hover/lift, mirroring how you already corrected `.maplink` (391). Apply the same logic to `.pop-explore`, `.catnav`.
- Demote `.jtool`/`.entry-explore` to clearly *secondary* (no fill, just `--surface-2` + text colour) so the primary CTA per screen is unmistakable. Right now several screens have 3–4 things competing to look like "the button".

### D3. Spacing scale — ad-hoc paddings
**Offenders:** card paddings are all slightly different — `22px 24px` (route/factcard), `15px 17px` (meta), `17px 20px` (spot), `20px 22px` (packbox), `14px 16px` (phrase), `20px 16px` (stat), `16px 20px` (hibox). Section rhythm is mostly `margin:44px 0 18px` (section-head, 115) but panels use `28px 0 6px` (230).
**Fix:** adopt an 8px-ish step and apply it via tokens:
```css
:root{ --sp-1:6px; --sp-2:10px; --sp-3:16px; --sp-4:22px; --sp-5:32px; --sp-6:48px; }
```
Use `--sp-4` for all standard card padding, `--sp-3` for compact, `--sp-5` for section gaps. Even just normalising every "content card" to `padding:var(--sp-4)` removes a lot of subliminal wonkiness.

### D4. Type hierarchy
- **Eyebrow inflation:** `.eyebrow`, `.meta-item .k`, `.ifact .k`, `.dgroup-head .eyebrow`, `.pack-count` are all tiny-uppercase-bold-coral. Reserve `.eyebrow` (coral) for *one* role — section eyebrows — and make in-card micro-labels `--muted` (done in the new `.ifact`). Fewer shouting micro-labels = instantly calmer.
- **Heading sizes** are good (Baloo 2 clamps). One gap: `.blockhead` is a flat `1.55rem` (233) for every panel; consider `clamp(1.4rem,3.4vw,1.7rem)` so it scales like the other headings.
- Body line-height `1.55` is good; the catbook drop-cap and storybook treatment are genuinely nice — that level of craft should spread to the info tiles (which §B does).

### D5. Empty states — inconsistent
**Offenders:** lines 4248, 4312, 4322 are bare one-liners (`<div class="empty">No trips booked yet…</div>`) while 4361, 4640, 4644 are the *good* version (Poppie illustration + `<h3>` + `<p>`). The `.empty` style (372) is designed for the rich version, so the one-liners look unfinished.
**Fix:** route all empty states through one helper so every one gets Poppie + a heading + a sentence + (where useful) a CTA button to the relevant screen:
```js
const emptyState=(emoji,head,body,cta)=>`<div class="empty">${poppiePic('calm','','Poppie')}
  <h3>${head}</h3><p>${body}</p>${cta?`<button class="btn btn-teal" onclick="${cta.fn}">${cta.label}</button>`:''}</div>`;
```
e.g. the Explore "no places match" (4312) should offer a "Show all" button, not just text.

### D6. Five near-identical pill systems
`nav.top button` (95), `.chip` (179), `.snav button` (225), `.filters .chip`, `.jtool` (589) are all pill + border + active-fill with slightly different paddings/weights. Pick **one** pill spec (radius, padding, font, active treatment) and share it; differentiate only by *active colour* (nav=teal, snav=coral/underline per §C, filter chips=ink). This is invisible individually but collectively it's why the chrome feels generic.

### D7. Misc craft notes
- `--line:#ECEFF6` (cool blue-grey) on warm `--bg:#FFFCF5` is a subtle temperature clash — §A fixes it with warm `--line`.
- Hard `transform:translateY(-6px) rotate(-.4deg)` + `scale(1.012)` on `.dcard:hover` (188/482) is a lot of simultaneous motion; consider dropping the rotate on hover and keeping only the lift + image zoom for a more premium feel (keep playful rotate for the *journal entry* stamps, where it fits the scrapbook metaphor).
- `.gallery` (269) is well done — that bento layout is a highlight; lean into it.

---

## E. Prioritised punch-list

**P0 — do first, highest impact / lowest risk**
1. Adopt **Palette Option 1** tokens (§A): warm `--line`, deeper `--ink`, and the *teal=system / coral=play / gold=reward* rule. Update `theme-color` (line 7) and login gradient (502).
2. Redesign **Getting there → boarding pass** and **The country → passport** (§B1, B2). This is the owner's #1 ask and the single biggest "wow" per hour.
3. Fix **button text contrast**: teal CTAs fill with `--teal-d` not `--teal` (§D2) — also an accessibility (AA) fix.
4. **Stop using coral-d for every micro-label** (§A Option-3 note / §D4) — make in-card `.k` labels `--muted`.

**P1 — strong cohesion gains**
5. Replace the universal **2px hairline card** with the `--card` shadow scale (§D1) on content cards.
6. **`.snav`** underline/segmented treatment + trim tab emoji (§C1).
7. Unify the **button system** to one elevation recipe + clear primary/secondary hierarchy (§D2).
8. Make **all empty states** rich (Poppie + head + body + CTA) via one helper (§D5).

**P2 — final 10% polish**
9. Normalise **spacing** to the `--sp-*` scale; standardise card padding (§D3).
10. Collapse the **five pill systems** into one shared spec (§D6).
11. Quiet the **factcard** list separators + number bullets (§B3); calm `.dcard` hover motion (§D7).
12. Scale `.blockhead` with a clamp (§D4).

---

### What NOT to change
The frame/sticker image fallback system, the bento `.gallery`, the catbook storybook pager, the badge/stamp gamification, the countdown hero, and the Poppie mascot moments are all genuinely good and carry the "premium-but-playful" tone already. The work above is about making the *information chrome* live up to them.
