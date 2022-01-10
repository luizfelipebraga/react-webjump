import { useEffect, useState } from "react";
import { CardCategory } from "../../components/Card";
import { api, apiImages } from "../../services/api";
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

interface ListProps {
  id: number;
  image: string;
  name: string;
  price: number;
  path: string;
}

type ImagemProps = {
  image: string;
};

interface CatalogoProps {
  title?: string;
  id: string;
}

export function Catalogo(props: CatalogoProps) {
  const typeCategory = [
    {
      id: "1",
      name: "Roupas",
      path: "/camisetas",
      value: "roupas",
    },

    {
      id: "2",
      name: "Calças",
      path: "/calcas",
      value: "calcas",
    },

    {
      id: "3",
      name: "Calçados",
      path: "/calcados",
      value: "calcados",
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

  function ListAll() {
    api
      .get(props.id)
      .then((resp) => {
        setList(resp.data.items);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    ListAll();
    return () => {
      setList([]);
    };
  }, []);

  const [list, setList] = useState<ListProps[]>([]);
  const [order, setOrder] = useState<string>("price");

  return (
    <Container>
      <PagRef>
        <span>Página inicial</span> <span>&#62;</span>
        <span>{props.title}</span>
      </PagRef>

      <Content>
        <Aside>
          <AsideTitle>filtre por</AsideTitle>

          <Box>
            <SubTitle>categorias</SubTitle>
            <List>
              {typeCategory.map((category) => (
                <a key={category.id} href={category.path}>
                  {category.name}
                </a>
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
          <Title>{props.title}</Title>
          <hr />

          <BoxSelect>
            <span>Ordernar Por</span>
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

          <Grid>
            {list.map((item, index) => {
              return (
                <CardCategory
                  key={index}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </Grid>
        </Main>
      </Content>
    </Container>
  );
}
