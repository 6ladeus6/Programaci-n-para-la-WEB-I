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

/* 8.	realiza dos ejercicios explicando como funcionan los metodos push(), pop(), slice() y splice().
 */

//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

/* const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
 */
//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando 
//por inicio hasta fin (fin no incluido). El array original no se modificará.
/* var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3); */

/* //El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
 */

/* El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array. */
/* const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
 */

/* 9.	Crea un array con nombres de frutas e imprime los datos en html por medio de un ciclo. */

// let frutas = ['Manzanas','Peras','Ciruela','Piña','Mango'];
// for (let index = 0; index < frutas.length; index++) {
//   const element = frutas[index];
//   document.writeln(element + "<br>");
  
// }

/* 10.	Cree un array con 3 elementos inicialmente y despues 
agregue 2 elementos mas, imprima en html todo los elementos. */

/* let persona = ['Nombre','Apellido','Edad'];
persona.push('Pasatiempo', 'Altura');
for (let index = 0; index < persona.length; index++) {
  const element = persona[index];
  document.writeln(element + "<br>");
} */
/* 11.	Del siguiente arreglo [3,5,9,10,35,42,12,22,25]
 mostrar en html cual es el primer numero, el ultimo, el del centro. */
 /* let numeros = [3,5,9,10,35,42,12,22,25];
 var numuno = numeros.slice(0, 1);
 var numcen = numeros.slice(4, 5);
 var numult = numeros.slice(8);
 document.writeln('Primer Numero: ' + numuno + "<br>");
 document.writeln('Numero Centro: ' + numcen + "<br>");
 document.writeln('Ultimo Numero: ' + numult + "<br>");
 */

/*  12.	 Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cuales 
 y cuantos son los numeros pares y los impares. */

 /* let numeros = [3,5,9,10,35,42,12,22,25];
 let contp = 0;
 let conti = 0;
 let auxp = "";
 let auxi = "";
 for (let index = 0; index < numeros.length; index++) {
   const element = numeros[index];
    if(element % 2 == 0){
      auxp = auxp + element + " : "; 
      contp ++;
    }else{
      auxi = auxi + element + " : ";
      conti ++;
    }
 }
 document.writeln('Los numeros pares son: ' + auxp + "<br>");
 document.writeln('Los numeros inpares son: ' + auxi + "<br>");
 document.writeln('La cantidad pares son: ' + contp + "<br>");
 document.writeln('La cantidad impares son: ' + conti + "<br>");
 */
 /* 13.	 Del siguiente arreglo [tomate,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandia] 
 mostrar en html en cual  posicion se encuentras las frutas y en cual posicion las verduras. */

/*  let fruver = ['tomate','banano','manzana','pera','cebolla','papa','fresas','Ajo','Sandia'];
 //verduras
for (let index = 0; index < fruver.length; index++) {
  const element = fruver[index];
  if(element == 'tomate'){
    document.writeln('Posicion ' + element + ': ' + index + "<br>");
  } else if(element == 'cebolla'){
    document.writeln('Posicion ' + element + ': ' + index + "<br>");
  }else if(element == 'Ajo'){
    document.writeln('Posicion ' + element + ': ' + index + "<br>");
  }else if(element == 'banano'){
    document.writeln('Posicion ' + element + ': ' + index + "<br>");
  }else if(element == 'manzana'){
    document.writeln('Posicion ' + element + ': ' + index + "<br>");
  }else if(element == 'pera'){
    document.writeln('Posicion ' + element + ': ' + index + "<br>");
  }else if(element == 'fresas'){
    document.writeln('Posicion ' + element + ': ' + index + "<br>");
  }else{
    document.writeln('Posicion ' + element + ': ' + index + "<br>");
  }
  
} */
/* 14.	Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3]
 mostrar en html los elementos organizados de forma acendente. */

 /* let vec = [29,5,40,10,35,42,12,22,25,1,3];
 vec.sort(function(v1, v2) {
     if (v1 > v2)
         return 1;
     else
         return -1;
 });
 document.write('Vector ordenado en forma ascendente<br>');
 for (let f = 0; f < vec.length; f++) {
     document.write(vec[f] + '<br>');
 } */
 

/*  15.	Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma decendente. */

/* let vec2 = [29,5,40,10,35,42,12,22,25,1,3];
vec2.sort(function(v1, v2) {
    if (v1 > v2)
        return 1;
    else
        return -1;
});

vec2.reverse();
 document.write('Vector ordenado en forma descendente<br>');
 for (let f = 0; f < vec2.length; f++) {
     document.write(vec2[f] + '<br>');
 } */

/*  16.	Del siguiente arreglo [2,4,6,8,10,12,14,16,18,20,22]
  mostrar en html los elementos ordenados aleatoriamente. */

