import React from "react";
// import { ButtonStyle } from "./Style";
import Button from "Components/Atoms/Button/Index";
import Cart from "Components/Atoms/SvgIcons/Cart";
import Typography from "../Typography/Index";

interface Props {
  className?: string;
  stockTextClassName?: string;
  title: string;
  subTitle: string;
  price: string;
  disabled?: any;
  onClick?: () => void;
}
const BlackCartFullButton: React.FC<Props> = (props) => {
  const { className, stockTextClassName, title, subTitle, price } = props;
  return (
    <Button
      className={`btn-black-full-cart ${className ? className : ""}`}
      {...props}
    >
      <Cart width="18.32" height="20" pathClassName="fill-white" />
      <div>
        <Typography
          as="p"
          className="btn-black-full-cart-text heading-8 title"
          text={title}
        />
        <Typography
          as="p"
          className={`btn-black-cart-text  paragraph-3 sub-title ${
            stockTextClassName ? stockTextClassName : ""
          }`}
          text={subTitle}
        />
      </div>
      <Typography
        as="p"
        className="btn-black-cart-text heading-9 price"
        text={price}
      />
    </Button>
  );
};

export default BlackCartFullButton;
