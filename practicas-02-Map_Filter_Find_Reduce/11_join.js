// ============
// === join ===
// ============

// Convierte un array a un string, y le indicamos un "separador".

const cadenaMeses = "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

const nuevoTexto = arrayMeses.join("-");
console.log(nuevoTexto);