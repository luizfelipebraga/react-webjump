import { InputHTMLAttributes } from "react";
import { BoxInputSearch, InputStyled } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color: string;
}

export function SearchInput({color, ...props}: InputProps) {
  return (
    <BoxInputSearch>
      <InputStyled {...props} />
      <div style={{background: color}}>
        <span>Buscar</span>
      </div>
    </BoxInputSearch>
  );
}
