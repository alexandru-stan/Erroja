/* eslint-disable*/
import React from 'react';
import $ from 'jquery';

export function comprobarSesion() {
  // eslint-disable-next-line no-alert
  if (localStorage.getItem('datos') != null) {
    return true;
  }
  return false;
}


export function validarCuenta(){
  const correoRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  let username = $('#username');
  let nombre = $('#nombre');
  let apellidos = $('#apellidos');
  let password = $('#password');
  let correo = $('#correo');
  let departamento = $('#departamento');
  let chivato=0;

  if(username.val()==""){
    username.css("border-color","red");
    $('#errorUsername').html("<strong><p style='color:red';>ESTE CAMPO NO PUEDE QUEDAR VACÍO</p><strong>");
    chivato++;
  } else {
    username.css("border-color","black");
    $('#errorUsername').html("");
  }

  if(nombre.val()==""){
    nombre.css("border-color","red");
    $('#errorNombre').html("<strong><p style='color:red';>ESTE CAMPO NO PUEDE QUEDAR VACÍO</p><strong>");
    chivato++;
   
  } else {
    nombre.css("border-color","black");
    $('#errorNombre').html("");
  }


  if(apellidos.val()==""){
    apellidos.css("border-color","red");
    $('#errorApellidos').html("<strong><p style='color:red';>ESTE CAMPO NO PUEDE QUEDAR VACÍO</p><strong>");
    chivato++;
  } else {
    apellidos.css("border-color","black");
    $('#errorApellidos').html("");
  }


  if(password.val()==""){
    password.css("border-color","red");
    $('#errorPassword').html("<strong><p style='color:red';>ESTE CAMPO NO PUEDE QUEDAR VACÍO</p><strong>");
    chivato++;
  } else {
    password.css("border-color","black");
    $('#errorPassword').html("");
  }

  if(correo.val()==""){
    correo.css("border-color","red");
    $('#errorCorreo').html("<strong><p style='color:red';>ESTE CAMPO NO PUEDE QUEDAR VACÍO</p><strong>");
    chivato++;
  } else {
    correo.css("border-color","black");
    $('#errorCorreo').html("");
  }

  
 if(chivato>0){
  return false;
 }

 let datos = {
  username:username.val(),
  nombre:nombre.val(),
  apellidos:apellidos.val(),
  password:password.val(),
  correo:correo.val(),
  departamento:departamento.find(":selected").attr("id")
  
 }

 return datos;

}

export function validarIncidencia(){
  let chivato = 0;
  let descripcion = $('#descripcion');
  let tipo = $('#tipo').find(":selected");
  let aula =  $('#aula').find(":selected");
  let grupo = $('#grupo').find(":selected");
  let fecha = $('#fecha');

if(descripcion.val()==""){
  descripcion.css("border-color","red");
  $('#errorDescripcion').html("<strong><p style='color:red';>ESTE CAMPO NO PUEDE QUEDAR VACÍO</p><strong>");
  chivato++;

} else {
  descripcion.css("border-color","black");
  $('#errorDescripcion').html("");
 
}


if(aula.text()==""){
  
   $('#errorAula').html("<strong><p style='color:red';>ESTE CAMPO NO PUEDE QUEDAR VACÍO</p><strong>");
   chivato++;
} else {
  $('#errorAula').html("");
 
}


if(grupo.text()==""){
  
  $('#errorGrupo').html("<strong><p style='color:red';>ESTE CAMPO NO PUEDE QUEDAR VACÍO</p><strong>");
  chivato++;
} else {
  $('#errorGrupo').html("");
}


if(fecha.val()==""){
 
   $('#errorFecha').html("<strong><p style='color:red';>ESTE CAMPO NO PUEDE QUEDAR VACÍO</p><strong>");
   chivato++;
} else {
  $('#errorFecha').html("");
}

if(chivato>0){
  return false;
} 

let usuario = JSON.parse(localStorage.getItem('datos'))['nombreusuario'];

let datos = {
  descripcion:descripcion.val(),
  tipo:tipo.text(),
  aula:aula.text(),
  grupo:grupo.text(),
  fecha:fecha.val(),
  usuario: usuario
};


  return datos





}



export function mostrarIncidenciasAdmin(datosRespuesta,trIncidencias){
let filtro = "";
  if(event){
   filtro = event.target.value;
  } 

 

  for(let i=0;i<datosRespuesta.length;i++){
    
    const estadoIncidencia = <option selected>{datosRespuesta[i][6]}</option>
   
    let estadosRestantes = datosRespuesta[i][6] == "PENDIENTE" ? [<option>EN CURSO</option>, <option>RESUELTA</option>] 
    : datosRespuesta[i][6] == "EN CURSO" ? [<option>PENDIENTE</option>, <option>RESUELTA</option>] 
    : ["RESUELTA"];


    let select = datosRespuesta[i][6]=="RESUELTA"? <p>RESUELTA</p> : <select>{estadoIncidencia}{estadosRestantes}</select>;
    
    
   if(filtro==""){
    trIncidencias.push(<tr key={datosRespuesta[i][0]} id={datosRespuesta[i][0]}>
    <td>{datosRespuesta[i][0]}</td>
    <td>{datosRespuesta[i][7]}</td>
      <td>{datosRespuesta[i][1]}</td>
      <td >{datosRespuesta[i][2]}</td>
      <td>{datosRespuesta[i][3]}</td>
      <td>{datosRespuesta[i][4]}</td>
      <td>{datosRespuesta[i][5]}</td>
      <td>
      
      {select}

      
      </td>
      <td><input type='text' placeholder={datosRespuesta[i][8]}></input></td>
    </tr>)

    } else if(filtro == datosRespuesta[i][6]) {
      trIncidencias.push(<tr key={datosRespuesta[i][0]} id={datosRespuesta[i][0]}>
        <td>{datosRespuesta[i][0]}</td>
        <td>{datosRespuesta[i][7]}</td>
          <td>{datosRespuesta[i][1]}</td>
          <td >{datosRespuesta[i][2]}</td>
          <td>{datosRespuesta[i][3]}</td>
          <td>{datosRespuesta[i][4]}</td>
          <td>{datosRespuesta[i][5]}</td>
          <td>
          
          {select}
    
          
          </td>
          <td><input type='text' placeholder={datosRespuesta[i][8]}></input></td>
        </tr>)
    }
  
}
}

export function mostrarIncidenciasProfe(datosRespuesta,trIncidencias){
  for(let i=0;i<datosRespuesta.length;i++){
    trIncidencias.push(<tr key={datosRespuesta[i][0]} id={datosRespuesta[i][0]}>
      <td>{datosRespuesta[i][1]}</td>
      <td>{datosRespuesta[i][2]}</td>
      <td>{datosRespuesta[i][3]}</td>
      <td>{datosRespuesta[i][4]}</td>
      <td>{datosRespuesta[i][5]}</td>
      <td>{datosRespuesta[i][6]}</td>
      <td>{datosRespuesta[i][8]}</td>
    
    </tr>)
  }
}


