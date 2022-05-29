import { Container } from "../Gameboard/Gameboard";
import { getArrIndexes } from "../../utils";
import LoadingCard from "./LoadingCard";

export default function LoadingBoard() {
  const pokeIndexs = getArrIndexes(12);

  const loadingCards = pokeIndexs.map((index) => {
    return <LoadingCard />;
  });
  return <Container>{loadingCards}</Container>;
}
