function inverso(valor) {
    if(typeof(valor) == "boolean") {
        if(valor) {
            return false;
        } else {
            return true;
        }
    } else if(typeof(valor) == "number") {
        return valor * -1;
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(valor)}`
    }
}

const teste = inverso("programação");
console.log(teste);