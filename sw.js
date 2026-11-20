/* Service Worker – macht die Trink-Schnecke offline spielbar.
 * Bei Änderungen an den Dateien VERSION erhöhen, damit alte Caches gelöscht werden. */
const VERSION = 'schnecke-v1.0.1';
const ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(new URL(req.url).hostname);
  if (!sameOrigin && !isFont) return;

  const network = fetch(req).then(res => {
    if (res && (res.ok || res.type === 'opaque')) {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(req, copy));
    }
    return res;
  });
  event.waitUntil(network.then(() => {}, () => {}));
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit =>
      hit || network.catch(() => (req.mode === 'navigate' ? caches.match('index.html') : Response.error()))
    )
  );
});
