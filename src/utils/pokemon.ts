import getUrl from "./getUrl";
import shuffleArray from "./shuffleArray";

const getPokemon = async (num: number) => {
  const url = getUrl(num);
  const response = await fetch(url);
  const { id, name, sprites } = await response.json();
  return { id, name, sprites };
};

const createPokemon = async (numOfPokemon: number) => {
  const pokemon = [];
  for (let i = 0; i < numOfPokemon; i++) {
    pokemon.push(await getPokemon(i + 1));
  }
  const shuffledPokemon = shuffleArray(pokemon);
  return shuffledPokemon;
};
export default createPokemon;
