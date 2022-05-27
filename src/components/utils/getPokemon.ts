const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min;
};

const getRandomUrl = (min: number, max: number) => {
  const randomInt = getRandomInt(min, max);
  const randomUrl = `https://pokeapi.co/api/v2/pokemon/${randomInt}`;
  return randomUrl;
};

export const getPokemon = async (min: number, max: number) => {
  const url = getRandomUrl(min, max);
  const response = await fetch(url);
  const { id, name, sprites } = await response.json();
  return { id, name, sprites };
};
