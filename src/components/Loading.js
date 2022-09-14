import React from 'react';
import pokeball from '../img/8-bit-pokeball.png'

const Loading = () => {
    return (
        <img className='loading' src={pokeball} style={{ 
            width: '200px',
            margin: 'auto',
            display: 'block'
        }}
        alt='Loading'
        />
    )
}

export default Loading
