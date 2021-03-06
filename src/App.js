import React, { useState } from "react";
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import DisplayData from './components/DisplayData'
import './App.css';

function App() {
  const [items, setItems] = useState({
    name:'',
    imgFront:'',
    imgBack:'',
    imgShinyF:'',
    imgShinyB:'',
    primarytype:'',
    height:'',
    weight:'',
    hp:'',
    baseAbility1:'',
    baseAbility2:'',
    baseExperience:'',
  })
  const [isLoaded, setIsLoaded] = useState(false)
  const [pokemonName, setPokemonName] = useState('')

  
 const searchPokemon = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((result) => {
    console.log(result)
    setItems({
    name: result.data.name,
    imgFront: result.data.sprites.front_default,
    imgBack: result.data.sprites.back_default,
    imgShinyF: result.data.sprites.front_shiny,
    imgShinyB: result.data.sprites.back_shiny,
    primarytype: result.data.types[0].type.name,
    height: result.data.height,
    weight: result.data.weight,
    hp: result.data.stats[0].base_stat,
    baseAbility1: result.data.abilities[0].ability.name,
    baseAbility2: result.data.abilities[1].ability.name,
    baseExperience: result.data.base_experience,
    })

    setIsLoaded(true)
  })
 } 


  return (
    <div className="container">
      <Header/>
      <Search searchPokemon={searchPokemon} getPokemonName={(q) => setPokemonName(q)} />
      <DisplayData isLoaded={isLoaded} items={items}/>
    </div>
  );
}

export default App;
