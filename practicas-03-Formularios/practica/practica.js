//* ===========================================
//* === validación formulario js | por "id" ===
//* ===========================================

// ======================================
// === capturar/seleccionar elementos ===
// ======================================
const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const alertSuccess = document.getElementById('alertSuccess');
const alertEmail = document.getElementById('alertEmail');
const alertName = document.getElementById('alertName');

// ===============
// === eventos ===
// ===============
formulario.addEventListener('submit', e => {
    // === evita envio automático ===
    e.preventDefault();

    // === array almacenar errores | y después pintarlos ===
    const errores = [];

    // === devuelve true si existe sólo espacios | validación ===
    //console.log(!userName.value.trim());

    // === ocultar mensaje exito ===
    alertSuccess.classList.add('d-none');

    // === comprobar ===
    //console.log('formulario procesado');
    //console.log(userName.value);
    //console.log(userEmail.value);

    // === expresiones regulares ===
    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;                                      // letras y tíldes
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; // email

    // === comprobar ===
    //console.log(regUserName.test(userName.value));      // devuelve true o false
    //console.log(regUserEmail.test(userEmail.value));

    // === validación | nombre y espacios en blanco ===
    if(!regUserName.test(userName.value) || !userName.value.trim()) {
        // === pinta en el input icono de error ===
        userName.classList.add('is-invalid');
        // console.log('formato no valido');
        // return;
        // === empujar erroes ===
        errores.push({
            tipo: alertName,
            msg: 'Formato no válido en el campo nombre, sólo letras'
        });
    } else {
        // === si pasa la validación | quitar icono error, si lo hay ===
        userName.classList.remove('is-invalid');
        // === pintar en el input icono de success ===
        userName.classList.add('is-valid');
        // === poner la clase d-none para ocultar mensaje después de enviar ===
        alertName.classList.add('d-none');
    }

    // === validación | email y espacios en blanco ===
    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        // === pinta en el input icono de success ===
        userEmail.classList.add('is-invalid');
        // console.log('formato no valido');
        // return;
        // === empujar erroes ===
        errores.push({
            tipo: alertEmail,
            msg: 'Escriba un correo válido'
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    // === si hay algún error | algun error se ha guardado en el array de errores ===
    if(errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log('formulario enviado');
    pintarMensajeExito();

});


// =================
// === funciones ===
// =================
const pintarMensajeExito = () => {
    // === al pasar las validaciones ===
    // === quita la clase 'd-none' del div 'alertSuccess' ===
    alertSuccess.classList.remove('d-none');
    // === crear mensaje ===
    alertSuccess.textContent = 'Mensaje enviado con éxito';
}


const pintarMensajeError = (errores) => {
    // === no pasa las validaciones ===
    // === recorrer array errores ===
    errores.forEach(item => {
        // === quita la clase 'd-none' del p | para los estilos del mensaje de error ===
        item.tipo.classList.remove('d-none');
        // === pinta mensaje de error dinámicamente ===
        item.tipo.textContent = item.msg;        
    })
}