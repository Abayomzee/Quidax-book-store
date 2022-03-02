import create from "zustand";

type CartStoreType = {
  cart: Array<object>;
  isCartOpen: boolean;
  totalCartPrice: string | number;
  totalCartItem: string | number;
  addToCart: (payload: object) => void;
  removeFromCart: (id: any) => void;
  incrementQuantity: (id: any) => void;
  decrementQuantity: (id: any) => void;
  closeCart: () => void;
  openCart: () => void;
};

interface cartDataProps {
  id?: any;
  amountInCart?: any;
  price?: any;
  totalPrice?: any;
  available_copies?: any;
}

const cartStore = create((set: any, get: any) => ({
  cart: [],
  isOpenMobileSearch: false,
  isCartOpen: false,
  addToCart: (data: cartDataProps) => {
    const vv = get().cart;
    let newVV: Array<{}> = [...vv];

    if (newVV.length) {
      // Confirm is there's an item in the cart
      const isInCart = newVV.filter(
        (item: cartDataProps) => item.id === data.id
      );
      if (!!isInCart.length === false) {
        // Confirm if item already exist in the cart
        newVV.push({
          ...data,
          amountInCart: 1,
          totalPrice: Number(data.price) * 1,
        });
      } else {
        const nn = newVV.map((item: cartDataProps) => {
          // Update existing item
          return item.id === data.id
            ? {
                ...item,
                amountInCart: item.amountInCart + 1,
                totalPrice: Number(item.price) * (item.amountInCart + 1),
              }
            : { ...item };
        });

        newVV = [...nn];
      }
    }

    set(({ cart }: CartStoreType) => ({
      cart:
        cart.length < 1
          ? [{ ...data, amountInCart: 1, totalPrice: Number(data.price) * 1 }]
          : [...newVV],

      isCartOpen: true,
    }));
  },
  removeFromCart: (id: any) => {
    set(({ cart }: CartStoreType) => ({
      cart: cart.filter((item: cartDataProps) => item.id !== id),
    }));
  },
  incrementQuantity: (id: any) => {
    set(({ cart }: CartStoreType) => ({
      cart: cart.map((item: cartDataProps) =>
        item.id === id
          ? {
              ...item,
              amountInCart:
                item.amountInCart === item.available_copies
                  ? item.amountInCart
                  : item.amountInCart + 1,
              totalPrice:
                item.amountInCart === item.available_copies
                  ? item.price * item.amountInCart
                  : item.price * (item.amountInCart + 1),
            }
          : { ...item }
      ),
    }));
  },
  decrementQuantity: (id: any) => {
    set(({ cart }: CartStoreType) => ({
      cart: cart.map((item: cartDataProps) =>
        item.id === id
          ? {
              ...item,
              amountInCart: item.amountInCart - 1,
              totalPrice: item.price * (item.amountInCart - 1),
            }
          : { ...item }
      ),
    }));
  },
  openCart: () => {
    set((state: CartStoreType) => ({
      isCartOpen: true,
    }));
  },
  closeCart: () => {
    set((state: CartStoreType) => ({
      isCartOpen: false,
    }));
  },
  getCartSubTotal: () => {
    const currentCart = get().cart;
    const cartPrices = currentCart.map(
      (item: cartDataProps) => item.totalPrice
    );
    const sum = cartPrices.reduce((a: any, b: any) => a + b, 0);
    return sum;
  },
  getAvailableCopy: (data: cartDataProps) => {
    const currentCart = get().cart;
    const cartItem = currentCart.filter(
      (item: cartDataProps) => item.id === data.id
    );

    if (!cartItem.length) {
      return data.available_copies - 1;
    }
    const item = cartItem[0];
    return item.available_copies - item.amountInCart;
  },
  openMobileSearch: () => {
    set((state: CartStoreType) => ({
      isOpenMobileSearch: true,
    }));
  },
  closeMobileSearch: () => {
    set((state: CartStoreType) => ({
      isOpenMobileSearch: false,
    }));
  },
}));

export default cartStore;
