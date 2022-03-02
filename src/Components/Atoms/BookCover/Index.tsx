import React from "react";
import { BookCoverStyle } from "./Style";

interface Props {
  className?: string;
  size: "lg" | "md" | "sm";
  effectonhover?: boolean;
  image?: string;
  children?: JSX.Element;
}
const BookCover: React.FC<Props> = (props) => {
  const { className, size, effectonhover, image, children } = props;
  return (
    <BookCoverStyle
      className={`shrink-0 ${className ? className : ""}`}
      size={size}
      effectonhover={effectonhover}
    >
      <img src={image} alt="" />
      {children}
    </BookCoverStyle>
  );
};

export default BookCover;
