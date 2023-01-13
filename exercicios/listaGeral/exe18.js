/*
    Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

const despesasTotais = function (array) {
    let totalDespesas = 0;
    for(const element in array) {
        totalDespesas += array[element]['preco'];
    }
    return totalDespesas;
}

const teste = despesasTotais([
    {
        nome: 'Jornal Online',
        categoria: 'Informação',
        preco: 89.99
    },
    {
        nome: 'Cinema',
        categoria: 'Entretenimento',
        preco: 150
    }
]);

const teste2 = despesasTotais([
    {
        nome: "Galaxy S20",
        categoria: "Eletrônicos",
        preco: 3599.99
    },
    {
        nome: "Macbook Pro",
        categoria: "Eletrônicos",
        preco: 30999.90
    }
]);

console.log(teste);
console.log(teste2);