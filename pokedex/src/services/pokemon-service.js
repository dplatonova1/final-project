export default class PokemonService {
  getPokemons = async () => {
    const res = await fetch("http://localhost:8000/pokemons");

    if (!res.ok) {
      throw Error("No data fetched from that resource");
    }
    return await res.json();
  };
}
