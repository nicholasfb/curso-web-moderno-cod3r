/*
    Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares
 */

const receberSomenteOsParesDeIndicesPares = function (array) {
    let arrayElementosParesEIndicesPares = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0 && i % 2 == 0) {
            arrayElementosParesEIndicesPares.push(array[i]);
        }

    }
    return arrayElementosParesEIndicesPares;
}

const teste = receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]);
const teste2 = receberSomenteOsParesDeIndicesPares([10,70,22, 43]);

console.log(teste);
console.log(teste2);
