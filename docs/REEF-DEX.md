# 🤿 Reef Dex — The Great Kandima Creature Hunt

The headline feature for the July–August 2026 Maldives trip: a Pokédex-style
marine-spotting game that gets the kids snorkelling. All code lives in
`index.html` under the `/* REEF DEX */` sections (data/core near the MESSAGES
section; renderers directly after; CSS after the cat-atlas block).

## Data

- `REEF_SPECIES[]` — 63 defs `{id, nm, nick, em, g, tier, fact, hue, shiny?,
  ph?[], kinds?[]}`. `g` is a **region** id from `REEF_REGIONS` (Pokémon-style
  generations): `lagoonto` Gen 1 famous starters · `coraljo` Gen 2 coral city ·
  `deepenn` Gen 3 big blue · `shadowsinn` Gen 4 hidden tricksters · `islandova`
  Gen 5 land. Tiers (`REEF_TIERS`): `c` 1 pt · `u` 2 · `r` 5 · `l` 10.
  `ph` = verified Wikimedia Commons filenames (rendered via `wmURL` with the
  `imgFail` fallback chain — offline degrades to the emoji art). `kinds[]` =
  exact-species variants `{id, nm, sci, note, photos}` on 16 generic entries
  (butterflyfish ×5, triggerfish ×4, sharks/turtles/rays ×3…). **Safety facts
  (titan triggerfish, lionfish, urchin, jellyfish, cone shell) are real advice —
  never edit them away** (the smoke test asserts the first two).
- `REEF_CARDS` + `REEF_TYPES` + `REEF_RARITY` — the trading-card layer: every
  species has `{ty, hp, mv:[[name,power,desc]×2]}` over 9 types. Rendered by
  `renderReefCard` into `#reefCardModal` (MODAL_SEL + Escape registered);
  locked cards show a silhouette + hidden powers until the signed-in kid has
  spotted the species; Legendary/Shiny get the gold holo frame.
- `REEF_RANKS` — snorkel-rank ladder on a kid's *personal* points (base max
  140; top rank 135 reachable on personal completion with zero firsts).

## Storage & scoring (the important invariants)

- **One shared store** `REEF_DEX_KEY='globie_atlas_reefdex_v1'` (like the cat
  atlas — the second exception to per-profile `dataKey`). Entries are only
  `{id, sp, ts, by}` — **nothing competitive is ever stored**.
- All numbers come from `reefStats()` at read time:
  - a species pays its tier points **once per kid** (their first-ever sighting);
  - the **family first** spotter (earliest `ts` among kid profiles) gets +1 and
    the 👑 crown — derived, so merges can never corrupt it;
  - `by:'guest'` counts in family totals/feed but never scores, never claims
    firsts, never appears in the versus card.
- **Per-kid reveal:** dex cards are silhouettes until the *signed-in* kid has
  logged that species (`rfxMySpecies`), so one kid can't spoil the hunt for the
  other. Spotter chips still show who else has it.
- Re-logs: allowed once per kid per species per day (`reefLoggedToday`), score
  nothing, feed the ×count and the feed.
- **Cloud restore** union-merges the reef log by entry id (`reefCloudMerge`
  inside `cloudApply`) instead of overwriting, so two devices can both log.

## UI surfaces

- Top-level **`reef` view** (both navs, `.reefnav hidden` toggled by
  `updateReefNav()`), gated by `reefUnlocked()`: visible from 30 days before
  the t27 trip through its `tripEndDate`, and **forever once the log is
  non-empty**. Recomputed in `showView`, login hooks and `applyProfileData`.
- `renderReefDex()` → ocean hero (`rfxHero`) · versus card (`rfxVersus`) ·
  actions · tier progress (`rfxProgress`) · Pokédex grid (`rfxDex`/`rfxCard`) ·
  feed (`rfxFeed`) · badges (`rfxBadges`).
- **Maldives guide tab** (`openDest` splices `['reef','🤿 Reef Dex']` at index 1;
  `panels.reef = reefPanelHTML(d)`) — compact hero + versus + 6-card teaser.
- **Log modal** `#reefLogModal` (in `MODAL_SEL` + Escape chain): pick → confirm
  (points preview, family-first callout) → celebrate. `rfxCatchSplash` is a
  transient, `pointer-events:none` overlay for Rare/Legendary/family-firsts —
  event-triggered only, skipped under `reduceMotion`.
- Trip-time **🤿 FAB** `#reefFab` (stacked above the cat FAB) — only while the
  Maldives trip `isUnderway`.
- Explore **banner** `#reefBanner` with live standings (`updateReefBanner`).

## Achievements

9 badges `reef_*` in `ACHIEVEMENTS[]`; context fields (`reefSpecies`,
`reefMine`, `reefMyPoints`, `reefMyFirsts`, `reefSharks`, `reefLegendaries`,
`reefMyGroups`, `reefTotal`) come from `achContext()`; every badge has a
`badgeProgress` P-table entry.

## Tests

`test/smoke.test.js` §"Reef Dex data": ≥60 unique species with full schema,
5 regions, Legendary present, safety facts intact, ≥55 species with photos,
≥30 exact kinds (validated schema), a valid trading card for every species,
tab in both navs, modals registered, ≥8 reef achievements, render fns don't
throw, a live logging pass asserting points stay recomputable, and a
cloud-merge pass asserting corrupt payloads can't wipe the log.
