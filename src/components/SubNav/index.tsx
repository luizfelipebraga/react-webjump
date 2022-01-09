import { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Nav } from "./styles";

interface NavProps {
  id: number;
  name: string;
  path: string;
}

export function SubNav() {
  useEffect(() => {
    getList();
  }, []);

  const [menu, setMenu] = useState<NavProps[]>([]);

  const getList = () => {
    api
      .get("/list")
      .then((resp) => {
        setMenu(resp.data.items);
      })
      .catch((err) => console.error(err));
  };
  
  return (
    <Container>
      <Nav>
        <Link to="/">Página Inicial</Link>
        {menu.map((menu) => {
          return (
            <Link key={menu.id} to={`/${menu.path}`}>
              {menu.name}
            </Link>
          );
        })}
        <Link to="/contato">Contato</Link>
      </Nav>
    </Container>
  );
}
