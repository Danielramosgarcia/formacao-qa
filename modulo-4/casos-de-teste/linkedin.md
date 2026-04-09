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
📎[ 1 - Abrir a opção “Criar conta”](https://github.com/Danielramosgarcia/formacao-qa/blob/1ad00ababee928d69cd334b60e3ca9118ec83a5d/modulo-4/evidencias/linkedin/criar-conta.png)
📎[ 2 - Clicar no botão “Continuar” com campos válidos](https://github.com/Danielramosgarcia/formacao-qa/blob/2df180751d897cda38daac4fb7af01038333b31a/modulo-4/evidencias/linkedin/campos-validos.png)

### Evidências teste Negativo
📎[ 1 -  Inserir email com formato inválido](https://github.com/Danielramosgarcia/formacao-qa/blob/fa49c4f5f14d9e301b478686c18e4bad77f374bf/modulo-4/evidencias/linkedin/email-invalido.png)
📎[ 2 -  Enviar formulário com campos vazios](https://github.com/Danielramosgarcia/formacao-qa/blob/e054d54dab036ed3b5683efe88618c74381822e7/modulo-4/evidencias/linkedin/campos-vazios.png)
📎[ 3 -  Inserir senha curta](https://github.com/Danielramosgarcia/formacao-qa/blob/330297281e19afba94037d329936879d7e162087/modulo-4/evidencias/linkedin/senha-curta.png)
📎[ 4 -  Inserir senha sem números](https://github.com/Danielramosgarcia/formacao-qa/blob/23966966dcd1fae10ffd295e1a8e92fbd10668ba/modulo-4/evidencias/linkedin/senha-sem-numero.png)
📎[ 5 -  Inserir senha sem letras](https://github.com/Danielramosgarcia/formacao-qa/blob/a6e31dac986c9b0300b077776d8576df6e3f8999/modulo-4/evidencias/linkedin/senha-sem-letra.png)

### Observações Finais

Durante a execução dos testes, foi observado que o formulário de cadastro
aceita senhas que não combinam letras e números.
As regras completas de senha não ficam claras durante o processo de cadastro,
sendo apresentadas apenas em outros fluxos do sistema.
