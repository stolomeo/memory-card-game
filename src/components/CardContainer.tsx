import styled from "styled-components";
import Card from "./Card";

type Props = {
  pokemonList: object[];
};

export default function CardContainer({ pokemonList }: Props) {
  const pokemonElements = !pokemonList ? (
    <h1>Loading...</h1>
  ) : (
    pokemonList.map((pokemon) => {
      return <Card {...pokemon} />;
    })
  );

  return <Container>{pokemonElements}</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;
