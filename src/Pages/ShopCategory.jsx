import React, { useState } from "react";
import { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import Products from "../Components/Products/Products";
import "./CSS/ShopCategory.css";
import WomenCollection from "../Components/WomenCollection";
import PriceSort from "../Components/PriceSort";

export default function ShopCategory({ category, banner }) {
  const { all_products } = useContext(ShopContext);

  const [sortAsc, setSortAsc] = useState(true);

  const handleSortToggle = () => {
    setSortAsc(!sortAsc);
  };

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={banner} alt={category} />

      <div className="shop-category-description">
        {category === "women" ? (
          <p>
            <b>Women's Collection</b> - Coming Soon!
          </p>
        ) : (
          <p>
            <b>
              Showing 1 -{" "}
              {
                all_products.filter((product) => product.category === category)
                  .length
              }{" "}
            </b>
            products out of {all_products.length}
          </p>
        )}

        {category !== "women" && (
          <PriceSort sortAsc={sortAsc} handleSortToggle={handleSortToggle} />
        )}
      </div>

      {category === "women" ? (
        <WomenCollection />
      ) : (
        <div className="shop-category-products">
          <Products
            title={null}
            data_set={all_products
              .filter((product) => product.category === category)
              .sort((a, b) =>
                sortAsc ? a.new_price - b.new_price : b.new_price - a.new_price
              )}
          />
        </div>
      )}

      {category !== "women" && (
        <button className="explore-more">Explore More</button>
      )}
    </div>
  );
}
