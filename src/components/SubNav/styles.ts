import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: var(--darkRed);
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 7rem;
  align-items: center;

  padding: 1.5rem 0;

  a {
    font-size: 1.2rem;
    color: var(--textWhite);
    font-weight: var(--textSuperBold);
    text-transform: uppercase;
    &:after {
        content: '';
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