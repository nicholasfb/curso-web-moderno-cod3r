const nums = [1, 2, 3, 4, 5];

// For com propósito
// O map vai "processar" os elementos do array e retornar um novo array

let resultado = nums.map(function(e) {
    return e * 2;
});

console.log(nums);
console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);

let resultado2 = nums.map(triplo).map(soma10).map(paraDinheiro);
console.log(resultado2);