import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../components/loading";
import { fetchPokemons, pokemonCaught } from "../actions";
import { withPokemonService } from "../components/hoc";
import ErrorIndicator from "../components/error-indicator";
import PokemonsList from "../components/pokemons-list";

class PokemonListContainer extends Component {
  render() {
    const { pokemons, loading, error, onCatchClick } = this.props;
    if (error) {
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Loading />;
    }

    return <PokemonsList pokemons={pokemons} onCatchClick={onCatchClick} />;
  }
}

const mapStateToProps = ({ pokemons, loading }) => {
  return {
    pokemons,
    loading,
  };
};

const mapDispatchToProps = (dispatch, { pokemonService }) => {
  return {
    // fetchPokemons: fetchPokemons(pokemonService, dispatch),
    onCatchClick: (id) => dispatch(pokemonCaught(id)),
  };
};

export default withPokemonService()(
  connect(mapStateToProps, mapDispatchToProps)(PokemonListContainer)
);
