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

const fetchPokemons = (pokemonService, dispatch) => (pageNumber, limit) => {
  dispatch(pokemonsRequested());
  pokemonService
    .getPokemons(pageNumber, limit)
    .then((data) => dispatch(pokemonsLoaded(data)))
    .catch((error) => dispatch(pokemonsError(error)));
};

const pokemonCaught = (pokemonID) => {
  return {
    type: "POKEMON_CAUGHT",
    payload: pokemonID,
  };
};

const fetchCaughtPokemons =
  (pokemonService, dispatch) => (pageNumber, limit) => {
    dispatch(pokemonsRequested());
    pokemonService
      .getCaughtPokemons(pageNumber, limit)
      .then((data) => dispatch(pokemonsLoaded(data)))
      .catch((error) => dispatch(pokemonsError(error)));
  };

const fetchMorePokemons = (pokemonService, dispatch) => (pageNumber, limit) => {
  const newPokemons = [];
  pokemonService
    .getPokemons(pageNumber, limit)
    .then((data) => dispatch(pokemonsLoaded(data)))
    .catch((error) => dispatch(pokemonsError(error)));

  return {
    type: "FETCH_MORE_POKEMONS",
    payload: newPokemons,
  };
};

const fetchMoreCaughtPokemons =
  (pokemonService, dispatch) => (pageNumber, limit) => {
    const newCaughtPokemons = [];
    pokemonService
      .getCaughtPokemons(pageNumber, limit)
      .then((data) => dispatch(pokemonsLoaded(data)))
      .catch((error) => dispatch(pokemonsError(error)));
    return {
      type: "FETCH_MORE_CAUGHT_POKEMONS",
      payload: newCaughtPokemons,
    };
  };

export {
  fetchPokemons,
  pokemonCaught,
  fetchCaughtPokemons,
  fetchMorePokemons,
  fetchMoreCaughtPokemons,
};
