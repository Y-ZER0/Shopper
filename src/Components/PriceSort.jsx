import React from "react";

export default function PriceSort({ sortAsc, handleSortToggle }) {
  return (
    <div className="price-sort-container">
      <span className="sort-label">Sort by price:</span>
      <div className="price-sort-switch">
        <span className={`sort-option ${!sortAsc ? "active" : ""}`}>
          Low to High
        </span>
        <button
          className={`toggle-switch ${sortAsc ? "high-to-low" : "low-to-high"}`}
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
  );
}
