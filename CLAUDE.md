# CLAUDE.md — Poppy's Atlas (working memory)

> Read this first. It is the durable memory for this project — it survives
> context compaction. Keep it up to date when workflows, conventions, or the
> architecture change. Deep detail lives in `docs/`.

## What this is

**Poppy's Atlas** — a polished, offline-capable **kids' travel PWA** guided by
Poppy the crowned tuxedo cat. Countdowns, destination guides, quizzes, an
interactive flight-path map, a passport of adventures, and a headline
**World Cat Atlas** (cat-spotting game). Aimed at two kids: **Jean-Luc** & **Hailey**.

**The entire app is a single file: `index.html`** (~840 KB: HTML + CSS + vanilla
JS, no framework, no build step). Everything else is assets, tests, and this docs set.

- **Live:** https://w5pvst9r7g-ui.github.io/Kids-Travel/
- **Repo:** `w5pvst9r7g-ui/kids-travel`

## Golden rules (standing user preferences — do not violate)

1. **Never remove features.** Refactor/relocate is fine; deleting user-facing
   functionality is not.
2. **Every change: develop on `claude/kids-travel-app-NXWkh`, then mirror to
   `main`.** Push to **both**. `main` auto-deploys to GitHub Pages.
3. **Always deploy after a change** (the push to `main` does it automatically now;
   see Deploy). If a manual nudge is needed, trigger the `pages.yml` workflow.
4. **Run `npm test` before every push.** It must pass.
5. **Never put the model identifier** (`claude-opus-4-8[1m]` etc.) in commits, PR
   text, code comments, or anything pushed to the repo. Chat only.
6. Commit messages end with the configured `Co-Authored-By:` + `Claude-Session:`
   trailers (the harness supplies these).

## Commands

```bash
npm test        # test/smoke.test.js — parses index.html, evals its JS in a DOM
                # stub, opens every view/destination, asserts data+asset invariants.
                # Node 18+, zero deps. MUST pass before pushing.
```

Ship a change (the standard loop):
```bash
# ...edit index.html...
npm test
git add -A && git commit -m "..."          # on claude/kids-travel-app-NXWkh
git push -u origin claude/kids-travel-app-NXWkh
git push origin claude/kids-travel-app-NXWkh:main   # mirror → triggers deploy
```

## Deploy (GitHub Pages)

- `.github/workflows/pages.yml` publishes `index.html` on every push to `main`
  (and via `workflow_dispatch`). **Single job, no `environment:` gate** — that
  gate previously rejected `main` at job-setup (2-second, zero-step failures).
  The job self-enables Pages via `actions/configure-pages@v5` (`enablement: true`),
  so **no repo Settings toggle is needed**.
- `.github/workflows/ci.yml` runs `node --check sw.js` + `npm test` on every push/PR.
- The sandbox network **cannot reach `*.github.io`** (egress allowlist → 403
  "Host not in allowlist"); `github.com` is reachable. So the live URL can't be
  curled from here — verify deploys via the Actions run conclusion instead
  (GitHub MCP: `actions_list` → job `publish` = success; use `jq` on the saved
  tool-result file, the JSON is too big to inline).

## Conventions

- **CSS design tokens** in `:root` (`--teal/--coral/--grape/--yellow/--green`,
  `--bg/--surface/--ink`, `--shadow*`, `--clay`, `--r*` radii, `--display/--sans/--hand`
  fonts). Style via tokens so light/**night mode** (`html.night …`) and mobile both work.
- **Design language: Claymorphism** (soft 3D, puffy gradient buttons, layered
  inset+drop shadows, chunky radii, gentle bounce). Applied via tokens.
- **Self-hosted fonts** in `fonts/` (Baloo 2 / Nunito / Caveat) — no Google Fonts
  `<link>` (the smoke test enforces this) so it works offline.
- **Per-profile storage:** `dataKey(base) => 'globie_atlas_'+base+'_v9_'+(currentProfile||'guest')`.
  Two exceptions use **shared** keys: cat sightings (docs/CAT-ATLAS.md) and
  Reef Dex sightings (`globie_atlas_reefdex_v1`, docs/REEF-DEX.md — scoring is
  derived at read time; cloud restore union-merges this key).
- **Views** (`showView(v)`): explore, upcoming, map, trips(Journal), badges,
  messages(Mail), **cats** (Cat Atlas), **reef** (Reef Dex — date/log-gated via
  `reefUnlocked()`, docs/REEF-DEX.md), world, packing, detail. Nav lives in
  `nav.top` (desktop) + `.tabbar` (mobile) — keep both in sync when adding a view.
- **Modals** use `modalCapture`/`modalRestore` (focus return), `MODAL_SEL` (focus
  trap + registry), and an Escape handler. Register any new modal in all three.
- **Profiles:** `jeanluc` (DOB 2016), `hailey` (DOB 2019). Family PIN default `1985`.
- **Achievements:** `ACHIEVEMENTS[]` with `test:c=>…` against `achContext()`.
  Progress bars via `badgeProgress()`. Smoke test asserts **≥40** — currently 58;
  never drop below 40.

## QA harness (headless browser)

For visual/behaviour checks beyond the smoke test, use headless Chromium (already
installed at `/tmp/chromium`, with `@sparticuz/chromium` + `puppeteer-core` under
`/tmp/node_modules`). Load `file:///home/user/Kids-Travel/index.html`, then
`signIn('hailey')` → `skipSplash()` → `closeOnboard()`. **Stub these** (the sandbox
blocks them): `navigator.geolocation.getCurrentPosition` (override the method
directly — the object is read-only) and Leaflet (`window.L`; the CDN is blocked, so
the cat map shows its graceful offline fallback — that's expected here, works live).
Seed `localStorage` to exercise data-dependent UI. Scratch scripts go in the
scratchpad dir, not the repo.

## Map of the codebase

- `index.html` — the app. See **docs/ARCHITECTURE.md** for the section-by-section map.
- `sw.js` — service worker. Network-first for HTML (deploys never go stale),
  cache-first for assets. Bump `CACHE` (`poppie-atlas-vN`) only if asset caching
  needs invalidating.
- `test/smoke.test.js` — the suite.
- `streams/` — source data modules **folded into index.html** (reference only; the
  app does not load them at runtime).
- `TODO.md` — living changelog / roadmap (newest work under "Latest"). Update it
  with each shipped change.
- `docs/` — **ARCHITECTURE.md** (technical map + data models + gotchas),
  **CAT-ATLAS.md** (the cat subsystem, our most-developed feature).

## Recent focus (2026)

The **World Cat Atlas** grew into a headline feature: shared cross-trip/cross-kid
cat sightings, a quick-log FAB, a dedicated top-level **Cats** view (leaderboard,
coat-collection "Catdex", by-country, feed, stats, badges), photo capture with map
thumbnails, and a full-screen photo **slideshow**. Full spec in docs/CAT-ATLAS.md.

For the Jul–Aug 2026 Kandima trip the **Reef Dex** joined it as the second big
game: a 42-species marine-spotting Pokédex with per-kid reveal, once-per-kid
scoring, family-first crowns and a head-to-head race view. Spec in
docs/REEF-DEX.md.
