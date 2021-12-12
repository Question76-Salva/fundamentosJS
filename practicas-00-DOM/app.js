//* ===========
//* === DOM ===
//* ===========

// ========================================================================
// === seleccionar/capturar elementos | con los que vamos a interactuar ===
// ========================================================================
const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll('.card .btn');

// === comprobar elementos capturados | por consola ===
// console.log(carrito);
// console.log(template);
// console.log(fragment);
// console.log(btnesBotones);

// === carrito | donde se almacenan los productos | podemos usar un array | vamos a usar un objeto ===
const carritoObjeto = {};

// ==========================
// === agregar al carrito ===
// ==========================
const agregarAlCarrito = (e) => {
    // pinta el valor de data-fruta (identificador) de cada elemento | capturamos la info del botón presionado
    console.log(e.target.dataset.fruta);

    // === construir objeto con la info capturada | producto ===
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }
		
    // === ¿existe el producto? | si, toma la cantidad y suma 1 ===
    // en vez de pintar otra vez el prducto sólo incrementa la cantidad
    // si no existe en nuestra 'colección' de prodcutos/objetos que pase a dentro del IF
    if(carritoObjeto.hasOwnProperty(producto.id)) {
        // === capturar la cantidad que viene de nuestro carritoObjeto y le sumamos 1 ===
        // sólo en el caso de que exista la propiedad id (producto.id)
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    // === empujar el producto al carrito ===
    carritoObjeto[producto.titulo] = producto;

    // comprobar
    //console.log(carritoObjeto);

    // === pintar carrtio | una vez agregado el elemento al carrito, pintarlo en el html ===
    pintarCarrito(producto);
}

// =========================
// === pintar en carrito ===
// =========================
// recibo 'prodcuto' como parámetro | para pintarlo
const pintarCarrito = (producto) => {

    // comprobar | nos llega el producto seleccionado | los datos viajan correctamente
    //console.log('pintar carrito', producto);

    // === recorrer el contenido de 'carritoObjeto' ===
    // transforma objeto 'carritoObjeto' en un array para poder recorrerlo con un forEach
    Object.values(carritoObjeto).forEach(item => {  
        // === empieza vacio | para que no se pinten todos los elementos de golpe | sino 1 a 1 ===
        carrito.textContent = "";      
        // === clonar el template ===
        const clone = template.content.firstElementChild.cloneNode(true);
        // === clonar y actualizar los elementos del template | para modificarlos dinámicamente ===
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        // === evitar reflow del dom con fragment ===
        fragment.appendChild(clone);
    });

    // === pintar/renderizar la info en el html === 
    carrito.appendChild(fragment);

}

// ===============================================
// === recorrer los botones | para detectarlos ===
// ===============================================
// === agregar el evento 'click' a cada botón y ejecutar la función 'agregarAlCarrito' ===
btnesBotones.forEach(btn => btn.addEventListener('click', agregarAlCarrito));
