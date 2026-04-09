const readlineSync = require("readline-sync");

let productAmount = readlineSync.question("Digite a quantidade de Produtos: ");

isNaN(productAmount)
    ? console.log("Digite um Numero valido.")
    : productAmount > 0 
        ? console.log("Produto Disponivel") 
        : console.log("Produto esgotado");