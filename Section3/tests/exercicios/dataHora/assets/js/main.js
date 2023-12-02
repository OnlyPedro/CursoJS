//Atividade Usando Switchs

const data = new Date();
const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();

// É mais simples de fazer por array
function getMesTexto(mes) {
    let mesTexto;

    switch (mes) {
        case 1:
            mesTexto = 'janeiro';
            return mesTexto;
        case 2:
            mesTexto = 'fevereiro';
            return mesTexto;
        case 3:
            mesTexto = 'março';
            return mesTexto;
        case 4:
            mesTexto = 'abril';
            return mesTexto;
        case 5:
            mesTexto = 'maio';
            return mesTexto;
        case 6:
            mesTexto = 'junho';
            return mesTexto;
        case 7:
            mesTexto = 'julho';
            return mesTexto;
        case 8:
            mesTexto = 'agosto';
            return mesTexto;
        case 9:
            mesTexto = 'setembro';
            return mesTexto;
        case 10:
            mesTexto = 'outubro';
            return mesTexto;
        case 11:
            mesTexto = 'novembro';
            return mesTexto;
        case 12:
            mesTexto = 'dezembro';
            return mesTexto;
        default:
            mesTexto = '';
            return mesTexto;
    }
}

// É mais simples de fazer por array
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

const mesTexto = getMesTexto(mes);
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

const exibeData = document.querySelector('.container h1');
exibeData.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minutos}`;

console.log(`${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minutos}`);
