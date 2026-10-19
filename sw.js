/* Índice Automático — guarda o que você já abriu, para funcionar sem internet. Sempre tenta a versão nova primeiro. */
const CACHE = 'indice-auto-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => { for (const k of await caches.keys()) if (k.startsWith('indice-auto-') && k !== CACHE) await caches.delete(k); await self.clients.claim(); })()));
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith((async () => {
    try { const res = await fetch(r); if (res.ok) (await caches.open(CACHE)).put(r, res.clone()).catch(() => {}); return res; }
    catch (err) { const g = await caches.match(r, { ignoreSearch: true }); if (g) return g; return new Response('', { status: 404 }); }
  })());
});
