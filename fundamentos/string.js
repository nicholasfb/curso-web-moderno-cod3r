const escola = "Cod3r";

console.log(escola.charAt(4)); // retorna o caractere que está na posição que foi passado como parâmetro
console.log(escola.charAt(5)); 
console.log(escola.charCodeAt(0)); // retorna em tabela ASCII
console.log(escola.indexOf("C")); // retorna a posição do caractere que foi passado como parâmetro


console.log(escola.substring(1));
console.log(escola.substring(3,5));

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e')); // substitui os caracteres escolhido pelo parâmetro passado

console.log('Ana,Maria,Pedro'.split(','));