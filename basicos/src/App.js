//El state es de las cosas mas importantes en React y buena parte de lo que permité que las apps de React sean tan rápidas.
//En el state vas a colocar todo lo que va a reaccionar a ciertas acciones de los usuarios, por ejemplo los datos de un formulario cuando un usuario esté escribiendo, creamos un state que está leyendo mientras escriba. También un carrito de compras, que gracias al state se va actualizando cuando el usuario agrega un producto.

//Vamos a importar useState
import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";

function App() {
  //Los objetos tienen ids para que cada componente tenga su key que lo haga único
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJs", precio: 40 },
    { id: 3, nombre: "Camisa Node.js", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
    ,
  ]);

  const fecha = new Date().getFullYear();

  //Vamos a mostrar los productos.
  //En js se utiliza el forEach pero en React se utiliza mas el map, mas que nada por que map devuelve un valor, forEach solo recorre.

  return (
    <Fragment>
      <Header titulo="Tienda virtual" />

      <h1>Lista de productos</h1>

      {productos.map((producto) => (
        //Return implicito
        //Por cada producto escribe los que hay en Producto.js.
        //Le pasamos los props
        //Le pasamos la key para que sean únicos
        <Producto 
          key={producto.id} 
          producto={producto} />
      ))}
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
