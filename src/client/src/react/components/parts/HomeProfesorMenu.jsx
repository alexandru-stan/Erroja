import React from 'react';
import { useNavigate } from 'react-router-dom';
/* eslint-disable*/
const HomeProfesorMenu = () => {
    const navigate = useNavigate();
    function navCrearIncidencia(){
        navigate('/CrearIncidencia');
    }

    function navVerIncidencias(){
        navigate('/VerIncidencias');
    }



return (
    <div id='HomeProfesorMenu'>
        <button onClick={navCrearIncidencia} id='crearIncidencia'>Crear incidencia</button>
        <button onClick={navVerIncidencias} id='verIncidencia'>Ver incidencias</button>
    </div>
)
}

export default HomeProfesorMenu;