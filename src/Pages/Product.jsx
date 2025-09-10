import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import star_icon from "../Components/assets/star_icon.png";
import star_dull_icon from "../Components/assets/star_dull_icon.png";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import { Link } from "react-router-dom";
import "./CSS/Product.css";

export default function Product() {
  const { addToCart } = useContext(ShopContext);
  const location = useLocation();
  const product = location.state?.product;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    // Scroll to top immediately when component mounts
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Set loading to false after a brief moment to prevent flash
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [product]);

  // Show loading state briefly to prevent flash
  if (isLoading || !product) {
    return (
      <div className="product-loading">
        {!product ? "Product not found" : "Loading..."}
      </div>
    );
  }

  const handleAddToCart = (product) => {
    addToCart({ ...product });
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-details">
      <div className="product-details-path">
        HOME {">"} SHOP {">"} {product?.category} {">"} {product?.name}
      </div>

      <div className="product-container">
        <div className="product-images-section">
          <div className="product-image-list">
            <img src={product?.image} alt={product?.name} />
            <img src={product?.image} alt={product?.name} />
            <img src={product?.image} alt={product?.name} />
            <img src={product?.image} alt={product?.name} />
          </div>

          <div className="product-MainImage">
            <img src={product?.image} alt={product?.name} />
          </div>
        </div>

        <div className="product-details-right">
          <h1>{product?.name}</h1>

          <div className="product-rating">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <img key={i} src={star_icon} alt="Star" />
              ))}
            <img src={star_dull_icon} alt="Star" />
          </div>

          <div className="product-price">
            <span>
              <s>${product?.old_price}</s>
            </span>
            <span>${product?.new_price}</span>
          </div>

          <div className="product-description">
            A light and comfortable t-shirt perfect for everyday wear.
          </div>

          <div className="product-size">
            <h3>Select Size</h3>
            <div className="size-options">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="Cart-Submit">
              <Link
                to="/cart"
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                <button type="button">Add to Cart</button>
              </Link>
            </div>

            <div className="product-meta">
              <p>
                <strong>Category:</strong> {product?.category}, T-Shirt, Crop
                Top
              </p>
              <p>
                <strong>Tags:</strong> Modern, Latest
              </p>
            </div>
          </div>
        </div>
      </div>

      <DescriptionBox />
    </div>
  );
}
