import styled from "styled-components";
import { MouseEvent } from "react";
import { capitalizeFirstLetter } from "../../utils";

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
        <Text>{capitalizeFirstLetter(name)}</Text>
      </CardWrapper>
    </>
  );
}

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadow1};
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightHover};
  }
`;

export const Image = styled.img``;

const Text = styled.h2`
  text-align: center;
  font-size: 16px;
`;
