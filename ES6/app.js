//scope: el ambito e una variable (scope en ingles), es la zona del programa en la se define la variable
//javascript define dos ambitos para las variables global y function

//Toda variable en js tiene un valor por defecto: undefined (ems5)
//var: cuando el interprete ve el archivo, busca una declaracion de variable y si esta aparece undefined
//let: (ems6) obliga a que antes de ser usada la variable, esta exista
//const: no puede variar o mutar de valor, es necesario inicializarla cuando se declara
//Las constantes que son objetos, pueden cambiar sus propiedades perfectamente, pero no pueden ser igualadas directamente una vez declaradas.

//en EMS6 solo puede haber una sola variable con el mismo nombre
//¿Por que es mas seguro utilizar LET en lugar de VAR? R: Por que obliga a declarar variables antes de utilizarlas y evita la redeclaracion


var funciones = [];

for(var i=0; i<10; i++){
    funciones.push( function() {
        console.log(i); 
     } );
}

funciones.forEach( function(func){
    func();
})
 

let numero = 10;
 
if( true ){ 
    let numero = 20;
    
    while(true){ 
        let numero = 20; 
        
        for(let numero = 1; numero < 10; numero ++){ 
            numero = numero; 
        } break; 
   }
}
 
console.log(numero);


//Segementos de caracteres startsWith - endsWith - includes

var saludo = "Hola Mundo";

//EMS5
console.log( saludo.substr(0,1) === "H"  );
console.log( saludo.indexOf("x") );

//EMS6
console.log( saludo.startsWith("Hola") );
console.log( saludo.endsWith("o") );
console.log( saludo.includes("x") );


console.log(saludo.startsWith("Mu", 5));
console.log(saludo.includes("a", 5));

//Repeticiones de strings - Repeat

let texto = "Hola";

console.log(texto.repeat(2));

const ESPACIOS = 12;
let nombres = ["Fernando", "Melissa", "Juan"];
let numeros = ["9191112212", "1214442312", "1244445423"];

for (i in nombres){
    let dif = ESPACIOS - nombres[i].length;
    console.log( nombres[i] + " ".repeat(dif)   + "|" + numeros[i] )
}

//Plantillas literales - Literal Templates

let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;

console.log( nombreCompleto );

let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`
console.log(nombreCompleto2)

function obtenerNombre(){
    return "Maria Perez";
}

let nombreCompleto3 = `El nombre completo es ${obtenerNombre()}`;
console.log( nombreCompleto3 );


//EMS5

let multilinea = '<h1>Titulo</h1> \n<p>Hola Mundo</p>';
console.log(multilinea)

//EMS6
let multilinea2 = `<h1 class="algo">${obtenerNombre()}</h1>
<p>Hola Mundo</p>`;

console.log(multilinea2)

//Templates con tags
function etiqueta( literales, ...substituciones ){
    //console.log( arguments )
    let resultado = "";

    console.log(literales);
    console.log(substituciones);

    for(let i=0; i < substituciones.length; i++);
    {
        resultado += literales[i];
        resultado += substituciones[i];
    }
    return resultado;
}

let unidades = 5,
    costo_unitario = 10;

let mensaje = etiqueta`${unidades} de lapices cuestan ${unidades * costo_unitario} pesos`;

console.log(mensaje);

//Usando valores "raw" (crudos) en templates literales

let mensaje1 = `Hola \n mundo\\`,
    mensaje2 = String.raw`Hola \n mundo\\`;

console.log(mensaje1);
console.log(mensaje2);

//let numero = 10;
//console.log(  numero.startsWith("1") );

//startsWith junto con includes y endsWith, son funciones especiales de los STRINGS, 
//y en este caso "numero" no es una cadena de caracteres.
//las funciones son CaSeSeNsItIvE, es decir, que las mayúsculas y minúsculas son diferentes.