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

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e);
  };
  return (
    <>
      <CardWrapper onClick={(e) => handleClick(e)}>
        <img id={id?.toString()} src={imgSource} alt={name} />
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
