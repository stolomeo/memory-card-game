import styled from "styled-components";
import Card from "./Card";

export default function CardContainer() {
  return (
    <Container>
      <Card />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;
