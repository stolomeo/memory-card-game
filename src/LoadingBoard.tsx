import { Container } from "./components/Gameboard/Gameboard";
import LoadingCard from "./LoadingCard";
import { getArrIndexes } from "./utils";

export default function LoadingBoard() {
  const pokeIndexs = getArrIndexes(12);

  const loadingCards = pokeIndexs.map((index) => {
    return <LoadingCard />;
  });
  return <Container>{loadingCards}</Container>;
}
