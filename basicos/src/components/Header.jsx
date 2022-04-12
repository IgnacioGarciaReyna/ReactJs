//Básics de JSX
//Podemos ver que se mezcla el código JS con el HTML, hasta con CSS.
//JSX es como un JS mejorado.

import React from "react";

function App() {

  const edad = 18;

  //Antes del return es un lugar seguro.
  //Acá podes colocar código tradicional de JavaScript
  //Dentro del return no se puede poner código JS como tal, se puede, pero con un operador ternario.

  let mensaje;
  if(edad >= 18) {
    mensaje = 'Eres mayor de edad'
  } else {
    mensaje = 'Eres menor de edad'
  }

  //Todo lo que esté en el return es lo que se va a ver.
  return (
    // <h1>Desde el header</h1>

    //Para que se interprete como una variable de JS y no como texto, debemos ponerlo dentro de llaves.

    // <h3>{edad}</h3>
    // <h3>{mensaje}</h3>

    //Si escribo class como en css me da un error de sintaxis debido a que class es también una palabra reservada de Javascript.
    //Entonces las clases se agregan con className
    <h1 className="encabezado">Tienda virtual</h1>
    );
}

export default App;
