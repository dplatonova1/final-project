import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCaughtPokemons, fetchMoreCaughtPokemons } from "../../actions";
import PokemonListContainer from "../../containers";
import { withPokemonService } from "../hoc";

export function CollectedPage({
  fetchCaughtPokemons,
  fetchMoreCaughtPokemons,
}) {
  let pageNumber = 1;
  let limit = 9;
  let batchSize = 9;
  const pokemons = useSelector((state) => {
    return state.pokemons;
  });

  useEffect(() => {
    fetchCaughtPokemons(pageNumber, limit);
  }, [fetchCaughtPokemons, pageNumber, limit]);

  if (pokemons.length === 0) {
    return (
      <h2 className="text-center w-full">
        Pokemons not collected! Go{" "}
        <Link to="/" className="text-red-500  visited:text-purple-600">
          back
        </Link>{" "}
        and catch your first pokemon!
      </h2>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <PokemonListContainer pokemons={pokemons} />
      <button
        className="my-6 w-1/5 bg-purple-600 h-16 rounded-md p-4 text-gray-50"
        onClick={() => {
          limit += batchSize;
          fetchMoreCaughtPokemons(pageNumber, limit);
        }}
      >
        Load more pokemons
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch, { pokemonService }) => {
  return {
    fetchCaughtPokemons: fetchCaughtPokemons(pokemonService, dispatch),
    fetchMoreCaughtPokemons: fetchMoreCaughtPokemons(pokemonService, dispatch),
  };
};

export default withPokemonService()(
  connect(null, mapDispatchToProps)(CollectedPage)
);
