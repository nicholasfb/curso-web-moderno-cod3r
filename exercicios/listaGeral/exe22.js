/*
    Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
*/

const funcaoDaSorte = function (numero) {
    const numeroSorteado = Math.floor(Math.random() * (11 - 1) + 1);
    if(numero < 0 || numero > 10) {
        return 'Digite um número entre 1 e 10'
    } else if(numero === numeroSorteado) {
        return `Parabéns! O número sorteado foi ${numeroSorteado}`
    } else {
        return `Que pena! O número sorteado foi o ${numeroSorteado}`
    }
}

const teste = funcaoDaSorte(10);

console.log(teste);
