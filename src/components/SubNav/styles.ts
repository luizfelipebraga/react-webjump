import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.header`
  width: 100%;
  background: var(--darkRed);
`;

interface TypeNav {
  isOpen: boolean;
}

export const Nav = styled.nav<TypeNav>`
  max-width: 1200px;
  margin: 0 auto;

  padding: 1.5rem 2rem;

  @media (max-width: 1024px) {
    gap: 5rem;
  }

  @media (max-width: 480px) {
    ul {
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      height: 100%;
      margin: 0 auto;
      justify-content: space-evenly;
      flex-direction: column;
      height: ${(props) => (props.isOpen ? "100vh" : "0")};
      width: ${(props) => (props.isOpen ? "100vw" : "0")};

      padding: 2rem 0;

      transition: all 0.3s ease-in;
    }
  }

  ul {    
    display: flex;
    justify-content: center;
    gap: 7rem;
    align-items: center;
  }

  a {
    font-size: 1.2rem;
    white-space: nowrap;
    color: var(--textWhite);
    font-weight: var(--textSuperBold);
    text-transform: uppercase;
    &:after {
      content: "";
      color: #fff;
      width: 0px;
      height: 2px;
      display: block;
      background: black;
      transition: 300ms;
    }
    &:hover::after {
      width: 100%;
      background: #fff;
    }
  }
`;

export const Mobile = styled.div`
  display: flex;
  gap: 7rem;
  position: relative;
  flex-direction: row;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
`;

export const HambuerIcon = styled(GiHamburgerMenu)`
  display: none;
  fill: #ffb464;
  height: 3rem;
  cursor: pointer;

  @media (max-width: 480px) {
    display: block;
    align-items: right;
    margin-right: 2rem;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  display: none;
  fill: #ffb464;
  height: 3rem;
  cursor: pointer;

  @media (max-width: 480px) {
    display: block;
    align-items: right;
    margin-right: 2rem;
  }
`;
