//Maps
/**
 * Nuevo tipo de coleccion de datos
 */

let mapa = new Map();
mapa.set( "nombre", "Andres");
mapa.set( "edad", 28);

console.log(mapa.get("nombre"))

//FOR OF

let numeros = [100,20,30,50,200];
for( let i =0; i< numeros.length; i++){
    console.log(numeros[i])
}

for(let i in numeros){
    console.log(numeros[i])
}

for(let i of numeros){
    console.log(i)
}

let personas = new Set();
console.log(personas)

let mapas = new Map([["nombre","fernando"],["apellido","herrera"]]);
 
console.log( mapas.get("nombre") );