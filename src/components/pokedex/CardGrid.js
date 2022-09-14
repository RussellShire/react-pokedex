import React from 'react';
import Loading from '../Loading';
import Cards from './Cards';

const CardGrid = ( { pokedex, isLoading, query, filters }) => {
    
    const searchedPokemon = (pokedex) => {
        return pokedex.filter(pokemon => pokemon.name.includes(query))
    }

    const filteredPokemon = (pokedex) => {
        return pokedex.filter(pokemon => pokemon.type.some(type => filters.includes(type)))
    }

    let sortedPokemon = []
   
    filters.length === 0 ? 
        sortedPokemon = searchedPokemon(pokedex) :
        sortedPokemon = searchedPokemon(filteredPokemon(pokedex))

    return (
        isLoading ? (
            <>
                <Loading />
            </>
            ) : 
            <section className='container'>{
            sortedPokemon.map((pokemon) => {
              return (
                <div className='cards'>
                    <Cards key={pokemon.id} pokemon={pokemon}></Cards>
                </div>
                )
            })}
            </section>
        ) 
    }

export default CardGrid
