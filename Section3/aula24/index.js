/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressoes precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NAO
*/

/*
const expressaoAnd = true && true && false && true;
const expressaoOr = false || false || true || false;
console.log(expressaoOr);
*/

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' &&  senha === '12345';

console.log(vaiLogar);
