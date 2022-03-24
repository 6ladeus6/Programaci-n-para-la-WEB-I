/* 1.	Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado. */
var n = prompt('ingrese el numero limite: ');
var suma = 0;
for (let i = 0; i < n; n++) {
    suma = parseInt(suma) + parseInt(i); 
}
document.writeln('La suma es: ' + suma + '<br>');
