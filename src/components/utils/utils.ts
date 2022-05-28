export const shuffleArray = (arr: {}[]) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

const getUrl = (num: number) => {
  const randomUrl = `https://pokeapi.co/api/v2/pokemon/${num}`;
  return randomUrl;
};

const getPokemon = async (num: number) => {
  const url = getUrl(num);
  const response = await fetch(url);
  const { id, name, sprites } = await response.json();
  return { id, name, sprites };
};

export const createPokemon = async (numOfPokemon: number) => {
  const pokemon = [];
  for (let i = 0; i < numOfPokemon; i++) {
    pokemon.push(await getPokemon(i + 1));
  }
  const shuffledPokemon = shuffleArray(pokemon);
  return shuffledPokemon;
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
