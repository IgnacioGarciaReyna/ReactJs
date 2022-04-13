import React from 'react';

//Agregamos fecha con destructuring para no tener que estar escribiendo props.fecha
const Footer = ({fecha}) => {
    return (
        <footer>
            <p>Todos los derechos reservados&copy; {fecha}</p>
        </footer>
    )
}
 

export default Footer;

