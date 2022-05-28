import { nanoid } from "nanoid";
import styled from "styled-components";
import Card from "./Card";

type Props = {
  pokemonList: any[];
};

export default function CardContainer({ pokemonList }: Props) {
  const pokemonElements = pokemonList.map((pokemon) => {
    return (
      <Card id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites} />
    );
  });

  return <Container>{pokemonElements}</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;
