/*
    Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo
*/

const maiorOuIgual = (n1, n2) => {
    if(n1 >= n2 || n1 === n2) {
        return true 
    } else {
        return false;
    }
}

const teste = maiorOuIgual(5, 1);

console.log(teste);
console.log(typeof(10));