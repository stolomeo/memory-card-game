import { getPokemon, shuffleArray } from "./getPokemon";

export const createPokemon = async (numOfPokemon: number) => {
  const pokemon = [];
  for (let i = 0; i < numOfPokemon; i++) {
    pokemon.push(await getPokemon(i + 1));
  }
  const shuffledPokemon = shuffleArray(pokemon);
  return shuffledPokemon;
};
