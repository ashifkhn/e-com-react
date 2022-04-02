import React from "react";
import { useContext } from "react";
import "./Style/productview.css";
import { Cart } from "../context/Context";

export const ProductView = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);
  const addToCartHandler = () => {
    setCart([...cart, prod]);
  };
  const removeFromCartHandler = () => {
    setCart(cart.filter((cartProduct) => cartProduct._id !== prod._id));
  };
  return (
    <div key={prod._id} className="product_sub_container p1">
      <h3>{prod.title} </h3>
      <img src={prod.image} alt="" className="product_image" />
      ProductView
      <h5>₹ {prod.price} </h5>
      {cart.includes(prod) ? (
        <div className="buttons">
          <button className="btn_secondary2" onClick={removeFromCartHandler}>
            Remove from Cart
          </button>
        </div>
      ) : (
        <div className="buttons">
          <button className="btn_primary2" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};
