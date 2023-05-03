import React from "react";

let imgAtt = {
    src: require('../../../../public/monigotePregunta.jpg'),
    att:'Monigote',
    width:'20%',
   
}

const MonigotePregunta = () => {
    return (
        <img id='MonigotePregunta' {...imgAtt}/>
    )
}

export default MonigotePregunta;