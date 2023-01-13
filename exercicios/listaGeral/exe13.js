/*
    Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro
*/

const filtrarNumeros = function (array) {
    const arrayNumeros = []
    for(let i = 0; i < array.length; i++) {
        if(typeof(array[i]) == "number") {
            arrayNumeros.push(array[i]);
        }
    }
    return arrayNumeros;
}

const teste = filtrarNumeros(["Javascript", 1, "3", "Web", 20]);

const teste2 = filtrarNumeros(["a", "c"]);

console.log(teste);
console.log(teste2);
