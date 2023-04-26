/*
Primitivos (imutaveis)- string, numer, boolean, undefined, null (bigint,symbol) - Valores copiados

Referencia (mutavel) - array, object, function - Passados por referencia
*/

// let a = [1, 2, 3];
// let b = a;
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Pedro')
// console.log(a, b, c);

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Pedro')
// console.log(a, b, c);


const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

// const b = a;
const b = {...a};

a.nome = 'Pedro';

console.log(a);
console.log(b);

