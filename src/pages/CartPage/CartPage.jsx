import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../../context/Context";
import { ProductView } from "../../components/ProductView";
import { useState, useContext, useEffect } from "react";

export const CartPage = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(Cart);
  console.log(cart);
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
      <h1>Total Amount: {total}</h1>
    </div>
  );
};
