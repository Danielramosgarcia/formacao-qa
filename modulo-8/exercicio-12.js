const readlineSync = require("readline-sync");

const countNumbers = (args) => {
    const numbers = args
        .split(" ")
        .map(Number)
        .filter(numb => !isNaN(numb))
        .sort((a, b) => a-b);

    if(numbers.length === 0){
        return console.log("Digite Pelo menos um numero.");
    } else if (numbers.length === 1){
        numbers.unshift(0);
    } 
    const arrayNumbers = Array.from({length : (numbers.at(-1) - numbers.at(0)) + 1}, (_, i) => i + numbers.at(0));
    return arrayNumbers.forEach(numb => console.log(numb));
}

countNumbers(readlineSync.question("Digite dois numeros separados por espaço: "));