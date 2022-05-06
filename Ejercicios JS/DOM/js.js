
/* 
//seleccionar nodo o elemento
let NodeFather = document.querySelector("p");
//Crear nuevo nodo o elemento
let NodeSon  = document.createElement("a");
//Crear texto para el elemento nuevo
let text = document.createTextNode(" Click here");
//Modificar etiqueta agregando un atributo
NodeSon.setAttribute("href","https://educaciondigital.cesde.edu.co/");
NodeSon.setAttribute("target","_blank");
//Agregar texto al nuevo elemento
NodeSon.appendChild(text);
//Agregar el nuevo elemento a la etiqueta p
NodeFather.appendChild(NodeSon);
//Eliminar un nodo
NodeFather.removeChild(NodeSon); */

let title = document.querySelector(".titulo");
title.addEventListener("Click",()=>{
    alert("Hello in JS");
});