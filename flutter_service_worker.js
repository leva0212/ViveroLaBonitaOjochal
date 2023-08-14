'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0546d5ae51eb3d8828bbaef7cd8333fb",
".git/config": "138421cf69c365cc64e7cbd65506294b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "4eb08884a73a85cd058b9ad0ddd79b70",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "207dccc7f1be4d64ade6fef457666620",
".git/logs/refs/heads/main": "9d57287eccb7e3a672f620f1f226d72f",
".git/logs/refs/heads/master": "bc2b0a90ce53755ab3451307c6e061fa",
".git/logs/refs/remotes/origin/main": "4fa942b580818df7316d2fafd3c11102",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/08/18133833bf225f3b4fe05344f33b23165909b3": "2cb7702f91c60a19a92306e1dd4e8407",
".git/objects/09/0935b4371394bed679d1b725d30cf4fa81fc3d": "9c26a8981573a40170ae4080124b8590",
".git/objects/0b/07894cdefe87006724624b8c147227c8426638": "b8217121d56ee37ca3d0ce34cdbdbb3e",
".git/objects/0d/c45867c80f7ba740b6de66dc4a604904428e6b": "6192a286966bcabdd28b98fc6a6e08ee",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1f/ceb1fd6fb8f8a0c4fbce4321744923834c95cc": "3f4e3aae52b8a43e40322ca554ff4319",
".git/objects/20/595dfef8b15b9d061975cbc406be389ebdab51": "41d1333931546ba70cdea3504bd9ce44",
".git/objects/27/e1b5cf31025c7450d614c08f92b4652bd1e9fd": "b453e8452b66b3562162413c5614223d",
".git/objects/28/ef1caa00c763e637ef2ad15fb7185d67860420": "bccf0c87425477fca9052692cda0f13d",
".git/objects/2e/b73b5ae93ef3d1c82eef740fdeb7367ea336e7": "7b3f30b5a8c3675df74e107d64de6cc9",
".git/objects/33/89331d9e6ecfc981454c09557b6f05f92197b7": "a09b26b84cc8bf1ae745babd2a03c213",
".git/objects/34/324251867a9cf7eaea0fbb6ef8a0dfe6731830": "be0e46056822b10af84679366fdb11b8",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/9adf6f1d91b8bc74fab5fbdb7c114177ea2c9d": "2afc30229f496a1df5ff73031c3fe6f0",
".git/objects/39/4d09c042a4fa332fd10a53f2e40566fb03b534": "5f9bf4d5a2120a816674d472161a17b9",
".git/objects/39/cd09d40739a74d310b55e6de7cbfc079cbcad5": "996fdff02ab9a13aa54fe7cf3973a1a7",
".git/objects/3c/744b79b3e8b107ad3158126290aa7d98a40622": "1b5e02a8879e2293f5f467096b7595bc",
".git/objects/40/6b985b4aa3e639d0421f132f0308f922454a2c": "43e36f1c6f9f8d7b095fc6a21959cc8d",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/88eb3a6907331a3fab332a5d3c106dcf29d921": "57f134545814d7d6818776d8b606bfbb",
".git/objects/47/003db5016baf9c8672fda07ffd28b154ddbafa": "e208851aa415d58571c6406f6726949d",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/53/96fb205d681f183c365cd6b91500fef719e4fd": "8029dd1de94ebb8bfab6ccd7b2fa74f3",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/5f/87fe58e35177d8ec39f6418ee7453194ca66fa": "e383b8abfbf2ee88359c2e2cd2a569f8",
".git/objects/67/5e4f014456596cce145788018337f2371a930f": "624dca40d206bb165d756d470a168fae",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/f1e8ab590148faabc787dc2f16bb2a36e8884e": "08a516a1de26911fc19f1062a93fbf2a",
".git/objects/6d/7361efa30bd8d1f298c47e8e9266b9cb74dbe7": "3fad376848d88a66ac68dae8ad9d0cc1",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/71/bc9dbbcd50ca35cb240efdc9eae775c50eef62": "6705882fa195c5034320f8d879e6cb44",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/90fc506b1a54a6535da9d6b66b0eb97f21ab6f": "c1fe4d4e508ada15a7cf90981cb7bab7",
".git/objects/75/8838ea50052059bdefc323aff9b84bd6fc1601": "9e1e2c0a25e43791691b1d79e3397521",
".git/objects/79/596392e1954dd70123389b80a59ea3eeaa1f6d": "54ea9f685b755ac7b5403d8b2ff740e9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/244a001ab33a3f8f76934ce055d94deb9d6d57": "755d94e7072d2be7f8e75c4357ed1255",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7e/f06a52a6dc9ffe498ce7a58b4935a525dff2c5": "4e627e1f11b327285be6402cb6ee1474",
".git/objects/82/9cbd3ac313de264e23c8ebd93e1c127c9105af": "5bb7fbc755e851ae3e60bb59c8aa33fe",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/a6d5589765c5f1abbf0b4187f82e438cf9fc2f": "7b14d3a1d295ee2fb43c19c57bdc2f01",
".git/objects/90/458d7252dca29d77a1d401d09874e4825d5bd2": "6f42ce7d4605d74112d27a87a316ab65",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/97/513c002cf52e2ee95ce4b033124e6f147f98be": "4d90f383cf423223d42bbb3ebe9640be",
".git/objects/97/b0e50b7f013cfd5e8b26b93805946d63d72e5b": "fd2c2de3147dad748e34a3d66b4963b2",
".git/objects/98/9f49d4b2655095a4c147b4586eb0433c5b964f": "420c61b9284fee196783804d7491a064",
".git/objects/98/ea0d1d371946277f144901519d9f3bb9a0fe91": "fcfd05fba4ba9f02031d9a638db8b80c",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/caa575e95fb823fcd31166224eb01710b8fe4f": "45201b9a188ae62a5368535d5b5476f3",
".git/objects/aa/19dc1c389386effe5ddfbd6bc6335b77281b86": "a625d30ba82f4e0de86261e8ab1e7797",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b0/caf0549a150ee1552716f3ef4dd437a3bc86f4": "9bf456b0400f03811cb6a1a455dfcbf5",
".git/objects/b1/826eff995a1b81a3c43036e88fd7cb7236c370": "9f8dd452c17ea2e186cfde3630d0bf78",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b5/b04a079d0cc3fee75f913ccf418ba75ed6cdfa": "f0748e5a5efea07b36b73932bbba20ed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c1/6b5f87205c16546011a7f136be553cde4659f3": "14988cbe2a84f541f6e9a2f168cb9e0a",
".git/objects/c9/53c780cbca7bf6188e18ca55ac28ad7503f84d": "76b9fedd8e440c115fe62aeb2a4afa3a",
".git/objects/c9/6f7833f7d1e03a56b66fc89a05167f64e0ad2f": "a9697446b7deeb10043d32b180beced4",
".git/objects/ca/6232797c43e9a6455178c1984365370bba956d": "40c1a307da8cdcbad1d57ab8769765a9",
".git/objects/cc/93fbcba2b717b6174438fe0384750b9a973adc": "b87acc28f87d43627ea3c193b71d478c",
".git/objects/cf/e6a69c33cd7f45e01733bda3ecd71ee2f4f15a": "7dc2c9bc94b5179115398077d9a52d0f",
".git/objects/d4/57552381e5e12d9498f6aea963678e9c4ff777": "5626c21d3b487cb4ff64cfea92e4f66d",
".git/objects/d5/a7bb37e0bac83ff469c6f73dad97acef44da4c": "f4415c28e9a841299da0f784f6b73f99",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/7e4fd82b305b74c9e936feb7c8826d08b005a2": "c9ed2d3ae2bd1bfe5509c8a5aa87afab",
".git/objects/da/3c568e035b6bc44e6ce606ab05c86461812823": "9a260e07221b01a2ad92a5401bce7f55",
".git/objects/db/c0b661c834d1fdcb9b22043fb8ba90c41c05f2": "204dc729b9fb8a2a8dbea877f6015adf",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/e4/ef5eb9e44e7ca86266567a61049f22e2430d27": "205ce70448c82936326e8258fda62267",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/5f19228a41f10d88764c553852106c1604f3de": "e9995fc7a52ef2a2ff6d41d3cecab542",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d9228652e4f262266fe81f30e0bc58555da466": "4e10b981082ff6d86cb0cf0aaf324ac5",
".git/objects/f0/a789c5d2a94a87412ebbf32e2903a9a16d0cbe": "24309d9e6f0715e729f9debb496b49b1",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/f4/05f668a57881cbc51068723504f06c52692392": "ea26aa5a42116e959fcd3302e775ff5c",
".git/objects/f7/3498070f43de3e2abf7a78fb4b1a82d1ee18ec": "0d939942c2f873177a1287cd30192817",
".git/objects/fc/532ad58474a0dadc25183db4b8ef26c54ac210": "7cae6037919211353ad3b666ae3f49a1",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/37036a87021908aef55acdfcb9cc335f3d08c8": "1a14ffea26be27c3039e99a963f3f215",
".git/objects/fd/d297f3a5bf95589addb2c5af851193971b3a3a": "a165385bbf1d1ffa32ada3297af4a1f8",
".git/refs/heads/main": "485f5ebd85e9a16d3b41a8ae5661dd1d",
".git/refs/heads/master": "06e9e61b22c0d331d1fdb6e3ae6d872a",
".git/refs/remotes/origin/main": "485f5ebd85e9a16d3b41a8ae5661dd1d",
"assets/AssetManifest.json": "59c08a2cf7ff625f202ff3c421596dfc",
"assets/FontManifest.json": "9ca5dcfcd70a3310e33da7169e2df95e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "161048a06103492aeb304b8d2f5305b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a428cf7c539a208ce6f5ec80ed1aa750",
"/": "a428cf7c539a208ce6f5ec80ed1aa750",
"main.dart.js": "37e473f3eae87a956f4893826a0e20ed",
"manifest.json": "df631a788c347900da963524ec39908e",
"version.json": "fd144d1e428870720b53b9d2b455f687",
"worker.js": "22d119df17bfa31fe6ba69f385b93b5f"
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
