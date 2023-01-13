/*
    Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário. área do triângulo = (base x altura) / 2
*/

const areaDoTrinagulo = function (baseDoTriangulo, AlturaDoTriangulo) {
    return ((baseDoTriangulo * AlturaDoTriangulo) / 2).toFixed(2);
}

const teste = areaDoTrinagulo(9.25, 13.1);
console.log(teste);