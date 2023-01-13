let num1 = 1;
let num2 = 2;

num1++; // pósfix
console.log(num1);

--num1; // préfix (tem prioridade maior na precedência)
console.log(num1);

console.log(++num1 === num2--, num1 === num2);