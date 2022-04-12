//Este Footer es un nuevo componente
//Este es .js (es la sintaxis que vamos a utilizar) en lugar de .jsx, pero funciona igualmente.
//Si lo utilizas con .js también podes usar código .jsx.

//Para escibir el import react utilizando los snippets escribimos "imr".
import React from 'react';

//Para crear el componente se utiliza una sintaxis distinta a la de App.

//Esto se escribe "sfc" gracias a los snippets

//Los componentes pueden funcionar siendo function declaration (caso header) o también siendo function expression (como el footer). En cuanto a performance no hay diferencia, hace lo mismo. 
//Pero hay un truco para function expression:
//En algunos casos los componentes no van a necesitar codigo extra antes del return. En esos casos podemos hacer una funtion expression y poner directamente parentesis en lugar de llaves quitando el return.
const Footer = () => {
    return (
        <footer>
            <p>Todos los derechos reservados&copy;</p>
        </footer>
    )
}
 

export default Footer;

