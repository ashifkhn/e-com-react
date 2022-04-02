import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../../context/Context";
import { ProductView } from "../../components/ProductView";
import { useState, useContext } from "react";

export const CartPage = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(Cart);
  console.log(cart);
  return (
    <div>
      <Link to="/product">product</Link>
      <Link to="/cart">Cart</Link>
      <div className="product_container">
        {cart.map((prod) => {
          <ProductView prod={prod} key={prod._id} />;
        })}
      </div>
    </div>
  );
};
