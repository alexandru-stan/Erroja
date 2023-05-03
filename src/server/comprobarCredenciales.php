<?php
header("Access-Control-Allow-Origin: http://localhost:1234");
$datos = json_decode(file_get_contents("php://input"), true);

$conexion = mysqli_connect("localhost","root");
mysqli_select_db($conexion,"erroja") or die ("No se puede seleccionar la BD");
if (mysqli_connect_errno()) {
    printf("<p>Conexión fallida: %s</p>", mysqli_connect_error());
    exit();
}

$resultado = mysqli_query($conexion, "select * from usuarios where nombre_usuario='".$datos['username']."'");
$nrfilas = mysqli_num_rows($resultado);

$fila = mysqli_fetch_array($resultado, MYSQLI_ASSOC);


if($datos['username']==$fila['nombre_usuario'] && $datos['password']==$fila['password']){

    $respuesta = array(
            "auth"=>1,
            "nombreusuario" => $fila['nombre_usuario'],
            "nombre" => $fila['nombre'],
            "apellidos" => $fila['apellidos'],
            "correo" => $fila['correo'],
            "depart" => $fila['depart'],
            "admin"=>$fila['admin'],

    
    );

    print_r(json_encode($respuesta));
    

} else {
    
    $respuesta = array(
        "auth"=>0
);
  
print_r(json_encode($respuesta));

}



?>