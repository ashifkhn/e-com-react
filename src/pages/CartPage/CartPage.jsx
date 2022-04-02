import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../../context/Context";
import { ProductView } from "../../components/ProductView";
import { useState, useContext, useEffect } from "react";

export const CartPage = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(Cart);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  console.log(cart);
  return (
    <div>
      <Link to="/product">product</Link>
      <Link to="/cart">Cart</Link>
      <div>{total}</div>
      <div className="product_container">
        {cart.map((prod) => {
          <ProductView prod={prod} key={prod._id} />;
        })}
      </div>
    </div>
  );
};
