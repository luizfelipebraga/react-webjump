import { Container, Img, Name, Price, BuyButton, Box1, Box2 } from "./styles";

type CardProps = {
  image: string;
  name: string;
  price: number;
};

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
