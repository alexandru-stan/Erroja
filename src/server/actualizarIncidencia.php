<?php
header("Access-Control-Allow-Origin: http://localhost:1234");
$datos = json_decode($_REQUEST['datos']);
$conexion = mysqli_connect("localhost", "root");
mysqli_select_db($conexion, "erroja") or die("No se puede seleccionar la BD");

if (mysqli_connect_errno()) {
    printf("<p>Conexión fallida: %s</p>", mysqli_connect_error());
    exit();
}

    if($datos->esUnEstado){
   $conexion->query("UPDATE incidencias SET estado='".$datos->cambio."' WHERE id_incidencia=".$datos->idIncidencia);
    } else {
        $conexion->query("UPDATE incidencias SET comentarios='".$datos->cambio."' WHERE id_incidencia=".$datos->idIncidencia);
    }
echo 1;

?>