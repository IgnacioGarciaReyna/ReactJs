//Para importar dos variables de un archivo, se utiliza una coma para separarlos dentro de las llaves.
//En este caso exportamos nombreTarea que es un string y crearTarea que es una función

import { nombreTarea, crearTarea, tareaCompletada } from "./tareas.js";

console.log(nombreTarea);

//Se le pasan argumentos a crearTarea
const tarea1 = crearTarea("Pasear al perro", "Media");

console.log(tarea1);

//Se llama la función directamente
tareaCompletada();
