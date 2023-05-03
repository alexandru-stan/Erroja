/* eslint-disable*/
import React from 'react';
import LoginHeader from '../components/LoginHeader';
import LoginBody from '../components/LoginBody';
import LoginFooter from '../components/LoginFooter';
// eslint-disable-next-line no-unused-vars
import styles from '../../styles/login.css';

// eslint-disable-next-line react/function-component-definition

const Login = () => {
  
  function cerrarSesion(){
    localStorage.removeItem('datos');
  }
 cerrarSesion();
  return (<div id='Login'>
     
    <LoginHeader />
    <LoginBody />
    <LoginFooter/>
  </div>);
};

export default Login;
