const readlineSync = require("readline-sync");

let age = readlineSync.question("Digite sua idade: ");

isNaN(age)
    ? console.log("Digite uma idade valida")
    : age > 18
        ? console.log("Cadastro aprovado")
        : age < 13
            ? console.log("Cadastro não permitido")
            : console.log("Cadastro permitido com responsável");