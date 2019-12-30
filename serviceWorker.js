var cacheStorageKey = "lk20191230";
var cacheList = [
  "/",
  "index.html",
  "index.js",
  "index.css",
  "favicon.ico",
  "font.css",
  // "/icon/*",
  // "/weather/*"
];
// 安装
self.addEventListener("install", e => {
  e.waitUntil(
    caches
      .open(cacheStorageKey)
      .then(cache => {
        return cache.addAll(cacheList);
      })
      .then(() => self.skipWaiting())
  );
});
// 处理动态缓存
self.addEventListener("fetch", e => {
  let { request } = e;
  e.respondWith(
    caches.match(request).then(response => {
      if (request.url === "http://127.0.0.1:8080/") {
        console.log(caches, request, response);
      }
      if (response) {
        return response;
      }
      // 对于 CDN 资源要更改 request 的 mode
      if (
        request.mode !== "navigate" &&
        request.url.indexOf(request.referrer) === -1
      ) {
        request = new Request(request, { mode: "cors" });
      }
      return fetch(request).then(fetchRes => {
        if (!fetchRes || fetchRes.status !== 200 || request.method !== "GET") {
          return fetchRes;
        }
        let resClone = fetchRes.clone();
        caches.open(cacheStorageKey).then(cache => {
          cache.put(request, fetchRes);
        });
        return resClone;
      });
    })
  );
});
// 激活
self.addEventListener("activate", e => {
  e.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              return cacheName !== cacheStorageKey;
            })
            .map(cacheName => {
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});
