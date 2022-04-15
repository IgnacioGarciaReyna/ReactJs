import React from "react";

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;

  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id == id)[0];

    //Como queremos agregar varios productos y no uno solo debemos usar sintaxis de arreglos
    //En primer lugar usamos spread operaton para crear una copia del carrito y en segundo lugar le pasamos el producto. También se puede agregar el spread operator a "producto".
    //El state no se modifica directamente.
    agregarProducto([
      ...carrito, producto
    ]);
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>$ {precio}</p>
      <button type="button" onClick={() => seleccionarProducto(id)}>
        Comprar
      </button>
    </div>
  );
};

export default Producto;
