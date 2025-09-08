import React from "react";
import "./Products.css";
import ProductItem from "./ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";

export default function Products({ title, data_set }) {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    // Navigate and pass data via state
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="products">
      {title && <h2>{title}</h2>}
      <div className="products-products">
        {data_set.map((product) => (
          <ProductItem
            key={product.id}
            item={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
}
