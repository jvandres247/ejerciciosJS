/**
 * Funciones de Flecha - Arrow Functions
 *
 * Este tipo de funciones tienen una sintaxis variada
 * que depende de lo que quieras realizar.
 *
 * Pero normalmente tienen la misma estructura
 *
 * *Funcion con argumentos
 * *Seguidos de una flecha gorda =>
 * *Seguido del cuerpo de la funcion
 *
 * Para que sirven
 * *Menos codigo que es mas simple de interpretar
 * *No hay un nuevo "this" dentro de las funciones
 * *No hay constructores, no tiene new
 * *No puedes cambiar el valor del "this" aunque uses call()
 *  apply() o bind()
 * *No hay objeto "arguments"
 *
 * Tecnicamento hablando
 * *Son funciones definidas con una nueva sintaxis que usa una
 *  flecha "=>", pero se comportan de una forma muy diferente a las
 *  funciones normales en ECMAScript 5
 *
 * Tiene 6 caracteristicas principales
 * 1.No hay creacion de this, super, arguments y new.target
 * 2.No puede ser llamado con new
 * 3.No tienen prototype
 * 4.No pueden cambiar el valor de "THIS"
 * 5.No hay objeto "arguments"
 * 6.No pueden tener nombre de parametros duplicados
 */

//Ejemplo 1
//funcion normal
var miFuncion2 = function (valor) {
  return valor;
};
console.log("Funcion normal: ", miFuncion2());
//funcion tipo flecha
let miFuncion1 = (valor) => valor;
console.log("Funcion flecha: ", miFuncion1());

//Ejemplo 2
//funcion normal
var sumar2 = function (num1, num2) {
  return num1 + num2;
};
console.log("Funcion normal: ", sumar2(1, 2));
//funcion tipo flecha
let sumar1 = (num1, num2) => num1 + num2;
console.log("Funcion flecha: ", sumar1(2, 3));

//Ejemplo 3
//funcion normal
var saludar2 = function () {
  return "Hola Mundo";
};
console.log("Funcion normal: ", saludar2());
//funcion flecha
let saludar1 = () => "Hola Mundo";
console.log("Funcion flecha: ", saludar1());

//Ejemplo 4
//funcion normal
var saludarPersona = function (nombre) {
  var salida = "Hola " + nombre;

  return salida;
};
console.log("Funcion flecha: ", saludarPersona("Andres"));

//funcion flecha
let saludarPersona2 = (nombre) => {
  let salida = `Hola ${nombre}`;
  return salida;
};
console.log("Funcion flecha: ", saludarPersona2("Andres"));

//Ejemplo 5
//funcion normal
var obtenerLibro = function (id) {
  return {
    id: id,
    nombre: "Harry Potter",
  };
};

//funcion flecha
let obtenerLibro2 = (id) => ({
  id: id,
  nombre: "Harry potter",
});

///////Funciones anonimas

//ES5
var saludo1 = (function (nombre) {
  return "hola " + nombre;
})("fernando");

console.log(saludo1);

//ES6
var saludo2 = ((nombre) => `hola ${nombre}`)("melissa");
console.log(saludo2);

//No hay cambios en el objeto "this"
//ES5
var manejador = {
  id: "123",
  init: function () {
    document.addEventListener("click", (function(event) {
      this.clickEnPagina(event.type);
    }).bind(this), false);
  },
  clickEnPagina: function(type){
      console.log("Manejando " + type + "para el id: " + this.id);
  }
};
manejador.init();

//ES6
var manejador2 = {
    id: "123",
    init: function () {
        document.addEventListener("click",
        event => this.clickEnPagina(event.type));
    },
    clickEnPagina: function(type){
        console.log("Manejando " + type + "para el id: " + this.id);
    }
  };
  manejador2.init();

///Funciones de flechas y arreglos
//ES5
var arregloNum = [5,10,11,2,1,9,20];
var ordenado = arregloNum.sort(function(a,b){
    return a-b;
})
console.log("ES5: ", ordenado);
//ES6
let ordenadoES6 = arregloNum.sort((a,b) => a-b);
console.log("ES6: ", ordenadoES6);


///Identificando funciones de flecha
//ES6
var restar = (a,b) => a - b;
console.log(typeof restar);
console.log(restar instanceof Function);

(()=>{});

///Extensiones de objetos literales
/**
 * Los objetos en ES6 han recibido muchas mejoras, ya que cualquier
 * cosa en javascript es algun tipo de objeto
 */

 //Objetos literales
 /**
  * Este tipo de estructuras es el patron mas utilizado en javascript (JSON se construyo de esta sintaxis)
  */

  //ES5
  var objeto = {
    nombre: 'Andres',
  }
///ES6
  function crearPersona (nombre, apellido, edad){
    return {
      nombre,
      apellido,
      edad
    }
  }

  var andres = crearPersona("Andres", "Velazquez", 28);
  console.log(andres);

///Metodos concisos
/**
 * 
 */
var persona = {
  nombre: 'andres',
  getNombre: function(){
    console.log(this.nombre)
  }
}

persona.getNombre();

//ES6
var persona2 = {
  nombre: 'andres',
  getNombre(){
    console.log(this.nombre)
  }
}
persona2.getNombre();

///Nombre de propiedades computadas o procesadas
//ES5
var persona3 = {};
var apellido = 'apellido';

persona3['primer nombre'] = "Fernando";
persona3[apellido] = 'Herrera';

console.log(persona3['primer nombre']);
console.log(persona3[apellido]);

var persona4 = {
  'primer nombre': 'jose'
}
console.log(persona4['primer nombre'])


//ES6
var apellido2 = 'primer apellido';
var persona4 = {
  'primer nombre' : 'andres',
  [apellido2] : 'velazquez'
}

console.log("ES6: ", persona4['primer nombre']);
console.log("ES6: ", persona4[apellido2]);

var subFijo = 'nombre'
var persona5 = {
  ['primer' + subFijo]: 'melissa',
  ['segundo' + subFijo]: 'Karen'
}

console.log(persona5['primer nombre']);
console.log(persona5['segundo' + subFijo]);

///Nuevo metodo Object.is()
console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0,-0));

console.log("========");
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN,NaN));

console.log("=========");
console.log( 5 == 5);
console.log( 5 == '5');

console.log( 5 === 5);
console.log( 5 === '5');

console.log('=====5 contra 5======');
console.log( Object.is(5,5));
console.log( Object.is(5,'5'));


///Nuevo metodo Object.assign()

