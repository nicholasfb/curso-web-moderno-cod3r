/*
    Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 */

const somarNumeros = function (array) {
    let soma = 0;
    for(const element in array) {
        soma += array[element];
    }

    return soma;
}

const teste = somarNumeros([10, 10, 10]);
console.log(teste);