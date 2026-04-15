class Narciso {
    esNarcisista(num) {
        let digitos = num.toString();
        let potencia = digitos.length;
        let suma = 0;
        for (let x = 0; x < potencia; x++) {
           suma += Math.pow(parseInt(digitos[x]), potencia);
        }
        return suma === num;
    }

}

const n = new Narciso();
console.log(n.esNarcisista(153));
console.log(n.esNarcisista(123));
