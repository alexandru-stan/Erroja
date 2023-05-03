<?php
header("Access-Control-Allow-Origin: http://localhost:1234");

$conexion = mysqli_connect("localhost","root");
mysqli_select_db($conexion,"erroja") or die ("No se puede seleccionar la BD");
if (mysqli_connect_errno()) {
    printf("<p>Conexión fallida: %s</p>", mysqli_connect_error());
    exit();
}

$resultado = mysqli_query($conexion, "select * from departamentos");
$nrfilas = mysqli_num_rows($resultado);
$fila = mysqli_fetch_array($resultado, MYSQLI_ASSOC);
$departamentos = array();
for($i=0;$i<$nrfilas;$i++){
$departamento = array($fila['id_departamento'],$fila['nombre']);
array_push($departamentos,$departamento);
$fila = mysqli_fetch_array($resultado, MYSQLI_ASSOC);
}

print_r(json_encode($departamentos));

?>