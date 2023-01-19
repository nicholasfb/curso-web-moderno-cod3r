Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Barra de Ouro', preco: 5000, fragil: false},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
];

// Filtra os elementos do array com base na callback
console.log(produtos.filter2(function(p) {
    return p.preco > 2400;
}));


const produtoCaro = p => {
    return p.preco >= 500;
};

const produtoFragil = p => {
    return p.fragil === true;
}

const resultado = produtos.filter2(produtoCaro).filter2(produtoFragil);

console.log(resultado);