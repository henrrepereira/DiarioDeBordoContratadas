# 📱 App Relatório de Segurança - PWA

Aplicativo Progressive Web App (PWA) para registro de relatórios de segurança que funciona **diretamente no iOS** sem necessidade de MacBook ou Xcode.

## 🚀 Como Usar no iOS

### Método 1: Servidor Local (Recomendado)
1. **Inicie um servidor local** no seu computador:
   ```bash
   python -m http.server 8000
   ```

2. **Descubra o IP do seu computador**:
   - Windows: `ipconfig` → procure "IPv4 Address"
   - O IP será algo como `192.168.1.100`

3. **No iPhone/iPad**:
   - Abra o Safari
   - Acesse: `http://SEU-IP:8000/safety-report-app-pwa.html`
   - Exemplo: `http://192.168.1.100:8000/safety-report-app-pwa.html`

4. **Instale como App**:
   - Clique no ícone de compartilhar (📤)
   - Role para baixo e selecione "Adicionar à Tela Inicial"
   - Nomeie o app como "Relatório Segurança"
   - Pronto! O app aparecerá na sua tela inicial

### Método 2: Hospedagem Online
1. **Faça upload dos arquivos** para um serviço de hospedagem:
   - GitHub Pages (gratuito)
   - Netlify (gratuito)
   - Firebase Hosting (gratuito)
   - Seu próprio servidor

2. **Acesse pelo iOS**:
   - Abra o Safari no link do seu app
   - Siga os passos de instalação acima

### Método 3: Teste Local (Sem Servidor)
1. **Envie os arquivos** para seu iOS:
   - Email: anexe os arquivos HTML, JS, CSS
   - Cloud: Google Drive, iCloud, Dropbox
   - Mensagem: WhatsApp, Telegram

2. **Abra no iOS**:
   - Baixe os arquivos
   - Abra `safety-report-app-pwa.html` no Safari

## 📋 Funcionalidades do PWA

### ✅ Funciona Offline
- Registre relatórios sem internet
- Dados salvos localmente
- Sincronização automática quando online

### ✅ Acesso Nativo
- Ícone na tela inicial
- Sem barra de endereço (como app nativo)
- Tela cheia

### ✅ Recursos iOS
- 📸 Acesso à câmera e galeria
- 📍 Geolocalização
- 💾 Armazenamento local
- 🔄 Sincronização em background

## 🛠️ Arquivos do PWA

- `safety-report-app-pwa.html` - Aplicativo principal
- `manifest.json` - Configuração do PWA
- `sw.js` - Service Worker (offline)
- `safety-report-app-completo.html` - Versão original

## 🔧 Configuração Firebase

O app suporta duas modalidades:

### 1. Modo Online com Firebase
- Sincronização em tempo real
- Backup na nuvem
- Multi-usuário
- Relatórios em tempo real

### 2. Modo Offline Local
- Dados salvos no navegador
- Funciona sem internet
- Export/Import de dados
- Ideal para áreas sem conexão

## 📊 Como Configurar o Firebase

1. **Crie um projeto** no [Firebase Console](https://console.firebase.google.com)
2. **Ative os serviços**:
   - Authentication (Email/Senha)
   - Firestore Database
   - Storage
3. **Copie a configuração** e cole no app

## 🎯 Dicas para iOS

### Permissões Necessárias
- **Câmera**: Para fotos dos desvios
- **Localização**: Para geolocalização automática
- **Fotos**: Para selecionar imagens da galeria

### Performance
- Use WiFi para upload de fotos
- Fotos são comprimidas automaticamente
- Dados são sincronizados em segundo plano

### Backup
- Exporte relatórios periodicamente
- Use o modo Firebase para backup automático
- Mantenha cópias locais importantes

## 🚨 Solução de Problemas

### App Não Instala
- Verifique se está usando HTTPS (obrigatório em produção)
- Use servidor local para desenvolvimento

### Fotos Não Funcionam
- Certifique-se de dar permissão à câmera
- Use servidor (HTTP não permite câmera em alguns casos)

### Dados Não Salvam
- Verifique storage do navegador
- Limite de 5MB para dados locais

### Firebase Não Conecta
- Verifique as credenciais
- Confirme as regras de segurança do Firestore

## 📈 Próximos Passos

1. **Teste local** com servidor Python
2. **Instale no iOS** e teste offline
3. **Configure Firebase** para modo online
4. **Distribua** para sua equipe

## 🌐 Links Úteis

- [Firebase Console](https://console.firebase.google.com)
- [PWA Checklist](https://web.dev/pwa-checklist/)
- [iOS PWA Guide](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)

---

**📞 Suporte**: Para dúvidas, consulte a documentação do Firebase ou entre em contato com o desenvolvedor.

