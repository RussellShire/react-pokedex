import React, { useState, useEffect } from 'react';
// import axios from 'axios'
import './App.css';

function App() {
  const fetchItems = async (count) => {
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`)
    const data = await results.json()
    const pokeNames = await data.results.map(pokemon => pokemon.name)
    
    // const filteredPokemon = await pokeNames.filter(word => word.includes(''))

    const pokemon = await Promise.all(
      pokeNames.map(async pokemon => {
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}` 
          
          const response = await fetch(url);
          const data = await response.json();
          
          return {
              name: data.name,
              id: data.id,
              image: data.sprites['front_default'],
              backImage: data.sprites['back_default'],
              type: data.types.map( type => type.type.name) // mapping through an array in the data and getting out multiple entries
          };
        }
      )
    );
    
    const filteredPokemon = await pokemon.filter(pokemon => pokemon.name.includes(''))

    console.log(filteredPokemon)

  // setItems(result.data)
  // setIsLoading(false)

}

  fetchItems(151)
  
  return (
    <div>

    </div>
  );
}

export default App;
