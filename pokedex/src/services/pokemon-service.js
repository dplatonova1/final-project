export default class PokemonService {
  getPokemons = async (pageNumber, limit) => {
    const res = await fetch(
      `http://localhost:8000/pokemons?_sort=id&_order=asc&_page=${pageNumber}&_limit=${limit}`
    );

    if (!res.ok) {
      throw Error("No data fetched from that resource");
    }
    return await res.json();
  };

  getCaughtPokemons = async () => {
    const res = await fetch(
      "http://localhost:8000/pokemons?isCaught=true&_page=1&_limit=10"
    );

    if (!res.ok) {
      throw Error("No data fetched from that resource");
    }
    return await res.json();
  };

  putPokemon = async (pokemon) => {
    const res = await fetch("http://localhost:8000/pokemons/" + pokemon.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
    });

    if (!res.ok) {
      throw Error("Update failed.");
    }
  };
}
