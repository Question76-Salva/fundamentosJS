// =============================
// === dom | crear elementos ===
// =============================

// === acceder/capturar elementos ===
const lista = document.querySelector('#lista');

// === crear elementos ===
const li = document.createElement('li');

// === añadir contenido ===
li.textContent = 'primer elemento';

// === indicar posición del elemento | incorporar elemento hijo 'li' dentro de/al elemento padre 'lista' ===
lista.appendChild(li);



// ========================================================================================================================
// === pasar una lista (array de elementos) y cada elemento de ese array lo quiero pintar dentro del 'ul' | textContent ===
// ========================================================================================================================
// este método es bueno para pequeñas cosas, pero cuando hay muchos elementos genera 'Reflow' -> ocurra cuando el navegador
// debe procesar y dibujar parte o la totalidad de una web nuevamente, como después de una actualización en un sitio web
// interactivo
// o sea, que estamos actualizando nuestra web cada vez que se agrega un elemento nuevo en nuestro 'ul', si tenemos una web
// con miles de artículos como amazon gastaría muchos recursos de cpu y ram
// en cada vuelta del bucle se genera un reflow

// === elementos para pintar/renderizar dinámicamente ===
const arrayElement = ['segundo elemento', 'tercer elemento', 'cuarto elemento', 'quinto elemento', 'sexto elemento'];

arrayElement.forEach(elemento => {
    const li = document.createElement('li');       // crear elemento 'li'
    li.textContent = elemento;                     // su contenido será el 'elemento' | cada elemento del array
    lista.appendChild(li);                         // incorporar 'li' a la lista 'ul'
})


// ======================================================================================================================
// === pasar una lista (array de elementos) y cada elemento de ese array lo quiero pintar dentro del 'ul' | innerHTML ===
// ======================================================================================================================
// este método es bueno para pequeñas cosas, pero cuando hay muchos elementos genera 'Reflow' -> ocurra cuando el navegador
// debe procesar y dibujar parte o la totalidad de una web nuevamente, como después de una actualización en un sitio web
// interactivo
// o sea, que estamos actualizando nuestra web cada vez que se agrega un elemento nuevo en nuestro 'ul', si tenemos una web
// con miles de artículos como amazon gastaría muchos recursos de cpu y ram
// en cada vuelta del bucle se genera un reflow

arrayElement.forEach(elemento => {
    lista.innerHTML += `<li>${elemento}</li>`;      // más simple | menos código     
})

