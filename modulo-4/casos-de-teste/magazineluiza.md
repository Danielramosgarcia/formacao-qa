### Casos Positivos – Validação de Login Magazine Luiza

| Caso | Ação | Resultado Esperado | Status | Resultado Encontrado | 
|------|------|-------------------|--------|----------------------|
| 1 | Testar “mostrar senha” | Senha digitada é exibida | Passou | Senha digitada é exibida em texto visível ao usuário |


### Casos Negativos – Validação de Login Magazine Luiza

| Caso | Ação | Resultado Esperado | Status | Resultado Encontrado |
|------|------|-------------------|--------|----------------------| 
| 1 | Inserir email correto mais senha errada | Exibir mensagem de erro referente ao campo senha | Passou | Mensagem de erro genérica é exibida, sem indicar qual campo está incorreto | 
| 2 | Inserir email sem “@” | Exibir mensagem de erro referente a email inválido | Passou | Mensagem de erro exibida corretamente |
| 3 | Deixar senha vazia | Exibir mensagem de erro referente ao campo senha | Passou | Mensagem de erro exibida corretamente |
| 4 | Deixar email vazio | Exibir mensagem de erro referente a email inválido | Passou | Mensagem de erro exibida corretamente |
| 5 | Testar limite mínimo de caracteres | Exibir mensagem de erro referente a senha | Passou | Mensagem de erro genérica é exibida, sem informar o critério mínimo de caracteres exigido |


### Evidências teste Positivo
📎[ 1 - Testar “mostrar senha”](https://github.com/Danielramosgarcia/formacao-qa/blob/1930cf3d0a5aed16d04d50be7aa4dd00ab43d11c/modulo-4/evidencias/magazineluiza/mostrar-senha.png)


### Evidências teste Negativo
📎[ 1 -  Inserir email correto mais senha errada](https://github.com/Danielramosgarcia/formacao-qa/blob/851552a7ef3af0e25227bb806517a2403acce1a4/modulo-4/evidencias/magazineluiza/email-correto-senha-invalida.png)
📎[ 2 -  Inserir email sem “@”](https://github.com/Danielramosgarcia/formacao-qa/blob/d35863bb0cdb50abe8eb0f13a8a9df76599d08f8/modulo-4/evidencias/magazineluiza/email-sem-%40.png)
📎[ 3 -  Deixar senha vazia](https://github.com/Danielramosgarcia/formacao-qa/blob/66dd50111c5fa2035ada33545aacd057960d2577/modulo-4/evidencias/magazineluiza/senha-vazia.png)
📎[ 4 -  Deixar email vazio](https://github.com/Danielramosgarcia/formacao-qa/blob/e30a2745d90fa4dd8aaa47df1d35f47752d32261/modulo-4/evidencias/magazineluiza/email-vazio.png)
📎[ 5 -  Testar limite mínimo de caracteres](https://github.com/Danielramosgarcia/formacao-qa/blob/f0a4094c677063dc2d11958f64c118912d5f752b/modulo-4/evidencias/magazineluiza/caracteres-minimos.png)


### Observações Finais

Durante a execução dos testes de validação de login, foi observado que,
ao inserir uma senha com quantidade mínima de caracteres inválida,
o sistema exibe apenas uma mensagem de erro genérica.
A mensagem apresentada não informa claramente qual regra de senha foi violada
(exemplo: quantidade mínima de caracteres), o que pode dificultar o entendimento
do usuário sobre como corrigir o erro.

