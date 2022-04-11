import React from "react";
import "./Style/productview.css";
import { CartState } from "../context/Context";

export const ProductView = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);
  return (
    <div className="product_sub_container p1">
      <h3>{prod.title} </h3>
      <img src={prod.image} alt="" className="product_image" />
      <h5>₹ {prod.price} </h5>
      {cart.some((p) => p._id === prod._id) ? (
        <div className="buttons">
          <button
            className="btn_secondary2"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              })
            }
          >
            Remove from Cart
          </button>
        </div>
      ) : (
        <div className="buttons">
          <button
            className="btn_primary2"
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};
