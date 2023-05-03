import React from 'react';
import LogoPio from './parts/LogoPio';
import Monigote from './parts/Monigote';
import LoginForm from './parts/LoginForm';

const LoginBody = () => {
    return(
        <div id='LoginBody'>
            <Monigote/>
            <LoginForm/>
            <LogoPio/>
            
        </div>
    );
}

export default LoginBody;