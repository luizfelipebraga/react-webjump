import { API } from "../../env";
import { MainPageComponent } from "../../components/MainPage";

export function RoupasPage() {
  return <MainPageComponent id={API.GETROUPAS} title="Roupas" image="https://imgcentauro-a.akamaihd.net/230x230/95879601.jpg"  />;
}
