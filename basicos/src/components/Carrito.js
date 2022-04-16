import React from "react";
//Importamos el archivo css
import "./carrito.css";

//Como lo que vamos a mostrar es muy parecido al componente Producto.js lo importamos.
import Producto from "./Producto";

//Extraemos el array carrito
const Carrito = ({carrito}) => (
  //Como no voy a hacer ninguna operación antes del return, puedo borrarlo sin problemas
  <div className="carrito">
    <h2>Tu carrito de compras</h2>

    {/* Para mostrar el arrelgo de productos del carrito debemos hacer un map para iterar en cada producto. */}

    {/* {carrito.map(producto => (
        <Producto
            // recordar siempre pasarle el key, en este caso el id
            key={producto.id}
            producto = {producto}
        />
    ))} */}

    {/* Es un condional. Tan pronto como comienzo a agregar elementos se vuelve a hacer el condicional.
    Algo importante es que React no recarga toda la página cuando cambias algo, solo recarga el componente */}
    {carrito.length == 0
    ? <p>No hay elementos</p>
    : carrito.map(producto => (
        <Producto
            key={producto.id}
            producto = {producto}
        />
    ))
    }

  </div>
);

export default Carrito;
