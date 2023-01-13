/*
 Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores
*/

const operadoresAritmeticos = (valor1, valor2) => {
    const arrayResultados = [];
    arrayResultados.push(valor1 + valor2);
    arrayResultados.push(valor1 - valor2);
    arrayResultados.push(valor1 * valor2);
    arrayResultados.push(valor1 / valor2);

    return `
            Adição: ${arrayResultados[0]}
            Subtração: ${arrayResultados[1]}
            Multiplicação: ${arrayResultados[2]}
            Divisão: ${arrayResultados[3]}`;
}

console.log(operadoresAritmeticos(10,5));
