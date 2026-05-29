const CACHE_NAME = 'bd-career-matrix-cache-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'bd_app_icon_1.jpeg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
