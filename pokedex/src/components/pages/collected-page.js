import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCaughtPokemons } from "../../actions";
import PokemonListContainer from "../../containers";
import { withPokemonService } from "../hoc";

class CollectedPage extends Component {
  componentDidMount() {
    this.props.pokemonService.getCaughtPokemons();
  }
  render() {
    const { pokemons } = this.props;

    return <PokemonListContainer pokemons={pokemons} />;
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
    getCaughtPokemons: fetchCaughtPokemons(pokemonService, dispatch),
  };
};

export default withPokemonService()(
  connect(mapStateToProps, mapDispatchToProps)(CollectedPage)
);
