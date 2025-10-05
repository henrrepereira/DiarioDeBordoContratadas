const CACHE_NAME = 'safety-report-app-v1';
const urlsToCache = [
  './',
  './safety-report-app-pwa.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-storage-compat.js'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('🛠️ Service Worker instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Cache aberto, adicionando recursos...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ Todos os recursos foram cacheados');
        return self.skipWaiting();
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker ativado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker pronto para controlar páginas');
      return self.clients.claim();
    })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  // Ignorar requisições não GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Ignorar requisições do Firebase (para não cachear dados sensíveis)
  if (event.request.url.includes('firebase') || 
      event.request.url.includes('googleapis')) {
    return fetch(event.request);
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retornar do cache se disponível
        if (response) {
          console.log('📦 Servindo do cache:', event.request.url);
          return response;
        }

        // Fazer requisição de rede
        return fetch(event.request).then((response) => {
          // Verificar se a resposta é válida
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
        }).catch(() => {
          // Fallback para página offline
          if (event.request.destination === 'document') {
            return caches.match('./safety-report-app-pwa.html');
          }
          
          // Fallback genérico para outros recursos
          return new Response('🔌 Modo offline - Recurso não disponível', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});

// Sincronização em background
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-reports') {
    console.log('🔄 Iniciando sincronização de relatórios em background');
    event.waitUntil(syncReports());
  }
});

// Sincronização de relatórios pendentes
async function syncReports() {
  try {
    const clients = await self.clients.matchAll();
    clients.forEach((client) => {
      client.postMessage({
        type: 'SYNC_REPORTS'
      });
    });
    console.log('✅ Mensagem de sincronização enviada para clientes');
  } catch (error) {
    console.error('❌ Erro na sincronização:', error);
  }
}

// Mensagens do cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_REPORTS') {
    console.log('💾 Cache de relatórios solicitado');
    cacheReportsData(event.data.reports);
  }
});

// Cache de dados dos relatórios
async function cacheReportsData(reports) {
  try {
    const cache = await caches.open('reports-data');
    const response = new Response(JSON.stringify(reports), {
      headers: { 'Content-Type': 'application/json' }
    });
    await cache.put('/reports-data', response);
    console.log('✅ Dados dos relatórios cacheados');
  } catch (error) {
    console.error('❌ Erro ao cachear dados:', error);
  }
}

// Notificações push (para futuras implementações)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'Nova notificação do app de segurança',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      vibrate: [200, 100, 200],
      tag: 'safety-notification'
    };

    event.waitUntil(
      self.registration.showNotification(data.title || 'Relatório de Segurança', options)
    );
  }
});

// Clique em notificações
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/safety-report-app-pwa.html')
  );
});
