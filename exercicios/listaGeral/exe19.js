/*
    Crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desse números
*/

const calcularMedia = function (array) {
    let somaElementos = 0;
    for(const element in array) {
        somaElementos += array[element];
 
   }
   return somaElementos / array.length;
}

const teste = calcularMedia([0, 10]);
const teste2 = calcularMedia([1, 2, 3, 4, 5]);

console.log(teste);
console.log(teste2);