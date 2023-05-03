import React from 'react';
import LoginHeader from '../components/LoginHeader';
import CrearIncidenciaBody from '../components/CrearIncidenciaBody';
// import { useNavigate } from 'react-router-dom';
import { comprobarSesion } from '../../functions';
import NotAllowedError from './NotAllowedError';
import NoSessionError from './NoSessionError';
// import { useEffect } from 'react';
/*eslint-disable */
const CrearIncidencia = () => {

    // const navigate = useNavigate();
    const sesionIniciada = comprobarSesion();
   
    if(sesionIniciada){
      let nombre;
      let admin;
      nombre = JSON.parse(localStorage.getItem('datos'))['nombre'];
      admin = JSON.parse(localStorage.getItem('datos'))['admin'];

if(admin==0){

    return (<>
       <LoginHeader />
       <CrearIncidenciaBody />
       </>
    )
  } else if(admin==1){
    return(<>
        
        <NotAllowedError />
    </>)
  }

  } else {
    return (
      <>
        <NoSessionError/>
      </>
    )
  }


  }

export default CrearIncidencia;