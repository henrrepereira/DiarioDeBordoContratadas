const CACHE_NAME = 'safety-reports-v1';
const urlsToCache = [
  './safety-report-app-completo.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-storage-compat.js'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  // Para requisições do Firebase, sempre buscar da rede primeiro
  if (event.request.url.includes('firebase') || 
      event.request.url.includes('googleapis')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // Se falhar, tentar buscar do cache
          return caches.match(event.request);
        })
    );
    return;
  }

  // Para outros recursos, usar estratégia cache-first
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retornar do cache se disponível
        if (response) {
          return response;
        }

        // Se não estiver no cache, buscar da rede
        return fetch(event.request).then((response) => {
          // Não cachear respostas que não são válidas
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar a resposta para armazenar no cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});

// Sincronização em background
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Sincronização em background iniciada');
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Aqui você pode implementar a lógica de sincronização em background
  // Por exemplo, tentar enviar relatórios pendentes
  console.log('Executando sincronização em background...');
  
  // Simular sincronização
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Sincronização em background concluída');
      resolve();
    }, 2000);
  });
}

// Notificações push (opcional)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: './icon-192x192.png',
      badge: './icon-192x192.png',
      vibrate: [200, 100, 200],
      tag: 'safety-report-notification'
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/safety-report-app-completo.html')
  );
});
