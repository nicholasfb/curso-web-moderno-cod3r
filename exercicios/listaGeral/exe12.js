/*
    Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.
*/

const removerPropriedade = function (objeto, propriedade) {
    let objetoCopia = Object.assign({}, objeto);
    if(objeto.hasOwnProperty(propriedade)) {
        delete objetoCopia[propriedade];

        return objetoCopia;
    } else {
        return "Propriedade não encontrada";
    }
}

const teste = removerPropriedade({a: 1, b: 2}, "a");
const teste2 = removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao");


console.log(teste);
console.log(teste2);
