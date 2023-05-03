/*eslint-disable*/
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';
import {  validarIncidencia } from '../../../functions';
import ExitoImagen from './ExitoImagen';
import HomeProfesorMenu from './HomeProfesorMenu';



const CrearIncidenciaForm = () => {
    const navigate = useNavigate();
    // $('#HomeProfesorMenu').hide();
    const [datos, setDatos] = useState([]);
    const [grupos,setGrupos] = useState([]);
    const [incidenciaCreada,setIncidenciaCreada] = useState([]);
    useEffect(() => {
        fetch('http://localhost/Erroja/src/server/recogerAulas.php')
          .then(response => response.json())
          .then(data =>setDatos(data));
      }, []);

     
   
      const selectAula = [];
      for(let i=0;i<datos.length;i++){
        selectAula.push(<option key={datos[i]}>{datos[i]}</option>)
      }

      let selectGrupo = [];
      for(let i=0;i<grupos.length;i++){
        selectGrupo.push(<option key={grupos[i]}>{grupos[i]}</option>)
      }

      function buscarGrupos(){
        let aula = $('#aula').find(":selected").text();

        fetch(`http://localhost/Erroja/src/server/recogerGrupos.php?aula=${aula}`).then(
            response => response.json())
            .then(data => setGrupos(data));

            $('#grupo').prop('disabled',false);

      }

    

      
     


    function enviarIncidencia(){
        
        let datos=validarIncidencia();

        if(datos!=false){
            datos = JSON.stringify(datos);
            fetch(`http://localhost/Erroja/src/server/crearIncidencia.php?datos=${datos}`).then(
                response => response.json())
                .then(data => setIncidenciaCreada(data));  
            
    
        }

       
    }

    if(incidenciaCreada == 1){
        
           
            navigate('/IncidenciaCreada');

            
       
    }

  

    return(<>
   
    <form id='CrearIncidenciaForm' onSubmit={(event) => event.preventDefault()}>
        <label id='labelDescripcion' htmlFor='descripcion'>
            <h2>¡Cuéntanos tu problema!</h2>
            <textarea id='descripcion' cols={70} rows={3}></textarea>
            <p id='errorDescripcion'></p>
        </label><br></br>

        <label  htmlFor='tipo'>
        <h2>¿De qué tipo de incidencia se trata?</h2>
            <select id='tipo'>
                <option>Hardware</option>
                <option>Software</option>
                <option>Conectividad</option>
                <option>Recursos EducaMadrid</option>
                <option>PDI</option>
                <option>Impresion</option>
            </select>
           
        </label>
        <label id='labelAula' htmlFor='aula'>
        <h2>¿En qué aula ocurrió la incidencia?</h2>
        <select onChange={buscarGrupos} id='aula'>
            <option disabled selected default></option>
            {selectAula}    
        </select>
        <p id='errorAula'></p>
        </label>

        <label id='labelGrupo' htmlFor=''>
        <h2>¿Qué grupo estaba utilizando el aula?</h2>
        <select id='grupo' disabled>
            {selectGrupo}
        </select>
        <p id='errorGrupo'></p>
        </label>
        <label id='labelFecha' htmlFor='fecha'>
        <h2>¿Cuando ocurrió la incidencia?</h2>
        <input id='fecha' type='date'></input>
        <p id='errorFecha'></p>
        </label>
        
        <button onClick={enviarIncidencia}>Enviar</button>
        
        

    </form>




</>




    )
}

export default CrearIncidenciaForm;