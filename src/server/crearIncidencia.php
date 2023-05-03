<?php
header("Access-Control-Allow-Origin: http://localhost:1234");
$datos = json_decode($_REQUEST['datos']);
$conexion = mysqli_connect("localhost", "root");
mysqli_select_db($conexion, "erroja") or die("No se puede seleccionar la BD");

if (mysqli_connect_errno()) {
    printf("<p>Conexión fallida: %s</p>", mysqli_connect_error());
    exit();
}

    
    $conexion->query("insert into incidencias(tipo,aula,grupo,fecha,descripcion,estado,usuario) values('".$datos -> tipo."','".$datos->aula."','".$datos->grupo."','".$datos->fecha."','".$datos->descripcion."','PENDIENTE','".$datos->usuario."')");


echo 1;
?>