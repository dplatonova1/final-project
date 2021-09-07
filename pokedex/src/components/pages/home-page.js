import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPokemons } from "../../actions";
import PokemonListContainer from "../../containers";
import { withPokemonService } from "../hoc";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
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
    fetchPokemons: fetchPokemons(pokemonService, dispatch),
  };
};

export default withPokemonService()(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
