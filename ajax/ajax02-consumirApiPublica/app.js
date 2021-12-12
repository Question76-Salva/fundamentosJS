// ============================================================================
// === fetch api | alternativa a ajax | obtener datos desde una api pública ===
// ============================================================================

// === acceder/capturar elementos ===
const boton = document.querySelector('#boton');
const contenido = document.querySelector('#contenido');

// === eventos ===
boton.addEventListener('click', () => {
    // url o archivo de destino
    fetch('https://randomuser.me/api/')
    // then es una promesa | necesto capturar algo y me prometes una respuesta
    // json() -> porque la respuesta es en formato json | lo transformamos en algo que podamos leer y manipular
    .then( respuesta => respuesta.json())
    // hacemos otra promesa con el texto transformado para manipularlo
    .then( data => {
        console.log(data.results);
        contenido.innerHTML = `
            <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle shadow">
            <h5>Nombre: ${data.results['0'].name.first}</h5>
            <h5>Apellido: ${data.results['0'].name.last}</h5>
            <h5>Población: ${data.results['0'].location.city}</h5>
            <h5>Nacionalidad: ${data.results['0'].location.country}</h5>
            <h5>Teléfono: ${data.results['0'].phone}</h5>
            <h5>Email: ${data.results['0'].email}</h5>
        `;
    })                              
})