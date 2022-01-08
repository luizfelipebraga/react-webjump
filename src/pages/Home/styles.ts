import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 2rem;

  padding: 0 2rem;
`;

export const Aside = styled.aside`
  background: #E2DEDC;
  width: 15rem;
  
  padding: 1rem;
  
  display: flex;
  align-self: stretch;
  flex-direction: column;
  gap: 1rem;

  a {
    list-style: square inside !important;
    color: #000;
  }
`;

export const Main = styled.main`
  width: 100%;
`;

export const Banner = styled.div`
  background-color: var(--textGray);
  width: 100%;
  height: 20rem;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;

  h2 {
    color: var(--black);
    margin: 1rem 0;
  }

  p {
    color: var(--black);
    padding-bottom: 2rem;
  }

`;