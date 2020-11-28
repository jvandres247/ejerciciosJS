//Clases

/**
 * abstraccion de un objeto de la vida real
 *
 * Metodos: son acciones que puede hacer el objeto
 *
 *
 */

 //ES5
 function Persona(nombre){
     this.nombre = nombre;
     this.gritarNombre = function(){
         console.log(this.nombre.toUpperCase());
     }
 }
 Persona.prototype.decirNombre = function(){
     console.log(this.nombre)
 }

 let fernando = new Persona('fernando')

 fernando.gritarNombre();
 fernando.decirNombre();

 //Declaracion basica de una clase en ES6

 class PersonaDos{
     constructor(nombre){
         this.nombre = nombre
     }

     decirNombreDos(){
         console.log(this.nombre)
     }
 }
 //Por que usar la sintaxis de clase
 /**
  * Las clases funcionan muy parecido a la declaracion LET
  * Todo el codigo dentro de una clase funciona en modo estricto
  * Todos los metodos no son enumerables
  * Todos los metodos internos, no tienen un constructor
  * Llamar una clase sin el new, dara un error
  * Intentar renombrar el nombre de la clase dentro de algun metodo de la misma dara un error
  * Las clases tienen metodos estaticos y privados
  */

  //Herencia de clases

  class Rectangulo{
      constructor(alto,largo){
          this.alto = alto;
          this.largo=largo;
      }

      getArea(){
          return this.alto * this.largo;
      }
  }

  let rectangulo = new Rectangulo(3,2);

  class Cuadrado extends Rectangulo{
      constructor(alto){
          super(alto, alto);
      }

      getArea(){
          //return "Cuadrado: " + (this.alto * this.alto);
            return super.getArea();
        }
  }

  let cuadrado = new Cuadrado(3);

  console.log(cuadrado.getArea());
  console.log(cuadrado instanceof Cuadrado);
  console.log(cuadrado instanceof Rectangulo);