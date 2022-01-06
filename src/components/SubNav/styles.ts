import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: var(--darkRed);
`;

export const Nav = styled.nav`
  max-width: 1400px;
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
  }
`;