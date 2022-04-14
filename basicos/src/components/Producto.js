import React from "react";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  //Agregar producto al carrito
  //Como solo se pasa un parametro, se pueden eliminar los parentesis para que el código sea un poco mas corto.
  const seleccionarProducto = id => {
    console.log("Comprando...", id);
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>$ {precio}</p>
      {/* Agregamos un boton "Agregar al carrito" 
          React maneja lo botones de forma distinta a JS tradicional.
          En JS le colocas un id y escribirias un getById o QuerySelector y le agregarías un eventListenner
          En React ya tenes una gran cantidad de eventos. Se agrega el prefijo on.
          Al onClik le podes agregar la palabra function directamente entre llaves, sin embargo, vamos a esperar a que el usuario dé click, por lo tanto tiene que ser una arrow function. Si colocas "function" y lo mandas a llamar es prácticamente un llamado a una función, se va a ejecutar automáticamente.*/}
      <button type="button" onClick={() => seleccionarProducto(id)}>
        Comprar
      </button>
    </div>
  );
};

export default Producto;


//Lo importante es como React maneja los eventos.
//Se agrega un on y el nombre del evento, en este caso un click. 
//Usualmente será con una arrow function o con una función directamente.