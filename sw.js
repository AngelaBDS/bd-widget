const CACHE_NAME = 'bd-career-matrix-cache-v1';
const urlsToCache = [
  'bd_career_matrix_mobile.html',
  'manifest.json',
  'bd_app_icon.png'
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
