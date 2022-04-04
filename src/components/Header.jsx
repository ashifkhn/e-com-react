import React from "react";
import "../StyleClasses/main.css";
import "./Style/header.css";
import { Link } from "react-router-dom";

export default function Header() {
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
        </Link>

        <Link to="cart">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <Link to="product">
          <i className="fas fa-shopping-bag"></i>
        </Link>
      </div>
    </nav>
  );
}
