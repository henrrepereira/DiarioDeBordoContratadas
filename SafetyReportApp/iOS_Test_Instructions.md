# Instruções para Testar o Aplicativo no iOS

Este documento descreve como testar o aplicativo "Diário de Bordo Técnico das Contratadas" em dispositivos iOS, incluindo instalação como PWA e uso offline.

---

## Requisitos

- Dispositivo iOS (iPhone ou iPad) com iOS 11.3 ou superior
- Navegador Safari atualizado
- Acesso à internet para o primeiro carregamento

---

## Passos para Testar no iOS

### 1. Acessar o Aplicativo

- Abra o Safari no dispositivo iOS.
- Digite a URL do aplicativo hospedado (exemplo: https://seu-dominio.com/index.html).
- O aplicativo deve carregar normalmente.

### 2. Instalar como PWA na Tela Inicial

- No Safari, toque no ícone de compartilhamento (quadrado com seta para cima).
- Selecione "Adicionar à Tela de Início".
- Escolha um nome para o ícone e confirme.
- O aplicativo será instalado como um ícone na tela inicial.
- Abra o aplicativo a partir do ícone para uma experiência similar a um app nativo, sem barra de endereço.

### 3. Testar Funcionalidades Offline

- Com o aplicativo aberto, conecte-se à internet para garantir o cache inicial.
- Depois, desligue o Wi-Fi e dados móveis.
- Navegue pelo aplicativo para verificar se os dados são carregados do cache.
- Teste o salvamento de relatórios e outras funcionalidades offline.
- Ao reconectar à internet, verifique se a sincronização com Firebase ocorre automaticamente.

### 4. Verificar Sincronização com Firebase

- Faça login com uma conta válida.
- Crie relatórios e verifique se são sincronizados com a nuvem.
- Teste a atualização e exclusão de relatórios.
- Verifique se as fotos são enviadas e recuperadas corretamente.

---

## Arquivos Importantes para PWA

- `manifest.json`: Configura o nome, ícone, cor e comportamento do app.
- `service-worker.js`: Gerencia o cache para funcionamento offline.
- `index.html` (ou arquivo principal): Deve conter meta tags para viewport e suporte a PWA.

---

## Observações

- O `start_url` no `manifest.json` está configurado para `./APP - Copia (3) - Copia.html`. Certifique-se que este arquivo exista e seja o ponto de entrada correto.
- O service worker está configurado para cachear os arquivos essenciais para uso offline.
- Teste a responsividade e usabilidade no Safari iOS para garantir boa experiência.

---

## Dicas para Desenvolvimento

- Use o Safari Web Inspector para depurar remotamente o app no iOS.
- Atualize o service worker e o cache conforme necessário para refletir mudanças.
- Considere otimizar imagens e recursos para melhor performance móvel.

---

Se precisar de ajuda adicional para testes ou ajustes, estou à disposição.
