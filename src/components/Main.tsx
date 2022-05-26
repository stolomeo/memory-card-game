import styled from "styled-components";
import CardContainer from "./CardContainer";

type Props = {};

export default function Main({}: Props) {
  return (
    <MainWrapper>
      <CardContainer />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
