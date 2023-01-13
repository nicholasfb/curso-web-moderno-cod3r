/*
    Desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não
*/

const checarAnoBissexto = function (ano) {
    if(ano % 4 == 0 && !ano % 100 == 0 || ano % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

const teste = checarAnoBissexto(2021);
console.log(teste);
