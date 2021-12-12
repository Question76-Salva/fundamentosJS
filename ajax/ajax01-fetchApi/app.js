// ====================================================================================
// === fetch api | alternativa a ajax | obtener datos desde un fichero externo .txt ===
// ====================================================================================

// === acceder/capturar elementos ===
const boton = document.querySelector('#boton');
const contenido = document.querySelector('#contenido');

// === eventos ===
boton.addEventListener('click', () => {
    // url o archivo de destino
    fetch('texto.txt')
    // then es una promesa | necesto capturar algo y me prometes una respuesta
    // text() -> porque la respuesta es en texto plano | texto.txt | lo transformamos en algo que podamos leer y manipular
    .then( respuesta => respuesta.text())
    // hacemos otra promesa con el texto transformado para manipularlo
    .then( data => {
        console.log(data);
        contenido.innerHTML = `${data}`;
    })                              
})