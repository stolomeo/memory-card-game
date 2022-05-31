const getUrl = (num: number) => {
  const randomUrl = `https://pokeapi.co/api/v2/pokemon/${num}`;
  return randomUrl;
};

export default getUrl;
