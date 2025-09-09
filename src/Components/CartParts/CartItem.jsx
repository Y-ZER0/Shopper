import React from "react";
import { useContext } from "react";
import ShopContext from "../../Context/ShopContext";

export default function CartItem({ item }) {
  const { addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p className="price">${item.new_price.toFixed(2)}</p>
      <div className="quantity-controls">
        <button
          className="quantity-btn"
          onClick={() => removeFromCart(item)}
          disabled={item.quantity <= 1}
        >
          −
        </button>
        <span className="quantity-display">{item.quantity}</span>
        <button className="quantity-btn" onClick={() => addToCart(item)}>
          +
        </button>
      </div>
      <p className="total-price">
        ${(item.new_price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}
