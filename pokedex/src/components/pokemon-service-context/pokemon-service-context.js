import React from "react";

const { Provider: PokemonServiceProvider, Consumer: PokemonServiceConsumer } =
  React.createContext();

export { PokemonServiceProvider, PokemonServiceConsumer };
