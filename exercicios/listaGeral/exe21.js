/*
    Criar uma função que receba um array de números e retorne o menos número desse array
*/

const menorNumero = function (array) {
    // array.sort();
    // return array[0];
    return Math.min(...array); // Destructuring
}

const teste = menorNumero([5, -15, 50, 3]);
const teste2 = menorNumero([10, 5, 35, 65]);

console.log(teste);
console.log(teste2);