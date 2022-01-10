import { API } from "../../env";
import { MainPageComponent } from "../../components/MainPage";

export function CalcasPage() {
  return <MainPageComponent id={API.GETCALCAS} title="Calças" image="https://images.lojanike.com.br/1024x1024/produto/calca-m-nk-dry-acd21-34-pant-kp-CW6125-010-1-11621540400.jpg" />;
}
