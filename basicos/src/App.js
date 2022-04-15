import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";

//El state es de las partes mas importantes en React. Usualmente en una aplicación vas a tener muchos states diferentes.
//El state basicamente sirve para controlar si un usuario está autenticado, los registros que puede haber o también para un formulario, por ejemplo, cuando lo va llenando.
//Vamos a crear un segundo state
function App() {
  //Cuando usas useState, podes ver que tenemos dos funciones o bueno en este caso tenemos dos states, pero hay dos funciones, guardarProducto y agregarProducto. Cuando utilizas useState las nombras como quieras. 
  //Lo que va a hacer nuestra función es modificar el state. En React, el state no se puede igualar a otra variable, no se puede hacer un push. Se debe modificar con las funciones.
  //Pregunta de entrevista: El state se puede modificar directamente? La respuesta es no, se usa la función que extraes de useState o si es un class component había una función que se llamaba setState.
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJs", precio: 40 },
    { id: 3, nombre: "Camisa Node.js", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
    ,
  ]);

  const [ carrito, agregarProducto ] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda virtual" />

      <h1>Lista de productos</h1>

      {productos.map((producto) => (
        <Producto 
          key={producto.id} 
          producto={producto}
          productos = {productos}
          carrito = {carrito}

          agregarProducto = {agregarProducto}
        />
      ))}
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
