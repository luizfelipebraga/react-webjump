import { Container, Img, Name, Price, BuyButton } from "./styles";

type CardProps = {
  img: string;
  name: string;
  price: string;
};

export function CardCategory({img, name, price}: CardProps) {
  return (
    <Container>
      <Img>{img}</Img>
      <Name>{name}</Name>
      <Price>{price}</Price>
      <BuyButton>Comprar</BuyButton>
    </Container>
  );
}
