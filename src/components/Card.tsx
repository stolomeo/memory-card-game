import styled from "styled-components";

type Props = {
  id?: number;
  name?: string;
  sprites?: object;
};

export default function Card({ id, name, sprites }: Props) {
  console.log({ id, name, sprites });
  return (
    <>
      <CardWrapper>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt=""
        />
        <h2>Pokemon</h2>
      </CardWrapper>
      <CardWrapper>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt=""
        />
        <h2>Pokemon</h2>
      </CardWrapper>
      <CardWrapper>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt=""
        />
        <h2>Pokemon</h2>
      </CardWrapper>
      <CardWrapper>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt=""
        />
        <h2>Pokemon</h2>
      </CardWrapper>
      <CardWrapper>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt=""
        />
        <h2>Pokemon</h2>
      </CardWrapper>
      <CardWrapper>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt=""
        />
        <h2>Pokemon</h2>
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
