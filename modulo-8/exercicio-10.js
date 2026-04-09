const readlineSync = require("readline-sync");

const descendingOrder = (number) =>{
    const convertedNumber = Number(number);
    if (isNaN(convertedNumber)){
        return console.log("Digite um numero valido.");
    }
    const array = Array.from({length: convertedNumber + 1}, (_, i) => convertedNumber - i);
    array.forEach(element => console.log(element));    
}

descendingOrder(readlineSync.question("Digite um numero : "));