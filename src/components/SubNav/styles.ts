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
`;

export const Mobile = styled.div<TypeNav>`
  ul {
    display: flex;
    height: 100%;
    margin: 0 auto;
    justify-content: space-around;
    text-align: center;
    flex-direction: row;
    transition: all 0.3s ease-in;
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

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    ul {
      display: ${(props) => (props.isOpen ? "flex" : "none")} !important;
      flex-direction: column;
      height: 100%;
      margin: 0 auto;
      flex-direction: column !important;
      height: ${(props) => (props.isOpen ? "40vh" : "0")};

      transition: all 0.3s ease-in;
    }
  }
`;

export const HambuerIcon = styled(GiHamburgerMenu)`
  display: none;
  fill: #fff;
  height: 2rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
    align-items: right;
    margin-right: 2rem;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  display: none;
  fill: #fff;
  height: 3rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
    align-items: right;
    margin-right: 2rem;
  }
`;
