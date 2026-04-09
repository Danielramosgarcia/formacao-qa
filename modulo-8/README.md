# Módulo 8 - Exercícios de JavaScript

Coleção de exercícios práticos para consolidar conceitos fundamentais de JavaScript, desde variáveis até funções e manipulação de arrays.

---

## 📋 Exercícios

### [Exercício 1 — Entendendo Variáveis e Valores](./exercicio-01.js)

**Objetivo:** Criar variáveis para representar dados de um produto e exibir uma mensagem formatada.

**Solução:** Criei três variáveis (productName, productAmount, productPrice) conforme solicitado. Para o preço, utilizei um objeto com duas propriedades (Moeda como string e Valor como number) para manter a organização dos dados. Depois, interpolei os valores em um template literal para exibir a mensagem.

### Conceitos aplicados:

- Declaração de variáveis com const
- Tipos primitivos (string, number)
- Objetos
- Template literals com interpolação

### [Exercício 2 — Condicionais: Produto Disponível ou Não](./exercicio-02.js)

**Objetivo:** Receber uma quantidade e informar se o produto está disponível.

**Solução:** Utilizei o readlineSync para capturar input do usuário. Primeiro, validei se o valor digitado é um número usando isNaN(). Se for válido, usei operadores ternários aninhados para verificar se a quantidade é maior que 0 (disponível) ou igual a 0 (esgotado).

### Conceitos aplicados:

- Input com readlineSync.question()
- Validação com isNaN()
- Operador ternário
- Condicionais lógicas

### [Exercício 3 — Verificar Idade para Cadastro](./exercicio-03.js)

**Objetivo:** Validar idade e retornar mensagem apropriada para cadastro.

**Solução:** Similar ao exercício anterior, capturei a idade via readlineSync. Validei se é um número com isNaN(). Depois, utilizei operadores ternários aninhados para verificar três faixas de idade: maiores de 18 (aprovado), menores de 13 (não permitido), e entre 13 e 17 (com responsável).

### Conceitos aplicados:

- Input com readlineSync.question()
- Validação com isNaN()
- Operadores ternários aninhados
- Lógica de comparação numérica

### [Exercício 4 — Calculando Valor Final de Compra](./exercicio-04.js)

**Objetivo:** Somar três valores e aplicar 10% de desconto.

**Solução:** Utilizei destructuring para atribuir os três valores (50, 30, 20) a variáveis. Criei uma variável total para somar os valores. No output, calculei o desconto multiplicando o total por 0.9 (equivalente a aplicar 10% de desconto).

### Conceitos aplicados:

- Destructuring de arrays
- Operações aritméticas
- Template literals

### [Exercício 5 — Repetição: Listar Números Pares](./exercicio-05.js)

**Objetivo:** Listar todos os números pares entre 1 e 20 usando loop.

**Solução:** Utilizei Array.from() com um tamanho de 10 elementos. Para cada índice, multipliquei (i + 1) por 2, garantindo que começasse com 2 (para gerar pares de 1 a 20) e todos os números resultantes fossem pares.

### Conceitos aplicados:

- Array.from()
- Arrow functions 
- Operações matemáticas 

### [Exercício 6 — Simular Busca de Produto](./exercicio-06.js)

**Objetivo:** Buscar um produto em uma lista e retornar se foi encontrado.

**Solução:** Utilizei readlineSync.question() para capturar o nome do produto digitado. Depois, usei o método .includes() para verificar se o produto existe no array. Com um operador ternário, retornei a mensagem apropriada.

### Conceitos aplicados:

- Input com readlineSync.question()
- Método .includes()
- Operador ternário 

### [Exercício 7 — Encontrar o Maior Preço](./exercicio-07.js)

**Objetivo:** Encontrar o valor máximo em um array de preços.

**Solução:** Utilizei o método .reduce() para comparar cada número com o acumulador. Se o número atual era maior que o maior encontrado até então, ele se tornava o novo maior. Ao final, retornei o maior valor.

### Conceitos aplicados:

- Método .reduce() 
- Comparação numérica
- Operador ternário

### [Exercício 8 — Criar Função: Calcular Média](./exercicio-08.js)

**Objetivo:** Criar uma função que calcula a média de números recebidos.

**Solução:** Utilizei rest parameter (...numbers) para aceitar qualquer quantidade de números. Depois, apliquei .reduce() para somar todos os valores e dividi o resultado pelo length do array para obter a média.

### Conceitos aplicados:

- Rest parameters
- Método .reduce()
- Arrow functions
- Operações aritméticas

### [Exercício 9 — Função para Validar Email](./exercicio-09.js)

**Objetivo:** Validar se um email é válido.

**Solução:** Criei uma validação mais robusta que o enunciado pedia. Capturei o email via readlineSync. Verifiquei três condições: se contém "@" usando .includes(), se o "@" não está no início usando .indexOf(), e se termina com uma terminação válida usando .findIndex() e .endsWith(). Apenas se todas as condições forem verdadeiras, o email é considerado válido.

### Conceitos aplicados:

- Input com readlineSync.question()
- Método .includes()
- Método .indexOf()
- Método .findIndex()
- Método .endsWith()
- Operador lógico AND (&&)

### [Exercício 10 — Contagem Regressiva](./exercicio-10.js)

**Objetivo:** Mostrar os números de 10 até 0 usando um loop decrescente.

**Solução:** Capturei o input do usuário e converti para número. Validei com isNaN() para garantir que é um número válido. Criei um array com tamanho igual ao número digitado mais 1. Para cada índice, calculei convertedNumber - i, gerando uma sequência decrescente. Utilizei .forEach() para imprimir cada número do array.

### Conceitos aplicados:

- Input com readlineSync.question()
- Conversão de tipos com Number()
- Validação com isNaN()
- Array.from()
- Operações aritméticas 
- Método .forEach()

### [Exercício 11 — Ordenar Lista de Preços](./exercicio-11.js)

**Objetivo:** Ordenar um array de preços em ordem crescente.

**Solução:** Utilizei o spread operator ([...array]) para criar uma cópia do array original, evitando modificar o array inicial. Depois, apliquei o método .sort() com uma função comparadora (a, b) => a - b para ordenar os números do menor para o maior.

### Conceitos aplicados:

- Spread operator
- Método .sort()
- Função comparadora

### [Exercício 12 — Soma de 1 a 100](./exercicio-12.js)

**Objetivo:** Criar um algoritmo que some todos os números de 1 até 100.

**Solução:** Capturei o input do usuário e o transformei em números usando .split(" ") para separar por espaço, .map(Number) para converter para números, .filter() com negação para manter apenas valores válidos e ordenei com .sort(). Validei se existem números: se nenhum, retorno erro; se apenas um, adiciono 0 no início com .unshift(). Com dois ou mais números, criei um array com Array.from() do menor até o maior, gerando sequência contínua, e imprimi com .forEach().

### Conceitos aplicados:

- Input com readlineSync.question()
- Método .split() 
- Método .map()
- Método .filter()
- Método .sort()
- Método .unshift()
- Array.from()
- Método .at()
- Método .forEach()

### [Exercício 13 — Verificar se o Número é Primo](./exercicio-13.js)

**Objetivo:** Verificar se um número é primo.

**Solução:** Capturei o input e converti para número, validando com isNaN(). Criei um array com números de 1 até o número digitado. Filtrei os números que dividem perfeitamente (resto zero) usando .filter(). Se mais de 2 números dividem (apenas 1 e ele mesmo para primos), o número não é primo. Caso contrário, é primo.

### Conceitos aplicados:

- Input com readlineSync.question()
- Conversão de tipos com Number()
- Validação com isNaN()
- Array.from()
- Método .filter()
- Operador módulo (%)
- Operador ternário

### [Exercício 14 — Contar Vogais em uma Frase](./exercicio-14.js)

**Objetivo:** Contar quantas vogais existem em uma frase.

**Solução:** Capturei o input do usuário. Utilizei o método .replace() com uma expressão regular [^aeiouáàâãéèêíìîóòôõúùûüç] com flags gi (global e case-insensitive) para remover tudo que não é vogal, substituindo por string vazia. O resultado contém apenas as vogais. Verifiquei o length para saber a quantidade e retornei a mensagem apropriada.

### Conceitos aplicados:

- Input com readlineSync.question()
- Método .replace()
- Expressões regulares (regex)
- Flags g e i
- Classe negada [^...]
- Operador ternário
- Template literals

### [Exercício 15 — Função que Verifica se número é Par ou Ímpar](./exercicio-15.js)

**Objetivo:** Verificar se um número é par ou ímpar.

**Solução:** Capturei o input do usuário e converti para número. Validei com isNaN() para garantir que é um número válido. Utilizei operadores ternários aninhados: primeiro verifica se é válido; se não, retorna erro. Se válido, verifica se o resto da divisão por 2 é zero (par) ou diferente de zero (ímpar), retornando a mensagem apropriada.

### Conceitos aplicados:

- Input com readlineSync.question()
- Conversão de tipos com Number()
- Validação com isNaN()
- Operador módulo (%)
- Operadores ternários aninhados
- Template literals