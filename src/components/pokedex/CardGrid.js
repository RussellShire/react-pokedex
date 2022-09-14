import React from 'react';
import Loading from '../Loading';
import Cards from './Cards';

const CardGrid = ( { pokedex, isLoading, query, typeFilter }) => {
    
    const searchedPokemon = (pokedex) => {
        return pokedex.filter(pokemon => pokemon.name.includes(query))
    }

    const filteredPokemon = (pokedex) => {
        return pokedex.filter(pokemon => pokemon.type.some(type => typeFilter.includes(type)))
    }

    let sortedPokemon = []
   
    typeFilter.length === 0 ? 
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
                <div key={pokemon.id} className='cards'>
                    <Cards key={pokemon.id} pokemon={pokemon}></Cards>
                </div>
                )
            })}
            </section>
        ) 
    }

export default CardGrid
