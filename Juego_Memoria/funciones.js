document.addEventListener("DOMContentLoader",function(){
//declarar variables
//guardar imagenes
let imagenes = [
    {
        url:"imagenes/1.jfif",
        nombre:"ironman",
    },
    {
        url:"imagenes/2.png",
        nombre: "capitan"
    },
    {
        url:"imagenes/3.png",
        nombre: "black"
    },
    {
        url:"imagenes/4.jfif",
        nombre: "tohr"
    },
    {
        url:"imagenes/5.png",
        nombre: "spiderman"
    },
    {
        url:"imagenes/6.jfif",
        nombre: "increible"
    },
    {
        url:"imagenes/1.jfif",
        nombre:"ironman",
    },
    {
        url:"imagenes/2.png",
        nombre: "capitan"
    },
    {
        url:"imagenes/3.png",
        nombre: "black"
    },
    {
        url:"imagenes/4.jfif",
        nombre: "tohr"
    },
    {
        url:"imagenes/5.png",
        nombre: "spiderman"
    },
    {
        url:"imagenes/6.jfif",
        nombre: "increible"
    }
];
//guardar tablero
let tablero = document.querySelector(".tablero");
//funcion para agegar las imagenes al tablero
function agregarImagenes(){
    for (let index = 0; index < imagenes.length; index++) {
        let img = document.createElement("img");
        img.setAttribute("src","/imagenes/pregunta.png");
        img.setAttribute("width","200px");
        img.setAttribute("height","200px");

        //pasar al tablero las imagenes
        tablero.appendChild(img);
    }
}
agregarImagenes();
});