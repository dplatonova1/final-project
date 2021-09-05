import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../card/card";
import { withPokemonService } from "../hoc";

const PokemonPage = (props) => {
  return <Card {...props} />;
};

const mapMethodsToProps = (pokemonService) => {
  return {
    getData: pokemonService.getPokemons,
  };
};

export default withPokemonService(mapMethodsToProps)(PokemonPage);

// export default PokemonPage;
