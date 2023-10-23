import type { Pokemon } from "../types";

const getPokemonApi = async (url: string): Promise<Pokemon> => {
  const response = await fetch(url);
  const pokemon = (await response.json()) as Pokemon;

  return pokemon;
};

export default getPokemonApi;
