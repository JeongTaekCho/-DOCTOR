// service-worker.js

/**
 * @file Service Worker for caching and offline functionality.
 * @description This is a Service Worker script that handles caching of assets
 * and provides offline support for your web application.
 * @version 1.0.0
 */

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll(['/index.html', '/other-files-to-cache']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
