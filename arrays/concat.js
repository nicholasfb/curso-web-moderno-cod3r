const filhas = ['Ualeskah', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];
// é possível concatenar elementos(além do array) passando como parâmetro
const todos = filhas.concat(filhos, 'Fulano', 'Ciclano');
console.log(todos, filhas, filhos);
console.log(['a', 'b'].concat([1,2], [3,4], 5, [[6,7]]));

// concatenar os valores de array em um único array
// o array original não é alterado