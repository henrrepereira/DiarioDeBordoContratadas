# Instruções de Configuração do Firebase

## 📋 Pré-requisitos
1. Conta no Google (Gmail)
2. Acesso ao Firebase Console: https://console.firebase.google.com/

## 🚀 Configuração do Firebase

### 1. Criar Projeto no Firebase
1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Criar projeto" ou "Adicionar projeto"
3. Nomeie seu projeto (ex: "safety-reports-app")
4. Configure o Google Analytics (opcional)
5. Clique em "Criar projeto"

### 2. Configurar Authentication
1. No menu lateral, clique em "Authentication"
2. Clique na aba "Sign-in method"
3. Habilite "Email/senha"
4. Clique em "Salvar"

### 3. Configurar Firestore Database
1. No menu lateral, clique em "Firestore Database"
2. Clique em "Criar banco de dados"
3. Escolha o modo de segurança:
   - **Modo de teste**: Permite leitura/escrita para todos (ideal para desenvolvimento)
   - **Modo bloqueado**: Configure regras de segurança depois
4. Escolha a localização do servidor (recomendado: southamerica-east1)

### 4. Configurar Storage
1. No menu lateral, clique em "Storage"
2. Clique em "Começar"
3. Configure as regras de segurança (pode usar as padrões para teste)
4. Clique em "Concluído"

### 5. Obter Configuração do App
1. No painel do projeto, clique no ícone ⚙️ > "Configurações do projeto"
2. Role para baixo até "Seus aplicativos"
3. Clique no ícone </> para adicionar um app web
4. Registre o app com um nome (ex: "safety-reports-web")
5. Copie a configuração fornecida

### 6. Configurar Regras de Segurança

#### Firestore Rules (em Firestore > Regras):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permite que usuários leiam/escrevam apenas seus próprios documentos
    match /reports/{reportId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null;
    }
    
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

#### Storage Rules (em Storage > Regras):
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /reports/{reportId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == resource.metadata.userId;
    }
  }
}
```

## 🔧 Configuração no Aplicativo

1. Abra o arquivo `safety-report-app-completo.html`
2. Na primeira tela, preencha os campos com as informações do seu projeto Firebase:

```
API Key: sua-chave-api
Auth Domain: seu-projeto.firebaseapp.com
Project ID: seu-projeto-id
Storage Bucket: seu-projeto.appspot.com
Messaging Sender ID: 123456789
App ID: 1:123456789:web:abcdef123456
```

3. Clique em "Conectar à Nuvem"

## 📊 Onde os Dados são Armazenados

### ✅ Na Nuvem (Firebase):
- **Usuários**: Firebase Authentication + Firestore collection 'users'
- **Relatórios**: Firestore collection 'reports' 
- **Fotos**: Firebase Storage na pasta 'reports/'
- **Logs**: Firestore collection 'sync-logs'

### 📱 Localmente (Browser):
- Dados em localStorage como fallback offline
- Sincronização automática quando online

## 🧪 Testando o Sistema

### 1. Modo Online com Firebase
1. Configure o Firebase conforme instruções acima
2. Crie uma conta no aplicativo
3. Faça login e crie relatórios
4. Verifique os dados no Firebase Console

### 2. Modo Offline/Local
1. Clique em "Usar modo local apenas"
2. Os dados serão salvos apenas no navegador
3. Funcionalidade offline completa

### 3. Sincronização
- Dados são sincronizados automaticamente a cada 5 minutos
- Sincronização manual pelo botão "🔄 Sincronizar"
- Indicador visual de status de sincronização

## 🔍 Verificando os Dados na Nuvem

### No Firebase Console:
1. **Firestore**: Veja os relatórios em tempo real
2. **Storage**: Verifique as fotos enviadas  
3. **Authentication**: Gerencie usuários cadastrados

### Exemplo de Estrutura de Dados:

**Collection: reports**
```javascript
{
  id: "abc123",
  localizacao: "Área de Mineração",
  tstPresente: "sim",
  userId: "user-uid",
  userEmail: "usuario@email.com",
  createdAt: timestamp,
  updatedAt: timestamp,
  synced: true,
  fotoDesvioUrl: "https://...",
  fotoSolucaoUrl: "https://..."
}
```

## 🚨 Solução de Problemas

### Erro de Configuração:
- Verifique se todas as chaves estão corretas
- Confirme se os serviços estão habilitados no Firebase

### Erro de Permissão:
- Verifique as regras de segurança no Firebase
- Garanta que o usuário está autenticado

### Sincronização Falha:
- Verifique a conexão com internet
- Confirme se o Firebase está acessível

## 📞 Suporte

Para problemas com Firebase:
- [Documentação Firebase](https://firebase.google.com/docs/)
- [Console Firebase](https://console.firebase.google.com/)
- [Suporte Firebase](https://firebase.google.com/support/)

Para problemas com o aplicativo:
- Verifique o console do navegador (F12) para logs detalhados
