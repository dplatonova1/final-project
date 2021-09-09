import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCaughtPokemons } from "../../actions";
import PokemonListContainer from "../../containers";
import { withPokemonService } from "../hoc";

export function CollectedPage() {
  const pokemons = useSelector((state) => {
    return state.pokemons.filter((item) => item.isCaught);
  });

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

  return <PokemonListContainer pokemons={pokemons} />;
}

const mapDispatchToProps = (dispatch, { pokemonService }) => {
  return {
    getCaughtPokemons: fetchCaughtPokemons(pokemonService, dispatch),
  };
};

export default withPokemonService()(
  connect(null, mapDispatchToProps)(CollectedPage)
);
