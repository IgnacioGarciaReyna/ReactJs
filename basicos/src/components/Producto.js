import React from "react";

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;

  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id == id)[0];

    agregarProducto([...carrito, producto]);
  };

  //Eliminar un producto del carrito
  //Necesitamos que quite el elemento con el id que le pasamos y dejar los demas, por lo tanto, filtramos todos los que no sean el producto a eliminar.
  //Se hace carrito.filter porque no queremos quitarlo de productos, si no de carrito.
  const eliminarProducto = (id) => {
    const productos = carrito.filter((producto) => producto.id !== id);
    //Productos va a tener un arreglo y lo tengo que agregar al carrito.
    //Colocar los productos en el state
    agregarProducto(productos);
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>$ {precio}</p>
      {/* Debemos cambiar este button para que cuando agregues un producto al carrito no aparezca un boton "comprar", si no uno "eliminar del carrito".
      Se podría agregar un state, una variable, que diga carrito=false o carrito=true, etc.
      Vamos a escribir un ternario que revise si en el componente hay productos, aunque sea el mismo componente y los estemos reutilizando, lo estamos reutilizando en diferentes lugares, por lo tanto le estamos pasando diferentes valores. 
      Si este producto tiene producto ejecuto un codigo si no lo tiene ejecuto el otro. En el caso de que tenga productos lo mas probable es que sea el listado de productos (en carrito no pasamos productos), por lo tanto mostramos el button "Comprar".
      No se puede utilizar un if en el return, pero si se puede utilizar un ternario.*/}
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
