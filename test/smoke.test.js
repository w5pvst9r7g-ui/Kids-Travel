#!/usr/bin/env node
/* Poppy's Atlas — smoke test suite (no deps).
 * Parses the single-file app, evaluates its main <script> in a lightweight DOM
 * stub, then exercises every screen + key action and asserts a set of invariants.
 * Run: `node test/smoke.test.js` (or `npm test`). Exits non-zero on any failure.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

let failures = 0;
const ok = (name) => console.log('  ✓ ' + name);
const fail = (name, msg) => { failures++; console.error('  ✗ ' + name + (msg ? ' — ' + msg : '')); };
function check(name, cond, msg) { cond ? ok(name) : fail(name, msg); }
function section(t) { console.log('\n' + t); }

/* ---------- 1. extract + syntax-check the main script ---------- */
section('Build / syntax');
const blocks = [];
const re = /<script>([\s\S]*?)<\/script>/g;
let m; while ((m = re.exec(html))) blocks.push(m[1]);
check('exactly one inline <script> block', blocks.length === 1, 'found ' + blocks.length);
const main = blocks.sort((a, b) => b.length - a.length)[0];
let mainSyntaxOK = true;
try { new Function(main); } catch (e) { mainSyntaxOK = false; fail('index.html main script parses', e.message); }
if (mainSyntaxOK) ok('index.html main script parses');

let swOK = true;
try { new Function('self', fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8')); } catch (e) { swOK = false; fail('sw.js parses', e.message); }
if (swOK) ok('sw.js parses');

/* ---------- 2. DOM stub + evaluate the app ---------- */
const store = {};
global.localStorage = { get length() { return Object.keys(store).length; }, key: i => Object.keys(store)[i],
  getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } };
function Style() {} Style.prototype.setProperty = function () {}; Style.prototype.getPropertyValue = function () { return ''; };
function El() { this.style = new Style(); this.dataset = {}; this.children = []; this.hidden = false; this._html = ''; this._t = '';
  this.classList = { _s: new Set(), add(c){this._s.add(c);}, remove(c){this._s.delete(c);}, contains(c){return this._s.has(c);}, toggle(c,f){ f===undefined?(this._s.has(c)?this._s.delete(c):this._s.add(c)):(f?this._s.add(c):this._s.delete(c)); } }; }
Object.defineProperty(El.prototype, 'innerHTML', { get() { return this._html; }, set(v) { this._html = v; } });
Object.defineProperty(El.prototype, 'textContent', { get() { return this._t; }, set(v) { this._t = v; } });
El.prototype.setAttribute = function (k, v) { this['_attr_' + k] = v; };
El.prototype.getAttribute = function (k) { return this['_attr_' + k] != null ? this['_attr_' + k] : null; };
El.prototype.appendChild = function (c) { this.children.push(c); return c; };
El.prototype.addEventListener = function () {}; El.prototype.removeEventListener = function () {};
El.prototype.querySelector = function () { return new El(); }; El.prototype.querySelectorAll = function () { return []; };
El.prototype.scrollIntoView = function () {}; El.prototype.focus = function () {}; El.prototype.remove = function () {};
El.prototype.insertAdjacentHTML = function () {}; El.prototype.closest = function () { return null; };
El.prototype.getBoundingClientRect = function () { return { left: 0, top: 0, width: 10, height: 10 }; };
const elc = {};
global.document = { getElementById: id => elc[id] || (elc[id] = new El()), createElement: () => new El(), createTextNode: () => new El(),
  querySelector: () => new El(), querySelectorAll: () => [], addEventListener: () => {}, body: new El(), documentElement: new El(), head: new El() };
global.window = { addEventListener: () => {}, matchMedia: () => ({ matches: false, addEventListener() {} }), location: { href: '', protocol: 'file:' }, scrollTo: () => {}, print: () => {} };
global.navigator = {}; global.requestAnimationFrame = f => { f && f(); }; global.setTimeout = () => {}; global.setInterval = () => {};
global.Image = function () { return new El(); }; global.addEventListener = () => {}; global.matchMedia = global.window.matchMedia;
global.confetti = () => {}; global.alert = () => {}; global.confirm = () => true; global.FileReader = function () {};

section('App boots');
let API = null;
try {
  const exposed = '\n;globalThis.__API={openDest,DESTS,renderWorld,setWorldDim,renderStats,renderUpcoming,renderFeatured,renderGrid,startQuiz,buildQuizPool,quickVisit,toggleWish,renderPassport,printPassport,EGG_LINES,ACHIEVEMENTS:(typeof ACHIEVEMENTS!=="undefined"?ACHIEVEMENTS:[]),WORLD_COUNTRIES:(typeof WORLD_COUNTRIES!=="undefined"?WORLD_COUNTRIES:[]),LOCAL_CATS:(typeof LOCAL_CATS!=="undefined"?LOCAL_CATS:{}),catStories,applyNight,applySound,sfx,cloudGather,PLANE_SVG,trips:(typeof trips!=="undefined"?trips:[]),PLACE_PHOTOS:(typeof PLACE_PHOTOS!=="undefined"?PLACE_PHOTOS:{}),matchGalleryIndex,FOOD_BY_COUNTRY:(typeof FOOD_BY_COUNTRY!=="undefined"?FOOD_BY_COUNTRY:{}),FOOD_FACTS:(typeof FOOD_FACTS!=="undefined"?FOOD_FACTS:{}),REEF_SPECIES:(typeof REEF_SPECIES!=="undefined"?REEF_SPECIES:[]),REEF_TIERS:(typeof REEF_TIERS!=="undefined"?REEF_TIERS:{}),REEF_CARDS:(typeof REEF_CARDS!=="undefined"?REEF_CARDS:{}),REEF_TYPES:(typeof REEF_TYPES!=="undefined"?REEF_TYPES:{}),REEF_SIL:(typeof REEF_SIL!=="undefined"?REEF_SIL:{}),renderReefDex,reefStats,reefLogSpecies,reefUnlocked,openReefLog,closeReefLog,renderReefLog,reefPanelHTML,cloudApply};';
  new Function(main + exposed)();
  API = globalThis.__API;
  ok('app initialises without throwing');
} catch (e) { fail('app initialises without throwing', e.message); }

/* ---------- 3. data invariants ---------- */
if (API) {
  section('Data invariants');
  check('>= 37 destinations', API.DESTS.length >= 37, 'got ' + API.DESTS.length);
  check('>= 70 world countries', API.WORLD_COUNTRIES.length >= 70, 'got ' + API.WORLD_COUNTRIES.length);
  check('>= 40 achievements', API.ACHIEVEMENTS.length >= 40, 'got ' + API.ACHIEVEMENTS.length);
  check('>= 60 Easter-egg lines', API.EGG_LINES.length >= 60, 'got ' + API.EGG_LINES.length);
  const reqCountries = ['Ireland','Australia','New Zealand','Singapore','South Africa','France','United Kingdom','Spain','United States','Croatia','Maldives','Greece','Morocco','Switzerland','Austria'];
  const wcNames = new Set(API.WORLD_COUNTRIES.map(c => c.name));
  check('world dataset has all visited/home countries', reqCountries.every(n => wcNames.has(n)), 'missing ' + reqCountries.filter(n => !wcNames.has(n)).join(', '));
  check('upcoming cats have a story series (>=2 tales)', ['maldives','sunshinecoast','rabat'].every(id => API.catStories(API.LOCAL_CATS[id]).length >= 2));
  let okDest = true;
  for (const d of API.DESTS) { if (!d.id || !d.name || !d.country || !d.photos || !d.photos.length) { okDest = false; break; } }
  check('every destination has id/name/country/photos', okDest);

  /* ---------- 3a. Reef Dex data integrity ---------- */
  section('Reef Dex data');
  const RS = API.REEF_SPECIES || [];
  check('>= 40 reef species', RS.length >= 40, 'got ' + RS.length);
  check('reef species ids are unique', new Set(RS.map(s => s.id)).size === RS.length);
  const RTIERS = new Set(Object.keys(API.REEF_TIERS || {}));
  let badSp = null;
  for (const s of RS) {
    if (!s.id || !s.nm || !s.nick || !s.em || !s.g || !s.fact || !RTIERS.has(s.tier) || typeof s.hue !== 'number') { badSp = s.id || s.nm || '?'; break; }
  }
  check('every reef species has id/nm/nick/em/g/tier/fact/hue', badSp === null, badSp || '');
  const RGROUPS = new Set(RS.map(s => s.g));
  check('reef species span 5 regions', RGROUPS.size === 5, [...RGROUPS].join(','));
  check('>= 60 reef species (the big dex)', RS.length >= 60, 'got ' + RS.length);
  let badKind = null, kindCount = 0, photoCount = 0;
  for (const s of RS) {
    if (Array.isArray(s.ph) && s.ph.length) photoCount++;
    if (s.kinds) {
      if (new Set(s.kinds.map(k => k.id)).size !== s.kinds.length) { badKind = s.id + ' dupe kind ids'; break; }
      for (const k of s.kinds) {
        kindCount++;
        if (!k.id || !k.nm || typeof k.note !== 'string' || !Array.isArray(k.photos)) { badKind = s.id + '/' + (k.id || '?'); break; }
      }
    }
    if (badKind) break;
  }
  check('every kind has id/nm/note/photos + unique ids', badKind === null, badKind || '');
  check('>= 55 species have a photo', photoCount >= 55, photoCount + ' with photos');
  check('>= 30 exact kinds to identify', kindCount >= 30, 'got ' + kindCount);
  check('every species has a GO-style silhouette path',
    RS.every(s => typeof API.REEF_SIL[s.id] === 'string' && /^M/.test(API.REEF_SIL[s.id])),
    'missing: ' + RS.filter(s => !API.REEF_SIL[s.id]).map(s => s.id).join(','));
  check('every species has a trading card (type/hp/2 moves)',
    RS.every(s => { const c = API.REEF_CARDS[s.id]; return c && API.REEF_TYPES[c.ty] && c.hp > 0 && Array.isArray(c.mv) && c.mv.length === 2 && c.mv.every(m => m[0] && typeof m[1] === 'number' && m[2]); }),
    'missing/invalid cards: ' + RS.filter(s => !API.REEF_CARDS[s.id]).map(s => s.id).join(','));
  check('a Legendary tier exists to chase', RS.some(s => s.tier === 'l'));
  check('safety facts intact (triggerfish + lionfish warnings)',
    /SIDEWAYS/.test(RS.find(s => s.id === 'triggerfish').fact) && /never ever touch/i.test(RS.find(s => s.id === 'lionfish').fact));
  check('Reef tab is registered in the guide + both navs',
    /🤿 Reef Dex/.test(html) && (html.match(/data-view="reef"/g) || []).length >= 2 && html.indexOf('#reefLogModal') !== -1);
  check('reef achievements present (>= 8)', API.ACHIEVEMENTS.filter(a => /^reef_/.test(a.id)).length >= 8);
  check('kid-facing creature counts match REEF_SPECIES.length',
    new RegExp(RS.length + ' amazing creatures').test(html) && new RegExp(RS.length + ' creatures live around Kandima').test(html),
    'static copy out of sync with ' + RS.length + ' species');

  /* ---------- 3b. food data integrity ---------- */
  section('Food data');
  const FOOD = API.FOOD_BY_COUNTRY || {};
  const noFood = API.DESTS.filter(d => !(FOOD[d.country] || FOOD[d.name]));
  check('every destination country has a food list', noFood.length === 0, 'missing: ' + [...new Set(noFood.map(d => d.country))].join(', '));
  const TAGS = new Set(['main', 'snack', 'sweet', 'drink']);
  let badFood = null, sweetCountries = 0;
  for (const co of Object.keys(FOOD)) {
    const list = FOOD[co];
    if (!Array.isArray(list) || list.length < 4) { badFood = co + ' has <4 dishes'; break; }
    if (list.some(f => f[3] === 'sweet')) sweetCountries++;
    for (const f of list) {
      if (!Array.isArray(f) || f.length < 4 || !f[0] || !f[1] || !f[2] || !TAGS.has(f[3])) { badFood = co + ' / ' + (f && f[1]); break; }
    }
    if (badFood) break;
  }
  check('every dish is [emoji, name, description, valid-tag]', badFood === null, badFood || '');
  check('every cuisine offers a sweet treat', sweetCountries === Object.keys(FOOD).length, sweetCountries + '/' + Object.keys(FOOD).length);
  check('Food tab is registered in the guide', /🍽️ Yummy food/.test(html) && html.indexOf("'food'") !== -1);
  const FACTS = API.FOOD_FACTS || {};
  const noFact = [...new Set(API.DESTS.map(d => d.country))].filter(c => !FACTS[c]);
  check('every cuisine has a fun food fact', noFact.length === 0, 'missing: ' + noFact.join(', '));

  /* ---------- 4. render every screen + actions ---------- */
  section('Renders every screen + actions');
  let renderErr = [];
  const tryit = (label, fn) => { try { fn(); } catch (e) { renderErr.push(label + ': ' + e.message); } };
  API.DESTS.forEach(d => tryit('openDest ' + d.id, () => API.openDest(d.id)));
  ['tourism','beauty','area','population'].forEach(k => tryit('world ' + k, () => API.setWorldDim(k)));
  ['renderStats','renderUpcoming','renderFeatured','renderGrid','renderPassport','printPassport'].forEach(fnName =>
    tryit(fnName, () => API[fnName]()));
  ['paris','maldives','tirana','rabat','sunshinecoast'].forEach(id => { if (API.DESTS.find(d => d.id === id)) tryit('quiz ' + id, () => { API.openDest(id); API.startQuiz(); }); });
  tryit('quickVisit', () => API.quickVisit(API.DESTS[0].id));
  tryit('toggleWish', () => { API.toggleWish(API.DESTS[1].id); API.toggleWish(API.DESTS[1].id); });
  tryit('renderReefDex', () => API.renderReefDex());
  tryit('reefPanelHTML', () => API.reefPanelHTML(API.DESTS.find(d => d.id === 'maldives')));
  tryit('reef log modal steps', () => { API.openReefLog(); API.renderReefLog(); API.openReefLog('clownfish'); API.closeReefLog(); });
  check('all screens + actions render without throwing', renderErr.length === 0, renderErr.slice(0, 4).join(' | '));

  /* reef scoring is derived + consistent: log one species, stats must move */
  tryit('reef scoring consistency', () => {
    const before = API.reefStats();
    const g = API.reefLogSpecies('clownfish');
    const after = API.reefStats();
    if (!g || after.total !== before.total + 1) throw new Error('log did not append');
    if (after.speciesCount < before.speciesCount) throw new Error('speciesCount went backwards');
    const recomputed = Object.keys(after.byKid).reduce((n, id) => n + after.byKid[id].points, 0);
    if (recomputed !== after.points) throw new Error('points not recomputable from byKid');
  });
  check('reef scoring stays consistent after logging', renderErr.length === 0, renderErr.slice(0, 4).join(' | '));

  /* cloud restore must union-merge the reef log, and corrupt payloads must never wipe it */
  tryit('reef cloud merge safety', () => {
    const t0 = API.reefStats().total;
    if (t0 < 1) throw new Error('expected a logged entry from the previous check');
    API.cloudApply({ 'globie_atlas_reefdex_v1': '{corrupt json' });
    if (API.reefStats().total !== t0) throw new Error('corrupt cloud payload wiped the local log');
    API.cloudApply({ 'globie_atlas_reefdex_v1': JSON.stringify({ log: [{ id: 'zz_merge_1', sp: 'gecko', ts: 12345, by: 'jeanluc' }] }) });
    if (API.reefStats().total !== t0 + 1) throw new Error('cloud restore did not union-merge (got ' + API.reefStats().total + ', want ' + (t0 + 1) + ')');
  });
  check('reef cloud merge: unions logs, survives corrupt payloads', renderErr.length === 0, renderErr.slice(0, 4).join(' | '));

  /* quiz pool depth */
  let minPool = Infinity, minId = '';
  API.DESTS.forEach(d => { const n = API.buildQuizPool(d).pool.length; if (n < minPool) { minPool = n; minId = d.id; } });
  check('quiz pool >= 30 for every destination', minPool >= 30, 'smallest: ' + minId + '=' + minPool);

  /* ---------- 4b. settings + helpers don't throw / behave ---------- */
  section('Settings + safety');
  let toggleErr = null;
  try { API.applyNight(true); } catch (e) { toggleErr = 'night on: ' + e.message; }
  check('night mode adds html.night class', document.documentElement.classList.contains('night'), toggleErr);
  try { API.applyNight(false); } catch (e) { toggleErr = e.message; }
  check('night mode clears html.night class', !document.documentElement.classList.contains('night'));
  let soundErr = null;
  try { API.applySound(false); API.sfx('win'); API.applySound(true); API.sfx('pop'); API.applySound(false); } catch (e) { soundErr = e.message; }
  check('sound toggle + sfx never throw', soundErr === null, soundErr);
  // cloud sync must never leak the secret config or non-app keys
  store['globie_cloud'] = '{"key":"SECRET"}';
  store['globie_atlas_trips_v9_hailey'] = '[1]';
  store['unrelated'] = 'x';
  const gathered = API.cloudGather();
  check('cloud backup includes app data', !!gathered['globie_atlas_trips_v9_hailey']);
  check('cloud backup excludes secret config + foreign keys', !gathered['globie_cloud'] && !gathered['unrelated']);
  check('paper-plane SVG defined (direction-safe)', typeof API.PLANE_SVG === 'string' && API.PLANE_SVG.indexOf('<svg') === 0);

  /* ---------- 4c. photos: no generic placeholders ---------- */
  section('Photos — no generic placeholders');
  check('no random picsum stock anywhere', html.indexOf('picsum.photos') === -1);
  const lorem = (html.match(/loremflickr\.com/g) || []).length;
  check('LoremFlickr only for cat covers (<=3 refs: dns-prefetch, flick(), comment)', lorem <= 3, lorem + ' refs');
  const customCities = [...new Set(API.trips.filter(t => !t.destId).map(t => t.city))];
  const pp = API.PLACE_PHOTOS || {};
  check('every guide-less journal trip has a curated photo', customCities.every(c => pp[c] && pp[c].length), 'missing: ' + customCities.filter(c => !(pp[c] && pp[c].length)).join(', '));
  // attraction→gallery matching actually fires for landmark-rich guides
  const paris = API.DESTS.find(d => d.id === 'paris');
  if (paris) { paris.__usedPics = new Set();
    const m = API.matchGalleryIndex(paris, 'Eiffel Tower', paris.__usedPics);
    check('attraction photos match by name (Eiffel Tower → a gallery photo)', m >= 0); }
}

/* ---------- 5. static / asset integrity ---------- */
section('Static + asset integrity');
check('no leftover capitalised "Poppie" (renamed to Poppy)', html.indexOf('Poppie') === -1);
check('<!DOCTYPE html> present', /^<!DOCTYPE html>/i.test(html.trim()));
check('viewport meta present', /name=["']viewport["']/.test(html));
check('theme-color meta present', /name=["']theme-color["']/.test(html));
check('manifest + apple-touch-icon links present', /rel=["']manifest["']/.test(html) && /rel=["']apple-touch-icon["']/.test(html));

// every locally-referenced asset exists on disk
const assetRe = /(?:src|href)=["'](?!https?:|data:|#|mailto:)([^"']+\.(?:png|jpg|jpeg|svg|webp|ico|css|js|woff2?))["']/gi;
const missing = new Set();
let a; while ((a = assetRe.exec(html))) { const f = a[1].replace(/^\.\//, '').split('?')[0]; if (f && !fs.existsSync(path.join(ROOT, f))) missing.add(f); }
// @font-face url(...) references
const fontRe = /url\((fonts\/[^)]+\.woff2)\)/g;
while ((a = fontRe.exec(html))) { if (!fs.existsSync(path.join(ROOT, a[1]))) missing.add(a[1]); }
check('self-hosted (no Google Fonts <link>)', !/fonts\.googleapis\.com/.test(html));
// icons referenced by the (JS-built) manifest
['icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'sw.js'].forEach(f => { if (!fs.existsSync(path.join(ROOT, f))) missing.add(f); });
check('all referenced local assets exist', missing.size === 0, [...missing].join(', '));

// big-asset budget: no single committed image over 600 KB (perf)
const heavy = fs.readdirSync(ROOT).filter(f => /\.(png|jpg|jpeg)$/i.test(f)).map(f => [f, fs.statSync(path.join(ROOT, f)).size]).filter(x => x[1] > 600 * 1024);
check('no image over 600 KB (perf budget)', heavy.length === 0, heavy.map(x => x[0] + '=' + (x[1] / 1024 | 0) + 'KB').join(', '));

/* ---------- summary ---------- */
console.log('\n' + (failures ? '✗ ' + failures + ' check(s) failed' : '✓ all checks passed'));
process.exit(failures ? 1 : 0);
