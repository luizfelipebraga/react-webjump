import { SearchInput } from "../Search";
import { SubNav } from "../SubNav";
import { Container, Box, AuthBar, BoxAuth, Logo } from "./styles";

export function NavBar() {
  return (
    <Container>
      <AuthBar>
        <BoxAuth>
          <span>Acesse sua Conta</span>
          <span>ou</span>
          <span>Cadastre-se</span>
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
