import React from "react";
import "./carrito.css";
import Producto from "./Producto";

//Traemos agregarProducto de app.js
const Carrito = ({carrito, agregarProducto}) => (
  <div className="carrito">
    <h2>Tu carrito de compras</h2>

    {carrito.length == 0
    ? <p>No hay elementos</p>
    : carrito.map(producto => (
      //Como a cada producto no le estamos pasando el carrito, no vamos a poder hacer el carrito.filter que se hace en al producto.js, debemos agregarlo.
      //Este carrito lo estamos tomando desde el app.js 
        <Producto
            key={producto.id}
            producto = {producto}
            carrito = {carrito}
            //Le pasamos agregarProducto a producto.js
            agregarProducto = {agregarProducto}
        />
    ))
    }

  </div>
);

export default Carrito;
