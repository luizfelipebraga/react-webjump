import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Nav, Mobile, HambuerIcon, CloseIcon } from "./styles";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      <Nav isOpen={isOpen}>
        <Mobile isOpen={isOpen}>
          {isOpen ? (
            <CloseIcon size={30} onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <HambuerIcon size={30} onClick={() => setIsOpen(!isOpen)} />
          )}
          <ul>
            <Link to="/" onClick={() => setIsOpen(false)}>Página Inicial</Link>
            {menu.map((menu) => {
              return (
                <Link key={menu.id} to={`/${menu.path}`} onClick={() => setIsOpen(false)}>
                  {menu.name}
                </Link>
              );
            })}
            <Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link>
          </ul>
        </Mobile>
      </Nav>
    </Container>
  );
}
