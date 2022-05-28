import styled from "styled-components";
import Card from "./Card";
import { MouseEvent } from "react";

type Props = {
  pokemonList: any[];
  handleClick: (e: MouseEvent) => void;
};

export default function CardContainer({ pokemonList, handleClick }: Props) {
  const pokemonElements = pokemonList.map((pokemon) => {
    return (
      <Card
        id={pokemon.id}
        name={pokemon.name}
        sprites={pokemon.sprites}
        handleClick={handleClick}
      />
    );
  });

  return <Container>{pokemonElements}</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-top: 3rem;
`;
