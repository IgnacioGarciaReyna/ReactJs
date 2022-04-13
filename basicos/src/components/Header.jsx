import React from "react";

//Para leer el dato enviado debo pasarle "props" a la función del componente. Aunque en la comunidad de React se vé viejo. Ahora se pasan directamente con llaves.
//Antes era así => function Header(props) 
function Header({titulo}) {
 //En este lugar seguro podemos poner codigo js
//  console.log(props)

  return <h1 className="encabezado">{titulo}</h1>;
}

export default Header;
