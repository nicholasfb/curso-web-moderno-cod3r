function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Ps3', 1000));
console.log(criarProduto('iPad', 1199.49));