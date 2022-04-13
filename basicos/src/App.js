//Generalmente en React los datos fluyen desde el componente principal hacia los componentes internos, es decir, siempre fluyen del padre hacia los hijos.

import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Si queremos pasar un h1 a Header, queremos pasarle el dato desde el componente App (componente principal).

function App() {
  //En algunas ocaciones se realiza algo antes del return para enviarlo al componente.
  //En este caso, le queremos enviar el año actual al footer

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        //Se coloca una llave o propiedad y se pasa el valor. Luego voy al componente y le paso props en parametros.
        //En esta llave se pueden pasar booleanos, números, strings y hasta funciones.
        titulo="Tienda virtual"
        numero={20}

        //
      />
      <Footer
      //En este caso pasamos el prop y también su valor con el mismo nombre. 
      //Si despues del igual escribis 'fecha' entre comillas es un string. Cuando pases una función, un boolean o un número tiene que ir con llaves.
      fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
