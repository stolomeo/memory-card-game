import { getPokemon } from "./getPokemon";

export const createPokemon = async () => {
  const pokemon = [];
  for (let i = 0; i < 6; i++) {
    pokemon.push(await getPokemon(i));
  }
  return pokemon;
};
