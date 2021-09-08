import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemons } from "../../actions";
import PokemonListContainer from "../../containers";
import { withPokemonService } from "../hoc";

export function HomePage({ pokemons, fetchPokemons }) {
  let pageNumber = 1;
  let limit = 9;
  useEffect(() => {
    fetchPokemons(pageNumber, limit);
  }, [fetchPokemons, pageNumber, limit]);

  return (
    <div className="w-full flex flex-col items-center">
      <PokemonListContainer pokemons={pokemons} />
      <button
        className="mt-6 w-1/5 bg-purple-600 h-16 rounded-md p-4 text-gray-50"
        onClick={() => {
          limit += limit;
          fetchPokemons(pageNumber, limit);
        }}
      >
        Load more pokemons
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch, { pokemonService }) => {
  return {
    fetchPokemons: fetchPokemons(pokemonService, dispatch),
  };
};

export default withPokemonService()(
  connect(null, mapDispatchToProps)(HomePage)
);
