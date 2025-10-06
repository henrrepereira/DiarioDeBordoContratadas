# Diário de Bordo Técnico das Contratadas

Este é um aplicativo web progressivo (PWA) para registro e gerenciamento de relatórios de segurança, com sincronização em nuvem via Firebase e suporte offline.

---

## Tecnologias Utilizadas

- HTML5, CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- Firebase (Firestore, Auth, Storage)
- Bibliotecas: html2pdf.js, SheetJS (xlsx)
- PWA com suporte offline

---

## Como Testar no iOS

### Requisitos

- Dispositivo iOS (iPhone ou iPad) com iOS 11.3 ou superior
- Navegador Safari atualizado

### Passos para Testar

1. Abra o Safari no seu dispositivo iOS.
2. Digite a URL do aplicativo (exemplo: https://seu-dominio.com ou localhost se estiver na rede local).
3. Navegue pelo aplicativo normalmente para testar funcionalidades.
4. Para testar o modo offline:
   - Acesse o aplicativo com conexão.
   - Depois, desligue o Wi-Fi e dados móveis.
   - Verifique se os dados são salvos localmente e se o indicador de modo offline aparece.
5. Para testar a sincronização:
   - Conecte-se com uma conta Firebase válida.
   - Faça login e crie relatórios.
   - Verifique se os dados são sincronizados com a nuvem.
6. Para instalar como PWA no iOS:
   - No Safari, toque no ícone de compartilhamento (quadrado com seta para cima).
   - Selecione "Adicionar à Tela de Início".
   - O aplicativo será instalado como um ícone na tela inicial.
   - Abra o aplicativo a partir do ícone para uma experiência similar a um app nativo.

---

## Funcionalidades Principais

- Cadastro e login via Firebase
- Registro de relatórios de segurança com fotos
- Sincronização automática com Firebase Firestore
- Suporte offline com armazenamento local
- Exportação de relatórios em PDF e Excel
- Compartilhamento via WhatsApp
- Gerenciamento de perfil do usuário
- Cadastro de desvios críticos

---

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

---

## Contato

Para dúvidas ou suporte, entre em contato com o time de desenvolvimento.

---

## Licença

Este projeto está licenciado sob a licença MIT.
