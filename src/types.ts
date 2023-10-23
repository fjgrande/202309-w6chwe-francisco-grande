export interface PokemonName {
  name: string;
  url: string;
}
export interface Pokemon {
  count: number;
  next: string;
  previous: string;
  results: PokemonName[];
}
