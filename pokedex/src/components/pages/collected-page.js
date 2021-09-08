import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCaughtPokemons } from "../../actions";
import PokemonListContainer from "../../containers";
import { withPokemonService } from "../hoc";

export function CollectedPage({ pokemons, pokemonService }) {
  useEffect(() => {
    pokemonService.getCaughtPokemons();
  }, [pokemonService]);

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
