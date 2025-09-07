import React, { useState } from "react";
import { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import Products from "../Components/Products/Products";
import "./CSS/ShopCategory.css";

export default function ShopCategory({ category, banner }) {
  const { all_products } = useContext(ShopContext);

  const [sortAsc, setSortAsc] = useState(true);

  const handleSortChange = (e) => {
    setSortAsc(e.target.value === "high-to-low");
  };

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={banner} alt={category} />
      <div className="shop-category-description">
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
        <select
          className="sort-products"
          value={sortAsc ? "high-to-low" : "low-to-high"}
          onChange={handleSortChange}
        >
          <option value="high-to-low">High to low</option>
          <option value="low-to-high">Low to high</option>
        </select>
      </div>
      <div className="shop-category-products">
        <Products
          title={null}
          data_set={all_products
            .filter((product) => product.category === category)
            .sort((a, b) =>
              sortAsc ? b.new_price - a.new_price : a.new_price - b.new_price
            )}
        />
      </div>
      <button className="explore-more">Explore More</button>
    </div>
  );
}
