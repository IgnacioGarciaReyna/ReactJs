//Escribir clases
//Se crean con la pablabra reservada class
//No es obligatorio, pero es recomendable que todas las clases empiecen con mayuscula

class Tarea {
  //Para pasarle los argumentos hacia el objeto se usa el contructor, que es lo primero que se va a ejecutar primero una vez que creas una instancia de la clase
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }

  //Nuevo método. Cuando pasas una función a una clase se convierte en un método
  mostrar() {
    // return `${this.nombre} tiene una prioridad ${this.prioridad}`;
    console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
  }
}

//Crear objetos. En este caso son instancias de la clase Tarea
let tarea1 = new Tarea("Aprender JavaScript", "Alta");
let tarea2 = new Tarea("Preparar café", "Alta");
let tarea3 = new Tarea("Pasear al perro", "Media");
let tarea4 = new Tarea("Conocer a mis suegros", "Baja");

// console.log(tarea1);
// //Llamamos al método mostrar()
// console.log(tarea2.mostrar());
// console.log(tarea3);
// console.log(tarea4);

//HEREDANDO UNA CLASE:

//Heredar una clase de otra en React. En React vamos a heredar nuestro código de la librería.
//La principal ventaja de heredar es que puedes crear una clase padre y heredar todo eso a una clase distinta y solo realizar pequeños ajustes donde sea necesario.

//Podés crear una clase en otro archivo
//Con extends le decis la forma en la que la hereda y sabe a donde ir
//La diferencia es que hereda el constructor, pero les estamos agregando un atributo extra.
class ComprasPendientes extends Tarea {
  //Le damos los dos argumentos anteriores y le sumamos la cantidad
  constructor(nombre, prioridad, cantidad) {
    //Se debe llamar al método super() cuando estás heredando una clase.Super hace referencia al atributo padre. JavaScript sabe que estas queriendo utilizar nombre y prioridad que son los mimos del constructor que está heredando.
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }

  //Si queres reescribir mostrar() lo ponés acá, usas el mismo nombre para que sea el mismo método
  // mostrar() {
  //   return "hola";
  // }

  //Si queres agregarle una parte mas al método:
  mostrar() {
    //Hereda el texto anterior y le agrega otro mas
    super.mostrar();
    console.log(`y la cantidad de ${this.cantidad}`);
  }

  //Podes crear nuevos métodos. No limita si solo los tiene el padre o solo los tiene el hijo.
  hola() {
    return "hola";
  }
}

//Compras
// let compra1 = new ComprasPendientes("Jabon", "Urgente", 3);
// console.log(compra1);

//La ventaja es que una vez que heredás una clase dentro de otra podes utilizar los métodos también.
let compra1 = new ComprasPendientes("Jabon", "Urgente", 3);
console.log(compra1.mostrar());
console.log(compra1.hola());
