<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>taller 1</title>
</head>
<body>
    <h1>Punto 1</h1>
    <form method="get">
        <label>Digite su salario</label> </br></br>
        <input type="text" name="salario" placeholder="No ponga puntos de separacion"/></br></br>
        <button type="submit">Enviar</button>
    </form>
</br>
    <?php
        if(isset($_GET["salario"])){
            $salario= $_GET["salario"];
            $salud= $salario*0.8;
            $pension= $salario*0.8;
            $neto= ($salud+$pension)-$salario;
            echo "<p> Descuento Salud es: " . $salud . "</p>";
            echo "<p> Descuento pension es: " . $pension . "</p>";
            echo "<p> Su salario es:" . $salario . "</p>";
            echo "<p> Su salario con descuento es: " . $neto . "</p>";
            echo $salario;
        }
        
    ?>
     <h1>Punto 2</h1>
    <form method="get">
        <label>Digite datos del triangulo</label> </br></br>
        <input type="number" name="base" placeholder="Digite base"/></br></br>
        <input type="number" name="altura" placeholder="Digite altura"/></br></br>
        <button type="submit">Enviar</button>
    </form>
    <?php
    if(isset($_GET["base"])){
        $base=$_GET["base"];
        $altura=$_GET["altura"];

        $area=($base*$altura)/2;
        echo "<p> Base: " . $base . "</p>";
        echo "<p> Altura: " . $altura . "</p>";
        echo "<p> Area: " . $area . "</p>";


    }
    ?>
     <h1>Punto 3</h1>
    <form method="get">
        <label>Digite datos del triangulo</label> </br></br>
        <input type="number" name="uno" placeholder="Digite numero 1"/></br></br>
        <input type="number" name="dos" placeholder="Digite numero 2"/></br></br>
        <button type="submit">Enviar</button>
    </form>
    <?php
    if(isset($_GET["uno"])){
        $uno=$_GET["uno"];
        $dos=$_GET["dos"];

        $suma= ($uno+$dos);
        $resta= $uno-$dos;
        $multiplicacion=$uno*$dos;
        $division=$uno/$dos;
        $modulo=$uno%$dos;

        echo "<p> Suma: " . $suma . "</p>";
        echo "<p> Resta: " . $resta . "</p>";
        echo "<p> Multiplicacion: " . $multiplicacion . "</p>";
        echo "<p> Division: " . $division . "</p>";
        echo "<p> Modulo: " . $modulo . "</p>";
        


    }
    ?>
    <h1>Punto 4</h1>
    <form method="get">
        <label>Digite numero </label> </br></br>
        <input type="number" name="num" placeholder="Digite numero 1"/></br></br>
        <button type="submit">Enviar</button>
    </form>
    <?php
    if(isset($_GET["num"])){
        $num=$_GET["num"];
        if($num%2==0){
            echo "<p> " . $num . " Es par</p>";

        }else{
            echo "<p> " . $num . " No es par</p>";
        }
        if($num<0){
            echo "<p> " . $num . " Es negativo</p>";

        }else{
            echo "<p> " . $num . " Positivo</p>";
        }


    }
    ?>
     <h1>Punto 5</h1>
    <form method="get">
        <label>Digite numeros</label> </br></br>
        <input type="number" name="uno" placeholder="Digite numero 1"/></br></br>
        <input type="number" name="dos" placeholder="Digite numero 2"/></br></br>
        <button type="submit">Enviar</button>
    </form>
    <?php
    if(isset($_GET["uno"])){
        $uno=$_GET["uno"];
        $dos=$_GET["dos"];

        if($uno>$dos){
            echo "<p> " . $uno . " Es mayor </p>";

        }else{
            echo "<p> " . $dos . " Es mayor </p>";
        }
        if($uno==$dos){
            echo "<p> " . $dos . " y ". $uno ." son iguales </p>";

        }
     
    }
    ?>
     <h1>Punto 6</h1>
    <form method="get">
        <label>Digite numeros</label> </br></br>
        <input type="number" name="1" placeholder="Digite un numero"/></br></br>
        <button type="submit">Enviar</button>
    </form>
    <?php
     if(isset($_GET["1"])){
        $num=$_GET["1"];
        if($num==1){
            echo "<p> " . $num . " Es Lunes </p>";
        }else if($num==2){
            echo "<p> " . $num . " Es Martes </p>";
        } else if($num==3){
            echo "<p> " . $num . " Es Miercoles </p>";
        }else if($num==4){
            echo "<p> " . $num . " Es Jueves </p>";
        }else if($num==5){
            echo "<p> " . $num . " Es Viernes </p>";
        }else if($num==6){
            echo "<p> " . $num . " Es Sabado </p>";
        }else if($num==7){
            echo "<p> " . $num . " Es Domingo </p>";
        }else{
            echo "<p> " . $num . " El numero digitado no corresponde al dia de la semana</p>";
        }

    }
    ?>
    <h1>Punto 7</h1>
    <form method="get">
        <label>Digite su edad</label> </br></br>
        <input type="number" name="7" placeholder="Digite un numero"/></br></br>
        <button type="submit">Enviar</button>
    </form>
    <?php
     if(isset($_GET["7"])){
        $edad=$_GET["7"];
        if($edad <= 18){
            echo "<p> " . $edad ." años " ." Usted es adolecente</p>";
        }else if(($edad > 18)&&($edad <= 28)){
            echo "<p> " . $edad . " años " ." Usted es un adulto adolecente</p>";
        } else if(($edad >= 29)&&($edad <= 49)){
            echo "<p> " . $edad . " años " ." Usted es un adulto</p>";
        }else if($edad >= 50){
            echo "<p> " . $edad . " años " ." Usted es un adulto mayor</p>";
        }else{
            echo "<p> " . $edad . " años " ." El valor digitado no es correcto</p>";
        }

    }
    ?>
    <h1>Punto 8</h1>
    <form method="get">
        <label>Ingrese el numero a calcular</label> </br></br>
        <input type="number" name="8" placeholder="Digite un numero"/></br></br>
        <button type="submit">Enviar</button>
    </form>
    <?php
     if(isset($_GET["8"])){
        $mult=$_GET["8"];
        for ($i=0; $i < 12 ;$i++) { 
            $resul = $mult * $i;
            echo "<p> " . $i . " X ". $mult .  " = " . $resul ."</p>";
        }

    }
    ?>
    <h1>Punto 9</h1>
    <form method="get">
        <label>Ingrese el numero a calcular</label> </br></br>
        <input type="number" name="9" placeholder="Digite un numero"/></br></br>
        <button type="submit">Enviar</button>
    </form>
    <?php
     if(isset($_GET["9"])){
        $mult2=$_GET["9"];
        for ($j=12; $j > 0 ;$j--) { 
            $r = $mult2 * $j;
            echo "<p> " . $j . " X ". $mult2 .  " = " . $r ."</p>";
        }

    }
    ?>
    <h1>Punto 10</h1>  
    <?php
    function activar2(){
        for ($m=0; $m <= 30; $m=$m+3) {
            echo "<p> " . $m ."</p>";
        }

    }
    ?>
<input type="button" name="Release" onclick="document.write('<?php activar2() ?>');" value="Contar ascendente">

    <h1>Punto 11</h1>  
    <?php
    function activar(){
        for ($k=30; $k > 0; $k=$k-3) {
            echo "<p> " . $k ."</p>";
        }

    }
    ?>
<input type="button" name="Release" onclick="document.write('<?php activar() ?>');" value="Contar descendente">
 
<h1>Punto 12</h1>

<?php
function mostrar(){
    $frutas = array("mandarina", "uva");
    for ($p=0; $p < count($frutas); $p++) {
        echo "<p> " .$p. $frutas[$p] ."</p>";
    }

    array_push($frutas, "manzana", "pera");
    for ($n=0; $n < count($frutas); $n++) { 
        echo "<p> " .$n.$frutas[$n] ."</p>";

    }
}
?>
<input type="button" name="Release" onclick="document.write('<?php mostrar() ?>');" value="mostrar push">

<h1>Punto 13</h1>

<?php
function verArray(){
    $personas = array(
        "juan" => "Mexico",
        "john" => "USA",
        "eica" => "finlandia",
        "kusanagi" => "japon");
        
        foreach($personas as $persona => $pais){
           print "$persona es de $pais<br>";
        }
}
?>
<input type="button" name="Release" onclick="document.write('<?php verArray() ?>');" value="Mostrar Array">

<!-- <h1>Punto 14</h1> 
?php
/* $listado = array(	
	array('Ana', 'Alberto', 'Amancio', 'Andrea'),
	array('Baltasar', 'Bartolo', 'Basilio'),
);

for ($f=0; $f < count($listado) ; $f++) { 
    for ($c=0; $c  < count($listado) ;  $c++) { 
        echo "<p> " . $listado[$f]. $listado[$c].  "</p>";
    }
} */

/* ?> */


<h1>Punto 15</h1>

<?php
function verArrayMulti(){
    $productos = array(	
	
        'Carro' => array(
            'marca' => "Mazda",
            'referencia'  => "CX5",
            'Cilindraje' => "2000CC",
            'valor'  => "$107.000.000",
            
        ),
        
        'Moto' => array(
            'marca' => "Yamaha",
            'referencia'  => "MT09",
            'Cilindraje' => "800CC",
            'valor'  => "$45.000.000",
        )
    );
     
    foreach($productos as $producto => $detalles)
    {
        echo "<h1> $producto </h1>";
     
        foreach($detalles as $indice => $valor)
        {
            echo "<p> $indice:$valor </p>";
        }
    }
}
?>
<input type="button" name="Release" onclick="document.write('<?php verArrayMulti() ?>');" value="Mostrar Array">

<h1>Punto 16</h1>

<?php
function mostrarParImpar(){
    $numeros = array(3, 5, 9, 10, 35, 42, 12, 22);
    $contp=0;
    $conti = 0;
    for ($l=0; $l < count($numeros); $l++) { 
        if ($numeros[$l]%2==0) {
            $contp++;
            echo "<p> " . $numeros[$l] . " Es par " . "</p>";
        }else{
            $conti++;
            echo "<p> " . $numeros[$l]. " Es impar " . "</p>";
        }
    }
    echo "<h2> " ." La cantidad de numeros pares son: ".$contp . "</h2>";
    echo "<h2> " ." La cantidad de numeros impares son: ".$conti . "</h2>";

}
?>
<input type="button" name="Release" onclick="document.write('<?php mostrarParImpar() ?>');" value="Mostrar pares e impares">

<h1>Punto 17</h1>

<?php
function mostrarPMU(){
    $numbers = array(3, 5, 9, 10, 35, 42, 12, 22);
    echo "<p> " ."El primer numero del arreglo es: ". $numbers[0] . "</p>";
    $med = count($numbers)/2;
    echo "<p> " ."El  numero de en medio del arreglo es: ". $numbers[$med] . "</p>";
    echo "<p> " ."El  numero de en medio del arreglo es: ". $numbers[7] . "</p>";
}
?>
<input type="button" name="Release" onclick="document.write('<?php mostrarPMU() ?>');" value="mostrarPMU">

<h1>Punto 18</h1>

<?php
function mostrarPosicion(){
    $numeros = array(3, 5, 9, 10, 35, 42, 12, 22);
    $contp=0;
    $conti = 0;
    for ($l=0; $l < count($numeros); $l++) { 
        if ($l%2==0) {
            echo "<p> " . $numeros[$l] . " Esta en una posicion  par " . "</p>";
        }else{
            echo "<p> " . $numeros[$l]. " Es impar en una posicion impar" . "</p>";
        }
    }
}
?>
<input type="button" name="Release" onclick="document.write('<?php mostrarPosicion() ?>');" value="Mostrar posicion pares e impares">

<h1>Punto 19</h1>

<?php
function mostrarSuma(){
    $arrayuno = array(3, 5, 9, 10, 35, 42);
    $arraydos = array(9, 15, 7, 1, 22, 2);
    $conc = "";
    $conc1 = "";
    $conc2 = "";
    $suma1 = 0;
    $suma2 = 0;
    for($l=0; $l < count($arrayuno); $l++){ 
        $suma[$l] =  $arrayuno[$l] +  $arraydos[$l];
        $conc = $conc . " : " .$suma[$l];
        $suma1 =   $suma1   +  $arrayuno[$l];
        $suma2 =   $suma2   +  $arraydos[$l];

        $conc1 = $conc1 . " : " .$arrayuno[$l];
        $conc2 = $conc2 . " : " .$arraydos[$l];
         
    }
    echo "<p> "."Arreglo uno: " . $conc1  . "</p>";
    echo "<p> "."Arreglo dos: " . $conc2  . "</p>";
    echo "<p> "."Suma arreglos: " . $conc . "</p>";
    echo "<p> "."Suma total arreglo uno: ".$conc1." = " . $suma1 . "</p>";
    echo "<p> "."Suma total arreglo dos: ". $conc2 . " = " .$suma2 . "</p>";
    

}
?>
<input type="button" name="Release" onclick="document.write('<?php mostrarSuma() ?>');" value="Mostrar Sumas">

<h1>Punto 20</h1>
    <form method="get">
        <label>Ingrese su nombre</label> </br></br>
        <input type="text" name="nombrePersona" placeholder="Ingrese un nombre"/></br></br>
        <button type="submit">Enviar</button>
    </form>
</br>
    <?php
        if(isset($_GET["nombrePersona"])){
            $valNombre = $_GET["nombrePersona"];
            function validarNombre($valNombre){
                if (is_numeric($valNombre)) {
                    
                    echo "<p> " . " Ingrese un nombre valido " . "</p>";
                }else{
                    echo "<p> " . $valNombre . " Es el nombre ingresado " . "</p>";
                }
            }
            validarNombre($valNombre);
        }
    ?>

<h1>Punto 21</h1>
    <form method="get">
        <label>Ingrese el numero uno</label> </br></br>
        <input type="text" name="ab" placeholder="Ingrese el numero uno"/></br></br>

        <label>Ingrese el numero dos</label> </br></br>
        <input type="text" name="ba" placeholder="Ingrese el numero dos"/></br></br>
        <button type="submit">Enviar</button>

        </form>   
</br>
    <?php
        if(isset($_GET["ab"])&&($_GET["ba"])){
            $a = $_GET["ab"];
            $b = $_GET["ba"];
            function calculoAB($a,$b){
                if (is_numeric($a) && (is_numeric($b))) {
                
            echo "<p> " . "SUMA: ". $a. " + ". $b . " = ". $a + $b ."</p>";
            echo "<p> " . "RESTA: ". $a. " - ". $b . " = ". $a - $b ."</p>";
            echo "<p> " . "MULTIPLICACION: ". $a. " x ". $b . " = ". $a * $b ."</p>";
            echo "<p> " . "DIVISION: ". $a. " / ". $b . " = ". $a / $b ."</p>";
                }else{
                    echo "<p> " ." Ingrese solo valores numericos " . "</p>";
                }
            }
            calculoAB($a,$b);
        }
    ?>
</body>
</html>
