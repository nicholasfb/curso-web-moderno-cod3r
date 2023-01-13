/*
    A fim de criar um mecanismo de busca para a sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.

    Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contém nelas a string do primeiro parâmetro.
*/

const buscarPalavrasSemelhantes = function (string, array) {
    let arraySemelhantes = []
    for(let i = 0; i < array.length; i++) {
        if(string === array[i].slice(0, 3)) {
            arraySemelhantes.push(array[i]);
        }
    }
    return arraySemelhantes;
}

const teste = buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]);
const teste2 = buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]);

console.log(teste);
console.log(teste2);