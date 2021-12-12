//* ==========================================
//* === poo js | mejorado con validaciones ===
//* ==========================================

// ======================================
// === capturar/seleccionar elementos ===
// ======================================
const formulario = document.getElementById('formulario');
const cardsEstudiantes = document.getElementById('cardsEstudiantes');
const cardsProfesores = document.getElementById('cardsProfesores');
const templateEstudiante = document.getElementById('templateEstudiante').content;
const templateProfesor = document.getElementById('templateProfesor').content;
const alert = document.querySelector('.alert');

// === inicializar colección datos | array vacio para estudiantes | guardar las instancias/objetos ===
const estudiantes = [];
// === inicializar colección datos | array vacio para profesores | guardar las instancias/objetos ===
const profesores = [];


// =============================
// === delegación de eventos ===
// =============================
// evita burbujeo y captura de eventos | hacer click en "diferentes" elementos | detectar sólo lo que interesa
// === cambiar estado de aprobado-suspenso ===s
document.addEventListener('click', e => {
    //console.log(e.target.dataset.uid);
    // === capturar los botones en la delegración de eventos ===
    // si existe el uid
    if(e.target.dataset.uid) {
        //console.log(e.target.matches('.btn-success'));
        if(e.target.matches('.btn-success')) {
            // modificar estado (suspenso)
            estudiantes.map(item => {
                if(item.uid === e.target.dataset.uid) {
                    // si el nombre coincide... cambia estado
                    item.setEstado = true;
                }
                console.log(item);
                return item;
            });            
        };
        
        if(e.target.matches('.btn-danger')) {
            // modificar estado (aprobado)
            estudiantes.map(item => {
                if(item.uid === e.target.dataset.uid) {
                    // si el nombre coincide... cambia estado
                    item.setEstado = false;
                }
                return item;
            });
            
        };

        // === renderizar html | pintar cambios ===
        Persona.pintarPersonaUI(estudiantes, "Estudiante");
        
    };
    
});

// ==============
// === clases ===
// ==============
class Persona {
    // === constructor | clase padre | para usar con las clases Estudiante y Profesor ===
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.uid = `${Date.now()}`;     // convierte número a string
    }

    // === renderizar información | cardEstudiante | con método estático sin necesidad de instanciar ===
    static pintarPersonaUI(personas, tipo) {
        if(tipo === "Estudiante") {
            cardsEstudiantes.textContent = "";
            const fragment = document.createDocumentFragment();

            personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoEstudiante());
            });

            // === renderizarlo en el html | evitar reflow ===
            cardsEstudiantes.appendChild(fragment);
        }

        if(tipo === "Profesor") {
            cardsProfesores.textContent = "";
            const fragment = document.createDocumentFragment();

            personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoProfesor());
            });

            // === renderizarlo en el html | evitar reflow ===
            cardsProfesores.appendChild(fragment);
        }
    } 

}


class Estudiante extends Persona {
    // === # propiedades privadas ===
    #estado = false;
    #estudiante = "Estudiante";

    set setEstado(estado) {
        this.#estado = estado;
    }

    get getEstudiante() {
        return this.#estudiante;
    }

    agregarNuevoEstudiante() {
        // === crear la clonación del templateEstudiante ===
        const clone = templateEstudiante.cloneNode(true);
        // === acceder a cada propiedad del template ===
        clone.querySelector('h5 .text-primary').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.getEstudiante;
        clone.querySelector('.lead').textContent = this.edad;

        // === cambiar estado | aprobado - suspenso ===
        if(this.#estado) {
            // === si es true | acceder a los elementos y cambiar/reemplazar clases (className) ===
            clone.querySelector('.badge').className = "badge bg-success";
            // === dejar desactivado botón | activar-desactivar ===
            clone.querySelector('.btn-success').disabled = true;    
            clone.querySelector('.btn-danger').disabled = false;    

        } else {
            // === si es false | acceder a los elementos y cambiar/reemplazar clases (className) ===
            clone.querySelector('.badge').className = "badge bg-danger";
            // === dejar desactivado botón | activar-desactivar ===
            clone.querySelector('.btn-danger').disabled = true; 
            clone.querySelector('.btn-success').disabled = false; 
        }

        clone.querySelector('.badge').textContent = this.#estado ? "Aprobado" : "Suspenso";

        // === agregar los atributos dataset dinámicamente (para capturar por js) | cambiar aprobado-suspenso ===
        // === seleccionar botón aprobar | por el "uid" ===
        // === capturar los botones en la delegración de eventos ===
        clone.querySelector('.btn-success').dataset.uid = this.uid;
        clone.querySelector('.btn-danger').dataset.uid = this.uid;

        return clone;
    }
    
}


class Profesor extends Persona {
    // === # propiedades privadas ===
    #profesor = "Profesor";

    agregarNuevoProfesor() {
        // === crear la clonación del templateProfesor ===
        const clone = templateProfesor.cloneNode(true);
        // === acceder a cada propiedad del template ===
        clone.querySelector('h5').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.#profesor;
        clone.querySelector('.lead').textContent = this.edad;
        return clone;
    }
}


// ===============
// === eventos ===
// ===============
formulario.addEventListener('submit', e => {
    // === evita envio por defecto ===
    e.preventDefault();

    // === quitar alerta de error | agrega clase 'd-none' para ocultar ===
    alert.classList.add('d-none');

    // === capturar los valores de los inputs por formData | de los atributos "name" de cada input ===
    // recibe el formulario como parámetro
    const datos = new FormData(formulario);
    // === destructuring | guarda cada valor en una variable
    const [nombre, edad, opcion] = [...datos.values()];
    //console.log(nombre, edad, opcion);   

    // === antes de crear un estudiante o profesor | validación para evitar envio aire/nada ===
    // === validación muy usada!!! ===
    if(!nombre.trim() || !edad.trim() || !opcion.trim()) {
        //console.log('algun dato en blanco');
        // === quita la clase d-none | para visualizar alerta | no pasó la validación de espacios en blanco ===
        alert.classList.remove('d-none');
        return;
    }

    // === elegir opción Estudiante en el formulario ===
    if(opcion === "Estudiante") {
        // === instancia de Estudiante | recibe nombre y edad de Persona ===
        const estudiante = new Estudiante(nombre, edad);    
        // === empujar la instancia de "Estudiante" al array de "estudiantes" ===
        estudiantes.push(estudiante);
        // === llamar al método estático | pintarPersonaUI ===
        Persona.pintarPersonaUI(estudiantes, opcion);
    }
        
    // === elegir opción Profesor en el formulario ===
    if(opcion === "Profesor") {
        // === instancia de Profesor | recibe nombre y edad de Persona ===
        const profesor = new Profesor(nombre, edad);
        // === empujar la instancia de "Profesor" al array de "profesores" ===
        profesores.push(profesor);
        // === llamar al método estático | pintarPersonaUI ===
        Persona.pintarPersonaUI(profesores, opcion);
    }

    // === limpiar formulario | después de crear estudiante o profesor ===
    formulario.reset();
});


