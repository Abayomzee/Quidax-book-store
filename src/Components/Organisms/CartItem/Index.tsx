import React from "react";
import Button from "Components/Atoms/Button/Index";
import Typography from "Components/Atoms/Typography/Index";
import {
  CartItemStyle,
  CartItemRight,
  CartItemRightTop,
  CartItemRightBottom,
} from "./Style";
import BookCover from "Components/Atoms/BookCover/Index";
import CartIncrement from "Components/Molecules/CartIncrement/Index";
import { Props } from "./interface";
import { getDataNames } from "Utils/helper";
import cartStore from "store/CartStore";

const CartItem: React.FC<Props> = (props) => {
  const { removeFromCart, incrementQuantity, decrementQuantity } = cartStore();
  const { item } = props;

  return (
    <CartItemStyle>
      <BookCover size="sm" className="shrink-0" image={item?.image_url} effectonhover={false} />
      <CartItemRight>
        <CartItemRightTop>
          <div className="text-truncate">
            <Typography
              as="h5"
              className="heading-2 text-truncate"
              title={item?.title}
            >
              {item?.title}
            </Typography>
            <Typography as="p" className="paragraph-2 mt-10">
              {getDataNames(item?.authors)}
            </Typography>
          </div>
          <div>
            <Typography as="p" className="paragraph-6 text-right">
              {`$ ${item?.price}`}
            </Typography>
            <CartIncrement
              className="mt-10"
              handleincrease={() => incrementQuantity(item?.id)}
              handledecrease={() => {
                if (item?.amountInCart <= 1) {
                  return removeFromCart(item?.id);
                }
                return decrementQuantity(item?.id);
              }}
              quantity={item?.amountInCart || "0"}
            />
          </div>
        </CartItemRightTop>
        <CartItemRightBottom className="mt-10">
          <Button onClick={() => removeFromCart(item?.id)}>Remove</Button>
          <Typography as="h6" className="heading-2 text-right">
            {`$ ${item?.totalPrice?.toFixed(2)}`}
          </Typography>
        </CartItemRightBottom>
      </CartItemRight>
    </CartItemStyle>
  );
};

export default CartItem;
