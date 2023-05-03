<?php
header("Access-Control-Allow-Origin: http://localhost:1234");
$conexion = mysqli_connect("localhost","root");
mysqli_select_db($conexion,"erroja") or die ("No se puede seleccionar la BD");
if (mysqli_connect_errno()) {
    printf("<p>Conexión fallida: %s</p>", mysqli_connect_error());
    exit();
}

$resultadoGrupos = mysqli_query($conexion, "select * from grupos where aula='".$_REQUEST['aula']."'");
$nrfilas = mysqli_num_rows($resultadoGrupos);
$fila = mysqli_fetch_array($resultadoGrupos, MYSQLI_ASSOC);
$grupos = array();
for($i=0;$i<$nrfilas;$i++){

array_push($grupos,$fila['curso']."º-".$fila['nombre']." ".$fila['grupo']);
$fila = mysqli_fetch_array($resultadoGrupos, MYSQLI_ASSOC);
}



print_r(json_encode($grupos));





?>