import styled from "styled-components";

export default function Header() {
  return (
    <Image
      src="https://fontmeme.com/permalink/220529/cdefad74ab2ef5afc27274caef802db8.png"
      alt="pokemon memory"
    />
  );
}

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  display: block;
`;
