// ======================================================================
// === fetch api | alternativa a ajax | crear tabla dinámica con JSON ===
// ======================================================================

// === acceder/capturar elementos ===
const boton = document.querySelector('#boton');
const contenido = document.querySelector('#contenido');

// === eventos ===
boton.addEventListener('click', () => {
    // url o archivo de destino
    fetch('tabla.json')
    // then es una promesa | necesto capturar algo y me prometes una respuesta
    // json() -> porque la respuesta es un json | tabla.json | lo transformamos en algo que podamos leer y manipular
    .then( respuesta => respuesta.json())
    // hacemos otra promesa con el texto transformado para manipularlo
    .then( data => {
        //console.log(data);
        // función para pintar los datos en una tabla | le pasamos por parámetro los datos (data)
        tabla(data); 
        
    })                              
})

// === funciones ===
function tabla(data) {
    //console.log(data);
    // comienza en limpio
    contenido.innerHTML = '';
    // recorrer el array de objetos | que capturo con fetch de tabla.json
    for(let valor of data) {
        //console.log(valor.nombre);
        // concatenando += los <tr></tr> en cada iteración
        contenido.innerHTML += `
            <tr>
                <th scope="row">${valor.id}</th>
                <td>${valor.nombre}</td>
                <td>${valor.email}</td>
                <td>${valor.estado ? "Activo" : "Eliminado"}</td>
            </tr>
        `;
    }
}