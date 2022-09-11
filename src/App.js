import React, { useState, useEffect } from 'react';
import './App.css';
import CardGrid from './components/pokedex/CardGrid';
import Search from './components/Search';
import Filters from './components/Filters';

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchItems = async (count) => {
      const results = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`)
      const data = await results.json()
      const pokeNames = await data.results.map(pokemon => pokemon.name)
      
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
                type: data.types.map( type => type.type.name)
                // .join(', ') // joining the array into a string, this is optional
            };
          }
        )
      );
      
      setPokedex(pokemon)
      setIsLoading(false)
    }

    fetchItems(151)
  }, []);

  return (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      <Filters pokedex={pokedex} isLoading={isLoading} getFilter={(f) => setFilter(f)} />
    <div className='container'>
      <CardGrid pokedex={pokedex} isLoading={isLoading} query={query} filters={filter} />
    </div>
    </>
  )
}

export default App;
