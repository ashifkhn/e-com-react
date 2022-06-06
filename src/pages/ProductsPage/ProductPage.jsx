import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar";
import { CartState } from "../../context/CartContext";
import "./productspage.css";
import { ProductView } from "../../components/ProductView";
import axios from "axios";

export const ProductPage = () => {
  const [dataFromApi, setDataFromApi] = useState();
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("api/products");
        setDataFromApi(resp.data);
      } catch (err) {
        alert(`Error from Server , ${err}`);
      }
    })();
  }, []);

  console.log(dataFromApi);

  const {
    state: { products },
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    return sortedProducts;
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="product_container">
        {transformProducts().map((prod) => {
          return <ProductView prod={prod} key={prod._id} />;
        })}
      </main>
    </div>
  );
};
