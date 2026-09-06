var CACHE_NAME = "rutina-luisa-v2";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./assets/bench-dip.svg",
  "./assets/bicycle-crunch.svg",
  "./assets/burpee.svg",
  "./assets/crunch.svg",
  "./assets/deadlift.svg",
  "./assets/donkey-kick.svg",
  "./assets/dumbbell-hip-thrust.svg",
  "./assets/face-pull.svg",
  "./assets/flutter-kick.svg",
  "./assets/glute-bridge-march.svg",
  "./assets/glute-bridge.svg",
  "./assets/goblet-squat.svg",
  "./assets/hack-squat.svg",
  "./assets/hip-abduction-machine.svg",
  "./assets/hip-adduction-machine.svg",
  "./assets/hip-thrust.svg",
  "./assets/inchworm.svg",
  "./assets/jumping-jack.svg",
  "./assets/lat-pulldown.svg",
  "./assets/leg-extension.svg",
  "./assets/leg-press.svg",
  "./assets/lying-leg-raise.svg",
  "./assets/machine-glute-kickback.svg",
  "./assets/machine-shoulder-press.svg",
  "./assets/mountain-climber.svg",
  "./assets/plank-shoulder-tap.svg",
  "./assets/plank.svg",
  "./assets/reverse-pec-deck.svg",
  "./assets/running.svg",
  "./assets/seated-row.svg",
  "./assets/squat.svg",
  "./assets/step-up.svg",
  "./assets/tricep-pushdown.svg",
  "./assets/walking-lunge.svg",
  "./assets/wide-grip-lat-pulldown.svg"
];

self.addEventListener("install", function(event){
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(
        names.filter(function(n){ return n !== CACHE_NAME; })
             .map(function(n){ return caches.delete(n); })
      );
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(event){
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(function(cached){
      var network = fetch(event.request).then(function(response){
        if (response && response.ok){
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
        }
        return response;
      }).catch(function(){ return cached; });
      return cached || network;
    })
  );
});
