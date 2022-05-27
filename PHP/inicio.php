<?php
#Declarar variables
$saludo = "Hola";
$nombre1 = "Alejandro";
#Imprimir Resultado
echo $saludo ." ". $nombre1;
print "<h1>Hola mundo desde un Print</h1>";
#Metodo POST
//$nombre = $_POST["nombre"];
//$tel = $_POST["tel"];
//echo $nombre . " " . $tel;
#Metodo GET
$nombre = $_GET["nombre"];
$tel = $_GET["tel"];
echo $nombre . " " . $tel;
?>
