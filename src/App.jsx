import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './Components/organisms/Header/Header';
import PokemonCard from '../src/Components/PokemonCard/PokemonCard';
import { Pokedex } from './Components/organisms/Pokedex/Pokedex';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  

  return (
    <>
     <Header/>
     <Pokedex pokemons={pokemons}/>
  
    </>
  )
}

export default App
