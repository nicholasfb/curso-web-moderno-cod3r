/*
    Desenvolva uma função que receba um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.
*/

const contarCaracter = function (char, string) {
    let count = 0;
    for(element in string) {
        if(string[element] == char) {
            count++;
        }
    }
    return count;
}

const teste = contarCaracter('r', 'A sorte favorece os audazes');

const teste2 = contarCaracter('c', 'Conhece-te a ti mesmo');

console.log(teste);
console.log(teste2);