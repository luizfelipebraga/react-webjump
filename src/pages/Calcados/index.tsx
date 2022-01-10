import { API } from "../../env";
import { MainPageComponent } from "../../components/MainPage";

export function CalcadosPage() {
  return <MainPageComponent id={API.GETCALCADOS} title="Calçados" image="https://images.lojanike.com.br/1200x630/produto/tenis-nike-revolution-5-icon-clash-feminino-BQ3207-002-1.jpg"  />;
}
