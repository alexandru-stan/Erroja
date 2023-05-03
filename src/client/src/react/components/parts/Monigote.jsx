import React from 'react';

let imgAtt = {
    src : require('./../../../../public/monigote.png'),
    alt : 'Monigote'
}

const Monigote = () => {
    return (
        <img id='Monigote' {...imgAtt}></img>
    )
}

export default Monigote;