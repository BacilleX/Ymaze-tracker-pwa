const CACHE='ymaze-v4';
const ASSETS=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{try{const u=new URL(e.request.url);if(u.origin===location.origin){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}}catch{}return resp;}).catch(()=>caches.match('./index.html'))));});
