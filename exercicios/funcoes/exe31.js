/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console
*/

const vetor = [-4,10,-1,0,5,22,-11,7,43,-46,19];

const qtdNumerosNegativos = function (vetor) {
    let acumulador = 0;
    for(let elemento in vetor) {
        if(vetor[elemento] < 0) {
            acumulador++;
        }
    }
    return console.log(`Foram encontrados ${acumulador} negativos`);
}

qtdNumerosNegativos(vetor);
