/*
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. 

Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.

Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

*/

const vetor1 = [1, 'Um', 1.1];
const vetor2 = [2, 'Dois', 2.2];
const vetor3 = [3, 'Três', 3.3];
const vetor4 = [4, 'Quatro', 4.4];


const arrayConcat = vetor1.concat(vetor2,vetor3,vetor4);


console.log(arrayConcat.length);


