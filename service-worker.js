!function(){"use strict";const e=["client/client.6f3c8f74.js","client/index.ca991166.js","client/about.e135dd94.js","client/[slug].49dd876d.js","client/client.63f4e786.js"].concat(["service-worker-index.html","favicon.png","global.css","jens.png","manifest.json","star.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1582243824598").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1582243824598"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1582243824598").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
