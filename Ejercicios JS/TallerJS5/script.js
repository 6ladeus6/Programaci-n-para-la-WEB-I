/* 1.	Cree un objeto con los siguientes datos: id, nombre, edad, pasatiempos 
y muestre en html las propiedades o llaves de ese objeto. */

/* var persona = {
    id: "001",
    nombre: "Alejandro",
    edad: 33,
    pasatiempo: "Correr"
};

console.log( Object.values(persona));
document.writeln(Object.values(persona)); */

/* 2.	Cree un objeto con los siguientes datos: id, nombre, edad, pasatiempos
 y muestre en html los valores de ese objeto. */

/*  var persona = {
    id: "001",
    nombre: "Alejandro",
    edad: 33,
    pasatiempo: "Correr"
};
console.log(Object.entries(persona));
document.write(Object.entries(persona)); */

/* 3.	Cree un objeto con los siguientes datos: id, nombre, edad, pasatiempos y una función dentro del 
objeto que muestre en una ventana el nombre y el pasatiempo que guardo en ese mismo objeto. */
/* 
var persona = {
    id: "001",
    nombre: "Alejandro",
    edad: 33,
    pasatiempo: "Correr"
};
alert("Nombre: " + persona.nombre + " " + "Pasatiempo: " + persona.pasatiempo );
 */

/* 4.	Cree un listado de empleados, pida los siguientes datos al usuario: nombre, cargo, salario; 
guarde los datos en un objeto, y muestre el listado de al menos 5 empleados en html. */

/* for (let index = 0; index < 5; index++) {
   var nomb = prompt("Ingrese su nombre");
   var carg = prompt("Ingrese su cargo");
   var sal = prompt("Ingrese su salario");
    var empleado = {
        nombre: nomb,
        cargo: carg,
        salario: sal

    };
    document.write("<ul>" + empleado.nombre + "</ul>");
    document.write("<ul>" + empleado.cargo + "</ul>");
    document.write("<ul>" + empleado.salario + "</ul>");
} */

/* 5.	Llene una tabla de productos en html; pida los siguientes datos del producto: nombre, presentación, valor; 
guarde los datos en un objeto, y muestre al menos 5 productos en la tabla. */

/* for (let index = 0; index < 2; index++) {
    var nomb = prompt("Nombre del producto");
    var pres = prompt("Presentación del producto");
    var val = prompt("Valor del producto");
    
};
var labels3 = ['Nombre', 'Presentación' ,'Valor'];
var objects3 = [
{"Nombre": nomb,  'Presentacion': pres,  'valor': val},
];

buildTable(labels3, objects3, document.getElementById('c'));

var theadTr = document.createElement('tr');
for (var i = 0; i < labels.length; i++) {
  var theadTh = document.createElement('th');
  theadTh.innerHTML = labels[i];
  theadTr.appendChild(theadTh);
}
thead.appendChild(theadTr);
table.appendChild(thead);

for (j = 0; j < objects.length; j++) {
  var tbodyTr = document.createElement('tr');
  for (k = 0; k < labels.length; k++) {
    var tbodyTd = document.createElement('td');
    tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
    tbodyTr.appendChild(tbodyTd);
  }
  tbody.appendChild(tbodyTr);
}
table.appendChild(tbody);
container.appendChild(table);

 */



