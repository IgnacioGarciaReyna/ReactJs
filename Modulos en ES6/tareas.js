//Normalmente en React creamos un archivo para una sola clase, que tenga todo lo relacionado ahí, como parte del componente.

//En terminos de react se podría decir que ya tendriamos un componente, porque lo podemos reutilizar en muchos lados.
//Solo se necesita exportar e importar correctamente y obtenemos solo lo que necesitamos usar

export default class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }

  mostrar() {
    console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
  }
}
