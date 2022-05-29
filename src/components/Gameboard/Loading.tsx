import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <Rotate>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/128px-Pok%C3%A9_Ball_icon.svg.png"
        alt="pokeball"
      />
    </Rotate>
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
