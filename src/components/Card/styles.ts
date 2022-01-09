import styled from 'styled-components';

export const Container = styled.div`
  max-width: 30rem;
  min-height: 20rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  height: 5rem;
  border: 1px solid var(--textGray);
`;

export const Name = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
`;

export const Price = styled.div`
  font-weight: var(--textSuperBold);
  background: var(--darkBlue);
`;

export const BuyButton = styled.input`
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: var(--textBold);

  background: var(--lightGreen);
  text-transform: uppercase;
`;