import styled from "styled-components";

type Sprite = {
  [key: string]: any;
};

type Props = {
  id?: number;
  name?: string;
  sprites?: Sprite;
  handleClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id?: string
  ) => void;
};

export default function Card({ id, name, sprites, handleClick }: Props) {
  const imgSource = sprites?.front_default;

  return (
    <>
      <CardWrapper onClick={(e) => handleClick(e, id?.toString())}>
        <Image id={id?.toString()} src={imgSource} alt={name} />
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

const Image = styled.img`
  cursor: pointer;
`;
