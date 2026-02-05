### Cenários Positivos – Cadastro LinkedIn

| Cenário | Ação | Resultado Esperado | Status | Resultado Encontrado | 
|------|------|-------------------|--------|----------------------|
| 1 | Abrir a opção "Criar conta" | Formulário de cadastro é exibido | Passou | Formulário exibido corretamente |
| 2 | Clicar no botão “Continuar” com campos válidos | Avança para a próxima etapa | Passou | Próxima etaba exibida |

### Cenários Negativos – Cadastro LinkedIn

| Cenário | Ação | Resultado Esperado | Status | Resultado Encontrado |
|------|------|-------------------|--------|----------------------| 
| 1 | Inserir email com formato inválido | Exibir mensagem de erro referente ao email | Passou | Mensagem de erro exibida | 
| 2 | Enviar formulário com campos vazios | Exibir mensagem de erro nos campos obrigatórios | Passou | Mensagens de erro exibidas |
| 3 | Inserir senha curta | Exibir mensagem de erro referente à senha | Passou | Mensagem de erro exibida |
| 4 | Inserir senha sem números | Validar comportamento do sistema ao inserir senha sem números | Passou | Sistema aceitou a senha sem números |
| 5 | Inserir senha sem letras | Validar comportamento do sistema ao inserir senha sem letras | Passou | Sistema aceitou a senha sem letras |


### Evidências teste Positivo
📎[ 1 - Abrir a opção “Criar conta”]
📎[ 2 - Clicar no botão “Continuar” com campos válidos]

### Evidências teste Negativo
📎[ 1 -  Inserir email com formato inválido]
📎[ 2 -  Enviar formulário com campos vazios]
📎[ 3 -  Inserir senha curta]
📎[ 4 -  Inserir senha sem números]
📎[ 5 -  Inserir senha sem letras]

### Observações Finais

Durante a execução dos testes, foi observado que o formulário de cadastro
aceita senhas que não combinam letras e números.
As regras completas de senha não ficam claras durante o processo de cadastro,
sendo apresentadas apenas em outros fluxos do sistema.
