/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/
const array = [10, 7, 3, 6];

const mediaAritmetica = function (array) {
    let media = 0;
    let soma = 0;
    for(let elemento in array) {
        soma+= array[elemento];
    }
    return media = soma / array.length;

}

console.log(mediaAritmetica(array));

