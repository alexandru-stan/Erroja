import React from 'react';
import LoginHeader from '../components/LoginHeader';
import HomeProfesorMenu from '../components/parts/HomeProfesorMenu';
import ExitoImagen from '../components/parts/ExitoImagen';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { comprobarSesion } from '../../functions';
import NotAllowedError from './NotAllowedError';
import NoSessionError from './NoSessionError';

// import $ from 'jquery';
/*eslint-disable */


const IncidenciaCreada = () => {
  // const navigate = useNavigate();
  const sesionIniciada = comprobarSesion();

if(sesionIniciada){
  let admin;
  admin = JSON.parse(localStorage.getItem('datos'))['admin'];
  if(admin==0){
    return ( <>

        <LoginHeader/>
        <HomeProfesorMenu/>
        <ExitoImagen/>
    </>
        
    )
    } else if (admin==1){
      return(
      <NotAllowedError/>
      )
    }

    } else {
      return(
      <NoSessionError />
      )
    }









}

export default IncidenciaCreada;