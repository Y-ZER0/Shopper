import React from "react";
import "./Products.css";
import ProductItem from "./ProductItem/ProductItem";

export default function Products({ title, data_set }) {
  return (
    <div className="products">
      <h2>{title}</h2>
      <div className="products-products">
        {data_set.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
}
