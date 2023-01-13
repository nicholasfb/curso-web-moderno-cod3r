// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Desctruturing uma forma de extrair os atributos(propriedades) dos objetos
const {nome, idade } = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);


// Extraindo os valores apenas de logradouro
const { endereco: {logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);