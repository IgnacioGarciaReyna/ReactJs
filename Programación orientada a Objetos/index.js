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
    return `${this.nombre} tiene una prioridad ${this.prioridad}`;
  }
}

//Crear objetos. En este caso son instancias de la clase Tarea
let tarea1 = new Tarea("Aprender JavaScript", "Alta");
let tarea2 = new Tarea("Preparar café", "Alta");
let tarea3 = new Tarea("Pasear al perro", "Media");
let tarea4 = new Tarea("Conocer a mis suegros", "Baja");

console.log(tarea1);
//Llamamos al método mostrar()
console.log(tarea2.mostrar());
console.log(tarea3);
console.log(tarea4);
