console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length);
console.log(aprovados);

// Cria-se espaços vazios entre os elementos, no caso, os espaços são undefined
aprovados[9] = 'Rafel';
console.log(aprovados.length);
console.log(aprovados);
console.log(aprovados[8] === undefined);
console.log(aprovados[8] === null);

console.log(aprovados);
aprovados.sort();
console.log(aprovados);

// o elemento no índice é definido como undefined, porém o elemento ainda existe
delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];

//splice(a partir de qual índice, quantidade de elementos a serem excluídos, 'elementos para adicionar')
aprovados.splice(1, 2, 'Elemento1', 'Elemento2');
aprovados.splice(2, 0, 'Junior', 'Eloi');
console.log(aprovados);

