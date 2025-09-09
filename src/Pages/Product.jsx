import React from "react";
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

  const handleAddToCart = (product) => {
    addToCart(product);
    window.scrollTo(0, 0);
  };

  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <div className="product-details-path">
        HOME {">"} SHOP {">"} {product?.category} {">"} {product?.name}
      </div>

      <div className="product-image-list">
        <img src={product?.image} alt={product?.name} />
        <img src={product?.image} alt={product?.name} />
        <img src={product?.image} alt={product?.name} />
        <img src={product?.image} alt={product?.name} />
      </div>

      <div className="product-MainImage">
        <img src={product?.image} alt={product?.name} />
      </div>

      <div className="product-details">
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
          <s>${product?.old_price}</s> {"  "} ${product?.new_price}
        </div>
        <div className="product-description">
          A light and comfortable t-shirt
        </div>
        <div className="product-size">
          <h3>Select Size</h3>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
          <div className="Cart-Submit">
            <Link to="/cart">
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </Link>
          </div>
          <p>
            <b>Category:</b> {product?.category}, T-Shirt, Crop Top
          </p>
          <p>
            <b>Tags:</b> Modern , latest
          </p>
          <DescriptionBox />
        </div>
      </div>
    </div>
  );
}
