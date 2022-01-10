import styled from 'styled-components';

export const Container = styled.div`
  max-width: 30rem;
  min-height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Box1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Box2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 12rem;
  border: 1px solid var(--textGray);
  object-fit: cover;
`;

export const Name = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  color: #626262;
`;

export const Price = styled.span`
  font-weight: var(--textSuperBold);
  color: var(--darkBlue);
  font-size: 1.4rem;
`;

export const BuyButton = styled.input`
  padding: .5rem;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 5px;
  font-weight: var(--textSuperBold);
  cursor: pointer;

  background: var(--lightGreen);
  color: var(--textWhite);
  text-transform: uppercase;
`;