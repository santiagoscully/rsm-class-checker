self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
  e.respondWith(fetch(e.request).catch(function(){
    return new Response('Offline. Connect to the internet to see the schedule.',{headers:{'Content-Type':'text/plain'}});
  }));
});
