/*eslint-disable*/
import React from 'react';
let logoImage = {
    src : require('../../../../public/logo.png'),
    alt : 'LogoImg',
    width: '250px'
}

const LogoErroja = () => {
    return (
        <img {...logoImage}></img>
    )
}

export default LogoErroja;

