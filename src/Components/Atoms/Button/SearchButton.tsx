import React from "react";
import { ButtonStyle } from "./Style";
import Lens from "Components/Atoms/SvgIcons/Lens";
import Times from "Components/Atoms/SvgIcons/Times";

interface Props {
  className?: string;
  searValue?: any;
  clearSearch?: (val: string) => void;
}
const SearchButton: React.FC<Props> = (props) => {
  // Props
  const { className, searValue, clearSearch, ...otherProps } = props;

  // Jsx to reuturn or render
  return (
    <ButtonStyle
      className={`btn-search ${className ? className : ""}`}
      {...otherProps}
      onClick={() => clearSearch!("")}
    >
      {searValue ? <Times /> : <Lens />}
    </ButtonStyle>
  );
};

export default SearchButton;
