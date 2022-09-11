import React from 'react';
import Cards from './Cards';

const CardGrid = ( { pokedex, isLoading, query }) => {
    
    const filteredPokemon = (pokedex) => {
        return pokedex.filter(pokemon => pokemon.name.includes(query))
    }
    
    return (
        isLoading ? (
            <p>loading...</p>
            ) : 
            filteredPokemon(pokedex).map((pokemon) => {
              return (
                <section className='cards'>
                    <Cards key={pokemon.id} pokemon={pokemon}></Cards>
                </section>
                )
            })
        ) 
    }

export default CardGrid
