import getPokemonApi from "./getPokemonApi.js";
import mockFetch from "./mockFetch";
import mockData from "./mockData.json";

describe("Given a getPokemonApi function", () => {
  describe("When it receives an 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=10'", () => {
    test("Then it should return 1 pokemon name", async () => {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10";
      const expectedPokemonName = "bulbasaur";
      window.fetch = mockFetch(mockData);

      const pokemonInfo = await getPokemonApi(url);

      expect(pokemonInfo.results[0].name).toBe(expectedPokemonName);
    });
  });
});

describe("When it receives an 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=10'", () => {
  test("Then it should return 1 pokemon name", async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10";
    const expectedPokemonName = "bulbasur";
    window.fetch = mockFetch(mockData);

    const pokemonInfo = await getPokemonApi(url);

    expect(pokemonInfo.results[1].name).toBe(expectedPokemonName);
  });
});
