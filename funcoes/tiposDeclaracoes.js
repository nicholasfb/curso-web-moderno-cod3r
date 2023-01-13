console.log(soma(3,4));
// A chamada do console.log() funciona, pois primeiro o interpretador vai carregar todas as funções do arquivo e depois executa as linhas de código, ou seja, na linha 1, o interpretador já tem todas as funções carregadas


// function declartion
function soma(x, y) {
    return x + y;
}

//function expression
const sub = function (x, y) {
    return x - y;
}
// Só executará sem erro pois a função foi atribuída a uma variável
console.log(sub(3,4));

// named function expression
const mult = function mult(x, y) {
    return x * y;
}

console.log(mult(3,4));