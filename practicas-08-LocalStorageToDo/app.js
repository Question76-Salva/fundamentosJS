//* =============================
//* === todo app localStorage ===
//* =============================

// ==========================
// === capturar elementos ===
// ==========================
const alert = document.querySelector('.alert');
const formulario = document.querySelector('#formulario');
const pintarTodo = document.querySelector('#pintarTodo');
const templateTodo = document.querySelector('#templateTodo').content;

let todos = [];


// ===============
// === eventos ===
// ===============
formulario.addEventListener('submit', e => {
    e.preventDefault();
    //console.log('funcionando formulario...');

    // === quitar/esconder alerta ===
    alert.classList.add('d-none');

    // === capturar datos | formdata | capturar por "name" todos los inputs del formulario ===
    const data = new FormData(formulario);
    // === crea variable "todo" y saca los valores de los inputs (un array con los valores de los inputs) ===
    const [todo] = [...data.values()];
    //console.log(todo);

    // === validar | evitar enviar campos vacios ===
    if(!todo.trim()) {
        console.log('te equivocaste mandaste vacio');
        // === visualizar alerta ===
        alert.classList.remove('d-none');
        return;
    }

    // === crear tarea | en caso de que se envien datos ===
    agregarTodo(todo);

    // === renderizar tarea en el html ===
    pintarTodos();
})

// ==========================================================
// === delegación de eventos | para los botones de Borrar ===
// ==========================================================
document.addEventListener('click', e => {
    // === comprobar | el botón Borrar devuelve el id de la tarea ===
    //console.log(e.target.dataset.id);
    // === comprobar | al pinchar Borrar devuelve true ===s
    //console.log(e.target.matches('.btn-danger'));

    // === eliminar tarea ===
    if(e.target.matches('.btn-danger')) {
        //console.log('diste click al botón de eliminar');
        // === recorrer colección y filtrar resultados y sobrescribir colección ===
        todos = todos.filter(item => item.id !== e.target.dataset.id);
        pintarTodos();
    };
});

// ====================
// === carga el dom ===
// ====================
document.addEventListener('DOMContentLoaded', e => {
    // === leer lo que viene del localStorage ===
    
    // === si existe tarea parsearla y leerla/recuperarla ===
    if(localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));
        pintarTodos();
    } 
});





// =================
// === funciones ===
// =================
const agregarTodo = todo => {
    // === crear tarea ===
    const objetoTodo = {
        id: `${Date.now()}`,                      // transforma a string
        nombre: todo
    };

    // === empujar tarea a la colección de datos ===
    todos.push(objetoTodo);
};


const pintarTodos = () => {
    // === guardar en localStorage | guarda sólo string ===
    localStorage.setItem('todos', JSON.stringify(todos));

    // === borrar/limpar que no se repita contenido ===
    pintarTodo.textContent = "";

    // === crear fragment | evitar reflow ===
    const fragment = document.createDocumentFragment();

    // === recorrer colección | todos ===
    todos.forEach(item => {
        // === crear el clon | clonar el contendio del template | el clone es el que se modifica ===
        const clone = templateTodo.cloneNode(true);
        // === acceder y modificar los elemtnos del clone ===
        clone.querySelector('.lead').textContent = item.nombre;
        // === crear atributo dataset para asociar el id de la tarea con el botón de Borrar ===
        // el id en el objeto es tipo string porque el dataset trabaja como string 
        clone.querySelector('.btn-danger').dataset.id = item.id;
        // === insertar el elemento en el html ===
        fragment.appendChild(clone);
    });

    // === renderizar en el html ===
    pintarTodo.appendChild(fragment);

};