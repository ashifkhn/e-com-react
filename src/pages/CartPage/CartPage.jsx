import React from "react";
import "./cartpage.css";
import { Link } from "react-router-dom";
import { Cart } from "../../context/Context";
import { ProductView } from "../../components/ProductView";
import { useState, useContext, useEffect } from "react";
import { CartState } from "../../context/Context";

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
    <div>
      <Link to="/product">product</Link>
      <Link to="/cart">Cart</Link>
      <div className="product_container">
        {cart.map((prod) => {
          return <ProductView prod={prod} key={prod._id} />;
        })}
      </div>
      <div className="amount">
        <h1>Total Amount: {total}</h1>
      </div>
    </div>
  );
};
