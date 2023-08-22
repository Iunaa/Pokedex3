import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './Components/organisms/Header/Header';
import PokemonCard from '../src/Components/PokemonCard/PokemonCard';
import { Pokedex } from './Components/organisms/Pokedex/Pokedex';
import Pokemon from '../src/Components/PokemonCard/PokemonCard';
import { getPokemonData, getPokemons, searchPokemon } from './api';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [notFound, setNotFound] = useState(false)
  const [totalPages, setTotalPages] = useState(0);
  const itensPerPage = 10

  const fetchPokemons = async () => {
    try{
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage*page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises);
      const result = await getPokemons();
      setPokemons(results);
      setLoading(false)
      setTotalPages(Math.ceil(data.count/ itensPerPage)) //count diz quantos pokemons existem na API

    }catch(error){
      console.log("fetchPokemons error:", error)
    }
  }

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();;
  }, [page])     //como o page vai alterar o componente vai renderizar novamente e vai chamar os pokemons

  const onSearchHandler = async (pokemon) => {
    if(!pokemon){
      return fetchPokemons();
    }
    setLoading(true)
    setNotFound(false)

    const result = await searchPokemon(pokemon)
     if(!result){
      setNotFound(true)
     }else{
      searchPokemon([result])
     }
     setLoading(false)
  }
  

  return (
    <>
     <Header/>
     <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} onSearchHandler={onSearchHandler}/>
  
    </>
  )
}

export default App
