import React from "react";
import "./cartpage.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ProductView } from "../../components/ProductView";
import { useState, useEffect } from "react";
import { CartState } from "../../context/CartContext";

export const CartPage = () => {
  const [total, setTotal] = useState(0);
  const {
    state: { cart },
    dispatch,
  } = CartState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div className="cart_page_container">
      <div className="product_container">
        {cart.map((prod) => {
          return <ProductView prod={prod} key={prod._id} />;
        })}
      </div>

      <div className="amount">
        <h3>N0. of Items: {cart.length}</h3>
        <h3>Total Amount: {total}</h3>
      </div>
    </div>
  );
};
