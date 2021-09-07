const pokemonsLoaded = (newPokemons) => {
  return {
    type: "FETCH_POKEMONS_SUCCESS",
    payload: newPokemons,
  };
};

const pokemonsRequested = () => {
  return {
    type: "FETCH_POKEMONS_REQUEST",
  };
};

const pokemonsError = (error) => {
  return {
    type: "FETCH_POKEMONS_FAILURE",
    payload: error,
  };
};

const fetchPokemons = (pokemonService, dispatch) => () => {
  dispatch(pokemonsRequested());
  pokemonService
    .getPokemons()
    .then((data) => dispatch(pokemonsLoaded(data)))
    .catch((error) => dispatch(pokemonsError(error)));
};

const pokemonCaught = (pokemonID) => {
  return {
    type: "POKEMON_CAUGHT",
    payload: pokemonID,
  };
};

const fetchCaughtPokemons = (pokemonService, dispatch) => {
  dispatch(pokemonsRequested());
  pokemonService
    .getCaughtPokemons()
    .then((data) => dispatch(pokemonsLoaded(data)))
    .catch((error) => dispatch(pokemonsError(error)));
};

export { fetchPokemons, pokemonCaught, fetchCaughtPokemons };
