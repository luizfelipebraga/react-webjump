import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const AuthBar = styled.header`
  width: 100%;
  background-color: var(--black);
`;

export const BoxAuth = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 2rem;

  a,
  span {
    color: var(--textWhite);
    :not(span) {
      font-weight: 800;
      text-decoration: underline;
    }
  }
`;

export const Box = styled.div`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem;
`;

export const Logo = styled.div`
  span {
    font-size: 3rem;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: var(--textSuperBold);
    &:first-child {
      color: var(--lightRed);
    }

    &:nth-child(2) {
      color: var(--black);
    }

    &:nth-child(3) {
      display: inline-block;
      color: var(--lightRed);
      transform: rotate(20deg);
      -moz-transform: rotate(20deg);
    }

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 380px) {
    display: flex;
    width: 100%;
    justify-content: center;
    }
`;
