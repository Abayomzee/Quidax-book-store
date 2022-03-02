type dataProps = {
  id?: string;
  image_url?: string;
  available_copies?: number;
  title?: string;
  authors?: object[];
  genres?: object[];
  likes?: number;
  rating?: number;
  price?: number;
  totalPrice?: number;
  amountInCart?: any;
};

export type Props = {
  className?: string;
  item?: dataProps;
};
