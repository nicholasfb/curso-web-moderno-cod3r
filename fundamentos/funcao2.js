// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) { // função Anônima
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b;
}

console.log(soma(2,3));

// retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2,3));

// arrow function com um único parâmetro
const imprimir = value => console.log(value);

console.log(imprimir("Cod3r!"));