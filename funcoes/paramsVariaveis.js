function soma() { // Cria uma função sem parâmetros
    let soma = 0;
    for(i in arguments) { // captura os parâmetros
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1 ,2.2, 3.3));
console.log(soma("a" , "b", "c"));