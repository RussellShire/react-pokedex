import React, { useState, useEffect, useRef, useMemo } from 'react';
import './App.css';
import CardGrid from './components/pokedex/CardGrid';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

// How many Pokemon to fetch at once
const interval = 3;

function App() {
  const targetRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const [tempPokedex, setTempPokedex] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState([]);
  const [types, setTypes] = useState([]);

  // Intersection Observer for load on scroll
  const options = useMemo(() => {
    return {
      root: null, 
      rootMargin: '0px',
      threshold: 0
    }
  }, [])

  useEffect(() => {
    const callback = entries => {
      const entry = entries[0];
      if(entry.isIntersecting){;
        setOffset(offset + interval)
      }
    }
    
    const observer = new IntersectionObserver(callback, options);
    const currentTarget = targetRef.current;
    if(currentTarget) observer.observe(currentTarget);

    return () => {
      if(currentTarget) observer.unobserve(currentTarget);
    }
  }, [targetRef, options, offset])

  // API Fetch
  useEffect(() => {
    const fetchItems = async () => {
      const results = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${interval}&offset=${offset}`)
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
      
      setTempPokedex(pokemon)
      setIsLoading(false)
    }

    fetchItems()
  }, [offset]);

  // Adding to the Pokedex state
  useEffect(() => {
    setPokedex((prev) => [...prev, ...tempPokedex])
  }, [tempPokedex])


  // Build an array of Pokemon types for filter
  useEffect(() => {
    if(pokedex.length > 0) { 
    const types = pokedex.map(pokemon => pokemon.type) // get an array of type arrays
                         .flat() // flatten arrays into single array
                         .filter((value,index,self) => self.indexOf(value) === index) // filter unique
                         .sort() // sort alphbetically
    setTypes(types)
    }
  }, [pokedex])

  
  return (
    <>
      {/* for testing */}
      {/*<p>{offset}</p>*/}
      {/* for testing */}
      
      <Search getQuery={(q) => setQuery(q)} />
      <Dropdown label='Types' types={types} isLoading={isLoading} getFilter={(f) => setTypeFilter(f)}/>
      <div className='container'>
        <CardGrid pokedex={pokedex} isLoading={isLoading} query={query} typeFilter={typeFilter} />
      </div>
      <div ref={targetRef}>
        Loading...
      </div>
    </>
  )
}

export default App;
