export const nombreTarea = "Pasear al perro";

//Exportar una funcion
export const crearTarea = (tarea, urgencia) => {
  return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
};

//Multiples funciones
export const tareaCompletada = () => {
  console.log("La tarea se completo");
};

class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }

  mostrar() {
    console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
  }
}

// let tarea1 = new Tarea("Aprender JavaScript", "Alta");
// let tarea2 = new Tarea("Preparar café", "Alta");
// let tarea3 = new Tarea("Pasear al perro", "Media");
// let tarea4 = new Tarea("Conocer a mis suegros", "Baja");

class ComprasPendientes extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }

  mostrar() {
    super.mostrar();
    console.log(`y la cantidad de ${this.cantidad}`);
  }

  hola() {
    return "hola";
  }
}

let compra1 = new ComprasPendientes("Jabon", "Urgente", 3);
// console.log(compra1.mostrar());
// console.log(compra1.hola());
