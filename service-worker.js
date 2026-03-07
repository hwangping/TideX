const CACHE_NAME = "tidex-web-v1";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260307-i18n2",
  "./app.js?v=20260307-i18n2",
  "./manifest.webmanifest?v=20260307-i18n2",
  "./locales/en-US.json?v=20260307-i18n2",
  "./locales/index.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./offline.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const requestURL = new URL(request.url);

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", cloned));
          return response;
        })
        .catch(() => caches.match("./index.html").then((res) => res || caches.match("./offline.html")))
    );
    return;
  }

  if (requestURL.origin === self.location.origin) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("./offline.html")))
    );
  }
});
