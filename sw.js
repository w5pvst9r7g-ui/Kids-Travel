/* Poppy's Atlas service worker — offline support that still updates cleanly.
   Strategy:
   - HTML navigations: NETWORK-FIRST (always get the latest app when online,
     fall back to the cached page only when offline). This avoids the classic
     "stale single-page app" trap where users never see new deploys.
   - Static assets (images, etc.): CACHE-FIRST (fast, and fine offline). */
const CACHE = 'poppie-atlas-v4';
const ASSETS = [
  './', './index.html',
  './poppie.jpg', './poppie-hi.png', './poppie-yay.png', './poppie-walk.png',
  './poppie-fish.png', './poppie-sit.png', './poppie-sit2.png', './poppie-stand.png',
  './poppie-calm.png', './poppie-play.png',
  './icon-192.png', './icon-512.png'
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

/* allow the page to tell a waiting SW to take over immediately */
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });

function isHTML(req) {
  return req.mode === 'navigate' ||
    (req.headers.get('accept') || '').indexOf('text/html') >= 0;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;

  if (isHTML(req)) {
    /* network-first: fresh page when online, cached shell when offline */
    e.respondWith(
      fetch(req).then(res => {
        if (res && res.ok && sameOrigin) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); }
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  /* static assets: cache-first, fill cache on first network fetch */
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok && sameOrigin) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => sameOrigin ? caches.match('./index.html') : Response.error()))
  );
});
