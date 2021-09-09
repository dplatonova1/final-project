import React from "react";
import { connect } from "react-redux";
import Loading from "../components/loading";
import { pokemonCaught } from "../actions";
import { withPokemonService } from "../components/hoc";
import ErrorIndicator from "../components/error-indicator";
import PokemonsList from "../components/pokemons-list";

export function PokemonListContainer({
  pokemons,
  loading,
  error,
  onCatchClick,
}) {
  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <PokemonsList
      pokemons={pokemons.sort((a, b) => {
        return a.id - b.id;
      })}
      onCatchClick={onCatchClick}
    />
  );
}

const mapStateToProps = ({ pokemons, loading }) => {
  return {
    pokemons,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCatchClick: (id) => dispatch(pokemonCaught(id)),
  };
};

export default withPokemonService()(
  connect(mapStateToProps, mapDispatchToProps)(PokemonListContainer)
);
