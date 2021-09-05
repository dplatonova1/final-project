const pokemonsLoaded = (newPokemons) => {
  return {
    type: "POKEMONS_LOADED",
    payload: newPokemons,
  };
};

const pokemonsRequested = () => {
  return {
    type: "POKEMONS_REQUESTED",
  };
};

export { pokemonsLoaded, pokemonsRequested };
