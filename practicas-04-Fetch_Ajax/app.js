//* ================================
//* === consumir api | con fetch ===
//* ================================

// ==========================
// === capturar elementos ===
// ==========================
const cards = document.getElementById('card-dinamicas');
const templateCard = document.getElementById('template-card').content;  // content -> siempre con <template>

const templatePaginacion = document.getElementById('template-paginacion').content;
const fragment = document.createDocumentFragment();


// ===============
// === eventos ===
// ===============

// siempre que se solicita información a una api tenemos que esperar que se carge todo nuestro DOM
document.addEventListener('DOMContentLoaded', () => {
    // === ejecutar funciones ===  
    fetchData();
});



// =================
// === funciones ===
// =================
const fetchData = async () => {
    // === solicitud a la api ===
    console.log('obteniendo datos...');

    // === async/await -> siempre con try catch ===
    try {
        // === intenta hacer la solicitud | mientras tanto muestra spinner 'cargando' === 
        loadingData(true);
        // === solicitud a la api ===
        // obtener la respuesta | promesa
        const res = await fetch("https://rickandmortyapi.com/api/character");
        // transforma la respuesta a json | promesa 
        const data = await res.json();
        // comprobar
        //console.log(data);
        // === renderizar cards ===
        pintarCard(data);
    } catch (error) {
        console.log(error);
    } finally {
        // === terminada la solicitud | ocultar spinner 'cargando'| ya se han cargado los datos de la api === 
        loadingData(false);
    }
};


const loadingData = estado => {
    // === mostrar y ocultar spinner | al cargar o mostrar la info ===
    // === capturar elemento ===    
    const loading = document.getElementById('loading');
    // === elegir si queremos quitar o no el spinner ===
    if(estado) {
        // === mostrar spinner ===
        // === quitar la clase 'd-none' ===
        loading.classList.remove('d-none');
    } else {
        // === ocultar spinner ===
        loading.classList.add('d-none');
    }
};


const pintarCard = data => {
    // === limpiar paginación === 
    cards.textContent = '';

    //console.log(data);
    // === recorrer array de resultados (array de objetos) | lo que nos devuelve la api ===
    data.results.forEach(item => {
        //console.log(item);
        // === inyectar los datos de la api en el template (article) ===
        // hacer la clonación del templateCard
        const clone = templateCard.cloneNode(true);
        // capturar los elementos del <article> para reemplazar con info dinámica de la api
        clone.querySelector('img').setAttribute("src", item.image);
        clone.querySelector('h5').textContent = item.name;
        clone.querySelector('p').textContent = item.species;
        
        // === colocar elementos | guardamos en el fragment para evitar reflow ===
        fragment.appendChild(clone);
    });

    // === renderizar en el html ===
    cards.appendChild(fragment);

    // === renderizar paginación ===
    pintarPaginacion(data);
}; 


const pintarPaginacion = data => {
    //console.log(data);
    const paginacion = document.getElementById('paginacion');

    // === hacer la clonación del templatePaginacion ===
    const clone = templatePaginacion.cloneNode(true);

    // === limpiar paginación === 
    paginacion.textContent = '';

    // === controlar paginación ===
    if(data.prev) {
        // === si existe data.prev | activar botón Prev de la paginación | podemos avanzar de página ===
        clone.querySelector('.btn-outline-secondary').disabled = false;
    } else {
        // === si no existe data.prev | desactivar botón Prev de la paginación ===
        clone.querySelector('.btn-outline-secondary').disabled = true;
    }
    
    if(!data.next) {
        // === si existe data.next | activar botón Prev de la paginación | podemos avanzar de página ===
        clone.querySelector('.btn-outline-primary').disabled = false;
    } else {
        // === si no existe data.next | desactivar botón Prev de la paginación ===
        clone.querySelector('.btn-outline-primary').disabled = true;
    }

    // === colocar elementos | guardar en el fragment para evitar reflow ===
    paginacion.appendChild(clone);

    paginacion.addEventListener('click', e => {
        if(e.target.matches('.btn-outline-primary')) {
            console.log('click');
            fetchData(data.next);
        }
        if(e.target.matches('.btn-outline-secondary')) {
            console.log('click');
            fetchData(data.prev);
        }
    
    });    

};