///Prototipos
/**
 * La POO de javascript se encontraba basada en prototipos 
 * y no en clases (ES6 introduce clases)
 */

 /**
  * Los prototipos son un conjunto de normas para integrar POO
  * en javascript, pero con los prototipos, nosotros somos
  * capaces de realizar tareas como:
  * Herencia
  * Encapsulamiento
  * Abstracción
  * Polimorfismo
  */

let gato = {
    sonido(){
        console.log('miau!');
    },
    chillido(){
        console.log(('MIAAAAAU!'));
    }
}

let perro = {
    sonido(){
        console.log("Guau!");
    }
}

let angora = Object.create(gato);
console.log(Object.getPrototypeOf(angora) === gato);
angora.sonido();
angora.chillido();

//ES6
Object.setPrototypeOf( angora, perro);
console.log(Object.getPrototypeOf(angora) === gato);
angora.sonido();
//angora.chillido();

//Acceso al prototipo con la referencia SUPER
let persona={
    saludar(){
        return 'hola';
    }
}

let amigo= {
    saludar(){
        // ES5: return Object.getPrototypeOf(this).saludar(this) + ', saludos!!!';
        //ES6
        return super.saludar() + ', saludos!!!';
    }
}

Object.setPrototypeOf(amigo, persona);
console.log(amigo.saludar());

///Destructuración de objetos

let ajustes = {
    nombre: 'Andres Velazquez',
    email: 'jvandres247@gmail.com',
    facebook: 'jvandres247',
    google: 'jvandres247',
    premium: true,
    twitter: 'jvandres247'
};

let {nombre, email, facebook, google, premium, twitter:cuentaTwi='fer85'} = ajustes;

console.log(cuentaTwi)

///Los Set

/**
 * Historicamente, js solo ha tenido un tipo de coleccion de datos, los array
 * 
 * y aunque muchos digan que los objetos son una coleccion de pares de valores
 * no son realmente una coleccion de datos
 * 
 * por lo cual los sets son una lista ordenada de valores sin duplicados
 * permiten un rapido acceso a la data que contienen
 */

 //Creando sets, agregando items y buscando elementos
 let items = new Set();



 console.log(items);

 ///WeakSet
/**
 * *en un weakset, ADD(), HAS(), REMOVE(), dan error si enviamos como
 *  parametro algo que no sea un objeto
 * *No tiene manera de hacer repeticiones o ciclos for in
 * *Los weaksets no tienes keys(), values(), por lo que no hay manera
 *  via programacion de saber cuantos elementos hay dentro
 * *No tienen for each tampoco
 * *no tienen propiedad size
 */