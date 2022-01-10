import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 100%;
`;

export const PagRef = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 1rem;

  span {
    &:first-child {
      color: #00a8a9;
    }

    &:last-child {
      color: #ed1a39;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  min-height: 700px;
  gap: 2rem;
  flex-direction: row;

  height: 100%;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 18rem;
  align-self: stretch;

  border: 1px solid #e2dedc;
  padding: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 2rem;
  }
`;

export const AsideTitle = styled.span`
  font-size: 1.8rem;
  text-transform: uppercase;
  white-space: nowrap;
  color: red;
  font-weight: var(--textBold);
  margin-bottom: 1rem;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: #626262;

    &:before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      -moz-border-radius: 7.5px;
      -webkit-border-radius: 7.5px;
      border-radius: 7.5px;
      background-color: #626262;
      margin-right: 0.8rem;
      margin-bottom: 0.15rem;
      cursor: default;
    }
  }

  span {
    color: #626262;
    cursor: pointer;

    &:before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      -moz-border-radius: 7.5px;
      -webkit-border-radius: 7.5px;
      border-radius: 7.5px;
      background-color: #626262;
      margin-right: 0.8rem;
      margin-bottom: 0.15rem;
    }
  }
`;

export const Main = styled.main`
  width: 100%;

  hr {
    background-color: #e2dedc;
    margin-top: 0.5rem;
    border: 1px solid #e2dedc;
  }
`;

export const Title = styled.span`
  display: block;
  color: #ed1a39;
  font-size: 2rem;
`;

export const SubTitle = styled.span`
  text-transform: uppercase;
  color: var(--darkBlue);
  font-weight: var(--textBold);
  font-size: 1.3rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;

  padding: 0.8rem 0 2rem 0;
`;

export const CaixaVermelha = styled.div`
  width: 3rem;
  height: 1.8rem;
  background-color: #cb0d1f;
`;

export const CaixaLaranja = styled.div`
  width: 3rem;
  height: 1.8rem;
  background-color: #f26324;
`;

export const CaixaAzul = styled.div`
  width: 3rem;
  height: 1.8rem;
  background-color: #27a3a9;
`;

export const BoxSelect = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  span {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #808185;
    font-weight: var(--textBold);
  }
`;

export const OrderByPrice = styled.select`
  color: #000;
  width: 10rem;
  background-color: #ffffff;
  border: 1px solid #e2dedc;
  font-size: 1rem;
  border-radius: 5px;
`;

export const Grid = styled.div`
  list-style: none;
  padding: 0 1rem;
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 18px;
  position: relative;
`;
