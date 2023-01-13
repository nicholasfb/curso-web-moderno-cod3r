/*
Crie uma função recebe um número (de 1 a 12) e retorne o mês correspondente 
como uma string. Por exemplo, se a entrada for 2, a função deverá retornar 
"fevereiro", pois este é o 2° mês.
*/


function nomeDoMes(numeroDoMes) {
    const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return mes[numeroDoMes-1];
}

const nomeDoMesArrow = (numeroDoMes) => {
    const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return mes[numeroDoMes-1];
}

const nomeDoMesAnonymous = function (numeroDoMes) {
    const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return mes[numeroDoMes-1];
}


const teste = nomeDoMes(3);
const testeArrow = nomeDoMesArrow(3);
const testeAnonymous = nomeDoMesAnonymous(3);


console.log(teste);
console.log(testeArrow);
console.log(testeAnonymous);