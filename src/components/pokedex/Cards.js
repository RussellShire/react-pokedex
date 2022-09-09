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

{/* <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.img} alt={item.name} />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}