/* Instancias de clase publicas y privadas.
Ahora será nativamente posible definir atributos de la clase directamente en el cuerpo de la clase.

También es posible marcar estos atributos como privados usando # como prefijo.

Usando la misma sintaxis, también será posible marcar métodos y accessors como privados creando un mejor sistema de encapsulamiento. */

/* class Button {
    //Por defecto todos los atributos son públicos
    color = "red"

    // Los atributos privados comienzan con un `#`
    // solo pueden ser cambiados y accesados desde la propia clase
    #disabled = false
}
const button = new Button();
// Atributos puiblicos son acessibles en todo momento.
button.color = "blue"

// Esto lanza un error de Sintaxis 
console.log(button.#disabled); */

/* class Item{
    #id;
    title;
    date;
    constructor(id,title,date){
        this.#id = id;
        this.title = title;
        this.date = date;
    }
    #validate(){}
}
const item = new Item();
item.validate();//Metodo privado
item.id = "1094247361";//propiedad privada
console.log(item.id); */

/* Siguiendo con las clases, ahora será posible definir atributos y métodos estáticos. Para esto una nueva sintaxis será utilizada static.
 Estos métodos y atributos estáticos también podrán ser privados. */

/*  class Square {
    static #side = 100

    static #getPerimeter() {
        return 4* #side;
    }

    static calculateProperties() {
        return {
            perimeter: #getPerimeter(),
            side: #side,
            area: #side^2
        }
    }
}

// Método estático público
Square.calculateProperties();

// Métodos estáticos privados: Sintax Error
Square.#side 

Square.#getPerimeter(); */
/* 
Podrás revisar si cierto método o propiedad privada de una clase existe en la instancia de clase utilzando la nueva palabra clave in.

class PrivateClass {
    constructor() {
        super();

    }
    #someCoolVariable
    #theMethod() {}

    get #getter () {}
    set #setter(text) {
        this.#someCoolVariable = text
    }

    static isPrivate(obj) {
        return {
            #someCoolVariable in obj && #theMethod in obj && #getter in obj && #setter in obj
        }
    }
} */

/* Dependency Fallbacks:
Resource Initialization: Permite definir recursos y producir errores evitando que el módulo sea utilizado. */

/* // Dynamic dependency pathing:
const strings = await import(`/i18n/${navigator.language}`);

// Dependency Fallbacks 
let jQuery;
try{
    jQuery = await import('https://cdn-a.example.com/jQuery');
}catch {
    jQuery = await import('https://cdn-b.example.com/jQuery');
}

// Resource initialization 
const connection = await dbConnector();
 */

/* Array.at
También tendremos un nuevo método en nuestros queridos arreglos: at.

Permitirá obtener un elemento desde un indice determinado. Igual que al usar [] pero permitirá el uso de indices negativos.
 */
/* const array = [0,1,2,3,4,5]

array([array.length - 1]) //5
array.at(-1) //5 

array[array-length - 2] //4
array.at(-2) // 4 */

/* Object.hasOwn
Nuevo método Object.hasOwn, que provee una nueva forma (segura y siempre accesible) de revisar si un objeto tiene ciertas propiedades. */

const obj = { foo: 'bar' }
let hasFoo = Object.hasOwn(obj, 'foo');
console.log(hasFoo) // true
