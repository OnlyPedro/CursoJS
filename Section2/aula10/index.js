// Dados primitivos -> string, number, undefined, null, boolean, symbol

const nome = 'Pedro'; // String
const nome1 = "Pedro"; // String
const nome2 = `Pedro`; // String
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined
const sobrenomeAluno = null; // Nulo
const aprovado = true; // Boolean = true, false

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);
