import React from "react";

//El snippet es "sfc"
//Luego de que ya lo pasé en los props de app.js, voy a extraer el producto así ya tengo disponible la información.
const Producto = ({ producto }) => {
  //Se pueden extraer los valores
  const { nombre, precio, id } = producto;

  return (
    // <h1>desde producto</h1>
    <div>
      {
        //Esto sería si no extraigo los valores
        /* <h2>{producto.nombre}</h2> */
      }

      {/* Esto es extrayendo los valores */}
      <h2>{nombre}</h2>
      <p>$ {precio}</p>
    </div>
  );
};

export default Producto;
