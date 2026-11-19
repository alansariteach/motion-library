/* Motion Library service worker: the page always tries the network first so updates show at once;
   it falls back to the cached copy offline. Fonts, sounds and icons are cached after first use.
   Example videos (mp4) are never cached: they are large and use range requests. */
var V='ml-v3';
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(['./','manifest.webmanifest','icon-192.png']);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V;}).map(function(x){return caches.delete(x);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET')return;var u=new URL(r.url);
  if(u.origin!==location.origin||/\.(mp4|zip)$/i.test(u.pathname)||r.headers.has('range'))return;
  if(r.mode==='navigate'||/\/(index\.html|studio\.html)?$/.test(u.pathname)){
    e.respondWith(fetch(r).then(function(res){if(res.ok){var c=res.clone();caches.open(V).then(function(x){x.put(u.pathname,c);});}return res;}).catch(function(){return caches.match(u.pathname).then(function(h){return h||caches.match('./');});}));return;}
  if(/\.(ttf|otf|woff2?|mp3|png|svg|webmanifest)$/i.test(u.pathname)){
    e.respondWith(caches.match(r).then(function(hit){return hit||fetch(r).then(function(res){if(res.ok){var c=res.clone();caches.open(V).then(function(x){x.put(r,c);});}return res;});}));}
});
