<?php
#Array forma  1
$frutas = array ("Mango","Sandia","Fresas");
#Array forma  2
$verduras =  ["Tomate","Cebolla","Sandia"];
#Add Datos
array_push($frutas,"Mora","Carambolo");
array_push($verduras,"Papa","Ñame");
echo $frutas[3] . "" . $verduras[4];
#Recorrer Arreglos
for ($i=0; $i < count($frutas); $i++) { 
    echo $i . " - " . $frutas[$i] . "<br>";#El . se utiliza para concatenar
} 
#arreglos asociativos
$productos = [
    "Arroz" => ["Roa","Diana","Pepita"],
    "Aceite" => ["Premier","Oliva","Gourmet"],
    "Arepa" => ["Doña Pepita","la quesuda","tela"]
];
#recorrer arreglos asociativos
foreach ($productos as $producto => $marca) {
    echo "<ul> Productos : ". $producto . "<br>";
    foreach ($marca as $mar) {
        echo "<li> :". $mar . "</li>";
    }
}
echo "</ul>";