import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";

//El state es de las partes mas importantes en React. Usualmente en una aplicación vas a tener muchos states diferentes.
//El state basicamente sirve para controlar si un usuario está autenticado, los registros que puede haber o también para un formulario, por ejemplo, cuando lo va llenando.
//Vamos a crear un segundo state
function App() {
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJs", precio: 40 },
    { id: 3, nombre: "Camisa Node.js", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
    ,
  ]);

  //State para Carrito de compras
  //También va a ser un arreglo, pero va a inciar vacio.
  //Entre llaves se pasa el valor inicial, en este caso un arreglo vacio.
  //Como es array destructuring, en los corchetes ponemos primero "carrito", que es la referencia al string vacio, y segundo una función que se encarga de interactuar con el, que va a agregar nuevos registros o los va a eliminar.
  const [ carrito, agregarProducto ] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda virtual" />

      <h1>Lista de productos</h1>

      {/* Le pasamos el carrito y la función al producto.
      Usualmente se nombra a los props igual que los valores que estoy pasando. 
      Para que quede mas ordenado, se pasan arriba los states y abajo las funciones.*/}
      {productos.map((producto) => (
        <Producto 
          key={producto.id} 
          producto={producto}
          // Pasamos el array de productos para poder hacer el filter en Producto.js
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
