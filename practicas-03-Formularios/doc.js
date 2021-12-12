//* ==============================
//* === validación formularios ===
//* ==============================

// === expresiones regulares ===
// buscar palabra 'bluuweb' en un texto (string) | /expresión a evaluar/ | notación literal
// i -> ignora mayusculas y minusculas
const regExp = /bluuweb/i;

// instanciar objeto | notación de objeto
const regExpObjeto = new RegExp("bluuweb", "i");

// === métodos ===
// método "test()" -> evaluar que lo que nosotros escribimos pertenece a nuestra expresión regular
console.log(regExp.test("salvador bluuweb belloso desarrollador web"));     // true -> encontrado
console.log(regExp.test("salvador bluu web belloso desarrollador web"));    // false -> no encontrado

// === caracteres especiales ===
// buscar cualquiera de los caracteres que están entre los corchetes [ue]
const regExp2 = /[ue]/gi;
console.log(regExp2.test("bluuweb"));    // true -> encontrado

// buscar una alternativa, lo que está a la izquierda o a la derecha
const regExp3 = /bluweb|bluuweb/gi;
const str3 = "bluuweb";
console.log(regExp3.test(str3));         // true -> encontrado

// buscar texto y números | para username en formularios -> validar nombre de usuario (sólo letras y números)
const regExp4 = /[A-Za-z0-9]/i;
console.log(regExp4.test("bluuweb"));       // true -> encontrado, tiene texto
console.log(regExp4.test("bluuweb1980"));   // true -> encontrado, tiene texto y números
console.log(regExp4.test("$$$$"));          // false

// buscar sólo números
const regExp5 = /^\d+$/gi;
const str5 = "1234";
console.log(regExp5.test(str5));            // true 

// buscar sólo letras con tíldes
const regExp6 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const str6 = "María de la Paz";
console.log(regExp6.test(str6));            // true

// === validar email ====
const regExpEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const strEmail = "test@example.com";
console.log(regExpEmail.test(strEmail));    // true