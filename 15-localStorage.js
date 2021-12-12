// ====================
// === localStorage ===
// ====================

// web storage -> en las aplicaciones web pueden guardar datos de forma local dentro del navegador del usuario.
// antes de que existiera html5 sólo era posible guardar estos datos en cookies, pero gracias a web storage
// se gana en seguridad y en rendimiento de la web

// ============================================================================================================================
// === guardar datos en el localStorage | localStorage.setItem("key", "objeto/variable") 
// key -> como queremos que se llame lo que se guarde
// value -> que es lo que vamos a guardar
// localStorage sóla almacena strings, no podemos guardar arrays ni objetos | sólo podemos guardarlos si los parseamos a string
// ============================================================================================================================

localStorage.setItem('nombre', 'Salvador');

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300
}

const productoString = JSON.stringify(producto);        // parsear/convertir objeto a string para almacenarlo en localStorage
console.log(typeof productoString);                     // comprobar el tipo de dato | string

localStorage.setItem('producto', productoString);       // guardar en localStorage el objeto parseado a string


const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);              // parsear/convertir array a string para almacenarlo en localStorage
localStorage.setItem('meses', mesesString);             // guardar en localStorage el array parseado a string


// ============================================================================================================================
// === obtener datos del localStorage | localStorage.getItem('key') 
// leer datos del localStorage para hacer uso de ellos en nuestro código
// una vez obtenidos, pasarlos de JSON a objeto/array con JSON.parse(json)
// ============================================================================================================================

const nombre = localStorage.getItem('nombre');          // leer/obtener datos del localStorage en formato JSON (string)
console.log(nombre);                                    // Salvador          

const productoJSON = localStorage.getItem('producto');  // leer/obtener datos del localStorage en formato JSON (string)
const productoObjeto = JSON.parse(productoJSON);        // convertir el JSON a un objeto para poder manipularlo
console.log(productoJSON);

const mesesJSON = localStorage.getItem('meses');        // leer/obtener datos del localStorage en formato JSON (string)
const mesesArray = JSON.parse(mesesJSON);               // convertir el JSON a un array para poder manipularlo
console.log(mesesArray);

