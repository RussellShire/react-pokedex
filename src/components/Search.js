import React, { useState } from 'react';

const Search = ( { getQuery }) => {

    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        const lower = q.toLowerCase()
        getQuery(lower)
    }

    return (
        <section className='search'>
            <form>
                <input 
                    type='text' 
                    className='form-control'
                    placeholder='Search here'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
