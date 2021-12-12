// ========================
// === array de objetos ===
// ========================

// objetos que tienen en su interior otros objetos

const web = {
    nombre: 'salva',
    links: {
        enlace: 'www.salva.es'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/salva',
            nombre: 'salva youtube'
        },
        facebook: {
            enlace: 'facebook.com/salva',
            nombre: 'salva facebook'
        }
    }
}

// acceder al enlace de youtube en las redes sociales
const enlaceYoutube = web.redesSociales.youtube.enlace;
console.log(enlaceYoutube);

// acceder con destructuring al enlace de youtube en las redes sociales | para acceder a dos o más elementos en una misma línea
const {enlace, nombre} = web.redesSociales.youtube;
console.log(enlace);
console.log(nombre);