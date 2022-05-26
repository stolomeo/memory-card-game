import { useEffect, useState } from "react";
import styled from "styled-components";
import CardContainer from "./CardContainer";
import Header from "./Header";

export default function Main() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = response.json();
      console.log(data);
    })();
  }, []);

  return (
    <>
      <Header />
      <MainWrapper>
        <CardContainer />
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
