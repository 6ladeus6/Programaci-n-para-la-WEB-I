//1.	Crea y llama una función que recibe el ancho y el alto de un rectángulo y calcula su superficie.

/* var h = prompt("Ingrese la altura");
var b = prompt("Ingrese la base");
function calculaSuperficie(h,b){

    return  h * b;
    
} 
var resultado;
resultado = calculaSuperficie(h,b);
alert (resultado); */

//2.	Crear y llamar a una función que recibe la velocidad en Km/hora y la muestra en metros/hora y millas/hora.

/* function convertVel(v){
    var v = prompt("Ingrese la velocidad en km/h: ");
    var cvmiph = v/1.60934;
    document.writeln("La velocidad en millas es: " + cvmiph); 
    var cvmph = v*1000;
    document.writeln("La velocidad en metros es: " + cvmph);
}
convertVel(); */

/* 3.	calcula el Perimetro(radio); Perímetro de la circunferencia = 2*Math.PI*Radio y  calcula Area(radio);
 Area de la circunferencia = Math.PI*Radio2 */
/*  var r = prompt("Ingrese el radio");
function calculo(r){
    pc = 2*Math.PI*r;
    ac = Math.PI*(Math.pow(r,2));
    document.writeln("Perimetro de la circunferencia es: " + pc +"<br>");
    document.writeln("Area de la circunferencia es: " + ac +"<br>");
}
calculo(r); */
 //4.	Crear y llamar a una función que recibe un número y calcula su cubo.

/*  var n = prompt("Ingrese el numero");
 function cubo(n){
     for (let i = 0; i < 3; i++) {
            var acu =  n * n;
            var aux = acu * n;
     }
     return aux;
 }
 document.writeln("El cubo del numero es: " + cubo(n)); */

/*  5.	Crea una función donde pases como parámetro un nombre e imprimirlo en pantalla; Validar que el dato ingresado no sea un número, 
 de ser así se debe decir en pantalla ingrese un nombre válido. */

/*  var nomb = prompt("Ingrese su nombre: ");
 function validaNombre(nomb){
    document.writeln("Ingrese un nombre valido: " + (+nomb));
    /* if(nomb == (+nomb)){
        document.writeln("Ingrese un nombre valido: ");
    } else{
        document.writeln("El nombre ingresado es: " + nomb);
    } */
 /* }
 validaNombre(); */

/*  6.	Muestra todas las operaciones básicas(suma, resta, multi, división), pidiendo al usuario 2 números */

/* var a = prompt("Ingrese el numero a: ");
var b = prompt("Ingrese el numero b: ");
function operaciones(a,b){
    var s = parseInt(a) + parseInt(b);
    var r = a - b;
    var m = a * b;
    var d = a / b;
    document.writeln(a + " + " + b + " = " + s +"<br>");
    document.writeln(a + " - " + b + " = " + r +"<br>");
    document.writeln(a + " * " + b + " = " + m +"<br>");
    document.writeln(a + " / " + b + " = " + d +"<br>");
}
operaciones(a,b); */

/* 7.	Cree un conversor de temperatura, investigando la fórmula para pasar grados
 Celsius a Fahrenheit y viceversa, pida al usuario la temperatura a 
 convertir y muestra en pantalla lo siguiente:
●	Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
●	Si la Temperatura es entre de 5°C a 15°C  o 37°F a 50°F : Esta haciendo frio
●	Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
●	Si la Temperatura es más de 38°C  o 100°F : Tiene fiebre o es el apocalipsis. */

  var temp = prompt("Ingrese la Temperatura en °C: ");
   function conTemp(temp){
    var f = 1.8 * temp + 32;
    document.writeln(f);
    if((temp < 0)||(f < 32)){
        document.writeln("Nos Cogelamos!!");
    }else if(((temp >= 5)&&(temp <= 15))||((f >= 37)&&(f <= 50))) {
        document.writeln("Esta haciendo frio!!");
    }else if(((temp >= 16)&&(temp <= 25))||((f >= 51)&&(f <= 77))){
        document.writeln("Está templado el dia");
    }else{
        document.writeln(" Tiene fiebre o es el apocalipsis");
    }
   } 
   conTemp(temp);
/* 
   8.	Calcule el índice de masa muscular de una persona (IMC=peso/estatura x altura), pidiendo como datos su estatura y peso. 
   imprima en pantalla lo siguiente: 
○	 Si el IMC es por debajo de 18.5 : Bajo peso debe ir al nutricionista
○	Si el IMC es 18.5—24.9 : Normal
○	Si el IMC es 25.0—29.9 : Sobrepeso 
○	Si el IMC es 30.0 o más : Obeso debe ir al nutricionista
 */

/* var h = prompt("Ingrese su altura: ");
var m = prompt("Ingrese su masa");
function indiceMasaCorporal(h,m){
    var imc = m/h*h;
    if(imc < 18.5){
        document.writeln("Bajo peso debe ir al nutricionista");
    }else if ((imc >= 18.5)&&(imc <= 24.9)){
        document.writeln("Normal");
    }else if ((imc >= 25)&&(imc <= 29.9)){
        document.writeln("Sobrepeso");
    }else{
        document.writeln("obeso debe ir al nutricionista");
    }
}
indiceMasaCorporal(m); */

// 9. Cree una función que pida el nombre del usuario, y
//  por medio de otra función imprima el nombre y un mensaje que diga Bienvenido + nombre.


/* function leerNombre(){
    var nme = prompt("Ingrese su nombre");
    return nme;
}
function imprimeNombre(){
    document.writeln("Bienvenido " + leerNombre());
}

imprimeNombre(); */

/* 10. Cree una función que pida el precio de un producto y la cantidad 
y por medio de otra función aumente el iva y diga al usuario el precio total . */

/* function inProducto(){
    var prc = prompt("Ingrese el precio del producto ");
    var cant = prompt("Ingrese la cantidad ");
    var total = prc * cant;
    return total;
}
var totalp = inProducto();

function iva(totalp){
    
var iv =  totalp * 0.19 ;
var totalfinal = iv + totalp;
    
    document.writeln("El total del valor del producto es: " + totalfinal);
}

iva(totalp);  */

/* 11.	 Cree una función que pida la fecha actual y por medio de otra
 función calcule cuántos días y semanas faltan para terminar el año */
/*  var f1 = '10/09/2014';
 var f2='15/10/2014';
 restaFechas = function(f1,f2)
 {
 var aFecha1 = f1.split('/');
 var aFecha2 = f2.split('/');
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 var dif = fFecha2 - fFecha1;
 var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
 return dias;
 }
 alert(restaFechas(f1,f2)); */

/*  12.	Cree un listado de compras, con función que pida el número de productos, 
 nombre y valor del producto por medio de otra función imprima la información digitadas. */

/* function registrarProducto(){
     var acu = 0;
    var n = prompt("¿Cuantos productos desea registrar?");
     for (let index = 0; index < n; index++) {
         var nm = prompt("Digite el nombre del producto: ");
         var vp = prompt("Digite el valor del producto: ");
         document.writeln( nm + " ............. " + "$" +vp + "<br>");
         var acu = acu + parseInt (vp);
     }
     document.writeln("EL TOTAL DE SU COMPRA ES: $" + acu +"<br>");
     return acu;
 }
 function listarProductos(){
    document.writeln("LA LISTA DE SU PEDIDO ES: " + "<br>");
     registrarProducto();
 }
 listarProductos(); */
 