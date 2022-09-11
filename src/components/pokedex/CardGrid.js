import React from 'react';
import Cards from './Cards';

const CardGrid = ( { pokedex, isLoading, query, filters }) => {
    
    const searchedPokemon = (pokedex) => {
        return pokedex.filter(pokemon => pokemon.name.includes(query))
    }

    const filteredPokemon = (pokedex) => {
        return pokedex.filter(pokemon => pokemon.type.some(type => filters.includes(type)))
    }

    // const searched = searchedPokemon()
    
    return (
        isLoading ? (
            <p>loading...</p>
            ) : 
            searchedPokemon(filteredPokemon(pokedex)).map((pokemon) => {
              return (
                <section className='cards'>
                    <Cards key={pokemon.id} pokemon={pokemon}></Cards>
                </section>
                )
            })
        ) 
    }

export default CardGrid
