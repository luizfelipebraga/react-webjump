import styled from 'styled-components';
export const BoxInputSearch = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const InputStyled = styled.input`
  color: var(--black);
  width: 25rem;
  border: 1px solid var(--black);
  padding: .7rem;

  @media (max-width: 768px) {
    width: 10rem;
  }
`;

export const Button = styled.button`
  color: var(--textWhite);
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1rem;
  padding: .65rem 1.5rem;
  cursor: pointer;
`;