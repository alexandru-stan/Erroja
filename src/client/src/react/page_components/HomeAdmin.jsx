import React from 'react';
import { useNavigate } from 'react-router-dom';
import { comprobarSesion } from '../../functions';
import LoginHeader from '../components/LoginHeader';
import NoSessionError from './NoSessionError';
import NotAllowedError from './NotAllowedError';
import VerIncidenciasBody from './../components/VerIncidenciasBody';

/*eslint-disable*/


// eslint-disable-next-line react/function-component-definition
const HomeAdmin = () => {
  
  const navigate = useNavigate();
  const sesionIniciada = comprobarSesion();
  


  let nombre;
  let admin;
  if(sesionIniciada){
  nombre = JSON.parse(localStorage.getItem('datos'))['nombre'];
  admin = JSON.parse(localStorage.getItem('datos'))['admin'];
 

  if(admin==1){
  return (<>
    <LoginHeader />
    
    <h2 id='h1-bienvenido'>Bienvenido, {nombre}!</h2>
    <VerIncidenciasBody/>
    </>
  
  );


} else {
  return(

    <NotAllowedError/>

  );
}

}else {
  return (
    <NoSessionError />
  );
}
}
export default HomeAdmin;