import React from 'react';

let imgAtt = {
    src: require('./../../../../public/piobaroja.jpg'),
    alt: 'Logo Instituto'
}

const LogoPio = () => {
    return (
        <img id='LogoPio' {...imgAtt}/>
    )
}

export default LogoPio;