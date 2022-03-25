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

/* 7.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva. */ //NO TERMINADO...

/* var n = prompt('Ingrese un numero');
//document.writeln('La tabla del ' + n + ' es: ' +'<br>');
var i = 30;
var mult = 0;
while ( i != -1) {
    n = i - n ;
    document.writeln(n + ' X '+ i + ' = ' + mult +'<br>');
    i--;
} */
/* var n = prompt('Ingrese un numero');
var cont = 0;
for (let i = n ; n >= 0; i--) {
    cont = i - n;
    document.writeln('El conteo con intervalos de '+ n + ' es = ' + cont +'<br>');
} */
/* 
8.	Digite un número (altura) y a partir de él cree una escalera de asteriscos o el carácter que desee; 
con esa altura. Deberá quedar así, si ponemos una altura de 5. */
/* 
var h = prompt('Digite la altura ');
var aux ="";
var astk = "*";
for (let i = 1; i <= h; i++) {
    aux= aux + astk;
    document.writeln( aux +'<br>');
}
 */
/* 
9.	Digite un número (altura) y a partir de él cree una escalera invertida de asteriscos o el carácter que desee; 
con esa altura. Deberá quedar así, si ponemos una altura de 5.

 */

/* var h = prompt('Digite la altura ');


var i = h;

for(i=1;i <= h; i++){
    var astk = "*****";
    document.writeln( astk +'<br>');
    for (i = 1;i <= h; i++){
        var astk = "****";
        document.writeln( astk +'<br>');
        for (i = 1;i <= h; i++){
            var astk = "***";
            document.writeln( astk +'<br>');
            for (i = 1;i <= h; i++){
                var astk = "**";
                document.writeln( astk +'<br>');
                for (i = 1;i <= h; i++){
                    var astk = "*";
                    
                }
            }
        }
    }
}
document.writeln( astk +'<br>');
 */


/* Cree un programa que permite registrar el número de compras que se venden cada día. 
pedir al usuario cuantos productos va a comprar y registrar el precio unitario, 
calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general.
Cliente #1
No. Productos: 3
valor  p1 : 4,500
valor p2: 2,000
valor p3: 3,500
total compra: 10.000
Cliente #2
No. Productos: 2
valor  p1 : 1,500
valor p2: 2,000
total compra: 3.500
Total Ventas del dia: 2
Total General del dia: 13.500
 */

/* var compra = prompt('Cuantos productos desea comprar?');
var con = 0;
var totalcompra = 0;
var totalventas = 0;
while(compra != 'no'){
    var con2 = 1;
    var totalpro = 0;
    document.writeln('<p> factura '+con+'</p>');
    document.writeln('<p> número de productos '+compra+'</p>');
    while(con2 < parseInt(compra)){
        var valorpro = prompt('Digite el valor del producto');
        document.writeln('<p> el valor del producto '+con2+' es: '+valorpro+'</p>');
        totalpro + parseInt(valorpro);
        con2++;
    }
    totalcompra = totalcompra + parseInt(totalpro);
    totalventas = totalventas + parseInt (totalcompra);
    document.writeln('<p> Total compra '+totalcompra+'</p>');
    compra = prompt('Cuantos productos desea comprar?');
    con++;
}
document.writeln('<p> Numero de ventas '+con+'</p>');
document.writeln('<p> Total ventas '+totalventas+'</p>');

 */

/* 10. Cree tabla de números del 1 al 15 mínimo en HTML. la salida se debe ver así: */
/* var f = 3;
var c = 5;
var con = 1;
var acu = 1;
document.write('<table border = "1">')
while (con <= f) {
    document.write('<tr>');
    var con1 = 1;
    while (con1 <= c) {
        document.write('<td>' + (acu++) +'</td>')
        con1++;
    }
    document.write('<tr>');
    con++;
}
document.write('</table>')
 */
