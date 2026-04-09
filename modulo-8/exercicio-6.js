const readlineSync = require("readline-sync");
const products = ["camiseta", "notebook", "mouse", "cadeira"];
const choise = readlineSync.question("Digite o nome do produto :");

products.includes(choise) 
    ? console.log("Produto encontrado") 
    : console.log("Produto não encontrado");