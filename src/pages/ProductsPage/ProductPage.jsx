import React from "react";
import { useState, useContext } from "react";
import { products } from "../../backend/db/products";
import { Sidebar } from "../../components/Sidebar";
import { Cart } from "../../context/Context";
import "./productspage.css";
import { ProductView } from "../../components/ProductView";
import { Link } from "react-router-dom";

export const ProductPage = () => {
  const [productArray] = useState(products);
  const { cart, setCart } = useContext(Cart);
  console.log(useContext(Cart));
  return (
    <div className="container">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="product_container">
        <Link to="/product">product</Link>
        <Link to="/cart">Cart</Link>
        {productArray.map((prod) => {
          return (
            <div key={prod._id}>
              <ProductView prod={prod} cart={cart} setCart={setCart} />
            </div>
          );
        })}
      </main>
    </div>
  );
};
