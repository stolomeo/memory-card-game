import { getPokemon } from "./getPokemon";

export const createPokemon = async () => {
  const pokemon = [];
  for (let i = 0; i < 6; i++) {
    pokemon.push(await getPokemon(1, 12));
  }
  return pokemon;
};
