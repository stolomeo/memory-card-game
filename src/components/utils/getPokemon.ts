const getUrl = (num: number) => {
  const randomUrl = `https://pokeapi.co/api/v2/pokemon/${num}`;
  return randomUrl;
};

export const getPokemon = async (num: number) => {
  const url = getUrl(num);
  const response = await fetch(url);
  const { id, name, sprites } = await response.json();
  return { id, name, sprites };
};

export const shuffleArray = (arr: {}[]) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

export const checkForDuplicates = (arr: string[]): boolean => {
  return arr.some((pokemon) => {
    return arr.indexOf(pokemon) !== arr.lastIndexOf(pokemon);
  });
};
