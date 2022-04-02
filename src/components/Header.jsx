import React from "react";
import "../StyleClasses/main.css";
import "./Style/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="font_white bg_black">
      <a className="brand_name font_white bold pointer">d-Gadget Store</a>

      <div className="search">
        <input type="search" placeholder="search" className="search" />
      </div>
      <div className="list">
        {/* <Link to="cart">Cart</Link> */}

        <a className="p05 font_white bg_black pointer">Login</a>
        <a to="cart" className="p05 font_white bg_black pointer">
          <i className="fas fa-2x fa-heart"></i>
        </a>
        <a className="p05 font_white bg_black pointer">
          <i className="fas fa-2x fa-shopping-cart" target="_blank"></i>
        </a>
        {/* <Link to="/cart">Cart</Link> */}
      </div>
    </nav>
  );
}
