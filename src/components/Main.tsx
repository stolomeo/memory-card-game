import { useEffect, useState } from "react";
import styled from "styled-components";
import CardContainer from "./CardContainer";
import Header from "./Header";
import { createPokemon } from "./utils/createPokemon";

export default function Main() {
  const [pokemon, setPokemon] = useState([{}]);

  useEffect(() => {
    (async () => {
      setPokemon(await createPokemon());
    })();
  }, []);

  return (
    <>
      <Header />
      <MainWrapper>
        <CardContainer pokemonList={pokemon} />
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
