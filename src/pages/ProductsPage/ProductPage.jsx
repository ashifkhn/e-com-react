import React from "react";
import { useState } from "react";
import { products } from "../../backend/db/products";
import { Sidebar } from "../../components/Sidebar";
import "./productspage.css";
import { ProductView } from "../../components/ProductView";

export const ProductPage = () => {
  const [productArray] = useState(products);
  const [cart, setCart] = useState([]);
  return (
    <div className="container">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="product_container">
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
