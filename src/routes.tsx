import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Catalogo } from "./pages/Catalogo";
import { Home } from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Catalogo />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
