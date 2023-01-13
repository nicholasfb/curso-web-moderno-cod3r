const fabricantes = ["Mercedes", "Audi", "BMW"];

// Callback -> passar uma função para outra função e quando determinado evento ocorrer a função que foi passada será disparada/chamada de volta

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

//forEach() é uma função de array
//O evento nesse caso é os elementos que foram encontrados no array, ou seja, a função vai continuar iterando(loop) o array até chegar no último elemento
fabricantes.forEach(imprimir);

fabricantes.forEach((fabricante) => console.log(fabricante));