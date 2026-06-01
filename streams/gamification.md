# Globie's Atlas — More Fun & Gamification

Ready-to-paste, framework-free vanilla-JS + CSS snippets for `index.html`. Everything
works **offline**, honours `prefers-reduced-motion`, is keyboard-accessible, and reuses
the existing palette (`--teal`, `--coral`, `--yellow`, `--grape`, `--green`, `--pink`,
`--display 'Baloo 2'`, `--sans 'Nunito'`) and existing helpers (`themeFor`, `stars`,
`starSVG`, `sticker`, `frameStyle`, `confetti`, `GLOBIE`, `showView`, `openDest`,
`haversine`, `HOME`, `trips`, `saveTrips`, `DESTS`, `reduceMotion`).

---

## Design overview

Five kid-delight features, each self-contained:

1. **Achievements / badge shelf** — a collectible set of badges (First Flight, Snow
   Seeker, Reef Explorer, 5 Countries, Around the World by km, one-per-continent, etc.)
   that unlock automatically as trips are saved. Persisted in its own localStorage key,
   shown as a shelf on the Map view, with a celebratory toast + confetti when one pops.
2. **"Surprise me! 🎲"** — a button (placed in the Explore hero) that spins through
   destination emojis like a slot reel, then opens a random destination via `openDest`.
3. **Per-destination QUIZ** — a "Test your explorer smarts" panel added as a 6th detail
   tab. Three multiple-choice questions are generated deterministically from the
   destination's own `country_info` (capital, language, currency) plus its region, with
   scoring, stars, and a Globie reaction. Best score persists per destination.
4. **Passport-stamp saved trips** — a CSS postmark/ink-stamp badge layered onto each
   journal `.entry`, rotated, showing country + year, while keeping the existing
   Edit/Delete actions untouched.
5. **Bonus delight — Globie speech bubble** — Globie in the hero says a rotating, context
   aware greeting ("You've explored 4 countries! 🌍"), giving the mascot a voice.

All five are **additive**: paste the CSS into the `<style>` block, paste the JS just
before the final `INIT` block, add the small HTML hooks noted, and call the listed
`render…()` functions from existing render points. None of them require editing existing
function bodies except adding one or two function calls at clearly named spots.

> **Shared note on continents.** The `DESTS`/`trips` data has no continent field, so the
> achievements + map snippets below include a tiny `CONTINENT_OF` country→continent map.
> It is defined once inside the achievements JS; the bonus feature reuses it.

---

## Feature 1 — Collectible Achievements / Badge shelf

A definition-driven system. Each achievement has an `id`, `emoji`, `name`, `desc`, an
accent colour from the palette, and a `test(ctx)` predicate. `ctx` is computed from the
current `trips` (visited only, except where noted). Unlocked ids persist in
`localStorage`. `checkAchievements()` is called after any trip change; newly-unlocked
badges fire a toast (queued, one at a time) + `confetti()`.

### CSS — paste into the `<style>` block

```css
/* ============ ACHIEVEMENTS ============ */
.ach-shelf{margin-top:22px}
.ach-shelf .head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:14px}
.ach-shelf .head h3{font-size:1.4rem}
.ach-shelf .head .count{font-weight:800;color:var(--coral-d);font-family:var(--display)}
.ach-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(132px,1fr));gap:14px}
.ach{position:relative;background:var(--surface);border:2px solid var(--line);border-radius:var(--r-lg);
  padding:18px 12px 14px;text-align:center;box-shadow:var(--shadow-sm);transition:transform .18s, box-shadow .18s}
.ach.unlocked{border-color:transparent;box-shadow:0 10px 22px -12px var(--ac,#13B5AC), inset 0 0 0 2px var(--ac,#13B5AC)}
.ach.unlocked:hover{transform:translateY(-4px) rotate(-1deg);box-shadow:0 16px 28px -12px var(--ac,#13B5AC), inset 0 0 0 2px var(--ac,#13B5AC)}
.ach .em{font-size:2.5rem;line-height:1;filter:grayscale(1);opacity:.34;transition:.3s}
.ach.unlocked .em{filter:none;opacity:1}
.ach .nm{font-family:var(--display);font-weight:800;font-size:.92rem;color:var(--ink);margin-top:7px;line-height:1.15}
.ach .ds{font-size:.74rem;color:var(--ink-2);font-weight:700;margin-top:3px;line-height:1.3}
.ach.locked .nm,.ach.locked .ds{color:var(--muted)}
.ach .lock{position:absolute;top:9px;right:10px;font-size:.86rem;opacity:.5}
.ach.unlocked .lock{content:none}
@keyframes achPop{0%{transform:scale(.4);opacity:0}55%{transform:scale(1.12)}100%{transform:scale(1);opacity:1}}
.ach.justpop{animation:achPop .5s cubic-bezier(.2,.8,.3,1.2)}
@media(prefers-reduced-motion:reduce){.ach.justpop{animation:none}.ach.unlocked:hover{transform:none}}

/* unlock toast */
.ach-toast-wrap{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom));transform:translateX(-50%);
  z-index:4000;display:flex;flex-direction:column;gap:10px;align-items:center;pointer-events:none;width:min(360px,92vw)}
.ach-toast{pointer-events:auto;display:flex;align-items:center;gap:13px;background:var(--surface);
  border:2px solid var(--ac,#13B5AC);border-radius:var(--r-lg);padding:13px 18px 13px 14px;
  box-shadow:var(--shadow);transform:translateY(24px);opacity:0;transition:transform .35s cubic-bezier(.2,.8,.3,1.1),opacity .35s}
.ach-toast.in{transform:none;opacity:1}
.ach-toast .em{font-size:2.2rem;line-height:1;flex:none}
.ach-toast .tx b{display:block;font-family:var(--display);font-size:.72rem;letter-spacing:.06em;
  text-transform:uppercase;color:var(--ac,#13B5AC)}
.ach-toast .tx .nm{font-family:var(--display);font-weight:800;font-size:1.06rem;color:var(--ink);line-height:1.15}
.ach-toast .tx .ds{font-size:.8rem;color:var(--ink-2);font-weight:700}
@media(prefers-reduced-motion:reduce){.ach-toast{transition:opacity .2s}.ach-toast.in{transform:translateX(-50%) translateY(0)}}
```

### HTML — add one hook inside the Map view

In the `#map-view` section, place an empty shelf container right **after** the existing
`<div id="explorerBadge"></div>` (line ~459):

```html
<div id="achShelf" class="ach-shelf"></div>
```

A single toast wrapper is created on demand by the JS, so no other HTML is needed.

### JS — paste before the final `INIT` block

```javascript
/* =====================================================================
   ACHIEVEMENTS — collectible badges
   ===================================================================== */
const ACH_KEY='globie_atlas_achievements_v1';

/* country -> continent (covers all DESTS countries + a few extras) */
const CONTINENT_OF={
  Ireland:'Europe',Finland:'Europe',Greece:'Europe',Spain:'Europe',Portugal:'Europe',
  'Türkiye':'Asia',Turkey:'Asia',Maldives:'Asia',
  Morocco:'Africa',Madagascar:'Africa',
  Antarctica:'Antarctica'
  /* Americas / Oceania ready for future DESTS, e.g. Brazil:'South America', Japan:'Asia' */
};
const continentOf=t=>CONTINENT_OF[t.country]||null;

/* the catalogue. test(ctx) -> boolean. ac = accent colour from the palette. */
const ACHIEVEMENTS=[
  {id:'first_flight', em:'🛫', nm:'First Flight',  ds:'Save your first trip',        ac:'#13B5AC',
    test:c=>c.visited.length>=1},
  {id:'snow_seeker',  em:'❄️', nm:'Snow Seeker',   ds:'Visit a snowy place',         ac:'#46B3F0',
    test:c=>c.regions.has('Snow')},
  {id:'reef_explorer',em:'🐠', nm:'Reef Explorer', ds:'Visit a beach/island',        ac:'#0FA7AF',
    test:c=>c.regions.has('Beach')},
  {id:'city_slicker', em:'🏙️', nm:'City Slicker',  ds:'Visit a big city',            ac:'#F46A4B',
    test:c=>c.regions.has('City')},
  {id:'wild_one',     em:'🦎', nm:'Wild One',      ds:'Visit a wildlife spot',       ac:'#43C28A',
    test:c=>c.regions.has('Wildlife')},
  {id:'five_countries',em:'🖐️',nm:'5 Countries',  ds:'Visit 5 different countries', ac:'#FFC23C',
    test:c=>c.countries.size>=5},
  {id:'continent_hop',em:'🌐', nm:'Continent Hopper',ds:'Reach 3 continents',        ac:'#7C6CF4',
    test:c=>c.continents.size>=3},
  {id:'polar',        em:'🐧', nm:'Polar Pioneer', ds:'Reach Antarctica',            ac:'#48cae4',
    test:c=>c.continents.has('Antarctica')},
  {id:'around_world', em:'🌍', nm:'Around the World',ds:'Fly 40,000 km in total',    ac:'#FF7FB0',
    test:c=>c.km>=40000},
  {id:'super_fan',    em:'⭐', nm:'Super Fan',      ds:'Give a trip 5 fun stars',     ac:'#F0A91E',
    test:c=>c.visited.some(t=>t.rating>=5)},
  {id:'planner',      em:'🗓️', nm:'Trip Planner',  ds:'Plan an upcoming trip',       ac:'#7C6CF4',
    test:c=>c.planned.length>=1},
  {id:'collector',    em:'🏆', nm:'Atlas Champion',ds:'Visit 8 of the world wonders',ac:'#FF8366',
    test:c=>c.visited.length>=8}
];

function loadAch(){ try{const s=localStorage.getItem(ACH_KEY); if(s) return new Set(JSON.parse(s));}catch(e){}
  return new Set(); }
function saveAch(set){ try{localStorage.setItem(ACH_KEY,JSON.stringify([...set]));}catch(e){} }
let unlockedAch=loadAch();

/* derive the context the tests run against */
function achContext(){
  const visited=trips.filter(t=>!t.planned);
  const planned=trips.filter(t=>t.planned);
  const countries=new Set(visited.map(t=>t.country).filter(Boolean));
  const continents=new Set(visited.map(continentOf).filter(Boolean));
  const regions=new Set(visited.map(t=>{const d=DESTS.find(x=>x.id===t.destId);return d&&d.region;}).filter(Boolean));
  let km=0; visited.forEach(t=>{ if(t.lat!=null&&t.lng!=null) km+=haversine(HOME,{lat:t.lat,lng:t.lng})*2; });
  return {visited,planned,countries,continents,regions,km};
}

/* render the shelf (call after any trip change, and once at init) */
function renderAchievements(){
  const host=document.getElementById('achShelf'); if(!host) return;
  const ctx=achContext();
  const got=ACHIEVEMENTS.filter(a=>unlockedAch.has(a.id)).length;
  host.innerHTML=`
    <div class="head"><h3>🏅 Explorer Badges</h3>
      <span class="count">${got} / ${ACHIEVEMENTS.length} collected</span></div>
    <div class="ach-grid">${ACHIEVEMENTS.map(a=>{
      const on=unlockedAch.has(a.id);
      return `<div class="ach ${on?'unlocked':'locked'}" style="--ac:${a.ac}"
                tabindex="0" role="group"
                aria-label="${a.nm}. ${on?'Unlocked':'Locked'}. ${a.ds}.">
        ${on?'':'<span class="lock" aria-hidden="true">🔒</span>'}
        <div class="em" aria-hidden="true">${a.em}</div>
        <div class="nm">${a.nm}</div><div class="ds">${a.ds}</div>
      </div>`;
    }).join('')}</div>`;
}

/* evaluate, persist, and toast anything newly earned. opts.silent skips toasts (init). */
function checkAchievements(opts){
  const ctx=achContext(); const fresh=[];
  ACHIEVEMENTS.forEach(a=>{ if(!unlockedAch.has(a.id) && a.test(ctx)){ unlockedAch.add(a.id); fresh.push(a); } });
  if(fresh.length){ saveAch(unlockedAch); }
  renderAchievements();
  if(fresh.length && !(opts&&opts.silent)){
    fresh.forEach((a,i)=>setTimeout(()=>showAchToast(a), i*900));
    if(!reduceMotion) confetti();
    // gently flag the freshly-popped tiles
    requestAnimationFrame(()=>document.querySelectorAll('#achShelf .ach.unlocked')
      .forEach((el,idx)=>{ if(fresh.some(f=>el.getAttribute('aria-label').startsWith(f.nm))) el.classList.add('justpop'); }));
  }
  return fresh;
}

/* celebratory toast */
function showAchToast(a){
  let wrap=document.getElementById('achToastWrap');
  if(!wrap){ wrap=document.createElement('div'); wrap.id='achToastWrap'; wrap.className='ach-toast-wrap';
    wrap.setAttribute('aria-live','polite'); document.body.appendChild(wrap); }
  const t=document.createElement('div'); t.className='ach-toast'; t.style.setProperty('--ac',a.ac);
  t.setAttribute('role','status');
  t.innerHTML=`<div class="em" aria-hidden="true">${a.em}</div>
    <div class="tx"><b>Badge unlocked!</b><div class="nm">${a.nm}</div><div class="ds">${a.ds}</div></div>`;
  wrap.appendChild(t);
  requestAnimationFrame(()=>t.classList.add('in'));
  setTimeout(()=>{ t.classList.remove('in'); setTimeout(()=>t.remove(),400); }, 3600);
}
```

### WHERE TO INTEGRATE

- **HTML:** add `<div id="achShelf" class="ach-shelf"></div>` after `#explorerBadge` in
  the `#map-view` section (~line 459).
- **At init** (final `INIT` block ~line 1319): add `checkAchievements({silent:true});`
  after `renderPassport();`. (`{silent:true}` retro-grants badges for the seed trips
  without spamming toasts on first load; the shelf still renders.)
- **On save** (`#saveTrip` click handler ~line 1260–1266): after `saveTrips();` /
  `if(map)initMap();`, append `checkAchievements();` (replaces the silent flag — toasts
  are wanted here). Place it after `if(isNew) confetti();`.
- **On delete** (`delTrip` ~line 1279): add `renderAchievements();` after `saveTrips();`
  so the count refreshes. (Do not *revoke* earned badges — kids keep what they earned.)
- **In `renderStats()`** (~line 1184): optionally add `checkAchievements({silent:true});`
  at the end so the shelf re-renders whenever the Map view opens. Harmless if already
  current.

---

## Feature 2 — "Surprise me! 🎲" random destination

A button that runs a short slot-reel animation cycling destination emojis, then calls the
existing `openDest()` on a randomly chosen destination. Reduced-motion users skip straight
to the destination.

### CSS — paste into the `<style>` block

```css
/* ============ SURPRISE ME ============ */
.btn-surprise{background:var(--grape);color:#fff;box-shadow:0 5px 0 0 #5b49d6}
.btn-surprise:hover{transform:translateY(-2px);background:#8a7bf6}
.btn-surprise .reel{display:inline-block;min-width:1.3em;text-align:center}
.btn-surprise.spinning{pointer-events:none}
.btn-surprise.spinning .reel{animation:reelpop .12s linear infinite}
@keyframes reelpop{0%{transform:translateY(-3px) scale(1.15)}100%{transform:translateY(2px) scale(.95)}}
@media(prefers-reduced-motion:reduce){.btn-surprise.spinning .reel{animation:none}}
```

### HTML — add the button to the hero CTA row

Inside the Explore hero `.cta` div (~line 416–419), add as a third button:

```html
<button class="btn btn-surprise" id="surpriseBtn" type="button">
  <span class="reel" aria-hidden="true">🎲</span> Surprise me!
</button>
```

### JS — paste before the final `INIT` block

```javascript
/* =====================================================================
   SURPRISE ME — spin to a random destination
   ===================================================================== */
function surpriseMe(){
  const btn=document.getElementById('surpriseBtn'); if(!btn) return;
  const reel=btn.querySelector('.reel');
  const pick=DESTS[Math.floor(Math.random()*DESTS.length)];
  if(reduceMotion){ openDest(pick.id); return; }
  if(btn.classList.contains('spinning')) return;
  btn.classList.add('spinning');
  const faces=DESTS.map(d=>d.emoji);
  let ticks=0; const total=16+Math.floor(Math.random()*6);
  const iv=setInterval(()=>{
    reel.textContent=faces[Math.floor(Math.random()*faces.length)];
    if(++ticks>=total){
      clearInterval(iv);
      reel.textContent=pick.emoji;
      setTimeout(()=>{ btn.classList.remove('spinning'); reel.textContent='🎲'; openDest(pick.id); }, 320);
    }
  }, 70);
}
const _surpriseBtn=document.getElementById('surpriseBtn');
if(_surpriseBtn) _surpriseBtn.addEventListener('click',surpriseMe);
```

### WHERE TO INTEGRATE

- **HTML:** add the `#surpriseBtn` button inside the hero `.cta` row (~line 416).
- **JS:** paste the block before `INIT`. The listener self-attaches at parse time because
  the button already exists in the static HTML. No call needed from any render function.

---

## Feature 3 — Per-destination QUIZ ("Test your explorer smarts")

A 6th detail tab. Three multiple-choice questions are built **deterministically** from the
open destination's own data — capital, language, currency (from `country_info`) and region
— with plausible wrong answers drawn from the *other* destinations, so it always works
offline and never needs hand-written questions. Scoring shows stars via the existing
`stars()` helper, a Globie reaction line, and a Retry. Best score per destination persists.

### CSS — paste into the `<style>` block

```css
/* ============ QUIZ ============ */
.quiz{max-width:680px}
.quiz .qbest{display:inline-flex;align-items:center;gap:8px;background:var(--surface-2);color:var(--coral-d);
  font-weight:800;border-radius:999px;padding:7px 14px;margin-bottom:16px}
.qcard{background:var(--surface);border:2px solid var(--line);border-radius:var(--r);padding:20px 22px;
  box-shadow:var(--shadow-sm);margin-bottom:14px}
.qcard .qn{font-family:var(--display);font-weight:800;font-size:1.12rem;color:var(--ink);margin-bottom:13px;
  display:flex;gap:9px}
.qcard .qn .qi{flex:none;width:28px;height:28px;border-radius:50%;background:var(--grape);color:#fff;
  font-size:.9rem;display:flex;align-items:center;justify-content:center}
.qopts{display:grid;gap:9px}
.qopt{display:flex;align-items:center;gap:11px;text-align:left;width:100%;background:var(--surface-2);
  border:2px solid var(--line);border-radius:var(--r-sm);padding:12px 15px;font-weight:700;color:var(--ink);
  font-size:1rem;font-family:var(--sans);transition:.15s}
.qopt:hover:not(:disabled){border-color:var(--teal);transform:translateX(3px)}
.qopt .mk{flex:none;width:24px;height:24px;border-radius:50%;border:2px solid var(--line);
  display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.84rem;color:var(--muted)}
.qopt.correct{border-color:var(--green);background:#EAFBF2;color:#1f8f63}
.qopt.correct .mk{border-color:var(--green);background:var(--green);color:#fff}
.qopt.wrong{border-color:var(--coral);background:#FFF1EC;color:var(--coral-d)}
.qopt.wrong .mk{border-color:var(--coral);background:var(--coral);color:#fff}
.qopt:disabled{cursor:default}
.quiz-result{text-align:center;background:linear-gradient(180deg,#fff,var(--surface-2));border:2px solid var(--line);
  border-radius:var(--r-lg);padding:26px 22px;box-shadow:var(--shadow-sm)}
.quiz-result .globie{width:76px;height:76px;margin:0 auto 8px}
.quiz-result h4{font-size:1.5rem;margin-bottom:4px}
.quiz-result .score{font-family:var(--display);font-weight:800;color:var(--coral-d);font-size:1.05rem;margin:6px 0}
.quiz-result .stars svg{width:26px;height:26px}
```

### JS — paste before the final `INIT` block

```javascript
/* =====================================================================
   QUIZ — three questions auto-built from each destination's facts
   ===================================================================== */
const QUIZ_KEY='globie_atlas_quiz_v1';
function loadQuizBest(){ try{return JSON.parse(localStorage.getItem(QUIZ_KEY))||{};}catch(e){return {};} }
function saveQuizBest(o){ try{localStorage.setItem(QUIZ_KEY,JSON.stringify(o));}catch(e){} }
let quizBest=loadQuizBest();
let quizState=null; // {dest, qs, answered:[]}

/* deterministic-ish shuffle so a given dest's options are stable within a session */
function shuffle(arr,seed){ const a=[...arr]; let s=seed||1;
  for(let i=a.length-1;i>0;i--){ s=(s*9301+49297)%233280; const j=Math.floor(s/233280*(i+1));
    [a[i],a[j]]=[a[j],a[i]]; } return a; }

/* build up to 3 questions from this dest + distractors from other dests */
function buildQuiz(d){
  const ci=d.country_info, others=DESTS.filter(x=>x.id!==d.id);
  const distract=(picker)=>{ const seen=new Set(), out=[];
    shuffle(others,d.id.length*7).forEach(o=>{ const v=picker(o);
      if(v && !seen.has(v)){ seen.add(v); out.push(v); } });
    return out; };
  const seed=d.id.length+d.name.length;
  const mk=(q,correct,pool,note)=>{
    const wrong=pool.filter(v=>v!==correct).slice(0,3);
    const opts=shuffle([correct,...wrong],seed+q.length).slice(0,Math.min(4,1+wrong.length));
    return {q, opts, correct, note};
  };
  const candidates=[];
  if(ci.capital)  candidates.push(mk(`What is the capital linked to ${d.name}?`, ci.capital,
                    distract(o=>o.country_info.capital), `The capital is ${ci.capital}.`));
  if(ci.currency) candidates.push(mk(`What money do people use in ${d.country}?`, ci.currency,
                    distract(o=>o.country_info.currency), `${d.country} uses the ${ci.currency}.`));
  if(ci.language) candidates.push(mk(`Which language would you hear in ${d.country}?`, ci.language,
                    distract(o=>o.country_info.language), `People speak ${ci.language}.`));
  candidates.push(mk(`Globie filed ${d.name} under which kind of adventure?`, d.region,
                    ['Beach','City','Snow','Wildlife'], `${d.name} is a ${d.region} adventure!`));
  return shuffle(candidates,seed).slice(0,3);
}

function quizPanelHTML(d){
  const best=quizBest[d.id];
  return `<div class="quiz">
    <h3 class="blockhead">🧠 Test your explorer smarts</h3>
    <p class="sub">Three quick questions about ${d.name}</p>
    ${best!=null?`<div class="qbest">🏅 Your best: ${best} / 3</div>`:''}
    <div id="quizBody"></div>
    <button class="btn btn-teal" id="quizStart" type="button">▶️ Start the quiz</button>
  </div>`;
}

function startQuiz(){
  const d=currentDest; if(!d) return;
  quizState={dest:d, qs:buildQuiz(d), answered:[]};
  document.getElementById('quizStart').style.display='none';
  renderQuizQuestions();
}

function renderQuizQuestions(){
  const body=document.getElementById('quizBody'); const st=quizState;
  body.innerHTML=st.qs.map((q,qi)=>{
    const done=st.answered[qi]!=null;
    return `<div class="qcard"><div class="qn"><span class="qi">${qi+1}</span><span>${q.q}</span></div>
      <div class="qopts">${q.opts.map((o,oi)=>{
        let cls=''; if(done){ if(o===q.correct)cls='correct'; else if(st.answered[qi]===oi)cls='wrong'; }
        return `<button class="qopt ${cls}" type="button" ${done?'disabled':''}
                  data-q="${qi}" data-o="${oi}" aria-pressed="${done&&st.answered[qi]===oi}">
          <span class="mk" aria-hidden="true">${'ABCD'[oi]}</span><span>${o}</span></button>`;
      }).join('')}</div></div>`;
  }).join('');
  body.querySelectorAll('.qopt:not(:disabled)').forEach(btn=>btn.addEventListener('click',()=>{
    const qi=+btn.dataset.q; if(quizState.answered[qi]!=null) return;
    quizState.answered[qi]=+btn.dataset.o;
    renderQuizQuestions();
    if(quizState.answered.filter(a=>a!=null).length===quizState.qs.length) setTimeout(finishQuiz,450);
  }));
}

function finishQuiz(){
  const st=quizState, d=st.dest;
  let score=0; st.qs.forEach((q,qi)=>{ if(q.opts[st.answered[qi]]===q.correct) score++; });
  if(quizBest[d.id]==null||score>quizBest[d.id]){ quizBest[d.id]=score; saveQuizBest(quizBest); }
  const lines=['Keep exploring — you’ll get them next time! 🦊',
    'Nice try, little explorer! 🌍','Great job — you really know your stuff! ⭐',
    'WOW! A perfect score, you’re a true Globetrotter! 🏆'];
  const body=document.getElementById('quizBody');
  body.insertAdjacentHTML('beforeend',`<div class="quiz-result">
    ${GLOBIE.replace('class="globie"','class="globie'+(reduceMotion?'':' bob')+'"')}
    <h4>${score===3?'Perfect!':'All done!'}</h4>
    <div class="score">You scored ${score} / 3</div>
    ${stars(score/3*5)}
    <p class="sub" style="margin:10px 0 16px">${lines[score]}</p>
    <button class="btn btn-yellow" id="quizRetry" type="button">🔁 Play again</button>
  </div>`);
  document.getElementById('quizRetry').addEventListener('click',()=>{
    const host=document.getElementById('panel-quiz'); host.innerHTML=quizPanelHTML(d);
    document.getElementById('quizStart').addEventListener('click',startQuiz);
  });
  if(score===3 && !reduceMotion) confetti();
  body.querySelector('.quiz-result').scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'nearest'});
}
```

### WHERE TO INTEGRATE — inside `openDest()` (~line 1081–1131)

The detail tabs are built from a `tabs` array and a `panels` object. Make three small
additions:

1. **Add the tab** — extend the `tabs` array (~line 1089):
   ```javascript
   const tabs=[['get','✈️ Getting there'],['info','🌍 The country'],['photos','📸 Photos'],
     ['see','🏛️ What to see'],['kids','🧒 Best for kids'],['quiz','🧠 Quiz']];
   ```
2. **Add the panel** — add a `quiz` entry to the `panels` object (alongside `kids`, ~line 1117):
   ```javascript
   quiz: quizPanelHTML(d),
   ```
3. **Wire the Start button** — the panels' tab-switch handler is set just below. After the
   `document.querySelectorAll('#dtabs button')...` block and before
   `document.getElementById('addFromDetail').onclick=...` (~line 1129), add:
   ```javascript
   const _qs=document.getElementById('quizStart');
   if(_qs) _qs.addEventListener('click',startQuiz);
   ```

`currentDest` (already set at the top of `openDest`) is what `startQuiz`/`buildQuiz` read,
so the quiz always matches the open destination. No other changes needed.

---

## Feature 4 — Passport-stamp saved trips

A CSS ink-stamp / postmark layered onto each journal `.entry`, rotated, showing the
country (or flag) and year. It is purely a visual upgrade — the existing `.yr` chip,
`.where` label, ratings, note, and Edit/Delete `.acts` all stay exactly as they are.

### CSS — paste into the `<style>` block

```css
/* ============ PASSPORT STAMP ============ */
.entry .stamp-mark{position:absolute;z-index:5;top:9px;left:9px;width:84px;height:84px;
  display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;
  color:var(--sc,#0E9890);border:2.5px solid currentColor;border-radius:50%;
  font-family:var(--display);font-weight:800;line-height:1;letter-spacing:.02em;
  transform:rotate(-13deg);opacity:.86;mix-blend-mode:multiply;
  box-shadow:inset 0 0 0 2px currentColor;background:transparent;pointer-events:none;
  -webkit-mask-image:radial-gradient(circle,#000 62%,transparent 63%),
    repeating-radial-gradient(circle,#000 0 3px,transparent 3px 6px);}
.entry .stamp-mark:before{content:"";position:absolute;inset:6px;border:1.5px dashed currentColor;
  border-radius:50%;opacity:.8}
.entry .stamp-mark .sc{font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;opacity:.85;margin-bottom:1px}
.entry .stamp-mark .sf{font-size:1.5rem;line-height:1;margin:1px 0}
.entry .stamp-mark .sy{font-size:.82rem;margin-top:1px}
.entry .stamp-mark.planned{--sc:#F0A91E}
/* nudge the existing year chip so it never sits under the stamp */
.entry .pic .yr{right:11px}
@media(prefers-reduced-motion:reduce){.entry .stamp-mark{transform:rotate(-13deg)}}
```

> The `-webkit-mask` gives a perforated "postmark" edge in WebKit/Blink; in browsers
> without mask support the badge simply shows as a clean double-ringed stamp (graceful
> fallback). `mix-blend-mode:multiply` makes it read like ink pressed onto the photo.

### JS — one helper, paste before the final `INIT` block

```javascript
/* =====================================================================
   PASSPORT STAMP markup for a journal entry
   ===================================================================== */
function stampMark(t){
  const code=(t.country||t.city||'').slice(0,3).toUpperCase()||'TRIP';
  return `<div class="stamp-mark ${t.planned?'planned':''}" aria-hidden="true">
      <span class="sc">${t.planned?'Booked':'Visited'}</span>
      <span class="sf">${t.flag||t.emoji||'🌍'}</span>
      <span class="sy">${t.year||''}</span>
    </div>`;
}
```

### WHERE TO INTEGRATE — inside `renderPassport()` (~line 1227–1233)

In the per-entry template, inject the stamp into the `.pic` block. Change the picture
markup so it starts with the stamp (it sits above the photo via `z-index`):

```javascript
return `<article class="entry">
  <div class="pic frame" style="${frameStyle(th)}">
    ${stampMark(t)}
    ${t.planned?'<span class="soon">Upcoming</span>':''}<span class="yr">${t.year||''}</span>
    ${sticker(t.emoji||(d&&d.emoji))}${pimg(kw,lk,520,330,t.city)}<div class="scrim"></div>
    <div class="where"><div class="c">${t.flag||''} ${t.country||''}</div><h4>${t.city}</h4></div>
  </div>
  ...unchanged .b block with stars/note/acts...
`;
```

Only the single `${stampMark(t)}` line is new; everything else in the entry (year chip,
where label, stars, note, Edit/Delete actions) is unchanged.

---

## Feature 5 (bonus) — Globie speaks

Gives the mascot a voice: a small speech bubble next to the hero Globie that rotates
through friendly, **context-aware** lines (it counts your real `trips`). It reuses the
existing `#heroGlobie` mount and the rotating-fact timer pattern.

### CSS — paste into the `<style>` block

```css
/* ============ GLOBIE SPEAKS ============ */
.hero .who{position:relative}
.globie-say{position:relative;background:#fff;color:var(--ink);border-radius:14px;
  padding:7px 13px;font-weight:700;font-size:.86rem;box-shadow:var(--shadow-sm);max-width:230px;
  line-height:1.35;animation:sayIn .4s ease}
.globie-say:after{content:"";position:absolute;left:-7px;top:16px;width:0;height:0;
  border:7px solid transparent;border-right-color:#fff;border-left:0}
@keyframes sayIn{from{opacity:0;transform:translateX(-6px) scale(.96)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){.globie-say{animation:none}}
@media(max-width:520px){.globie-say{display:none}}
```

### HTML — adjust the hero "who" row (~line 413)

Replace the static "Hi, I'm Globie!" pill with a bubble Globie can update:

```html
<div class="who">
  <span class="globie" id="heroGlobie"></span>
  <span class="globie-say" id="globieSay" role="status" aria-live="polite">Hi, I'm Globie! 🦊</span>
</div>
```

### JS — paste before the final `INIT` block

```javascript
/* =====================================================================
   GLOBIE SPEAKS — rotating, context-aware greetings
   ===================================================================== */
function globieLines(){
  const visited=trips.filter(t=>!t.planned);
  const countries=new Set(visited.map(t=>t.country).filter(Boolean)).size;
  const nextUp=trips.find(t=>t.planned);
  const lines=["Hi, I'm Globie! 🦊  Where shall we go?",
    "Tap any place to explore it with me! 🌍",
    "Try the 🎲 Surprise me button for a random adventure!"];
  if(countries>0) lines.push(`You've explored ${countries} ${countries===1?'country':'countries'} so far! 🧭`);
  if(nextUp) lines.push(`Counting down to ${nextUp.city}! ✈️`);
  lines.push("Don't forget to collect your explorer badges! 🏅");
  return lines;
}
let _sayI=0, _sayLines=globieLines();
function rotateGlobie(){
  const el=document.getElementById('globieSay'); if(!el) return;
  _sayLines=globieLines();                 // refresh in case trips changed
  el.textContent=_sayLines[_sayI%_sayLines.length];
  el.style.animation='none'; void el.offsetWidth; el.style.animation='';  // replay bubble pop
  _sayI++;
}
```

### WHERE TO INTEGRATE

- **HTML:** swap the hero `.who` block as shown above (~line 413).
- **At init** (final block ~line 1318–1321): after the existing `rotateFact()` line, add:
  ```javascript
  rotateGlobie(); setInterval(rotateGlobie, 5500);
  ```
- The lines auto-refresh from `trips` each rotation, so after the user saves a trip the
  bubble naturally starts mentioning their new count/countdown on the next tick. No call
  needed from the save handler.

---

## Paste-order checklist

1. Append all five **CSS** blocks anywhere inside the existing `<style>…</style>`.
2. Apply the small **HTML** edits: `#achShelf` (Map view), `#surpriseBtn` (hero CTA),
   the swapped hero `.who` bubble.
3. Paste all five **JS** blocks together just **before** the `/* INIT */` comment block.
4. Make the in-function edits: the `tabs`/`panels`/quiz-wire additions in `openDest()`,
   the `${stampMark(t)}` line in `renderPassport()`.
5. Add the init calls: `checkAchievements({silent:true});` and
   `rotateGlobie(); setInterval(rotateGlobie,5500);`.
6. Add `checkAchievements();` to the `#saveTrip` handler and `renderAchievements();` to
   `delTrip`.

All identifiers (`themeFor`, `stars`, `confetti`, `GLOBIE`, `openDest`, `currentDest`,
`haversine`, `HOME`, `trips`, `saveTrips`, `DESTS`, `reduceMotion`) already exist in
`index.html`; the new code only *reads* them, so nothing existing breaks.
