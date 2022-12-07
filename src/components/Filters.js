import React from 'react';

const Filters = ({ pokedex, isLoading, getFilter }) => {
    const types = pokedex.map(pokemon => pokemon.type) // get an array of type arrays
                         .flat() // flatten arrays into single array
                         .filter((value,index,self) => self.indexOf(value) === index) // filter unique
                         .sort() // sort alphbetically
                        
    const onClick = (f) => {
        let checked = Array.from(document.querySelectorAll('input[type=checkbox]:checked')) // gets all selected checkboxes
        const selected = Array.from(checked).map(check => check.value) // turns a node list into an array
        
        getFilter(selected)
    }

    const onReset = (r) => {
        let checked = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
        for (const el of checked) {
            el.checked = false;
          }
        
        onClick('')
    }

    return (
        isLoading ? '' : 
            <ul className='filter'>
                <h2>Types</h2>
                    {types.map(type => (
                        <li key={type} className='check'>
                            <input 
                                type='checkbox' 
                                id={type} 
                                name={type} 
                                value={type}
                                onClick={(e) => onClick(e.target.value)}
                            />
                            <label className='capitalise filter-types' htmlFor={type}>{type}</label><br></br>
                            
                        </li>
                    ))}
                <button className='button' onClick={(e) => onReset(e.target.value)}>Reset types</button>
            </ul>
    )
}

export default Filters;
