import React from 'react';

const Cards = ({ pokemon }) => {
    return (
        <div className="card">
            <div className='card-inner'>
                <div className='card-front capitalise'>
                    <img key={pokemon.id} src={pokemon.image} alt={pokemon.name}/>
                    <h1>{pokemon.name}</h1>
                    <p>Type: {pokemon.type.map(type => <>{type} </>)}</p>
                </div>

                <div className='card-back'>
                    <img src={pokemon.backImage} alt={`Behind ${pokemon.name}`}/>
                    <h2>Stats</h2>
                        <ul className='stats'>
                            <li>
                                HP: {pokemon.hp}
                            </li>
                            <li>
                                Attack: {pokemon.attack}
                            </li>
                            <li>
                                Defence: {pokemon.defence}
                            </li>
                            <li>
                                SpAtk: {pokemon.specialAttack}
                            </li>
                            <li>
                                SpDef: {pokemon.specialDefence}
                            </li>
                            <li>
                                Speed: {pokemon.speed }
                            </li>
                            
                        </ul>               
                </div>
            </div>
        </div>
    )
}

export default Cards
