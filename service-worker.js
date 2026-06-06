const CACHE_NAME = 'edge5-v1';
const PRECACHE = [
  '/',
  '/index.html',
  '/counsellor.html',
  '/colleges.html',
  '/offline.html',
  '/css/styles.css',
  '/css/header.css',
  '/css/footer.css',
  '/css/counsellor.css',
  '/js/counsellor.js',
  '/js/firebase-config.js',
  '/js/header.js',
  '/js/footer.js',
  '/manifest.json',
  '/images/logo/logo-dark.svg',
  '/images/logo/logo-light.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE.filter(u => !u.includes('counsellor') || u === '/counsellor.html')))
      .catch(() => {}) // non-fatal — files may not exist yet during dev
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  // Network-first for API calls
  if (url.pathname.startsWith('/api/') || url.hostname.includes('firebaseapp') || url.hostname.includes('cloudfunctions')) {
    e.respondWith(fetch(request).catch(() => caches.match(request)));
    return;
  }

  // Cache-first for assets
  e.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request)
        .then(response => {
          if (response.ok && request.method === 'GET') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(c => c.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          // Fallback to offline page for HTML navigation requests
          if (request.mode === 'navigate') return caches.match('/offline.html');
        });
    })
  );
});
