import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';
/*eslint-disable*/
function NoSessionError() {

    function volverAlLogin(){
        
        navigate('/');
    }
    const navigate = useNavigate();
    return(<>
        <LoginHeader />
        <div id='ErrorSesion'>
        <h1>SESIÓN CADUCADA</h1>
        <button onClick={volverAlLogin}>Iniciar Sesión</button>
        </div>
    </>
    );
}

export default NoSessionError;
