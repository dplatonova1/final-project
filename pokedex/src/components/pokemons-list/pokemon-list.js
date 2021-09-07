import React from "react";
import Card from "../card";

const PokemonsList = ({ pokemons, onCatchClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {pokemons.map((pokemon) => {
        return (
          <Card
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
