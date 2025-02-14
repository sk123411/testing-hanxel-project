'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "42025b7e05f4be5514057baf3adb2fa7",
"assets/AssetManifest.bin.json": "bc4d5a05bff49fa6f2842299ecc24b26",
"assets/AssetManifest.json": "7d83a0303cc71a4e672d790e27495e8b",
"assets/assets/ai_photo_back.png": "7979bcfa119e83e786df7fd8b940d874",
"assets/assets/ai_photo_eight.png": "d462f281fc35048b2dc43563672b508b",
"assets/assets/ai_photo_five.png": "5529c56a455e65bf09a0bfd0e2577c8d",
"assets/assets/ai_photo_four.png": "afb0bdd4e3685c5998fa3f1f8c9b3646",
"assets/assets/ai_photo_one.png": "6236265a2dc346cc65c86bbf311553e9",
"assets/assets/ai_photo_seven.png": "788c58c7b336b94e2e6e3b1fbe662ba1",
"assets/assets/ai_photo_six.png": "27271c75d11147de4957782a734e13c2",
"assets/assets/ai_photo_three.png": "87a17aec9a22e5128e6d7b43ba55f7c5",
"assets/assets/ai_photo_two.png": "f8b83717db43f623d9e80bd708f032a0",
"assets/assets/arrow_up.png": "ebd713057e80d2f7fc20444c55385418",
"assets/assets/contact_call.png": "85b9f6b06c8774b4e71de923de942704",
"assets/assets/contact_email.png": "a571d480224c727fe12f96aa47239cf9",
"assets/assets/contact_line.png": "99a462bf7cf052146cb9c5036f000877",
"assets/assets/contact_location.png": "7daa4c048b20e16354c76d6265485031",
"assets/assets/contact_location_two.png": "2ec6c6fb1924bad9071553ee2b0c68d4",
"assets/assets/contact_photo_one.png": "1f1ab24236d8dd2032a94f0604b49997",
"assets/assets/Discover%2520Us.png": "4462613c30c47f8c4f42297fbfd52f64",
"assets/assets/discover_us.png": "4462613c30c47f8c4f42297fbfd52f64",
"assets/assets/edge_eight.png": "c7f805130ea5a84c9bf8f5144cc85e96",
"assets/assets/edge_five.png": "296fb6cb609a201455476297e54abf5c",
"assets/assets/edge_four.png": "3e9777c4d4bc950044ed96ab357ea283",
"assets/assets/edge_nine.png": "7aeef710a257bb78fa19dfb1ca23c24c",
"assets/assets/edge_one.png": "14d412bd3a6d65eeaf5e2cdcabaca5f5",
"assets/assets/edge_seven.png": "a6bdf990d10551115a0ad55ba4025d83",
"assets/assets/edge_six.png": "cda344816649eea422510dd2f80c0f38",
"assets/assets/edge_three.png": "88de63636c0f876e0a37bc4d624d2399",
"assets/assets/edge_traingle_five.png": "5737131eed1ece2b8fdf9ce5e764ecfb",
"assets/assets/edge_traingle_four.png": "de07932a0d2966ccd345ceaa3ade08b0",
"assets/assets/edge_traingle_one.png": "4ce82cd1d32df0fe8dadcb6936a3afe2",
"assets/assets/edge_traingle_three.png": "da3daf95baf96c7ccaed6db2354346d0",
"assets/assets/edge_traingle_two.png": "7f3ec983682285f383fa8872131865d2",
"assets/assets/edge_two.png": "9b30f7b9d07aa8fc6f24ed2fd3ae775b",
"assets/assets/ems_circle_one.png": "6b0245e57959797a40a9003543f1e095",
"assets/assets/ems_circle_two.png": "6550ff6ce81be47cd61a83a9f4b59286",
"assets/assets/ems_line_four.png": "619636bd048c1648abc890c73c2e0d8c",
"assets/assets/ems_line_one.png": "4174f8568cabf0ce5eeda4ef1330e5cd",
"assets/assets/ems_line_three.png": "576e5f4ac9ac1138c3ba5f27f9e6a353",
"assets/assets/ems_line_two.png": "76b1e96bfa0de21cd2b7ce69baa04558",
"assets/assets/ems_photo_eight.png": "59717967620b1eb2b284b3085df5a755",
"assets/assets/ems_photo_eleven.png": "b106abd9bc6b68ccd312632680827f62",
"assets/assets/ems_photo_five.png": "715da1d407e7fa493cc956a04c17d81a",
"assets/assets/ems_photo_four.png": "bd530f4def5d9d203462d537b2ddb95c",
"assets/assets/ems_photo_multiple_line.png": "dd54c86c2ab247ac2b7c8f3e4f20939e",
"assets/assets/ems_photo_nine.png": "ac55a43e27fa5a8ad8048bc89c281d07",
"assets/assets/ems_photo_one.png": "0e6022f5ad21726c2e5a733d18661408",
"assets/assets/ems_photo_seven.png": "bebc036e33bc53163889c84c9b13e585",
"assets/assets/ems_photo_six.png": "5d0660c233e7b2cff03e4d82341ad274",
"assets/assets/ems_photo_ten.png": "26aea39a472bef4b31faf83f3b301d90",
"assets/assets/ems_photo_three.png": "7f6532d187941aab0330e62ac8a5c709",
"assets/assets/ems_photo_twelve.png": "b9c7fa5406925ecf9b1087c831525f29",
"assets/assets/ems_photo_two.png": "d7f91cf8f26115aa630046b560fd4ba9",
"assets/assets/facebook.png": "03312047e98d3781362f42a0ecb363d1",
"assets/assets/home_circle_one.png": "b88b2e52b7651eaed9ae7f7da5571be5",
"assets/assets/home_line_four.png": "37bcd8f88de99c74aa4ff104faec0be0",
"assets/assets/home_line_one.png": "eea37c4a51997e2d2431d415b9cabf90",
"assets/assets/home_line_three.png": "dddbae949c2fbf93c0c8235464b9fc8c",
"assets/assets/home_line_two.png": "db7a281ab07bb4664bb5e74f253e4e0c",
"assets/assets/home_photo_one.png": "7b6385633952338820e8e4ba47701096",
"assets/assets/home_photo_one_web.png": "2846dab3ce4337df31ebab0824350385",
"assets/assets/home_photo_service.png": "7690745ae210d8f9fa9f37732097bbf8",
"assets/assets/home_photo_three.png": "2415ac58f4e5d6239a7c828781dfec74",
"assets/assets/home_photo_two.png": "de7d59d03cd7f3f61876246fedf047d2",
"assets/assets/home_photo_two_web.png": "1aa2cb33310398007280462e00d85752",
"assets/assets/home_rec_five.png": "352b14c75a60fdcf12301f2f58f4e0b5",
"assets/assets/home_rec_four.png": "9539e2adff5490dc390a7fe93ef0c9b9",
"assets/assets/home_rec_one.png": "e3ff11a6337e3a299c760f4cdfb8f30b",
"assets/assets/home_rec_seven.png": "74dd1298d6af42ddd2b55edce5f3323e",
"assets/assets/home_rec_six.png": "9ff60fcc14f7399ee8b44f83a1316e09",
"assets/assets/home_rec_three.png": "3209e6f81a16a5b31875cc35017e3bdd",
"assets/assets/home_rec_two.png": "ee785dbd820885af25fc97b72e4695cf",
"assets/assets/industry_photo_five.png": "cefbf869f492a1b0811c8a8ab51bbe99",
"assets/assets/industry_photo_four.png": "55c109d37d0706d0927f4864a5425faa",
"assets/assets/industry_photo_one.png": "79f94870b544d6a1c61e23ef86fc5f67",
"assets/assets/industry_photo_six.png": "371e1ef1eb12928c6541b87d1ae593eb",
"assets/assets/industry_photo_three.png": "9852f8bc888f9b30d55b641c15f47bb6",
"assets/assets/industry_photo_two.png": "34a8c3e0ede7c6527532d8faba72a219",
"assets/assets/instagram.png": "9da03d401a6f0724ca53710bd65b2900",
"assets/assets/linkedin.png": "645b7e1ba9f8d7784604fd059094314c",
"assets/assets/logo.png": "9101986234a1a70507a2f17bfe0d0baf",
"assets/assets/Our%2520Services.png": "8368fde8112d16a1eca2335f01aef154",
"assets/assets/our_services.png": "060a07945fdd72cd5c98ec1eefd80459",
"assets/assets/service_photo_eight.png": "5d70ef232be1f407bcf38725972d3ee5",
"assets/assets/service_photo_five.png": "b77acf6e81ff12fb3368ada098796fa4",
"assets/assets/service_photo_four.png": "266a54ed16736e08020fad83419e143f",
"assets/assets/service_photo_nine.png": "3e66018ed53a4add280f932a0412b5d2",
"assets/assets/service_photo_one.png": "d7f792bff65e3c5938d5222478760d0c",
"assets/assets/service_photo_seven.png": "75035f81deadbaab3a2ceec48b657108",
"assets/assets/service_photo_six.png": "7c9afe1612355567190d995ecfb253f5",
"assets/assets/service_photo_ten.png": "1a56422fb3101c8e437c27d7a8a8a54e",
"assets/assets/service_photo_three.png": "9b6d0a85cceba01d8c67ca96fa84d258",
"assets/assets/service_photo_two.png": "e09e0cd54b70ff3bf6a66b3d2da752c1",
"assets/assets/testi_photo_one.png": "5a1e25a409b7fd745866772d3ea31a11",
"assets/assets/testi_shape_line.png": "d1872f06b1e4f40f1ec97e171d37156b",
"assets/assets/testi_shape_one.png": "ab45438f494cad3ff6af153a711bcc15",
"assets/assets/twitter.png": "3f985b565740bd04ab237306f0d0d804",
"assets/assets/view_details_button.png": "6ca411ad93d1e9f65b0ae958a734e3c3",
"assets/assets/youtube.png": "e0fbdbb630c0a936fe59bb69faa381d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dd6ff7e8292e86b6a03b856bad9cd50e",
"assets/NOTICES": "ef18d6f708b3f97b2b2701905cd89baa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ac7bc6b3a76b3fd887b5c6cff8b10668",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e919e8fe84cf93a187e400cee7ce82ec",
"/": "e919e8fe84cf93a187e400cee7ce82ec",
"main.dart.js": "be5c5e2cdf519c19facddd09f6b33bb7",
"manifest.json": "0d47963cb0c880eacce33c94b7350932",
"version.json": "0f71ac8bd3948a10792191659ca69d1b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
