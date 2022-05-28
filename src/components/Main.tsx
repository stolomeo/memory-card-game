import { useEffect, useState } from "react";
import styled from "styled-components";
import CardContainer from "./CardContainer";
import Header from "./Header";
import { createPokemon } from "./utils/createPokemon";
import { shuffleArray } from "./utils/getPokemon";

export default function Main() {
  const [pokemon, setPokemon] = useState([{}]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemonSelected, setPokemonSelected] = useState<any[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    (async () => {
      setPokemon(await createPokemon(6));
      setIsLoading(false);
    })();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { id } = e.target as HTMLTextAreaElement;
    setPokemonSelected([...pokemonSelected, id]);
    setPokemon(shuffleArray(pokemon));
  };
  console.log(pokemon);

  return (
    <>
      <Header />
      <MainWrapper>
        {isLoading && <h1>Loading..</h1>}
        {!isLoading && (
          <CardContainer pokemonList={pokemon} handleClick={handleClick} />
        )}
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
