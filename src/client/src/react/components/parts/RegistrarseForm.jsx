import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validarCuenta } from '../../../functions';

// import styles from '../../../styles/login.css';

/*eslint-disable*/

const RegistrarseForm = () => {
    const [exito, setExito] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    let navigate = useNavigate();
    function enviarCuenta() {
        let datos = validarCuenta();
        if(datos!=false){
            console.log(datos);
            datos = JSON.stringify(datos);
            fetch(`http://localhost/Erroja/src/server/crearUsuario.php?datos=${datos}`).then(
                response => response.json())
                .then(data => setExito(data));

                navigate('/');
        }
    }

    console.log(exito);

    useEffect(() => {
        fetch(`http://localhost/Erroja/src/server/recogerDepartamentos.php`).then(
        response => response.json())
        .then(data => setDepartamentos(data));
      }, []);
    
   

    const selectDepartamento = [];

    for(let i=0;i<departamentos.length;i++){
        selectDepartamento.push(<option key={departamentos[i][0]} id={departamentos[i][0]}>{departamentos[i][1]}</option>);
    } 

    return (
        <div id='RegistrarseForm'>
        <form onSubmit={(event) => event.preventDefault()}>
            
            <label htmlFor='username'>
                Nombre de usuario 
                <br></br><input id='username' type='text'></input><br></br>
                <p id='errorUsername'></p>
            </label><br></br><br></br>

            <label>
                Nombre
                <br></br><input id='nombre' type='text' ></input>
                <p id='errorNombre'></p>
            </label><br></br><br></br>

            <label>
                Apellidos
                <br></br><input id='apellidos' type='text' ></input>
                <p id='errorApellidos'></p>
            </label><br></br><br></br>

            <label>
                Password
                <br></br><input id='password' type='password' ></input>
                <p id='errorPassword'></p>
            </label><br></br><br></br>

            <label>
                Correo Electrónico
                <br></br><input id='correo' type='text'></input>
                <p id='errorCorreo'></p>
            </label><br></br><br></br>
            <label>
            Departamento
            <br></br><select id='departamento'>
            {selectDepartamento}
            </select>
            </label><br></br><br></br>
            <button onClick={enviarCuenta}>Enviar</button>
        </form>
        </div>
    )

}

export default RegistrarseForm;