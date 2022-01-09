import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CalcasPage } from "./pages/Calças";
import { Catalogo } from "./pages/Catalogo";
import { Home } from "./pages/Home";
import { RoupasPage } from "./pages/Roupas";
import { CalcadosPage } from "./pages/Calcados";

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Home />} />
          {/* <Route path="/categorias" element={<Catalogo />} /> */}
          <Route path="/camisetas" element={<RoupasPage />} />
          <Route path="/calcas" element={<CalcasPage />} />
          <Route path="/calcados" element={<CalcadosPage />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
