import { useNavigate } from 'react-router-dom';
import React from 'react';

/*eslint-disable*/
const BotonSubmit = () => {

    
     function checkLogin() {
        const recogerCredenciales = 'http://localhost/Erroja/src/server/comprobarCredenciales.php';
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
    
    
        let credenciales = {
    
            username: username,
            password: password
    
        };
    
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', checkLoginResponse);
        xhr.open('POST', recogerCredenciales, true);
        xhr.send(JSON.stringify(credenciales));
    
    }
    
    
     function checkLoginResponse(event) {
        if (event.target.readyState == 4 && event.target.status == 200) {
    
            let datosSesion = JSON.parse(event.target.responseText);
    
    
            if (datosSesion['admin'] == 1) {
                localStorage.setItem('datos',JSON.stringify(datosSesion));
                console.log( JSON.parse(localStorage.getItem('datos')));
                navigate('/HomeAdmin');

    
    
    
    
    
    
            } else if(datosSesion['admin'] == 0) {
                localStorage.setItem('datos',JSON.stringify(datosSesion));
                console.log( JSON.parse(localStorage.getItem('datos')));
                navigate('/HomeProfesor');
            }
    
    
    
    
    
    
    
        }
    }






    const navigate = useNavigate();
    return (
        <button id='navegar' onClick={checkLogin}>Inciar Sesión</button>
    )
}

const Registrarse = () => {
    const navigate = useNavigate()

    function irARegistrarse(){
        navigate('/Registrarse');
    }
    return (
        <p id='registrarse' onClick={irARegistrarse}>Click aquí para registrarte</p>
    )
}



const LoginForm = () => {


    
    return   <form onSubmit={(event) => event.preventDefault()}>
    <h2>Inicia sesión</h2>
    <input required type="text" id="username" placeholder="Nombre de usuario" /><br/>
    <input required type="text" id="password" placeholder="Contraseña" /><br />
    <Registrarse/>
    <div id="divboton">
    <BotonSubmit/>
    </div>
    </form>



}



export default LoginForm;