import { ReactNode } from "react"
import { Footer } from "../Footer"
import { NavBar } from "../Navbar"
import { Container, Content } from "./styles"

type LayoutProps = {
  children?: ReactNode;
}

export function Layout({children}: LayoutProps) {
  return (
    <Container>

      <NavBar />

      <Content>
        {children}
      </Content>

      <Footer/>
      
    </Container>
  )
}
