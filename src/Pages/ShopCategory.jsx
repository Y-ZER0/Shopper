import React, { useState } from "react";
import { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import Products from "../Components/Products/Products";
import "./CSS/ShopCategory.css";

export default function ShopCategory({ category, banner }) {
  const { all_products } = useContext(ShopContext);

  const [sortAsc, setSortAsc] = useState(true);

  const handleSortToggle = () => {
    setSortAsc(!sortAsc);
  };

  const WomenComingSoon = () => (
    <div className="women-coming-soon">
      <div className="coming-soon-container">
        <div className="coming-soon-icon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="#28a745"
            />
          </svg>
        </div>
        <h2>Women's Collection Coming Soon!</h2>
        <p>
          We're curating an amazing selection of women's fashion just for you.
        </p>
        <div className="coming-soon-features">
          <div className="feature">
            <span className="feature-icon">👗</span>
            <span>Latest Trends</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✨</span>
            <span>Premium Quality</span>
          </div>
          <div className="feature">
            <span className="feature-icon">💎</span>
            <span>Special Launch Offers</span>
          </div>
        </div>
        <div className="notify-me">
          <button className="notify-btn">Notify Me When Available</button>
          <p className="estimated-date">Expected Launch: Spring 2025</p>
        </div>
      </div>
    </div>
  );

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
          <div className="price-sort-container">
            <span className="sort-label">Sort by price:</span>
            <div className="price-sort-switch">
              <span className={`sort-option ${!sortAsc ? "active" : ""}`}>
                Low to High
              </span>
              <button
                className={`toggle-switch ${
                  sortAsc ? "high-to-low" : "low-to-high"
                }`}
                onClick={handleSortToggle}
                aria-label="Toggle price sorting"
              >
                <span className="toggle-slider"></span>
              </button>
              <span className={`sort-option ${sortAsc ? "active" : ""}`}>
                High to Low
              </span>
            </div>
          </div>
        )}
      </div>

      {category === "women" ? (
        <WomenComingSoon />
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
