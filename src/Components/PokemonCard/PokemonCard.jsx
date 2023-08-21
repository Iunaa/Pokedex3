import React from "react";
import styles from "../PokemonCard/pokemonCard.module.scss";

import React from 'react'

export const Pokemon = (props) => {
    const {pokemon} = props;
  return (

    <div className={styles.pokemonCard}>
        <img alt={pokemon.name} src={pokemon.sprites['official-artwork'].front_default} className={styles.pokemonCard__img}/>

    </div>
  )
}
