const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Oliveira',
    idade: 20,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    }
}

// Atribuiçao via desestruturaçao
const { nome, sobrenome,  ...resto } = pessoa;
console.log(nome, resto);
