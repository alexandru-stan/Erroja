import React from 'react';
import { useNavigate } from 'react-router-dom';
import { comprobarSesion } from '../../functions';
import LoginHeader from '../components/LoginHeader';
import HomeProfesorMenu from '../components/parts/HomeProfesorMenu';
import NoSessionError from './NoSessionError';
import NotAllowedError from './NotAllowedError';

/*eslint-disable*/


// eslint-disable-next-line react/function-component-definition
const HomeProfesor = () => {
  
  const navigate = useNavigate();
  const sesionIniciada = comprobarSesion();
  


  let nombre;
  let admin;
  if(sesionIniciada){
  nombre = JSON.parse(localStorage.getItem('datos'))['nombre'];
  admin = JSON.parse(localStorage.getItem('datos'))['admin'];
  console.log(admin);

  if(admin==0){
  return (<>
    <LoginHeader />
    <HomeProfesorMenu/>
    <h2 id='h1-bienvenido'>Bienvenido, {nombre}!, {admin}</h2>
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
export default HomeProfesor;
