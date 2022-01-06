import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const AuthBar = styled.header`
  width: 100%;
  background-color: #000;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 5rem;
  gap: 1rem;
`;

export const Box = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
`;
