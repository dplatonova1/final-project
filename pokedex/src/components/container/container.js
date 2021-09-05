import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../card";
import Loading from "../loading";
import { pokemonsLoaded, pokemonsRequested } from "../../actions";
import { withPokemonService } from "../hoc";
import "./container.css";

class Container extends Component {
  componentDidMount() {
    const { pokemonService, pokemonsLoaded, pokemonsRequested } = this.props;
    pokemonsRequested();
    pokemonService.getPokemons().then((data) => pokemonsLoaded(data));
  }
  render() {
    const { pokemons, loading } = this.props;
    return (
      <>
        {loading && <Loading />}
        <div className="grid grid-cols-3 gap-4 p-8">
          {pokemons.map((pokemon) => {
            return <Card pokemon={pokemon} />;
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ pokemons, loading }) => {
  return {
    pokemons,
    loading,
  };
};

const mapDispatchToProps = {
  pokemonsLoaded,
  pokemonsRequested,
};

export default withPokemonService()(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

// файл экшенс экшен поймать покемона и добавить их в список при пагинации
// редьюсер папка, там индекс джс где компилируем редьюсеры, и редьюсеры раскидать по отдельным файлам и импортить сюда
