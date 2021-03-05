import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${query}`)

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)} />
    </div>
  );
}

export default App;
