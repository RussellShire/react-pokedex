import React from 'react';

const Filters = ( { pokedex, isLoading, getFilter }) => {
    const types = pokedex.map(pokemon => pokemon.type) // get an array of type arrays
                         .flat() // flatten arrays into single array
                         .filter((value,index,self)=>self.indexOf(value)===index) // filter unique
                         .sort() // sort alphbetically
                        
    const onClick = (f) => {
        let checked = Array.from(document.querySelectorAll('input[type=checkbox]:checked')) // gets all selected checkboxes
        const selected = Array.from(checked).map(x => x.value) // turns a node list into an array
        
        getFilter(selected)
    }

    const reset = (r) => {
        let checked = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
        for (const el of checked) {
            el.checked = false;
          }
        
        onClick('')
    }

    return (
        isLoading ? '' : 
            <ul className="Filter">
                <p>Types</p>
                    {types.map(type => (
                        <li key={type}>
                            <input 
                                type="checkbox" 
                                id={type} 
                                name={type} 
                                value={type}
                                onClick={(e) => onClick(e.target.value)}
                            />
                            <label htmlFor={type}>{type}</label><br></br>
                            
                        </li>
                    ))}
                <button onClick={(e) => reset(e.target.value)}>Reset</button>
            </ul>
    )
}

export default Filters;
