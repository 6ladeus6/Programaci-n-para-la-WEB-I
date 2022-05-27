<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviando Datos</title>
</head>
<body>
    <h1>Registro</h1>
    <form  method="get">
        <input type="text" name="nombre" placeholder="In Name" style="margin-top: 10px;"><br>
        <input type="number" name="tel" placeholder="In Mobile" style="margin-top: 10px;"><br>
        <button type="submit" style="margin-top: 10px" >Register</button><br>
    </form>
    <?php
    $nombre = $_GET["nombre"];
    $tel = $_GET["tel"];
    echo $nombre . " " . $tel;
    ?>
    
</body>
</html>