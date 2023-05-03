import React from 'react';

let imgAtt = {
     src: require('../../../../public/exito.png'),
     alt: 'EXITO'
}


const ExitoImagen = () => {
    
    return<div id='exitoPadre'> <img id='exito'  {...imgAtt}></img>
    </div>
}

export default ExitoImagen;