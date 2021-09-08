import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemonImg } from "../card";

export default function PokemonPage({ match }) {
  const { pokemonID } = match.params;
  const pokemon = useSelector((state) => {
    return state.pokemons.find((item) => item.id === parseInt(pokemonID));
  });

  if (!pokemon) {
    return <h2>Pokemon not found</h2>;
  }
  return (
    <div className="bg-gray-100 w-1/4 m-auto mt-6 md:min-w-1/3 rounded-lg p-2 border-4 border-gray-600 shadow-lg overflow-hidden hover:shadow-xl">
      <img
        className="w-full image"
        src={getPokemonImg(pokemon.id)}
        alt={pokemon.name}
      />
      <p>
        Pokemon name:{" "}
        {pokemon.name.slice(0, 1).toUpperCase().concat(pokemon.name.slice(1))}
      </p>
      <div className="mt-2">
        <p>Can I catch it?:</p>
        {pokemon.isCaught ? (
          <p>
            No, this pokemon is collected! Check it out{" "}
            <Link
              to="/collected"
              className="text-red-500  visited:text-purple-600"
            >
              here
            </Link>
          </p>
        ) : (
          <p>
            Yes, you can! Go{" "}
            <Link to="/" className="text-red-500  visited:text-purple-600">
              back
            </Link>{" "}
            and catch it!
          </p>
        )}
      </div>
    </div>
  );
}
