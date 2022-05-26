import styled from "styled-components";

type Props = {};

export default function Header({}: Props) {
  return <Text>PokeMemory</Text>;
}

const Text = styled.h1`
  text-align: center;
  font-size: 60px;
`;
