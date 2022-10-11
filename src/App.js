import React, { useState, useEffect } from 'react';
import './App.css';
import CardGrid from './components/pokedex/CardGrid';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState([]);
  const [types, setTypes] = useState([]);

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
                weight: data.weight,
                height: data.height,
                hp: data.stats[0]['base_stat'],
                attack: data.stats[1]['base_stat'],
                defence: data.stats[2]['base_stat'],
                specialAttack: data.stats[3]['base_stat'],
                specialDefence: data.stats[4]['base_stat'],
                speed: data.stats[5]['base_stat'],
                type: data.types.map( type => type.type.name)
                // .join(', ') // joining the array into a string, this is optional
            };
          }
        )
      );
      
      setPokedex(pokemon)
      const types = pokemon.map(pokemon => pokemon.type) // get an array of type arrays
                         .flat() // flatten arrays into single array
                         .filter((value,index,self) => self.indexOf(value) === index) // filter unique
                         .sort() // sort alphbetically
      setTypes(types)
      setIsLoading(false)

    }

    fetchItems(386)
  }, []);

  return (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      <Dropdown label='Types' types={types} isLoading={isLoading} getFilter={(f) => setTypeFilter(f)}/>
      <div className='container'>
        <CardGrid pokedex={pokedex} isLoading={isLoading} query={query} typeFilter={typeFilter} />
      </div>
    </>
  )
}

export default App;
