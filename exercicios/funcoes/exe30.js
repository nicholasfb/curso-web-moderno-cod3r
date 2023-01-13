/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

*/

const vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];

const maiorEMenor = function (vetor) {
    console.log(`
Menor número: ${Math.min(...vetor)}
Maior número: ${Math.max(...vetor)}`)
}

maiorEMenor(vetor);


