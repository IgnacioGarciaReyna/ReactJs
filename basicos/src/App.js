//El state es de las cosas mas importantes en React y buena parte de lo que permité que las apps de React sean tan rápidas.
//En el state vas a colocar todo lo que va a reaccionar a ciertas acciones de los usuarios, por ejemplo los datos de un formulario cuando un usuario esté escribiendo, creamos un state que está leyendo mientras escriba. También un carrito de compras, que gracias al state se va actualizando cuando el usuario agrega un producto.

//Vamos a importar useState
import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  //Creamos un listado de productos. Como no tenemos una base de datos o api lo creamos nosotros.
  //Usamos la sintaxis básica para usar el state
  // const [] = useState();

  //En los corchetes se pasan o se extraen dos valores, estamos utilizando array destructuring, y cuando estés utilizando useState te a extraer dos valores.
  //El primero va a ser el "state", puedes llamarlo como quieras pero usualmente debe ser el nombre de los que es, ejemplo : "productos".
  //El segundo es una función que te ayuda a escribir el state. Usualmente vamos a usar una función que se va a encargar de agregar o eliminar elementos al state. Usualmente en la documentación viene como setAlgo
  //En los parentesis vas a colocar los valores iniciales. En este caso un arreglo que va a iniciar con ciertos valores.
  const [productos, guardarProductos] = useState([
    //Vamos a agregar un objeto, cada producto va a ser un objeto. Los valores iniciales de tu aplicación van a variar, si tenes un formulario de inicio de sesión, el estado inicial es vacio y cuando el usuario escriba esto va a cambiar.
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJs", precio: 40 },
    { id: 3, nombre: "Camisa Node.js", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
    ,
    //Podemos ir a la consola, ver gracias a react-dev-app que ahora aparece en 'Hooks'/State el array con los objetos.
  ]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo="Tienda virtual"
        numero={20}

        //
      />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
