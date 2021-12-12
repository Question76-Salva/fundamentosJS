// ===================================
// === dom | leer y modificar html ===
// ===================================

// DOM -> da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos.
//      mediante js podemos acceder/modificar el html (h1, botones, secciones, parrafos, imagenes...)

// === acceder/capturar elemento ===
document.querySelector('h3');                       // etiquetas
document.querySelector('.h3-danger');               // clases
document.querySelector('#parrafo');                 // id´s

// === modificar elementos ===
const parrafo = document.querySelector('#parrafo');     // captura elemento en una variable para manipularlo
parrafo.textContent = 'Texto desde JS';                 // textContent -> sólo podemos introducir texto
parrafo.innerHTML = '<b>Texto con innerHTML</b>';       // innerHTML -> podemos introducir texto y etiquetas html
parrafo.classList.add('h3-danger');                     // añadir la clase 'h3-danger' a nuestro párrafo dinámicamente
