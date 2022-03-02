import React from "react";
import Badge from "Components/Atoms/Badge/Index";
import Button from "Components/Atoms/Button/Index";
import Cart from "Components/Atoms/SvgIcons/Cart";
import cartStore from "store/CartStore";
// import { CartWithBagdeStyle } from "./Style";

interface Props {
  onClick?: () => void;
}
const CartWithBagde: React.FC<Props> = (props) => {
  const { cart } = cartStore();
  return (
    <Button className="btn-cart-width-badge" {...props}>
      <Cart />
      {cart.length ? <Badge label={cart.length} /> : null}
    </Button>
  );
};

export default CartWithBagde;
