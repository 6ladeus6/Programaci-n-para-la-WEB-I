/* 2.	Aplica la fórmula a = (b*h)/2 para calcular el área de un
 triángulo donde sus dimensiones base y altura se deben pedir al usuario que las digite. */

/*  var a;
var b=prompt('Ingrese la base del trinagulo','');
var h=prompt('Ingrese la altura del trinagulo:','');

a = (b * h)/2;
document.write('El area del triangulo es: ');
document.write(a);
 */
/* 
3.	Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo 2 números al usuario. */

/* var s,r,m,div,mod;
 var a = prompt('Ingrese el numero a: ','');
 var b = prompt('Ingrese el numero b: ','');

s = parseInt (a) + parseInt (b);
r =  parseInt (a)  - parseInt (b);
m = parseInt (a)  * parseInt (b);
div = parseInt (a)  / parseInt (b);
mod = parseInt (a)  % parseInt (b);

document.write('La suma de : ' + a + ' + ' + b + ' es : ');
document.write(s + '<br>');

document.write('La resta de : ' + a + ' - ' + b + ' es: ');
document.write(r + '<br>');

document.write('La multiplicacion de : ' + a + ' * ' + b + ' es: ');
document.write(m + '<br>');

document.write('La division de : ' + a + ' / ' + b + ' es: ');
document.write(div + '<br>');

document.write('El modulo de : ' + a + ' % ' + b + ' es: ');
document.write(mod + '<br>'); */

/* 4.	Calcule el sueldo mensual de un trabajador ingresando ingresando el número de horas trabajadas en el mes 
y el valor tanto como de las horas normales de trabajo y las horas extras. */

/* var sm;
 var htpm = prompt('Ingrese las horas trabajadas al mes: ','');
 var vhn = prompt('Ingrese el valor de horas normales: ','');
 var vhe = prompt('Ingrese el valor de horas extras: ','');

 sm = parseInt((htpm * vhn)+vhe);

 document.writeln('el salario neto mensual es: ')
 document.write(sm) */

/*  5.	Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el IVA que se agrega, 
 mostrar el precio del producto sin IVA y el total a pagar. */

 
/*  var pro = prompt('Ingrese el valor del producto: ','');


var psi = pro / 1.19;
var iva =psi * 0.19;
var total = parseInt(psi) + parseInt (iva);

document.writeln('EL IVA es: ' + iva + '<br>');
document.writeln('El producto sin IVA es: ' + psi + '<br>');
document.writeln('El total a pagar es: ' + total + '<br>'); */


/* 6.	Calcule el porcentaje de alumnos y alumnas de un salón de clase, 
digitando el total de alumnos hombres y mujeres. */

/* var th = prompt('Ingrese el total de hombres');
var tm = prompt('Ingrese el total de mujeres');

var sm = parseInt(th) + parseInt(tm);

var ph = (th/sm)*100;
var pm = (tm/sm)*100;

document.writeln('EL porcentaje total de hombres es ' + ph + '<br>');
document.writeln('EL porcentaje total de mujeres es ' + pm + '<br>'); */


/* 7.	Calcule el promedio de 5 notas de un alumno, el rango de cada nota es del 1 al 5. */

/* var n1 = prompt('Digite n1');
var n2 = prompt('Digite n2');
var n3 = prompt('Digite n3');
var n4 = prompt('Digite n4');
var n5 = prompt('Digite n5');

var sm = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5) )/5;

document.writeln('EL promedio del estudiante es ' + sm + '<br>');
 */

/* 8.	Pide al usuario un número y determina si es par o impar y si es positivo o negativo.
 */
/* 
var n = prompt('Digite un número');
 if((n%2==0)&&(n>=0)){
    document.writeln('El número es par ' + n + ' y positivo <br>');
 }else if((n%2==0)&&(n<0)){
    document.writeln('El número es par ' + n + ' y negativo <br>');
 }else if ((n%2!=0)&&(n>=0)){
    document.writeln('El número es impar ' + n + ' y positivo <br>');
 }else {
    document.writeln('El número es impar ' + n + ' y negativo <br>');
 } 
 */

/* var edad = prompt('Ingrese la edad: ')
switch(true){
    case edad < 18 : alert('Usted es menor');
    break;
    default: alert('Adulto mayor');
    break;
} */

/* var  dia = prompt('Ingrese un numero: ');
switch( parseInt (dia)){
    case 1: alert('lunes');
    break;
    case 2: alert('Martes');
    default: alert('EL numero ingresado no existe');
    break;

} */