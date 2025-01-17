import React from "react";
import { Link } from "react-router-dom";

import "./card.css";
const getPokemonImg = (id) => {
  try {
    return require(`../../utils/pokemon-pictures/${id}.png`).default;
  } catch (error) {
    if (error instanceof Error && error.code === "MODULE_NOT_FOUND")
      return require(`../../utils/pokemon-pictures/unknown.png`).default;
    else throw error;
  }
};

const PokemonCard = ({ pokemon, onCatchClick }) => {
  const { name, id, isCaught } = pokemon;

  return (
    <div className="bg-gray-100 md:w-auto rounded-lg p-2 border-4 border-gray-600 shadow-lg overflow-hidden hover:shadow-xl">
      <Link to={`/pokemons/${id}`}>
        <img
          className="w-full image hover:border-4"
          src={getPokemonImg(id)}
          alt={name}
        />
        <p>
          Pokemon name: {name.charAt(0).toUpperCase().concat(name.slice(1))}
        </p>
      </Link>
      <button
        className="button bg-red-500 hover:bg-red-700 text-gray-50 rounded-lg p-2 w-full disabled:opacity-50 font-semibold"
        onClick={onCatchClick}
        disabled={isCaught}
      >
        {!isCaught ? "Catch it!" : "Caught"}
      </button>
    </div>
  );
};

export { PokemonCard, getPokemonImg };
