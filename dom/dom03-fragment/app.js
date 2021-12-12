// =====================================================
// === dom | crear elementos fragment | evita reflow ===
// =====================================================

/*
    fragment -> se utiliza como una versión ligera de Document que almacena un segmento de una estructura de documento
                compuesta de nodos como un documento estándar.
    En un fragment vamos a guardar todo un template o nodos html que luego pintaremos en nuestro dom, así evitaremos
    en mayor parte el reflow.
*/

// === acceder/capturar elementos ===
const lista = document.querySelector('#lista');

// === elementos para pintar/renderizar dinámicamente ===
const arrayItem = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'];

// lo que vamos a hacer es guardar dentro del bucle foreach nuestro fragment con cada uno de los 'li', y cuando esté finalizado
// este bucle, vamos a agregar la estructura a nuestro documento | no vamos a ir uno por uno agregando, sino que hacemos
// la estructura en nuestro js, y una vez que la tenemos lista la incorporamos en nuestro dom | así evitamos el reflow
// el fragment sólo se puede usar con createElement, no se puede usar con innerHTML

// === crear fragment | guardar estructura/template antes de ser incorporada a nuestro html ===
const fragment = document.createDocumentFragment();

// === recorrer array ===
arrayItem.forEach(item => {
    const li = document.createElement('li');        // crear elemento 'li'
    li.textContent = item;                          // su contenido será el 'item' | cada elemento del array
    fragment.appendChild(li);                       // no lo agregamos a la lista en cada iteración | lo agreamos al fragment
})

lista.appendChild(fragment);                        // ya tiene almacenado todos los li del bucle | lo renderiza sólo una vez