import styled from "styled-components";

type Props = {
  currentScore: number;
};

export default function Scoreboard({ currentScore }: Props) {
  return (
    <ScoreboardWrapper>
      <CurrentScore>Current Score: {currentScore}</CurrentScore>
      <BestScore>Best Score: 4</BestScore>
    </ScoreboardWrapper>
  );
}

const ScoreboardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
`;

const Score = styled.div`
  padding: 0.5rem;
  width: 20%;
  font-size: 2rem;
  border-radius: 20px;
  font-weight: 700;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CurrentScore = styled(Score)``;

const BestScore = styled(Score)``;
