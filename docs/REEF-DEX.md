# 🤿 Reef Dex — The Great Kandima Creature Hunt

The headline feature for the July–August 2026 Maldives trip: a Pokédex-style
marine-spotting game that gets the kids snorkelling. All code lives in
`index.html` under the `/* REEF DEX */` sections (data/core near the MESSAGES
section; renderers directly after; CSS after the cat-atlas block).

## Data

- `REEF_SPECIES[]` — 42 defs `{id, nm, nick, em, g, tier, fact, hue, shiny?}`.
  Groups (`g`): `fish` Reef Fish · `giants` Ocean Giants · `crit` Beach & Reef
  Critters · `land` Island Life (`REEF_GROUPS` holds titles/blurbs).
  Tiers (`REEF_TIERS`): `c`ommon 1 pt · `u`ncommon 2 · `r`are 5 · `l`egendary 10.
  `hue` tints the card so repeated emoji still look distinct. `shiny:1` marks the
  glowing plankton (holo treatment). **The titan-triggerfish and lionfish facts
  are real safety advice — never edit them away** (the smoke test asserts them).
- `REEF_RANKS` — snorkel-rank ladder on a kid's *personal* points (0→90+,
  Beach Peeker → Ocean Legend).

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

`test/smoke.test.js` §"Reef Dex data": ≥40 unique species with full schema,
4 groups, Legendary present, safety facts intact, tab in both navs, modal
registered, ≥8 reef achievements, render fns don't throw, and a live logging
pass asserting points stay recomputable from the log.
