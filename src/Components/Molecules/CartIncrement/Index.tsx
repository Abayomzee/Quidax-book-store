import React from "react";
import Button from "Components/Atoms/Button/Index";
import Plus from "Components/Atoms/SvgIcons/Plus";
import { CartIncrementLayout } from "./Style";
import Minus from "Components/Atoms/SvgIcons/Minus";
import Typography from "Components/Atoms/Typography/Index";

interface Props {
  className?: string;
  handleincrease: () => void;
  handledecrease: () => void;
  quantity?: string | number;
}
const CartIncrement: React.FC<Props> = (props) => {
  const { handleincrease, handledecrease, quantity } = props;

  return (
    <CartIncrementLayout {...props}>
      <Button onClick={() => handledecrease()}>
        <Minus />
      </Button>
      <div className="cart-amount">
        <Typography as="span" className="paragraph-5" text={quantity} />
      </div>
      <Button onClick={() => handleincrease()}>
        <Plus />
      </Button>
    </CartIncrementLayout>
  );
};

export default CartIncrement;
