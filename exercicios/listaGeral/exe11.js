/*
    Crie uma função que receba um array e retorne o primeiro e o último elemento desse array como um novo array
*/


const receberPrimeiroEUltimoElemento = function(array) {
    const novoArray = [];
    novoArray.push(array[0]);
    novoArray.push(array[array.length-1]);
    return novoArray;
}

const teste = receberPrimeiroEUltimoElemento([7, 14, "olá"])

const teste2 = receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]);


console.log(teste);
console.log(teste2);