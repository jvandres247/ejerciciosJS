//Parametros por defecto




//Parametro REST

/*
    El parametro rest es indicado con tres puntos (...) seguido del nombre que se le asignara a 
    dicho parametro

    Ese parametro se convierte en un arreglo qeu contiene el "resto" de los parametros
    pasados a la funcion

    De ahi se origina el nombre REST
*/
/**
arguments es un objeto similar a Array accesible
dentro de funciones que contiene los valores de
los argumentos pasados a esa función.
 */
//EMS5

function agregar_alumno( ){
    console.log( arguments );

    for (var i=1; i<arguments.length; i++){
        arguments[0].push(arguments[i]);
    }

    return arguments[0];
}

var alumnos_arr = ["Fernando"];
var alumnos_arr2 = agregar_alumno(alumnos_arr, "Maria", "Pedro", "Susana");


console.log('ES5',alumnos_arr2);

//EMS6

function agregar_alumno2(arr_alumnos, ...alumnos ){
    console.log( arguments );

    for (let i=0; i<alumnos.length; i++){
        arr_alumnos.push(alumnos[i]);
    }

    return arr_alumnos;
}

var alumnos_arr = ["Fernando"];
var alumnos_arr2 = agregar_alumno2(alumnos_arr, "Maria", "Pedro", "Susana");


console.log('ES6',alumnos_arr2);

//Restricciones del parametro REST

/**
 * 1- Solo puede existir un parametro rest en la funcion
 * 2- El parametro rest debe de ir siempre como ultimo parametro
 */

//El operador SPREAD

/**
 * Mientras que el parametro REST permite especificar argumentos independientes que seran combinados
    en un arreglo, el operador SPREAD permite especificar un arreglo que sera separado y cada item enviado
    sera un argumento independiente a la funcion
 */

//EMS5
var numeros = [1,2,3,4,5,6,7,8]
var max = Math.max.apply(Math, numeros);
console.log(max)
//EMS6

let nums = [1,2,3,4,5,6,7,8]
let maxNum = Math.max(...nums)
console.log(maxNum)

//Romper la relación de referencia de los objetos
let persona1= {
    nombre: 'Fernando',
    edad: 33
}

let persona2 = {...persona1};
persona2.nombre = 'Juan'
console.log(persona1);
console.log(persona2);

//Añadir propiedades a objetos a partir de otros objetos

let persona3= {
    nombre: 'Fernando',
    edad: 33
}

let persona4 = {
    nombre: 'Juan',
    edad: 33,
    direccion: 'Conocido 70110',
    conduce: true,
    vehiculo: true,
    vegetariano: false,
    casado: true,
};

persona3 = {
    ...persona4,
    ...persona3
}

console.log(persona3);
console.log(persona4);

// Diferencias entre el "Spread" y el "Rest"

/**
 * REST: Junta los elementos en un arreglo
 * SPREAD: Esparce los elementos como si fueran enviados de forma separada
 */

function saludarRest(saludo, ...nombres){
    for (i in nombres){
        console.log(`${saludo} ${nombres[i]}`);
    }
}

function saludarSpread(saludo, ...nombres) {
    console.log(`${saludo} ${nombres}.`);
}

saludarRest("Hola", "Fernando", "Maria", "Susana");

let personas = ["Melissa", "Hernando", "Juan"];

saludarSpread("Que tal!", personas)

let partes = ["brazos", "piernas"]
let cuerpo = ["cabeza", "cuello", ...partes, "pies", "dedos"];

console.log( cuerpo )

// Aclarando el doble comportamiento de las funciones
//En ES5 y versiones anteriores, las funciones sirven con una doble
//propositp de ser llamadas con o sin la palabra reservada "new"

//Con New: el valor de this dentro de la funcion es un nuevo
//objeto y ese nuevo objeto es retornado

//Sin New: Simplemente hacemos el llamado de la funcion y esperamos
// el retorno de algun valor procesado que puede ser un objeto, undefided o null
/*
 NEW.TARGET - Meta Propiedad

 una meta propiedad, es una propiedad de un no-objeto, que provee
 información adicional relacionada con su procedencia (como el new)

 Cuando el constructor de la funcion es llamada, new.target se llena
 con el operador new

 Si la funcion "Call()" es ejecutada, "new.target" no estara definida ya que
 no se ejecuto el constructor

*/
/**/
//Los parametros se asignan en el mismo orden en el que son definidos en la función, por consecuencia, cuando mandamos "Matamoros", es asignado al nombre y no al apellido.
//Un parámetro opcional, puede ser cualquier cosa que se le pueda enviar a una función por parámetro.
//Arguments es un objeto de las funciones normales, que muestra todos los parámetros enviados a la función aunque no estén definidos explícitamente.
//Arguments es un arreglo de los parametros que enviamos a la función al momento de ejecutarla. En este caso no estamos mandando ningún argumento o parámetro.
//En el ECMAScript 5, no existía los parámetros rest, se puede tener la funcionalidad utilizando arguments, pero no es lo mismo.
