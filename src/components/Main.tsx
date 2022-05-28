import { useEffect, useState } from "react";
import styled from "styled-components";
import CardContainer from "./CardContainer";
import Header from "./Header";
import { createPokemon } from "./utils/createPokemon";

export default function Main() {
  const [pokemon, setPokemon] = useState([{}]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setPokemon(await createPokemon(6));
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Header />
      <MainWrapper>
        {isLoading && <h1>Loading..</h1>}
        {!isLoading && <CardContainer pokemonList={pokemon} />}
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
