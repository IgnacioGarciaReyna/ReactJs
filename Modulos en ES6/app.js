//Modulos
//Un modulo nos va a permitir separar nuestros archivos dentro de distintos archivos e importar unicamente lo que necesitamos
//React te permite importar y exportar y es una de las caracteristicas mas importantes

//Se puede consolear una variable declarada en el archivo tareas.js, mientras que tareas.js esté declarado como script en el html.
// console.log(nombreTarea);
//El problema es que si lo hacemos así, la descarga del archivo .js se hace desde el html y eso abre una conexión http para descargarlo y eso hace que tu sitio sea mas lento, perjudica la performance del sitio



//Para evitar esto se importa y exporta la función para usarla de forma interna
//Es importante agregar type="module" en la etiqueta script
import { nombreTarea } from "./tareas.js";
console.log(nombreTarea);
