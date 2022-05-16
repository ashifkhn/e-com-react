import React from "react";
import { createContext, useContext, useReducer } from "react";
import { products } from "../backend/db/products";
import {
  cartReducer,
  productReducer,
  wishlistReducer,
} from "../reducer/Reducer";

export const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: "",
    searchQuery: "",
  });

  const [wishListState, wishListDispatch] = useReducer(wishlistReducer, {
    products: products,
    wishlist: [],
  });

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        productState,
        productDispatch,
        wishListState,
        wishListDispatch,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
