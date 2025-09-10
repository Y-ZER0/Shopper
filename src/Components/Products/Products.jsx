import React from "react";
import "./Products.css";
import ProductItem from "./ProductItem/ProductItem";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  display: "block",
  width: "100%",
};

export default function Products({ title, data_set, targetRef }) {
  return (
    <div className="products" ref={targetRef}>
      {title && <h2>{title}</h2>}
      <div className="products-products">
        {data_set?.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            state={{ product }}
            className="product-link"
            style={linkStyle}
          >
            <ProductItem item={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
