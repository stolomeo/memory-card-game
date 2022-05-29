import styled, { keyframes } from "styled-components";
import { CardWrapper, Image } from "./components/Gameboard/Card";

export default function LoadingCard() {
  return (
    <CardWrapper>
      <Rotate>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/128px-Pok%C3%A9_Ball_icon.svg.png"
          alt="pokeball"
        />
      </Rotate>
    </CardWrapper>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
