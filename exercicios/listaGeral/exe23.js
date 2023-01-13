/*
    Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
*/

const contarPalavras = function (string) {
    return string.split(' ').length;
}

const teste = contarPalavras('Me divirto aprendendo a programar!');
console.log(teste);