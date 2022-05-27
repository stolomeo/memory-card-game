import styled from "styled-components";

type Sprite = {
  [key: string]: any;
};

type Props = {
  id?: number;
  name?: string;
  sprites?: Sprite;
};

export default function Card({ id, name, sprites }: Props) {
  const imgSource = sprites?.front_default;
  return (
    <>
      <CardWrapper>
        <img src={imgSource} alt="Pokemon Card" />
        <h2>{name}</h2>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  border-radius: 20px;
`;

const Image = styled.img``;
