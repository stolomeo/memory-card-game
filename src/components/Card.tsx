import styled from "styled-components";
import { MouseEvent } from "react";
import { capitalizeFirstLetter } from "./utils/utils";

type Sprite = {
  [key: string]: any;
};

type Props = {
  id: number;
  name: string;
  sprites: Sprite;
  handleClick: (e: MouseEvent) => void;
};

export default function Card({ id, name, sprites, handleClick }: Props) {
  const imgSource = sprites.front_default;

  return (
    <>
      <CardWrapper onClick={(e) => handleClick(e)}>
        <Image id={id.toString()} src={imgSource} alt={name} />
        <h2>{capitalizeFirstLetter(name)}</h2>
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
