import React from 'react';
import pokeball from '../img/8-bit-pokeball-cropped.png'

const Loading = () => {
    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column'}}>
            <img className='loading' src={pokeball} style={{ 
                width: '200px',
                margin: 'auto',
                display: 'block'
            }}
            alt='Loading'
            />
            <h1>Loading...</h1>
        </div>
    )
}

export default Loading
