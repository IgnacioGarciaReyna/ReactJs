//Vamos a exportar Fragment de React para no necesitar poner un div contenedor en el return
import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  //Cuando tenes este return solo podes retorner un elemento que contenga los demas. Tenes que retornar al menos un contenedor
  return (
    //Solo retorna el Fragment con el header y el footer sin elementos extra, como si pasa cuando pones un div.
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
}

export default App;
