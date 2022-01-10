import { InputHTMLAttributes } from "react";
import { BoxInputSearch, InputStyled, Button } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color: string;
}

export function SearchInput({ color, ...props }: InputProps) {
  return (
    <BoxInputSearch>
      <InputStyled {...props} />
      <Button style={{ background: color }}>Buscar</Button>
    </BoxInputSearch>
  );
}
