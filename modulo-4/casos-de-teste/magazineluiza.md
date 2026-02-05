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
📎[ 1 - Testar “mostrar senha”]


### Evidências teste Negativo
📎[ 1 -  Inserir email correto mais senha errada]
📎[ 2 -  Inserir email sem “@”]
📎[ 3 -  Deixar senha vazia]
📎[ 4 -  Deixar email vazio]
📎[ 5 -  Testar limite mínimo de caracteres]


### Observações Finais

Durante a execução dos testes de validação de login, foi observado que,
ao inserir uma senha com quantidade mínima de caracteres inválida,
o sistema exibe apenas uma mensagem de erro genérica.
A mensagem apresentada não informa claramente qual regra de senha foi violada
(exemplo: quantidade mínima de caracteres), o que pode dificultar o entendimento
do usuário sobre como corrigir o erro.

