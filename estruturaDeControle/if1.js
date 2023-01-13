function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);


function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log(`É verdade... ${valor}`);
    }
}

seForVerdadeEuFalo(); // undefined é false
seForVerdadeEuFalo(null) // null é false
seForVerdadeEuFalo(undefined) // undefined é false
seForVerdadeEuFalo(NaN) // NaN é false
seForVerdadeEuFalo('') //String vazia é false
seForVerdadeEuFalo(0) // 0 é false
seForVerdadeEuFalo(-1) // -1 é false
seForVerdadeEuFalo(' ') // true
seForVerdadeEuFalo([]) //true
seForVerdadeEuFalo([1, 2]) //true
seForVerdadeEuFalo({}) // true