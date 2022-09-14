import React from 'react';

const Cards = ({ pokemon }) => {
    return (
        <div className="card">
            <div className='card-inner'>
                <div className='card-front capitalise'>
                    <div className='image-background'>
                        <img src={pokemon.image} alt={pokemon.name}/>
                    </div>

                    <h1 className='pokemon-title'>{pokemon.name}</h1>
                    
                    <p className='pokemon-types'>Type:{'\u00a0'}{pokemon.type.map(type => <span key={pokemon.id + type} >{type+'\u00a0'}</span>)}</p>
                    
                </div>

                <div className='card-back'>
                    <div className='image-background'>
                        <img src={pokemon.backImage} alt={`Behind ${pokemon.name}`}/>
                    </div>
                    <h2 className='stats-title'>Stats</h2>
                        <ul className='stats'>
                            <li>
                                Hp: {pokemon.hp}
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
