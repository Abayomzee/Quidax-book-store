import React from "react";
import { SearchFieldStyle } from "./Style";
import SearchInput from "Components/Atoms/SearchInput/Index";
import SearchButton from "Components/Atoms/Button/SearchButton";

interface Props {
  className?: string;
  onSearchChange?: (val: string) => void;
  searValue?: any;
}
const SearchField: React.FC<Props> = (props) => {
  const { className, searValue, onSearchChange } = props;
  return (
    <SearchFieldStyle className={`${className ? className : ""}`}>
      <SearchInput
        className="seacrhInput"
        placeholder="Search books, genres, authors, etc."
        value={searValue}
        {...props}
      />
      <SearchButton
        className="searchBtn"
        searValue={searValue}
        clearSearch={onSearchChange}
      />
    </SearchFieldStyle>
  );
};

export default SearchField;
