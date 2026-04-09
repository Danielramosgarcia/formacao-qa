const readlineSync = require("readline-sync");

const everOrOdd = (arg) => {
    const number = Number(arg);
    isNaN(number)
        ? console.log(`Digite um numero `)
        : number % 2 === 0
            ? console.log(`O numero ${number} é par.`)
            : console.log(`O numero ${number} é impar.`);
}

everOrOdd(readlineSync.question("Digite um numero: "));