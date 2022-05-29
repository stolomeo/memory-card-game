import styled from "styled-components";
import { MouseEvent } from "react";
import { capitalizeFirstLetter } from "../../utils";
import { Box, CircularProgress } from "@mui/material";

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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #efeaead4;
  }
`;

const Image = styled.img`
  padding: 0.5rem;
`;

const Text = styled.h2`
  text-align: center;
`;
