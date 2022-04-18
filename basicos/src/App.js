import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
//Lo importamos
import Carrito from "./components/Carrito";

function App() {
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJs", precio: 40 },
    { id: 3, nombre: "Camisa Node.js", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
    ,
  ]);

  const [carrito, agregarProducto] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda virtual" />

      <h1>Lista de productos</h1>

      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      {/* Lo agregamos debajo de los productos, pero queremos que vea en la esquina superior derecha. En React hay muchas formas de agregar código css. Podes agregar un archivo index.css en public, pero por ahora vamos a agregar un archivo carrito.css en components. Se puede agregar un css para cada componente*/}
      <Carrito
        //Para poder ver los productos seleccionados le tenemos que pasar al componente el array "carrito"
        carrito={carrito}
        //Le pasamos la función agregar producto a carrito.js, para posteriormente pasarsela a producto.sj.
        agregarProducto={agregarProducto}
      />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
