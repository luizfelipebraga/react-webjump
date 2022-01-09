import { useEffect, useState } from "react";
import {
  Container,
  PagRef,
  Content,
  Aside,
  AsideTitle,
  SubTitle,
  List,
  Main,
  Title,
  OrderByPrice,
  Grid,
  Box,
  CaixaVermelha,
  CaixaLaranja,
  CaixaAzul,
  BoxSelect,
} from "./styles";

export function Catalogo() {
  const typeCategory = [
    {
      id: "1",
      name: "Roupas",
      value: "roupas",
    },

    {
      id: "2",
      name: "Sapatos",
      value: "sapatos",
    },

    {
      id: "3",
      name: "Acessório",
      value: "acessorios",
    },
  ];

  const typeSneaker = [
    {
      id: "1",
      name: "Corrida",
      value: "Corrida",
    },

    {
      id: "2",
      name: "Caminhada",
      value: "Casual",
    },

    {
      id: "3",
      name: "Casual",
      value: "Casual",
    },

    {
      id: "4",
      name: "Social",
      value: "Social",
    },
  ];

  const orderBy = [
    {
      id: "1",
      defaultValue: "default",
      label: "Preço",
      value: "price",
    },
    {
      id: "2",
      label: "Nome",
      value: "name",
    },
  ];

  const [order, setOrder] = useState<string>("price");

  return (
    <Container>
      <PagRef>
        <span>Página inicial</span> <span> &#62; </span> <span>Sapatos</span>
      </PagRef>

      <Content>
        <Aside>
          <AsideTitle>filtre por</AsideTitle>

          <Box>
            <SubTitle>categorias</SubTitle>
            <List>
              {typeCategory.map((category) => (
                <a key={category.id}>{category.name}</a>
              ))}
            </List>
          </Box>

          <Box>
            <SubTitle>cores</SubTitle>
            <List style={{ flexDirection: "row" }}>
              <CaixaVermelha />
              <CaixaLaranja />
              <CaixaAzul />
            </List>
          </Box>

          <Box>
            <SubTitle>tipos</SubTitle>

            <List>
              {typeSneaker.map((sneaker) => {
                return <a key={sneaker.id}>{sneaker.name}</a>;
              })}
            </List>
          </Box>
        </Aside>

        <Main>
          <Title>Sapatos</Title>
          <hr />

          <BoxSelect>
            <OrderByPrice
              name="selectOrder"
              id="selectOrder"
              value={order}
              onChange={(event) => setOrder(event.target.value)}
            >
              {orderBy.map((order) => {
                return (
                  <option key={order.id} value={order.value}>
                    {order.label}
                  </option>
                );
              })}
            </OrderByPrice>
          </BoxSelect>

          <Grid></Grid>
        </Main>
      </Content>
    </Container>
  );
}
