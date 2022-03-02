import React, { useRef } from "react";
import Typography from "Components/Atoms/Typography/Index";
import {
  CartStyle,
  CartItemsLayout,
  CartSubtotal,
  CartuttonHolder,
} from "./Style";
import CartNavBar from "Components/Organisms/TopNavBar/CartNavBar";
import CartItem from "Components/Organisms/CartItem/Index";
import BlackCartButton from "Components/Atoms/Button/BlackCartButton";
import Overlay from "Components/Atoms/Overlay/Index";
import { animateFadeOut, animateSlideInRight } from "Styles/Base/Animation";
import useOnClickOutside from "Hooks/useClickOutside";
import cartStore from "store/CartStore";
import EmptyState from "Components/Atoms/EmptyState/Index";

interface Props {
  className?: string;
  setShowCart?: (val: boolean) => void;
}
const Cart: React.FC<Props> = (props) => {
  const { cart, closeCart, getCartSubTotal } = cartStore();
  const cartRef = useRef<any>();
  useOnClickOutside(cartRef, () => closeCart());
  
  return (
    <Overlay
      initial="hidden"
      animate="visible"
      variants={animateFadeOut.variants}
      transition={animateFadeOut.transition}
    >
      <CartStyle
        ref={cartRef}
        initial="hidden"
        animate="visible"
        variants={animateSlideInRight.variants}
        transition={animateSlideInRight.transition}
      >
        <CartNavBar />
        {/* <Center> */}
        {!cart.length ? (
          <EmptyState title={"Cart is empty"} />
        ) : (
          <>
            <CartItemsLayout>
              {cart?.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </CartItemsLayout>
            <CartSubtotal className="mt-70">
              <Typography as="p" className="paragraph-4" text="Subtotal" />
              <Typography
                as="h4"
                className="heading-7"
                text={`$${Number(getCartSubTotal().toFixed(2))}`}
              />
            </CartSubtotal>

            <CartuttonHolder>
              <BlackCartButton
                label="Proceed to Checkout"
                className="mt-20 mb-40"
              />
            </CartuttonHolder>
          </>
        )}

        {/* </Center> */}
      </CartStyle>
    </Overlay>
  );
};

export default Cart;
