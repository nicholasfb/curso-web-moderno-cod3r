/* Desenvolva uma função que recebe dois parâmetros, 
 um é a quantidade de horas trabalhadas por um funcionário num mês, 
 e o quanto ele recebe por hora. O retorno da função deve ser a string 
 "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.
*/

const quantidadeHorasTrabalhadas = 150;
const valorHora = 40.5;


const calculaSalarioArrow = (quantidadeHorasTrabalhadas, valorHora) => `Salário igual a R$${quantidadeHorasTrabalhadas * valorHora}`;
const calculaSalarioAnonymous = function (quantidadeHorasTrabalhadas, valorHora) {
    return `Salário igual a R$${quantidadeHorasTrabalhadas * valorHora}`;
}


console.log(calculaSalarioArrow(quantidadeHorasTrabalhadas, valorHora));
console.log(calculaSalarioAnonymous(quantidadeHorasTrabalhadas, valorHora));