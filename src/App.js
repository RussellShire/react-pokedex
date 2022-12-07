import React, { useState, useEffect } from 'react';
import './App.css';
import CardGrid from './components/pokedex/CardGrid';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const interval = 3;

function App() {
  const [tempPokedex, setTempPokedex] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [offset, setOffset] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState([]);
  const [types, setTypes] = useState([]);

  // // Event listener needs tiding up, and also triggering on more than just scroll.
  // window.addEventListener("scroll", () => {
  // const bottomElm = document.getElementById('bottom')
  // const bottomLoc = window.scrollY + bottomElm.getBoundingClientRect().y

  // if((window.scrollY + window.innerHeight) > (bottomLoc-100)){
  //     // console.log('scroll listener')
      
  //     setOffset(offset + interval)
  // }
  // })

  useEffect(() => {
    function createObserver() {  
      let options = {
        root: document.getElementById('root'),
        rootMargin: '0px',
        threshold: 1.0
      }
  
      let callback = () => {
        console.log('spotted!')
        setOffset(offset + interval)
      }
      
      let observer = new IntersectionObserver(callback, options);
  
      observer.observe(document.getElementById('bottom'));
    }

    createObserver();
  }, [offset])

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

  useEffect(() => {
    setPokedex((prev) => [...prev, ...tempPokedex])
  }, [tempPokedex])

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
      <p>{offset}</p>
      {/* for testing */}
      
      <Search getQuery={(q) => setQuery(q)} />
      <Dropdown label='Types' types={types} isLoading={isLoading} getFilter={(f) => setTypeFilter(f)}/>
      <div className='container'>
        <CardGrid pokedex={pokedex} isLoading={isLoading} query={query} typeFilter={typeFilter} />
      </div>
    </>
  )
}

export default App;
