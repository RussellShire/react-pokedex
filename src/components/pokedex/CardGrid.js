import React from "react";

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
                <section className="cards">
                  <div>{pokemon.name}</div>
                  <img src={pokemon.image} alt={pokemon.name}/>
                  <p>{pokemon.type}</p>
                </section>
                )
            })
        ) 
    }

export default CardGrid