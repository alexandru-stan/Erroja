import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';
/*eslint-disable*/
function NotAllowedError() {

    function volverAlLogin(){
        
        navigate('/');
    }
    const navigate = useNavigate();
    return(<>
        <LoginHeader />
        <div id='ErrorSesion'>
        <h1>NO TIENES PERMITIDO ESTAR AQUÍ!</h1>
        <button onClick={volverAlLogin}>Iniciar Sesión</button>
        </div>
    </>
    );
}

export default NotAllowedError;