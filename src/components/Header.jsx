import React from "react";
import "../StyleClasses/main.css";
import "../style/header.css";

export default function Header() {
  return (
    <nav className="font_white bg_black">
      <a className="brand_name font_white bold pointer" href="">
        d-Gadget Store
      </a>

      <div className="search">
        <input type="search" placeholder="search" className="search" />
      </div>
      <div className="list">
        <a
          href="./component/auth/login.html"
          className="p05 font_white bg_black pointer"
        >
          Login
        </a>
        <a
          className="p05 font_white bg_black pointer"
          href="./component/cart/cart.html"
        >
          <i className="fas fa-2x fa-heart"></i>
        </a>
        <a
          className="p05 font_white bg_black pointer"
          href="./component/wishlist/wishlist.html"
        >
          <i className="fas fa-2x fa-shopping-cart" target="_blank"></i>
        </a>
      </div>
    </nav>
  );
}
