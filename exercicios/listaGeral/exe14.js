/*
    Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.
*/

const objeto = {
    nome: 'Maria',
    profissao: 'Desenvolvedora de Software'
};


const objetoParaArray = function (object) {
    // const [nome, profissao] = Object.keys(objeto);
    // const { nome: name, profissao: job } = objeto;

    // arrayNome = [];
    // arrayProfissao = [];
    // array = [];

    // arrayNome.push(nome, name);
    // arrayProfissao.push(profissao, job);
    // array.push(arrayNome, arrayProfissao);

    // return array;

    return Object.entries(object);
}

const teste = objetoParaArray(objeto);
console.log(teste)

// for(const property in objeto) {
//     arrayParChave.push(property, objeto[property]);
// }

// array.push(arrayParChave);