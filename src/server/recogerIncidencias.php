<?php
header("Access-Control-Allow-Origin: http://localhost:1234");


$datos = json_decode($_REQUEST['datos']);


$conexion = mysqli_connect("localhost","root");
mysqli_select_db($conexion,"erroja") or die ("No se puede seleccionar la BD");
if (mysqli_connect_errno()) {
    printf("<p>Conexión fallida: %s</p>", mysqli_connect_error());
    exit();
}

if($datos -> admin == 0 ){
$resultadoIncidencias = mysqli_query($conexion, "select * from incidencias where usuario ='".$datos -> nombreusuario."'");
} else if ($datos -> admin == 1){
    $resultadoIncidencias = mysqli_query($conexion, "select * from incidencias");
}
$nrfilas = mysqli_num_rows($resultadoIncidencias);
$fila = mysqli_fetch_array($resultadoIncidencias, MYSQLI_ASSOC);
$incidencias = array();

for($i=0;$i<$nrfilas;$i++){

    $incidencia = array($fila['id_incidencia'],$fila['tipo'],$fila['aula'],$fila['grupo'],$fila['fecha'],$fila['descripcion'],$fila['estado'],$fila['usuario'],$fila['comentarios']);
    array_push($incidencias,$incidencia);
    $fila = mysqli_fetch_array($resultadoIncidencias, MYSQLI_ASSOC);
    }




print_r(json_encode($incidencias));

?>