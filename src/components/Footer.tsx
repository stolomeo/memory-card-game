import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterWrapper>
      <p>Copyright © 2022 stolomeo</p>
      <GithubLink href="https://github.com/stolomeo" target="_blank">
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  );
}
const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: #383838;
  color: #eee;
  opacity: 0.9;
  position: fixed;
  left: 0;
  bottom: 0;
`;

const GithubLink = styled.a`
  display: flex;
  padding-bottom: 0.3rem;
  margin-left: 0.7rem;
  color: #eee;
  font-size: 1.8rem;
  &:hover {
    color: #ccc;
  }
  &:active {
    color: #aaa;
  }
`;
