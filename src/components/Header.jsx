import React from "react";
import "../StyleClasses/main.css";
import "./Style/header.css";
import { Link } from "react-router-dom";
import { CartState } from "../context/CartContext";
// import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const {
    state: { cart },
    wishListState: { wishlist },
  } = CartState();
  const { login, setLogin } = useAuth();

  const logoutHandler = () => {
    setLogin(false);
  };

  return (
    <nav className="font_white bg_black">
      <div className="brand_name font_white bold pointer">
        <Link to="/" className=".link">
          d-Gadget Store
        </Link>
      </div>
      <div className="search">
        <input type="search" placeholder="search" className="search" />
      </div>
      <div className="list">
        <Link to="wishlist">
          <i className="fas fa-heart"></i>
          {wishlist.length}
        </Link>

        <Link to="cart">
          <i className="fas fa-shopping-cart"></i>
          {cart.length}
        </Link>

        {login ? (
          <button className="btn_primary2" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <Link to="login">
            <i className="fas fa-user"></i>
          </Link>
        )}
      </div>
    </nav>
  );
}
