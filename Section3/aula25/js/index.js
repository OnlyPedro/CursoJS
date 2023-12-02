/*
&& -> false && true -> false "o valor mesmo"
|| ->  true || false -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null ; undefined
NaN
*/

//console.log('Pedro Oliveira' && 0 && 'Maria');
//console.log('Pedro Oliveira' && true && 'Maria');
//console.log('Luiz' && 'Maria');
//console.log('Luiz' && '' && 'Maria');

// function falaOi (){
//     return 'Oi';
// }

// const vaiExecutar = 'Pedrinho';

// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Pedro Oliveira' || true);

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
