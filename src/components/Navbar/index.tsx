import { SearchInput } from "../Search";
import { SubNav } from "../SubNav";
import { Container, Box, AuthBar, BoxAuth, Logo } from "./styles";

export function NavBar() {
  return (
    <Container>
      <AuthBar>
        <BoxAuth>
          <a href="">Acesse sua Conta</a>
          <span>ou</span>
          <a href="">Cadastre-se</a>
        </BoxAuth>
      </AuthBar>

      <Box>
        <Logo><span>Web</span><span>Jump</span><span>I</span></Logo>
        <SearchInput color="var(--darkRed)" />
      </Box>

      <SubNav />
    </Container>
  );
}
