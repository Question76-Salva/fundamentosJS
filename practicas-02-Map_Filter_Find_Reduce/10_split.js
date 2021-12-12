// =============
// === split ===
// =============

// Divide un objeto de tipo String en un array, mediante un "separador".
// Pasar/convertir un String a un array, e inidcamos el separador (",").

const cadenaMeses = "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);