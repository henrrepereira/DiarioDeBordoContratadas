# TODO: Implementar Perfil do Usuário - Etapas Detalhadas

## Passos para Implementação

1. **Adicionar botão "👤 Perfil" no header**
   - Localizar o header da tela principal
   - Adicionar botão antes do botão "Sair"
   - Adicionar onclick="showUserProfile()"

2. **Adicionar campos extras no formulário de registro**
   - Contrato (input text)
   - Telefone (input tel)
   - Está de férias? (checkbox)
   - Datas de férias (input date range, condicional ao checkbox)
   - Demobilizado? (checkbox)
   - Atualizar JS para salvar no Firestore

3. **Criar modal de perfil do usuário**
   - HTML do modal com todos os campos
   - Similar ao modal de gerenciamento da nuvem
   - Campos editáveis para atualizar perfil

4. **Implementar funções JavaScript**
   - showUserProfile()
   - closeUserProfile()
   - loadUserProfile()
   - saveUserProfile()
   - toggleProfileFerias()
   - Event listeners para checkboxes

5. **Atualizar display do usuário**
   - Modificar userInfo para mostrar mais detalhes
   - Incluir contrato, telefone, status de férias

6. **Testar integração**
   - Verificar carregamento de dados
   - Verificar salvamento no Firestore
   - Verificar atualização do display do usuário
   - Testar modo offline/online

## Status
- [x] Botão no header adicionado
- [x] Campos no registro adicionados
- [x] Modal HTML criado
- [x] Funções JS implementadas
- [ ] Display do usuário atualizado
- [ ] Testes realizados
