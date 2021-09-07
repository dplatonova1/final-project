import pokemonService from "../services/pokemon-service";
const service = new pokemonService();
const initialState = {
  pokemons: [],
  loading: true,
  error: null,
  collectedPokemons: [],
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_POKEMONS_REQUEST":
      return {
        ...state,
        pokemons: state.pokemons,
        loading: true,
        error: null,
      };
    case "FETCH_POKEMONS_SUCCESS":
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_POKEMONS_FAILURE":
      return {
        ...state,
        pokemons: [],
        loading: false,
        error: action.payload,
      };

    case "POKEMON_CAUGHT":
      const pokemonID = action.payload;
      const pokemon = state.pokemons.find(
        (pokemon) => pokemon.id === pokemonID
      );
      const updatedPok = {
        id: pokemon.id,
        name: pokemon.name,
        isCaught: true,
      };
      service.putPokemon(updatedPok);
      const pkemons = [updatedPok].concat(
        state.pokemons.filter((x) => x.id !== pokemonID)
      );

      let caught = state.collectedPokemons;
      caught = caught.concat([updatedPok]);
      return {
        ...state,
        pokemons: pkemons,
        collectedPokemons: caught,
      };

    default:
      return state;
  }
};

export default reducer;
