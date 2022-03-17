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

/*  9.	Pide al usuario dos números y determina cual es el número mayor y cual es el menor. */

/* var n1 = prompt('Digite un número 1');
var n2 = prompt('Digite un número 2');
if(n1>n2){
    document.writeln('El número mayor es: ' + n1 + ' con respecto a ' + n2 + '<br>');
}else if(n2>n1){
    document.writeln('El número mayor es: ' + n2 + ' con respecto a ' + n1 + '<br>');
}else{
    document.writeln('Los números son iguales ' + n2 + '<br>');
}
 */

/* 10.	Pide al usuario que digite un numero del 1 al 7 y Realiza el código correspondiente 
para saber cuál es el dia de la semana correspondiente al número digitado
 */

/* var  dia = prompt('Ingrese un numero del 1 al 7: ');
switch( parseInt (dia)){
    case 1: alert('lunes');
    break;
    case 2: alert('Martes');
    break;
    case 3: alert('Miercoles');
    break;
    case 4: alert('Jueves');
    break;
    case 5: alert('Viernes');
    break;
    case 6: alert('Sabado');
    break;
    case 7: alert('Domingo');
    break;
    default: alert('EL numero ingresado no existe');
    break;
} */

/* 11.	Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. 
(Si la edad es menor de 18 es adolente), 
(si la edad está en el rango de 18 a 28 es adulto adolecente), 
(si la edad está entre 29 a 49 es adulto),
 (si la edad está entre 50 en adelante es adulto mayor). 
Mostrar en pantalla la etapa de la persona. */

/* var edad = prompt('Ingrese la edad: ')
switch(true){
    case edad < 18 : alert('Usted es adolecente');
    break;
    case edad >= 18 && edad <= 28: alert('Usted es adulto adolecente');
    break;
    case edad > 28 && edad <= 49: alert('Usted es adulto');
    break
    default: alert('Adulto mayor');
    break;

} */

/* 12.	 Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente:
si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total. */

/* var prd1 = prompt('Ingrese el valor del producto 1: $ ');
var prd2 = prompt('Ingrese el valor del producto 2: $ ');
var prd3 = prompt('Ingrese el valor del producto 3: $ ');
var mtdp = prompt('Ingrese el su metodo de pago:  1. Efectivo, 2. Cupón, 3. Crédito:  ');
var ttl,desc;
if(mtdp == 1){
  ttl = parseInt(prd1) + parseInt(prd2) + parseInt(prd3);
  alert('El valor a pagar por su factura es: ' + ttl);
}else if (mtdp == 2){
    ttl = parseInt(prd1) + parseInt(prd2) + parseInt(prd3);
    desc = ttl * 0.3;
    ttl = ttl - desc;
    alert('El valor a pagar por su factura es: $' + ttl + ' y tiene un descuento de $' + desc);
}else if(mtdp == 3){
    ttl = parseInt(prd1) + parseInt(prd2) + parseInt(prd3);
    desc = ttl * 0.5;
    ttl = ttl + desc;
    alert('El valor a pagar por su factura es: $' + ttl + ' y tiene un aumento de $' + desc);
}else{
    alert('El número ingresado no corresponde a un metodo de pago válido');
}
 */
