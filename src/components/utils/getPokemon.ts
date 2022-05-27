export const getPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const { id, name, sprites } = await response.json();
  return { id, name, sprites };
};
