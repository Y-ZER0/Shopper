import React from "react";

export default function ProductItem({ item }) {
  return (
    <div className="products-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <div className="products-item-price">
        <span>${item.new_price}</span>
        <span>
          <s>${item.old_price}</s>
        </span>
      </div>
    </div>
  );
}
