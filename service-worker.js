// service-worker.js — gerado pelo Mini SK em 19/10/2026, 05:04:15
// Não precisa mexer: ele guarda sozinho o que o app usa.
const PREFIXO = 'sk-teste-';
const CACHE = PREFIXO + 'mveyxf6l';
// Lista feita automaticamente (para funcionar sem internet logo após instalar)
const GUARDAR = [
  "./",
  "./1.html",
  "./2.html",
  "./3.html",
  "./4.html",
  "./5.html",
  "./6.html",
  "./7.html",
  "./8.html",
  "./9.html",
  "./10.html",
  "./11.html",
  "./12.html",
  "./13.html",
  "./14.html",
  "./15.html",
  "./16.html",
  "./17.html",
  "./18.html",
  "./19.html",
  "./20.html",
  "./21.html",
  "./22.html",
  "./23.html",
  "./24.html",
  "./25.html",
  "./26.html",
  "./27.html",
  "./28.html",
  "./29.html",
  "./30.html",
  "./31.html",
  "./32.html",
  "./33.html",
  "./34.html",
  "./35.html",
  "./36.html",
  "./37.html",
  "./38.html",
  "./39.html",
  "./40.html",
  "./41.html",
  "./42.html",
  "./43.html",
  "./44.html",
  "./45.html",
  "./46.html",
  "./47.html",
  "./48.html",
  "./android/app/build.gradle",
  "./android/app/src/main/AndroidManifest.xml",
  "./android/app/src/main/assets/__ponte.js",
  "./android/app/src/main/java/app/minisk/shell/MainActivity.java",
  "./android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
  "./android/app/src/main/res/xml/rede.xml",
  "./android/build.gradle",
  "./android/gradle.properties",
  "./android/settings.gradle",
  "./apk.config.json",
  "./favicon.ico",
  "./hub.html",
  "./hub.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon-16.png",
  "./icons/icon-32.png",
  "./icons/icon-48.png",
  "./icons/icon-72.png",
  "./icons/icon-96.png",
  "./icons/icon-128.png",
  "./icons/icon-144.png",
  "./icons/icon-152.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-384.png",
  "./icons/icon-512.png",
  "./icons/icon.svg",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png",
  "./icons/maskable.svg",
  "./index.html",
  "./LISTA.md",
  "./manifest.json",
  "./PLANO.md",
  "./RECEITA.md",
  "./sw.js"
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(GUARDAR.map((u) => c.add(u).catch(() => null)))));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIXO) && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Primeiro a internet (sempre a versão nova); sem internet, a cópia guardada.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res.ok) { const copia = res.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); }
      // Igual ao Workbox da Replit: página que não existe (rota do app) abre o index
      if (res.status === 404 && req.mode === 'navigate') return caches.match('./').then((r) => r || fetch('./'));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || (req.mode === 'navigate' ? caches.match('./') : undefined)))
  );
});
