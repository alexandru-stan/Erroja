import React from 'react';
/*eslint-disable*/
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import LoginHeader from "../components/LoginHeader";
import { comprobarSesion } from "../../functions";
import VerIncidenciasBody from "../components/VerIncidenciasBody";
import NotAllowedError from "./NotAllowedError";
import NoSessionError from "./NoSessionError";


const VerIncidencias = () => {
    const sesionIniciada = comprobarSesion();
    if(sesionIniciada){
        let admin;
        admin = JSON.parse(localStorage.getItem('datos'))['admin'];

        if(admin==0){
    return (
        <>
            <LoginHeader/><br></br>
            <VerIncidenciasBody/>
            
        </>
    )
    } else if(admin == 1){
        return (<NotAllowedError/>)
    }
} else {
    return (<NoSessionError/>)
}


}

export default VerIncidencias;