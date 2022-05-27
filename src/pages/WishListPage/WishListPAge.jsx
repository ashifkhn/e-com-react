import React from "react";
import { ProductView } from "../../components/ProductView";
import { CartState } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const WishListPAge = () => {
  const {
    wishListState: { wishlist },
  } = CartState();
  return (
    <div>
      <Link to="/product">product</Link>
      <Link to="/cart">Cart</Link>
      <div className="product_container">
        {wishlist.length === 0 ? (
          <div>
            <h1>Wishlist is Empty!</h1>
            <Link to="/" className=".link">
              <button className="btn_primary2"> Go to Store</button>
            </Link>
          </div>
        ) : (
          <div>
            {wishlist.map((prod) => {
              return (
                <div>
                  <ProductView prod={prod} key={prod._id} />;
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
