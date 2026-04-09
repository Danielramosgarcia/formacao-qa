const readlineSync = require("readline-sync");

const vowelCounter = (arg) => {
    const vowel  = arg.replace(/[^aeiouáàâãéèêíìîóòôõúùûüç]/gi, "");
    vowel.length > 0
        ? console.log(`A frase contém ${vowel.length} vogais.`)
        : console.log("A frase não tem nenhuma vogal.");
}


vowelCounter(readlineSync.question("Digite alguma frase: "));