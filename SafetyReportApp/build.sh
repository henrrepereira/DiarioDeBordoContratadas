#!/bin/bash

# Script de build para Safety Report App iOS
# Este script ajuda a preparar o projeto para o Xcode

echo "🛠️  Preparando Safety Report App para iOS..."

# Verificar se o Xcode está instalado
if ! command -v xcodebuild &> /dev/null; then
    echo "❌ Xcode não encontrado. Instale o Xcode da App Store."
    exit 1
fi

echo "✅ Xcode encontrado"

# Criar estrutura de diretórios do projeto Xcode
echo "📁 Criando estrutura de projeto..."

# Este é um projeto básico - para um projeto completo, você precisaria:
# 1. Criar um novo projeto no Xcode
# 2. Substituir os arquivos gerados por estes
# 3. Adicionar o arquivo HTML ao bundle

echo "📋 Próximos passos manuais:"
echo "1. Abra o Xcode"
echo "2. Crie um novo projeto 'Single View App'"
echo "3. Substitua os arquivos gerados pelos arquivos desta pasta"
echo "4. Adicione 'safety-report-app-completo.html' ao target"
echo "5. Configure as permissões de câmera e fotos no Info.plist"
echo "6. Compile e execute no simulador ou dispositivo"

echo ""
echo "🎯 Para testar rapidamente sem Xcode:"
echo "   - Use um servidor local: python -m http.server 8000"
echo "   - Acesse pelo iOS: http://SEU-IP:8000/safety-report-app-completo.html"

echo ""
echo "✅ Preparação concluída!"
