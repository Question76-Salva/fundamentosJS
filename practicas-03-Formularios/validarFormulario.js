//* ===========================================
//* === validación formulario js | por "id" ===
//* ===========================================

// ======================================
// === capturar/seleccionar elementos ===
// ======================================
const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

// ===============
// === eventos ===
// ===============
formulario.addEventListener('submit', e => {
    // === evita envio automático ===
    e.preventDefault();

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

    // === validación | nombre ===
    if(!regUserName.test(userName.value)) {
        console.log('formato no valido');
        return;
    }

    // === validación | email ===
    if(!regUserEmail.test(userEmail.value)) {
        console.log('formato no valido');
        return;
    }

    console.log('formulario enviado');

})


// =================
// === funciones ===
// =================