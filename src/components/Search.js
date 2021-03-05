import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section>
            <form>
                <input 
                type='text' 
                className='form-comtrol' 
                placeholder='Search your Pokémon: charmander, cyndaquil, torchic, etc... ' 
                value={text} 
                onChange={(e) => onChange(e.target.value)}
                autoFocus />
            </form>
        </section>
    )
}

export default Search
