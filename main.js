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
function obtenerProducto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 10, nombre: "Teclado" });
    }, 1000);
  });
}

function obtenerPrecio(productoId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(50);
    }, 1000);
  });
}

// Uso con Promise
obtenerProducto()
  .then((producto) => {
    return obtenerPrecio(producto.id).then((precio) => {
      console.log(producto, precio);
    });
  });
  

function obtenerProducto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 10, nombre: "Teclado" });
    }, 1000);
  });
}

function obtenerPrecio(productoId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(50);
    }, 1000);
  });
}

// Uso con Promise
obtenerProducto()
  .then((producto) => {
    return obtenerPrecio(producto.id).then((precio) => {
      console.log(producto, precio);
    });
  });

function obtenerProducto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 10, nombre: "Teclado" });
    }, 1000);
  });
}

function obtenerPrecio(productoId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(50);
    }, 1000);
  });
}

// Uso con Async/Await
async function mostrarProductoYPrecio() {
  const producto = await obtenerProducto();
  const precio = await obtenerPrecio(producto.id);
  console.log(producto, precio);
}

mostrarProductoYPrecio();