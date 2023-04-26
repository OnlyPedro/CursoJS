// const array = [1,2,3];
// array.push(4);
// array[0] = 'Pedro';
// console.log(array);

// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda';
// const idade01 = 25;

// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira';
// const idade02 = 55;

// const pessoa1 = {
//     nome: 'Pedro',
//     sobrenome: 'Oliveira',
//     idade: 20
// };

// const pessoa2 = {
//     nome: 'Judas',
//     sobrenome: 'Oda',
//     idade: 20
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);


// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
// const pessoa2 = criaPessoa('Pedro', 'Mesquita', 35);
// const pessoa3 = criaPessoa('Jean', 'Moreira', 22);
// const pessoa4 = criaPessoa('Judas', 'Junior', 55);
// const pessoa5 = criaPessoa('Maria', 'Silva', 60);

// console.log(pessoa1.nome, pessoa1.sobrenome);

const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Oliveira',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
