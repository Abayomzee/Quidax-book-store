import React from "react";
// import { ButtonStyle } from "./Style";
import Button from "Components/Atoms/Button/Index";
import Cart from "Components/Atoms/SvgIcons/Cart";
import Typography from "../Typography/Index";

interface Props {
  className?: string;
  label: string;
  onClick?: (val: any) => void;
}
const BlackCartButton: React.FC<Props> = (props) => {
  const { className, label } = props;
  return (
    <Button
      {...props}
      className={`btn-black-cart ${className ? className : ""}`}
    >
      <Cart width="18.32" height="20" pathClassName="fill-white" />
      <div>
        <Typography
          as="p"
          className="btn-black-cart-text heading-3 text-center"
          text={label}
        />
      </div>
    </Button>
  );
};

export default BlackCartButton;
