import { Container, Img, Name, Price, BuyButton, Box1, Box2 } from "./styles";

type CardProps = {
  image?: string;
  name: string;
  price: number;
};

const img = "https://images.lojanike.com.br/1200x630/produto/tenis-nike-revolution-5-icon-clash-feminino-BQ3207-002-1.jpg"

export function CardCategory({ image, name, price }: CardProps) {
  return (
    <Container>
      <Box1>
        <Img src={image} alt="image" />
        <Name>{name}</Name>
      </Box1>

      <Box2>
        <Price>R${price}</Price>
        <BuyButton type="submit" value="Comprar" />
      </Box2>
    </Container>
  );
}
