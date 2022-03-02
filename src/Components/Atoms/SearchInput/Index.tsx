import React from "react";
import { InputStyle } from "./Style";

interface Props {
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  onSearchChange?: (val: any) => void;
}
const SearchInput: React.FC<Props> = (props) => {
  const { placeholder, className, onSearchChange, type = "text" } = props;
  return (
    <InputStyle
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
        onSearchChange!(target.value)
      }
      {...props}
    />
  );
};

export default SearchInput;
