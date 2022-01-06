import { Link } from "react-router-dom";
import { Container, Nav } from "./styles";

export function SubNav() {
  return (
    <Container>
      <Nav>
        <Link to="/">Página Inicial</Link>
        <Link to="/camisetas">Camisetas</Link>
        <Link to="/camisetas">Cal&ccedil;as</Link>
        <Link to="/calças">Sapatos</Link>
        <Link to="/sapatos">Contato</Link>
      </Nav>
    </Container>
  )
}
