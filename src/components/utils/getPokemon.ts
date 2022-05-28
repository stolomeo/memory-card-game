const getRandomUrl = (num: number) => {
  const randomUrl = `https://pokeapi.co/api/v2/pokemon/${num}`;
  return randomUrl;
};

export const getPokemon = async (num: number) => {
  const url = getRandomUrl(num);
  const response = await fetch(url);
  const { id, name, sprites } = await response.json();
  return { id, name, sprites };
};

export const shuffleArray = (array: any) => {
  return [...array].sort(() => Math.random() - 0.5);
};
