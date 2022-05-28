import { useEffect, useState } from "react";
import styled from "styled-components";
import CardContainer from "./CardContainer";
import Header from "./Header";
import { createPokemon } from "./utils/utils";
import { shuffleArray } from "./utils/utils";
import { MouseEvent } from "react";

export default function Main() {
  const [pokemon, setPokemon] = useState([{}]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemonSelected, setPokemonSelected] = useState<string[]>([""]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setPokemon(await createPokemon(6));
      setIsLoading(false);
    })();
  }, []);

  const playRound = (id: string) => {
    if (pokemonSelected.includes(id)) {
      setPokemonSelected([""]);
      setScore(0);
      setGameOver(true);
    } else {
      setScore(score + 1);
      setPokemonSelected([...pokemonSelected, id]);
      setGameOver(false);
    }
  };

  console.log(gameOver);

  const handleClick = async (e: MouseEvent) => {
    const { id } = e.target as HTMLTextAreaElement;
    playRound(id);
    setPokemon(shuffleArray(pokemon));
  };
  return (
    <>
      <Header />
      <h1>{score}</h1>
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
