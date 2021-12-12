// =================
// === fetch api ===
// =================

// acceder y manipular partes del http (peticiones y respuestas) | sustituye a XMLHttpRequest
// podemos consumir APIs | una API es una respuesta del servidor que nos entrega datos que nosotros podemos consumir/pintar
// en nuestro sitio web | fetch -> puede leer imágenes, archivos json que esten en nuestro sistema...
// NOTA => fetch no lo puedo usar la consola de nodejs para ver el resultado, necesito el index.html y ver desde developer tools
// el resultado

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( respuesta => {
        // .then -> espera una promesa, que la url nos devuelva los datos | nuestra promesa devolverá datos en json
        // en respuesta obtenemos la respuesta/datos de la url
        // la respuesta la retorna/transforma en formato json | vamos a leer todo en formato json
        return respuesta.json();    
    })                  
    .then(data => {
        // aquí tenmos que obtener esos datos | podemos pintar los datos por consola | o por html
        // results -> mirar en developer tools | nombre del array de objetos con los pokemones | lo devuelve la página
        console.log(data.results);
        // recorrer el array de objetos "results" (results nos devuleve la api | mirar en devloper tools) con un foreach 
        // element -> cada objeto del array de objetos
        // imprimir por consola el nombre de cada objeto (pokemon) del array de objetos
        data.results.forEach(element => {
          console.log(element.name);            
        })
    })
    // capturar el error por si viene el error del servidor
    .catch(error => console.log(error))