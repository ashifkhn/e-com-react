import React from "react";
import { CartState } from "../context/Context";
import "./Style/sidebar.css";

export const Sidebar = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  // console.log(byStock, sort, byRating, byFastDelivery);

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
      <div>
        <h5>Sort by</h5>
        <div>
          <input
            type="radio"
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={sort === "lowToHigh" ? true : false}
          />
          <label htmlFor="input">Low to High</label>
        </div>
        <div>
          <input
            type="radio"
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow" ? true : false}
          />
          <label htmlFor="input">High to Low</label>
        </div>
      </div>

      <div>
        <input
          type="radio"
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
        <label htmlFor="input">Fast Delivery</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
        <label htmlFor="input">Include out of Stock</label>
      </div>

      <div>
        <h5>Customer Rating</h5>
        <div>
          <input
            type="radio"
            name="rating"
            onClick={() => {
              productDispatch({
                type: FILTER_BY_RATING,
                payload: "4_AND_ABOVE",
              });
            }}
          />
          <label htmlFor="input">4 Star and above</label>
        </div>
        <div>
          <input type="radio" name="rating" />
          <label htmlFor="input">3 Star and above</label>
        </div>
        <div>
          <input type="radio" name="rating" />
          <label htmlFor="input">2 Star and above</label>
        </div>
        <div>
          <input type="radio" name="rating" />
          <label htmlFor="input">1 Star and above</label>
        </div>
      </div>
      <button
        className="btn_secondary2"
        onClick={() => {
          productDispatch({ type: "CLEAR_FILTERS" });
        }}
      >
        Clear{" "}
      </button>
    </div>
  );
};
