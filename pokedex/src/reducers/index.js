const initialState = {
  pokemons: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMONS_REQUESTED":
      return {
        pokemons: state.pokemons,
        loading: true,
      };
    case "POKEMONS_LOADED":
      return {
        pokemons: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
