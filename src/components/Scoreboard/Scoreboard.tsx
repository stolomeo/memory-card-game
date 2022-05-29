import styled from "styled-components";

type Props = {
  currentScore: number;
  bestScore: number;
};

export default function Scoreboard({ currentScore, bestScore }: Props) {
  return (
    <ScoreboardWrapper>
      <CurrentScore>Current Score: {currentScore}</CurrentScore>
      <BestScore>Best Score: {bestScore}</BestScore>
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

const Score = styled.div`
  padding: 0.4rem;
  width: 15%;
  font-size: 1.5rem;
  border-radius: 20px;
  font-weight: 700;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CurrentScore = styled(Score)`
  background-color: #ff6464;
`;

const BestScore = styled(Score)`
  background-color: aquamarine;
`;
