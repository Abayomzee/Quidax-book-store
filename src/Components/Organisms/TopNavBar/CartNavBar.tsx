import React from "react";
import { CartNavStyle, TopNav } from "./Style";
import { Center } from "Styles/layouts/Center";
import BackButton from "Components/Atoms/Button/BackButton";
import Typography from "Components/Atoms/Typography/Index";
import Cart from "Components/Atoms/SvgIcons/Cart";
import cartStore from "store/CartStore";

interface Props {
  handleCartClose?: (val: boolean) => void;
}
const CartNavBar: React.FC<Props> = (props) => {
  const { closeCart } = cartStore();
  return (
    <TopNav className="place-on-top">
      <CartNavStyle>
        <BackButton handleClick={closeCart} />
        <div className="right">
          <Typography as="h6" className="heading-2" text="Your Cart" />
          <Cart width="18.32" height="20" />
        </div>
      </CartNavStyle>
    </TopNav>
  );
};

export default CartNavBar;
