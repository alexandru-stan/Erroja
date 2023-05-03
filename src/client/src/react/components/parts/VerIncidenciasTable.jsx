/*eslint-disable*/
import { Table } from 'react-bootstrap';
import styles from '../../../styles/login.css'

import React,{ useState } from 'react';
import { useEffect } from "react";
import { mostrarIncidenciasAdmin, mostrarIncidenciasProfe, cambiarEstadoIncidencia } from '../../../functions';

const VerIncidenciasTable = () => {
  const [datosRespuesta, setDatosRespuesta] = useState([]);
  const [respuestaCambioIncidencia, setRespuestaCambioIncidencia] = useState([]);
  const [filtroAplicado, setFiltroAplicado] = useState([]);
 const nombreusuario  = JSON.parse(localStorage.getItem('datos'))['nombreusuario'];
 const admin = JSON.parse(localStorage.getItem('datos'))['admin'];
 let respuesta;
 let datos = {
  nombreusuario:nombreusuario,
  admin:admin
 }

 useEffect(() => {
  datos = JSON.stringify(datos);
  fetch(`http://localhost/Erroja/src/server/recogerIncidencias.php?datos=${datos}`).then(
    response => response.json())
    .then(data => setDatosRespuesta(data));
    
}, []);


 function peticionCambiarEstado(event){

  let idIncidencia = event.target.parentNode.parentNode.id;
  let cambio = event.target.value;
  let esUnEstado;
  

console.log(event.target.nodeName == "SELECT" ? esUnEstado=true : esUnEstado=false);




  let datos = {
    idIncidencia:idIncidencia,
    cambio:cambio,
    esUnEstado:esUnEstado
  }

  
    datos = JSON.stringify(datos);
    fetch(`http://localhost/Erroja/src/server/actualizarIncidencia.php?datos=${datos}`).then(
      response => response.json())
      .then(data => respuesta=data);
      
  
     

}
 

function aplicarFiltro(){
  
  let filtro = event.target.value;
  mostrarIncidenciasAdmin(datosRespuesta,trIncidencias);
  setFiltroAplicado(filtro);
}

console.log(respuesta);

const trIncidencias=[];

if(admin==1){
  mostrarIncidenciasAdmin(datosRespuesta,trIncidencias);

  return (<>
      <h3>Filtrar por:</h3>
      <select onChange={aplicarFiltro}>
        <option selected></option>
        <option>PENDIENTE</option>
        <option>EN CURSO</option>
        <option>RESUELTA</option>
      </select>


    <table id='tabla'>
      <thead>
        <tr>
          <td>ID Incidencia</td>
          <td>Usuario</td>
          <td>tipo</td>
          <td>aula</td>
          <td>grupo</td>
          <td>fecha</td>
          <td>descripcion</td>
          <td>estado</td>
          <td>comentarios</td>
        </tr>
      </thead>

    <tbody onChange={peticionCambiarEstado}>
      {trIncidencias}
    </tbody>

    </table>
    </>
    );

} else {
  mostrarIncidenciasProfe(datosRespuesta,trIncidencias);
  return (
    <table id='tabla'>
      <thead>
        <tr>
          <td>tipo</td>
          <td>aula</td>
          <td>grupo</td>
          <td>fecha</td>
          <td>descripcion</td>
          <td>estado</td>
          <td>comentarios</td>
        </tr>
      </thead>

    <tbody>
      {trIncidencias}
    </tbody>

    </table>
    );

}









   
}

export default VerIncidenciasTable;