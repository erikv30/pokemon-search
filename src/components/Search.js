import React, { useState } from 'react'

const Search = ({getPokemonName, searchPokemon}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getPokemonName(q)
    }

      return (
        <section className='form'>
            <form>
                <input 
                type='text' 
                className='form-comtrol' 
                placeholder='Example: squirtle, etc... ' 
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus />
            </form>
            <button className='btn' type='submit' onClick={searchPokemon}><i className="fas fa-search"></i> Search</button>
        </section>
    )
}

export default Search
