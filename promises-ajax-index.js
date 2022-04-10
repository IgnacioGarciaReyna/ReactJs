//
const descargarUsuarios = (cantidad) =>
  new Promise((resolve, reject) => {
    //Pasar la cantidad a la API con template strings para decirle cuantos resultados queremos
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //Llamado a AJAX (Generalmente se llama xhr)
    const xhr = new XMLHttpRequest();

    //Abrir la conexión.
    //Open toma tres parametros.
    //El primero puede ser GET que es el metodo.
    //El segundo es una URL.
    //El tercero es si querés que sea asíncrono o no (es un boolean).
    xhr.open("GET", api, true);

    //On load.
    xhr.onload = () => {
      //Acá se revisa la respuesta. Usualmente vas a revisar por el status
      if (xhr.status === 200) {
        //results viene de la URL, es donde están contenidos los objetos
        //xhr.responseText devuelve el texto recibido del servidor después de enviar la solicitud
        //JSON.parse transforma el código obtenido de un string a un objeto de JavaScript para poderlo tratar.
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        //xhr.statusText nos va a traer el resultado cuando sea incorrecto
        reject(Error(xhr.statusText));
      }
    };

    //Opcional.
    xhr.onerror = (error) => reject(error);

    //Send. Se envía el request a la base de datos
    xhr.send();
  });

//Le pasamos a descargarUsuarios la cantidad de usuarios
descargarUsuarios(20).then(
  //Miembros son los usuarios
  (miembros) => console.log(miembros),
  (error) => console.error(new Error("Hubo un error" + error))
);
