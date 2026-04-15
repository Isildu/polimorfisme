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

class Personaje {
    #nombre
    #vida
    constructor(nombre, vida){
        this.#nombre = nombre;
        this.#vida = vida;
    }
    atacar(){

    }
    recibirDanyo(cantidad){
        if(cantidad < this.#vida){
            this.#vida -= cantidad
        }else this.#vida = 0
    }
    estarVivo(){
        if (vida > 0){
            return true
        } else return false
    }
}

class Guerrero extends Personaje {
    #fuerza
     constructor(nombre, vida, fuerza) {
        super(nombre, vida);
        this.#fuerza = fuerza;
    }
}

class Mago extends Personaje {
 #mana
     constructor(nombre, vida, mana) {
        super(nombre, vida);
        this.#mana = mana;
    }
}