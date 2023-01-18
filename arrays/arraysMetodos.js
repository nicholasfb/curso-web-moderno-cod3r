const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop();
console.log(pilotos);

pilotos.push('Verstappen'); // adiciona o elemento no final da lista
console.log(pilotos);

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona o elemento no início da lista
console.log(pilotos);

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);