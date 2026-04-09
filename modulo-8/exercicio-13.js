const readlineSync = require("readline-sync");

const primeNumber = (arg) => {
    const numbArg = Number(arg);
    if (isNaN(numbArg)){
        return console.log("Digite um numero valido.");
    }
    const array = Array.from({length: arg}, (_, i) => i + 1);
    const divisible = array.filter(numb => arg % numb === 0);
    return divisible.length > 2
        ? console.log("Não é primo")
        : console.log("É primo");
}
primeNumber(readlineSync.question("Digite um Numero: "));