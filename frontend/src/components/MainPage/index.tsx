import { useEffect, useState } from "react";
import { CardCategory } from "../Card";
import { api } from "../../services/api";
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
import { Link } from "react-router-dom";

interface ListProps {
  id: number;
  image: string;
  name: string;
  price: number;
  path: string;
}

interface CatalogoProps {
  title?: string;
  id: string;
  image: string;
}

export function MainPageComponent(props: CatalogoProps) {
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

  useEffect(() => {
    function ListAll() {
      api
        .get(props.id)
        .then((resp) => {
          setList(resp.data.items);
        })
        .catch((err) => console.error(err));
    }
    ListAll();
    return () => {
      setList([]);
    };
  }, [props.id]);

  const [list, setList] = useState<ListProps[]>([]);
  const [searchItem, setSearchItem] = useState<string>('');
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
                <Link key={category.id} to={category.path}>
                  {category.name}
                </Link>
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
                return <span key={sneaker.id}>{sneaker.name}</span>;
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
            {list.filter((item) => {
              if(searchItem == "") return item
              if(item.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())) return item
            })
            .map((item, index) => {
              return (
                <CardCategory
                  key={index}
                  image={props.image}
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
