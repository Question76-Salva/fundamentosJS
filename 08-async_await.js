// ===================
// === async await ===
// ===================

// async -> define una función asíncrona, la cual devuelve un objeto
// await -> va a funcionar siempre que esté dentro de una función async
// con async debemos crear una función
// usamos un try catch
// hace lo mismo que el fetch, pero ahorra código | lo hace en menos líneas 


const obtenerPokemones = async () => {
    try {
        // === intenta hacer esto... ===
        // await -> esperamos la respuesta de fetch | esperamos esta petición... | cuando la petición devuelva algo
        // la guardamos en la variable "respuesta"
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/')
        // nuestra "data" va a esperar a "respuesta.json"
        const data = await respuesta.json();
        // results -> mirar en developer tools | nombre del array de objetos con los pokemones | lo devuelve la página
        //console.log(data.results);
        
        // recorrer el array de objetos "results" (results nos devuleve la api | mirar en devloper tools) con un foreach 
        // element -> cada objeto del array de objetos
        // imprimir por consola el nombre de cada objeto (pokemon) del array de objetos
        data.results.forEach(element => {
            console.log(element.name);            
          })
    } catch (error) {
        // === en caso contrario, devuelveme un error ===
        console.log(error);
    }
}

obtenerPokemones();