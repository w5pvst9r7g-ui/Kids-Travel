/* Poppie's Atlas service worker — offline app shell.
   Registers only when the app is served over http(s) (e.g. GitHub Pages),
   so the family can open it on the plane / abroad with no data. */
const CACHE = 'poppie-atlas-v2';
const ASSETS = [
  './', './index.html',
  './poppie.jpg', './poppie-hi.png', './poppie-yay.png', './poppie-walk.png',
  './poppie-fish.png', './poppie-sit.png', './poppie-sit2.png', './poppie-stand.png',
  './poppie-calm.png', './poppie-play.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(ASSETS.map(a => c.add(a).catch(() => {})))) /* don't fail install if one asset 404s */
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;
  /* cache-first for our own files; network-first-ish (with cache fill) otherwise */
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok && sameOrigin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => sameOrigin ? caches.match('./index.html') : Response.error()))
  );
});
