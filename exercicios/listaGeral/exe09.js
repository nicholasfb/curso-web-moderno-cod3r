/*
    Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado
*/

const repetir = function repetir(value, count) {
    const array = [];
    for(let i = 0; i < count; i++) {
        array.push(value);
    }

    return array;
}

const repetirAnonymous = function (value, count) {
    const array = [];
    for(let i = 0; i < count; i++) {
        array.push(value);
    }
    return array;
}

const teste = repetir(7, 3);
const testeAnonymous = repetirAnonymous("código", 2); 

console.log(teste);
console.log(testeAnonymous);

