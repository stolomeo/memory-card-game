import styled from "styled-components";
import CardContainer from "./CardContainer";
import Header from "./Header";

type Props = {};

export default function Main({}: Props) {
  return (
    <>
      <Header />
      <MainWrapper>
        <CardContainer />
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
