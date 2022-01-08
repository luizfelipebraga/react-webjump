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

  padding: 1.5rem 2rem;

  @media (max-width: 1024px) {
    gap: 5rem;
  }

  a {
    font-size: 1.2rem;
    white-space: nowrap;
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