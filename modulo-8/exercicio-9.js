const readlineSync = require("readline-sync");
const termination = [
    ".com", ".org", ".gov", ".edu",".net", 
    ".biz", ".tech",".online",".io",".co"
];
const email = readlineSync.question("Digite um email: ");

const index = termination.findIndex(term => email.endsWith(term));

const isValid =
email.includes("@") &&
email.indexOf("@") > 0 &&
index !== -1;

isValid
    ? console.log("Email válido")
    : console.log("Email inválido");