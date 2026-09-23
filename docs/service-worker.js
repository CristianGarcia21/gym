var CACHE_NAME = "rutina-luisa-v7";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./assets/bench-dip-1.svg",
  "./assets/bench-dip-2.svg",
  "./assets/bench-dip-3.svg",
  "./assets/bench-press-1.svg",
  "./assets/bench-press-2.svg",
  "./assets/bench-press-3.svg",
  "./assets/bicep-curl-1.svg",
  "./assets/bicep-curl-2.svg",
  "./assets/bicep-curl-3.svg",
  "./assets/bicycle-crunch-1.svg",
  "./assets/bicycle-crunch-2.svg",
  "./assets/bicycle-crunch-3.svg",
  "./assets/burpee-1.svg",
  "./assets/burpee-2.svg",
  "./assets/burpee-3.svg",
  "./assets/close-grip-lat-pulldown-1.svg",
  "./assets/close-grip-lat-pulldown-2.svg",
  "./assets/close-grip-lat-pulldown-3.svg",
  "./assets/crunch-1.svg",
  "./assets/crunch-2.svg",
  "./assets/crunch-3.svg",
  "./assets/deadlift-1.svg",
  "./assets/deadlift-2.svg",
  "./assets/deadlift-3.svg",
  "./assets/donkey-kick-1.svg",
  "./assets/donkey-kick-2.svg",
  "./assets/donkey-kick-3.svg",
  "./assets/dumbbell-bench-press-1.svg",
  "./assets/dumbbell-bench-press-2.svg",
  "./assets/dumbbell-bench-press-3.svg",
  "./assets/dumbbell-fly-1.svg",
  "./assets/dumbbell-fly-2.svg",
  "./assets/dumbbell-fly-3.svg",
  "./assets/dumbbell-hip-thrust-1.svg",
  "./assets/dumbbell-hip-thrust-2.svg",
  "./assets/dumbbell-hip-thrust-3.svg",
  "./assets/face-pull-1.svg",
  "./assets/face-pull-2.svg",
  "./assets/face-pull-3.svg",
  "./assets/flutter-kick-1.svg",
  "./assets/flutter-kick-2.svg",
  "./assets/flutter-kick-3.svg",
  "./assets/glute-bridge-1.svg",
  "./assets/glute-bridge-2.svg",
  "./assets/glute-bridge-3.svg",
  "./assets/glute-bridge-march-1.svg",
  "./assets/glute-bridge-march-2.svg",
  "./assets/glute-bridge-march-3.svg",
  "./assets/goblet-squat-1.svg",
  "./assets/goblet-squat-2.svg",
  "./assets/goblet-squat-3.svg",
  "./assets/hack-squat-1.svg",
  "./assets/hack-squat-2.svg",
  "./assets/hack-squat-3.svg",
  "./assets/hammer-curl-1.svg",
  "./assets/hammer-curl-2.svg",
  "./assets/hammer-curl-3.svg",
  "./assets/hip-abduction-machine-1.svg",
  "./assets/hip-abduction-machine-2.svg",
  "./assets/hip-abduction-machine-3.svg",
  "./assets/hip-adduction-machine-1.svg",
  "./assets/hip-adduction-machine-2.svg",
  "./assets/hip-adduction-machine-3.svg",
  "./assets/hip-thrust-1.svg",
  "./assets/hip-thrust-2.svg",
  "./assets/hip-thrust-3.svg",
  "./assets/inchworm-1.svg",
  "./assets/inchworm-2.svg",
  "./assets/inchworm-3.svg",
  "./assets/jumping-jack-1.svg",
  "./assets/jumping-jack-2.svg",
  "./assets/jumping-jack-3.svg",
  "./assets/lat-pulldown-1.svg",
  "./assets/lat-pulldown-2.svg",
  "./assets/lat-pulldown-3.svg",
  "./assets/lateral-raise-1.svg",
  "./assets/lateral-raise-2.svg",
  "./assets/lateral-raise-3.svg",
  "./assets/leg-extension-1.svg",
  "./assets/leg-extension-2.svg",
  "./assets/leg-extension-3.svg",
  "./assets/leg-press-1.svg",
  "./assets/leg-press-2.svg",
  "./assets/leg-press-3.svg",
  "./assets/lying-leg-raise-1.svg",
  "./assets/lying-leg-raise-2.svg",
  "./assets/lying-leg-raise-3.svg",
  "./assets/machine-glute-kickback-1.svg",
  "./assets/machine-glute-kickback-2.svg",
  "./assets/machine-glute-kickback-3.svg",
  "./assets/machine-shoulder-press-1.svg",
  "./assets/machine-shoulder-press-2.svg",
  "./assets/machine-shoulder-press-3.svg",
  "./assets/mountain-climber-1.svg",
  "./assets/mountain-climber-2.svg",
  "./assets/mountain-climber-3.svg",
  "./assets/one-arm-dumbbell-row-1.svg",
  "./assets/one-arm-dumbbell-row-2.svg",
  "./assets/one-arm-dumbbell-row-3.svg",
  "./assets/plank-1.svg",
  "./assets/plank-2.svg",
  "./assets/plank-3.svg",
  "./assets/plank-shoulder-tap-1.svg",
  "./assets/plank-shoulder-tap-2.svg",
  "./assets/plank-shoulder-tap-3.svg",
  "./assets/reverse-pec-deck-1.svg",
  "./assets/reverse-pec-deck-2.svg",
  "./assets/reverse-pec-deck-3.svg",
  "./assets/running-1.svg",
  "./assets/running-2.svg",
  "./assets/running-3.svg",
  "./assets/seated-row-1.svg",
  "./assets/seated-row-2.svg",
  "./assets/seated-row-3.svg",
  "./assets/squat-1.svg",
  "./assets/squat-2.svg",
  "./assets/squat-3.svg",
  "./assets/standing-dumbbell-press-1.svg",
  "./assets/standing-dumbbell-press-2.svg",
  "./assets/standing-dumbbell-press-3.svg",
  "./assets/step-up-1.svg",
  "./assets/step-up-2.svg",
  "./assets/step-up-3.svg",
  "./assets/tricep-pushdown-1.svg",
  "./assets/tricep-pushdown-2.svg",
  "./assets/tricep-pushdown-3.svg",
  "./assets/walking-lunge-1.svg",
  "./assets/walking-lunge-2.svg",
  "./assets/walking-lunge-3.svg",
  "./assets/wide-grip-lat-pulldown-1.svg",
  "./assets/wide-grip-lat-pulldown-2.svg",
  "./assets/wide-grip-lat-pulldown-3.svg"
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

  if (event.request.mode === "navigate"){
    event.respondWith(
      Promise.race([
        fetch(event.request.url, { cache: "no-store" }),
        new Promise(function(_, reject){ setTimeout(function(){ reject(new Error("timeout")); }, 3000); })
      ]).then(function(response){
        if (response && response.ok){
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function(cache){ cache.put("./index.html", copy); });
        }
        return response;
      }).catch(function(){
        return caches.match("./index.html").then(function(cached){
          return cached || caches.match("./");
        });
      })
    );
    return;
  }

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
