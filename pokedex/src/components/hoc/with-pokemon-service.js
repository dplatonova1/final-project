import React from "react";
import { PokemonServiceConsumer } from "../pokemon-service-context";

const withPokemonService = () => (Wrapped) => {
  return (props) => {
    return (
      <PokemonServiceConsumer>
        {(pokemonService) => {
          return <Wrapped {...props} pokemonService={pokemonService} />;
        }}
      </PokemonServiceConsumer>
    );
  };
};

export default withPokemonService;
