import React from "react";
import { PokemonCard } from "../card";

const PokemonsList = ({ pokemons, onCatchClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
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
