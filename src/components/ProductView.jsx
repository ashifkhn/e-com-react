import React from "react";
import "./Style/productview.css";
import { CartState } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProductView = ({ prod }) => {
  // const { login } = useAuth();
  // const navigate = useNavigate();
  // const loginHandler = () => {};

  const {
    state: { cart },
    dispatch,
    wishListState: { wishlist },
    wishListDispatch,
  } = CartState();

  console.log(wishlist);
  return (
    <div className="product_sub_container p1">
      <h3>{prod.title} </h3>
      <div className="imagecontainer">
        <img src={prod.image} alt="" className="product_image" />
        {wishlist.some((p) => p._id === prod._id) ? (
          <div
            className="wishlist_icon added"
            onClick={() =>
              wishListDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: prod,
              })
            }
          >
            Remove from wishlist
          </div>
        ) : (
          <div
            className="wishlist_icon"
            onClick={() =>
              wishListDispatch({
                type: "ADD_TO_WISHLIST",
                payload: prod,
              })
            }
          >
            <i className=" fas fa-heart fa-lg"></i>
          </div>
        )}
      </div>
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
