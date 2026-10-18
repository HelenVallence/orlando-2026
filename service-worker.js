const CACHE = "orlando-2026-v7";
const ASSETS = ["./","index.html","style.css","trip-data.js","app.js","manifest.json","icon-192.png","icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // trip-data.js is the easy-edit master data file. Use the newest GitHub copy
  // whenever online, but keep a cached copy so the PWA still works offline.
  if(url.pathname.endsWith("/trip-data.js") || url.pathname.endsWith("trip-data.js")){
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, copy));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match("index.html"))));
});
