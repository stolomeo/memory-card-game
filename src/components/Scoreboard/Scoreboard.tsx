import styled from "styled-components";

type Props = {
  currentScore: number;
  bestScore: number;
};

export default function Scoreboard({ currentScore, bestScore }: Props) {
  return (
    <ScoreboardWrapper>
      <ScoreButton bgCol="#ff6464">Current Score: {currentScore}</ScoreButton>
      <ScoreButton bgCol="aquamarine">Best Score: {bestScore}</ScoreButton>
    </ScoreboardWrapper>
  );
}

const ScoreboardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 0.7rem;
`;

const ScoreButton = styled.div<{ bgCol: string }>`
  background-color: ${(props) => props.bgCol};
  padding: 0.4rem;
  width: 15%;
  font-size: 1.5rem;
  border-radius: 20px;
  font-weight: 700;
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadow1};
`;
