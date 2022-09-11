import React from 'react';

const Cards = ({ pokemon }) => {
    return (
        <div className="card">
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={pokemon.image} alt={pokemon.name}/>
                    <h1>{pokemon.name}</h1>
                    <p>{pokemon.type}</p>
                </div>

                <div className='card-back'>
                    <img src={pokemon.backImage} alt={`Behind ${pokemon.name}`}/>
                    <h1>Stats</h1>
                        <ul>
                            <li>
                                info 1
                            </li>
                            <li>
                                info 2
                            </li>
                        </ul>               
                </div>
            </div>
        </div>
    )
}

export default Cards
