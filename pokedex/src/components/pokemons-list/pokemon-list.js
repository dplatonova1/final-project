import React from "react";
import { PokemonCard } from "../card";

const PokemonsList = ({ pokemons, onCatchClick }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-8 ">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onCatchClick={() => onCatchClick(pokemon.id)}
          />
        );
      })}
    </div>
  );
};

export default PokemonsList;
