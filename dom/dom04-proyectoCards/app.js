//* ===========
//* === dom ===
//* ===========

// === seleccionar elementos ===
const row = document.querySelector('.row');
const form = document.getElementById('course-form');

// === variable para el ID de cada tarjeta ===
let idCard=1;

// ===============
// === eventos ===
// ===============

form.addEventListener('submit', function (e) {

    // === desactivar refresco automatico ===
    e.preventDefault();

    // === obtener valores de los inputs del formulario ===
    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;

    // === crear card ===
    create_card(title, description);
    idCard++;
	
	// === resetear formulario al enviar MUY IMPORTANTE ===
	form.reset();
})


// =================
// === funciones ===
// =================

function create_card(title, description) {

    // Crear template HTML dinámicamente
    let html = `<div class="col-sm-6 col-md-4" id="${idCard}">
    <div class="thumbnail">
        <div class="caption">
            <h3 id="title_card"> ${title} </h3>
            <p id="description_card"> ${description} </p>
            <p>
                <a href="#" class="btn btn-danger" onclick="delete_card(${idCard})" >Eliminar</a>
            </p>
        </div>
    </div>
</div>  
         
    `;

    // colocarlo dentro del div "row"
    // += -> muy importante para actualizarlo
    row.innerHTML += html;
    /** cambiado por un evento onclick en el Html */
    // añadimos evento a todo el div "row" para poder eliminarlo al hacer click en su botón
    //row.addEventListener('click',delete_card);
    
}

function delete_card(id) {

    // Comprobación
    // console.log('Carta a eliminar');

    // para poder elminar un elemento necesitamos 
    // el PADRE (div .row) y el ID del elemento a eliminar   
    let padre = document.getElementById('padre');
    let hijo = document.getElementById(id);
    let garbage = padre.removeChild(hijo);
}