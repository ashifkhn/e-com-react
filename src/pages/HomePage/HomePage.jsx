import React from "react";
import HomePageImage from "../../assets/homepage-image.jpg";
import "../HomePage/homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div className="hero_img_container">
        <img src={HomePageImage} alt="" className="hero_img" />
      </div>

      <section className="explore font_white br2 center column bg_transparent">
        <p className="shopText">One stop for all your gadget needs;</p>
        <button className="button br2 bold p1 m-1 bg_darkgray border_black font_white pointer">
          <a className="shopnow" href="/">
            Shop Now
          </a>
        </button>
      </section>
    </>
  );
}
