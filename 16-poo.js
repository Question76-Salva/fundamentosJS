// ============================================
// === poo js | mini-proyecto mini-librería ===
// ============================================

// js -> es un lenguaje orientado a objetos basado en prototipos | normalmente un lenguaje es orientado a objetos en clases

/*
    === mini-proyecto -> mini-librería ===
    - descripción: simular un sistema de "almacenamiento" de libros y comics.
    - propiedades: a registrar para cada objeto:
        - Libro: titulo, autor, precio, stock, id
        - Comic: es la misma info que Libro, más: ilustradores, volumen

    - los usuarios NO podrán modificar ningún valor
    - funciones: cada objeto podrá mostrar su información completa
*/

// === pilares de la poo ========================================================================================================
// abstracción -> abstraer, es "eliminar los detalles innecesarios" para sólo enfocarnos en los aspectos que son relevantes
//              para el contexto (sistema que estamos desarrollando).
// encapsulamiento -> "es ocultar los detalles que no son relevantes" para el exterior. Agrupar propiedades y métodos de manera
//                  que el acceso está restringido desde fuera de nuestra clase. Que la modificación de los atributos se haga 
//                  desde dentro de la clase con los getters & setters, pero no desde fuera de la clase | es peligroso!!!.
// herencia -> la poo nos permite crear clases hijas que heredan propiedades y métodos de una clase padre con la intención
//             de tener objetos especializados.
// polimorfismo -> se refiere a la capacidad de "realizar una misma acción de diferentes formas".
// ==============================================================================================================================

// === elementos más importantes de la poo ======================================================================================
// clase -> sirve para definir propiedades y métodos.
// propiedades/atributos -> colección de datos que conforman a un objeto.
// métodos -> funciones que puede realizar el objeto | funciones asociadas a un objeto | nos permite definir el comportamiento
//          o acciones que nuestras instancias podrán realizar.
// constructor -> función especial que se invoca automáticamente al momento de instanciar un objeto. Su proposito principal es
//              es recibir los valores que se asignarán a las propiedades del objeto.
// this -> cuando se trabaja con poo, hace referencia al objeto.
// método getter -> sirve para obtener el vlaor de una propiedad.
// método setters -> sirve para asignar valor a una propiedad.
// ===============================================================================================================================

class Book {

    // Book -> clase padre | general

    // === atributos/propiedades | title - author - price - stock - id === 
    #title;
    #author;
    #price;
    #stock;
    #id;

    // === constructor | # -> propiedad privada ===
    constructor(title, author, price, stock, id) {
        this.#title = title;                            
        this.#author = author;
        this.#price = price;
        this.#stock = stock;
        this.#id = id;
    }

    // === métodos ===
    getInfo() {
        let info = `Título: ${this.title} | Autor: ${this.author} | Precio: ${this.price} | id: ${this.id} | `;
        
        if (this.#stock > 0) {
            info += `Existencias: ${this.#stock}`;
        } else {
            info += `No disponible`;
        }
        console.log(info);
    }

    // === getters (leer) & setters (asignar/escribir) ===
    get title() {
        return this.#title;
    }

    set title(new_title) {
        this.#title = new_title;
    }

    get author() {
        return this.#author;
    }

    // set author(new_author) {
    //     this.#author = new_author;
    // }

    get price() {
        return this.#price;
    }

    // set price(new_price) {
    //     this.#price = new_price;
    // }

    get stock() {
        return this.#stock;
    }

    // set stock(new_stock) {
    //     this.#stock = new_stock;
    // }

    get id() {
        return this.#id;
    }

    // set id(new_id) {
    //     this.#id = new_id;
    // }

}

class Comic extends Book {

    // Comic -> clase hija | específica

    // === atributos/propiedades | los de la clase padre y los propios de esta: illustrators, vol === 
    #illustrators;
    #vol;

    // === constructor | # -> propiedad privada ===
    constructor(title, author, price, stock, id, illustrators, vol) {
        super(title, author, price, stock, id);                                 // herencia
        this.#illustrators = illustrators;
        this.#vol = vol;
    }

    // === polimorfismo | sobreescribe el método de la clase padre ===
    getInfo() {
        let info = `Ilustradores: ${this.#illustrators.toString()}, Volumen: ${this.#vol}`;
        
        super.getInfo();                            // rehutilizar el getInfo() de la clase padre
        console.log(info);
    }
    

}

// === instnanciar objetos de la clase Book | crear objetos de tipo Book ===
const book1 = new Book('Caballos desbocados', 'Yukio M', 25, 100, 1);
const book2 = new Book('Quijote', 'Cervantes', 30, 0, 2);

// === instnanciar objetos de la clase Comic | crear objetos de tipo Comic ===
const comic1 = new Comic('Batman the Killing Joke', 'Sheldon', 15, 10, 1, ['ilustrador 1', 'ilustrador 2'], 5);

// === imprimir objeto completo ===
console.log(book1);
console.log(comic1);

// === acceder a las propiedades de los objetos ===
console.log(book1.title);

// === modificar las propiedades de los objetos ===
book1.title = 'Caballo Salvaje';
console.log(book1.title);

// === acceder a los métodos de los objetos ===
book1.getInfo();
book2.getInfo();
comic1.getInfo();