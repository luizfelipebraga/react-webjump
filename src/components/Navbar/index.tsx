import { SearchInput } from "../Search";
import { Container, Box,  AuthBar} from "./styles";


export function NavBar() {
  return (
    <Container>
      <AuthBar>
        <a href="">Acesse sua Conta</a>
        <span>ou</span>
        <a href="">Cadastre-se</a>
      </AuthBar>
      
      <Box>
        <span>Logo</span>
        <SearchInput color="#CB0D1F"/>
      </Box>
      
    </Container>
  )
}
