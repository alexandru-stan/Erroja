<?php
header("Access-Control-Allow-Origin: http://localhost:1234");

$conexion = mysqli_connect("localhost","root");
mysqli_select_db($conexion,"erroja") or die ("No se puede seleccionar la BD");
if (mysqli_connect_errno()) {
    printf("<p>Conexión fallida: %s</p>", mysqli_connect_error());
    exit();
}

$resultadoAulas = mysqli_query($conexion, "select * from aulas");
$nrfilas = mysqli_num_rows($resultadoAulas);
$fila = mysqli_fetch_array($resultadoAulas, MYSQLI_ASSOC);
$aulas = array();
for($i=0;$i<$nrfilas;$i++){

array_push($aulas,$fila['numero_aula']);
$fila = mysqli_fetch_array($resultadoAulas, MYSQLI_ASSOC);
}


print_r(json_encode($aulas));




?>