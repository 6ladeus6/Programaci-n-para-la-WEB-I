/* 1.	Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado. */
/* var n = prompt('ingrese el numero limite: ');
var suma = 0;
for (let i = 0; i < n; i++) {
    suma = parseInt(suma) + parseInt(i); 
}
document.writeln('La suma  de los numeros hasta ' + n + ' es: ' + suma + '<br>');
 */

/* 2.	Hacer un programa que pida N notas, calcular el promedio de las notas aprobadas y el promedio de las notas desaprobadas; 
(Aprueba con un promedio de 3).   */

/* var n = prompt('ingrese la cantidad de notas: ');
var suma = 0;
var pra = 0;
var prd = 0;
for (let i = 1; i <= n; i++) {
    var nt = prompt('ingrese la nota: ' + i);
    if (nt >= 3){
         var pra = parseInt(pra) + parseInt(nt);
    }else{
        var prd = parseInt(prd) + parseInt(nt);
    }    
}
document.writeln('El promedio de notas aprobadas es: ' + pra + '<br>');
document.writeln('El promedio de notas no aprobadas es: ' + prd + '<br>');
 */
/* 
3.	Ingrese varios números enteros y muestre la cantidad de números ingresados y la suma de los mismos. 
Realice esta acción hasta que el usuario ingrese la palabra FIN. */

/* var n = prompt('Digite un numero: ');
var suma = 0;
var cont = 0;
var num = "";
while(n != "fin"){
    num = num + n;
    suma = suma + parseInt(n);
    cont++;
    var n = prompt('Digite un numero: ');
}
document.writeln('La cantidad de numeros son: ' + cont + '<br>');
document.writeln('La suma de todos los numeros es: ' + suma + '<br>');
document.writeln('Los numeros ingresados son: ' + num + '<br>'); */

/* 4.	realice una tabla de multiplicar con cualquier número ingresado hasta el 30. */
/* var n = prompt('Ingrese un numero');
document.writeln('La tabla del ' + n + ' es: ' +'<br>');
for (let i = 0; i < 30; i++) {
    var mult = n * i;
    document.writeln(n + ' X '+ i + ' = ' + mult +'<br>');
} */
/* 
5.	Cree la tabla de multiplicar de cualquier número ingresado de manera descendente. */

/* var n = prompt('Ingrese un numero');
document.writeln('La tabla del ' + n + ' es: ' +'<br>');
var i = 30;
while ( i != -1) {
    var mult = n * i;
    document.writeln(n + ' X '+ i + ' = ' + mult +'<br>');
    i--;
} */

/* 6.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado. */
/* var n = prompt('Ingrese un numero');
var cont = 0;
for (let i = 1; i <= 30; i++) {
    cont = cont + parseInt(n);
    document.writeln('El conteo con intervalos de '+ n + ' es = ' + cont +'<br>');
}
 */

/* 7.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva. */

var n = prompt('Ingrese un numero');
//document.writeln('La tabla del ' + n + ' es: ' +'<br>');
var i = 30;
var mult = 0;
while ( i != -1) {
    n = i - n ;
    document.writeln(n + ' X '+ i + ' = ' + mult +'<br>');
    i--;
}
/* var n = prompt('Ingrese un numero');
var cont = 0;
for (let i = n ; n >= 0; i--) {
    cont = i - n;
    document.writeln('El conteo con intervalos de '+ n + ' es = ' + cont +'<br>');
} */