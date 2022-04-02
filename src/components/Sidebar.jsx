import React from "react";
import "./Style/sidebar.css";

export const Sidebar = () => {
  return (
    <div className=".sidebar">
      <h3 className="p1">Filters</h3>
      <div>
        <h5>Price</h5>
        <div>
          <input type="range" className="price-range" min={0} max={20000} />
          <label htmlFor="cowbell">Price</label>
        </div>
      </div>
      <div className="categories">
        <h5>Categories</h5>
        <div>
          <input type="radio" />
          <label htmlFor="input">PC</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="input">Laptop</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="input">Gaming</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="input">Accessories</label>
        </div>
      </div>
      <div>
        <h5>Sort by</h5>
        <div>
          <input type="radio" />
          <label htmlFor="input">High to Low</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="input">Low to high</label>
        </div>
      </div>
      <div>
        <h5>Customer Rating</h5>
        <div>
          <input type="radio" />
          <label htmlFor="input">4 Star and above</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="input">3 Star and above</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="input">2 Star and above</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="input">1 Star and above</label>
        </div>
      </div>
    </div>
  );
};
