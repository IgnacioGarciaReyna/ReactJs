//Se utiliza export para que nombreTarea pueda ser utilizado en otro archivo .js
//Cuando se ejecuta app.js, si solo se importa nombreTarea, en el archivo tareas.js solo se lee la linea donde se exporta nombreTarea
export const nombreTarea = "Pasear al perro";

// //Se puede exportar como:
// const nombreTarea = "Pasear al perro";
// export default nombreTarea;
//Pero solo es un "export default" por archivo
//En React se exporta mucho por "default" un componente, pero también se exportan funciones.
//Cuando importas un "default" no es necesario usar llaves {}

//Si querés exportar multiples valores por default podes hacerlo con un objeto
// const nombreTarea = "Pasear al perro";
// const tarea = "tarea";
// export default {
//   nombre: nombreTarea,
//   tarea: tarea,
// };

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
