'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ca3509477f7fe2c1b5f35409fee51e14",
".git/config": "e09a6f304fcffbb76efbd7cb50460bbd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e2a1b2b5fd6b2e3c88a259d12a1db47a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "073b1857f7d72fc935c6c2b2d9be343d",
".git/logs/refs/heads/master": "073b1857f7d72fc935c6c2b2d9be343d",
".git/logs/refs/remotes/origin/master": "b15be97eeaac9c797251fae6d69f08b8",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/19/5a0b3bcbf7e44402f7d3bfba8b08c7d8431f09": "0ce25fd772a9dbf08b5b87aa5bf21d0f",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/2c/3c7e9a0cf56e12a643f62ded7e2686eb52385e": "93f0953b9f3e5cef225f8a2fc0626dd1",
".git/objects/2d/dc937144ad9088fb9cfeb375357791e4778099": "6f4169188e709d9fb4cb85f52554eba7",
".git/objects/4b/0e3061d1861306960cf4b44639825ca4015857": "44136c61faef80d53d5d339c34f7ad99",
".git/objects/4d/c5d2f57f9df889a7f0e870825d71e05de07d07": "f698399d649337550964560e2e0e09a6",
".git/objects/57/34d94cec5a604047a4f3897c51dd48ce17f413": "e1697298f373dee87ab2221e842651fb",
".git/objects/5f/23db264dca74a6b0a7606a3016afe641e7cd58": "5f876f4d51f9ee663cb84cebfbb629dd",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/68/c6ed8ea1eb8d96507fca250106266d83f563c3": "6a3137da40c3c6515e2f280bf542c45c",
".git/objects/6c/1560b3f6aa621ac6611f3d65765361bfd3c2f2": "2cdb3dfbeb0dde6fad10f77ba07badf7",
".git/objects/6d/6db824dd922d2d6feade398deb22d9049419f8": "695559a19152b6df09e6e2cba6f12528",
".git/objects/79/7acea53eb091cf5b30518802c3073f544adeed": "937cef16b89c98aeaa2dda4bb9500126",
".git/objects/83/ee2de7d12f191d743edf9ca825f7da6fb8d280": "eaaf6d8fb616dc6c69242b11f015c14d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/a80b4286ce4a9e6b89f11ae306232c12ab42a9": "727d4cc1094169691c455e1bdd4a617b",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/a0/f015a50211528c1b2ebc60ca75ad3fb8939cb6": "bf0762a3463fbb8e56e73084ec521356",
".git/objects/b2/bcd033f633064be69ec9ab1593bb8663c1cc03": "51c7f2a6a3859ea5a21e43061a27be50",
".git/objects/b8/c4fd5dd9b1c4836b0fd7727484ee58d36cfc33": "71e60cf79d345db53f4d4d9a8da6d235",
".git/objects/ba/ac70f3a1c5faaeddd1643f642c28ef96db2666": "34e5461325a4ae0f34395c14695d718b",
".git/objects/bc/e85f7acd744531e7f8d323c82780b4127df9c1": "a645a555605e7a99835d69d4d6a84382",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/e1/4eff2592106417ae391494a790a11cecf090eb": "98720b4a203d1de246d216c208e8886b",
".git/objects/eb/e0ac7cd80b8fe6ca45d3fba70b1834d124e2e9": "e6b1da02ee7d17c6bca0440ce7b13176",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fd/f62944dbf9e3738c871898bcb3bb0fd81aef1d": "a4a9ca837670be8a917ac51484971e6d",
".git/refs/heads/master": "d1126842bbda07da97a4f0395cc262a5",
".git/refs/remotes/origin/master": "d1126842bbda07da97a4f0395cc262a5",
".idea/dbnavigator.xml": "8e9da6f2e7962880b311b51d03ff1076",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/runConfigurations.xml": "2fc3380134e865b7a5b714aad6fe21e5",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "edc0d2bb088e555e9f8cac3f4c873388",
"assets/AssetManifest.json": "02fb72efdd33b43e6b757ef7333ee4c8",
"assets/FontManifest.json": "f6544742ea67651b1cc1cb76576eb793",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5a34957b21a8b1a8e565dd87330dc89d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"assets/packages/steel/assets/images/logo.png": "fe102d21f1772c2d1658291140772dac",
"assets/packages/steel/assets/locales/ar.json": "c090bfd49917900b9ee2ff2f04f997cc",
"assets/packages/steel/assets/locales/en.json": "a4518c9c082ec73c48f04efcabf8563c",
"assets/shaders/ink_sparkle.frag": "9c56bd959300323870b2ab632efd2af4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "382f923d56458ab874ee98f247555770",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/icon-128x128.png": "6537940b20d3e205280f66d2b40fff49",
"icons/icon-144x144.png": "83a4011806fb30511dd486aa16492cea",
"icons/icon-152x152.png": "c41b293357f3e6b3e40d7e35dbf988ca",
"icons/icon-192x192.png": "420df31f8d142a9c2d8eab2699409aab",
"icons/icon-384x384.png": "9b98a56dc2767efebc16971f4a393048",
"icons/icon-512x512.png": "fe870edb29a4adeab720f7b7a5ea5c9c",
"icons/icon-72x72.png": "5bdf3961430ea17bf3343ebc8dff1b1d",
"icons/icon-96x96.png": "f10124b2b1f7392a77c034eec05fee2c",
"index.html": "22f83117fbdcc2c75ad78df561452803",
"/": "22f83117fbdcc2c75ad78df561452803",
"main.dart.js": "f87385c097168e9031021f6985c1a648",
"manifest.json": "f7686f093b96c25891e67569782d5204",
"manifest_old.json": "dabf69765f9b3896962e284da40f6f5d",
"version.json": "04bc14e31c124946381537509758f813"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
