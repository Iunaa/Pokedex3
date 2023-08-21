import React from 'react'
import style from "../Pokedex/pokedex.module.scss";
import { Pokemon } from '../../PokemonCard/PokemonCard';

export const Pokedex = (props) => {
    const{pokemons} = props;
  return (
    <div className={style.pokedex}>
        <h1 className={style.pokedex__title}>Pokedéx</h1>
    

    {loading ? (
                <div>Loading...</div>
            ) :(
            <div className={style.pokedex__grid}>
                {pokemons && pokemons.map((pokemon, index) => {
                    return (
                       
                      <Pokemon key={index} pokemon={pokemon}/>
                      
                    );
                    })}

                     
            </div>
            )}
        </div>
  )
}
