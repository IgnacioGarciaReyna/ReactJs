import React from "react";

//Acá estamos extrayendo el producto, pero también vamos a extraer el carrito y también la función de agregarProducto.
//Para poder hacer el filter en la función seleccionar producto, tuvimos que pasar como prop el array "productos".
const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;

  //Nosotros queremos que cuando pasamos un id, se seleccionen todas las otras propiedades del producto (nombre y precio). Esto lo vamos a hacer con el array method .filter
  const seleccionarProducto = (id) => {
    //Creamos const producto que va a ser todo el objeto del producto.
    //Filter nos crea un arreglo en lugar de un objeto.
    //Requerimos todo el arreglo de productos para pasarle el id y que nos devuelva el producto buscado. Por lo tanto debemos pasarlo desde App.js como un prop.
    //Filter es similar al map, también va a iterar en cada uno de los registros, por lo tanto, entre parentesis hacemos una arrow function que funcionara con cada uno de los valores del array.
    //Filter devuelve un arreglo nuevo con el producto que cumpla la condición.
    //Ahora, como devuelve un array y nosotros queremos un objeto, podemos obtenerlo de dos formas. Uno es poniendo [0] despues del filter y otra ponerlo mas adelante, por ejemplo dentro del console.log. Necesitamos que sea un objeto, para poder agregarlo al carrito, que es un array de objetos, no de arrays.

    const producto = productos.filter((producto) => producto.id == id)[0];
    console.log(producto);
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
