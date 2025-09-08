import React from "react";
import { useContext } from "react";
import ShopContext from "../../Context/ShopContext";

export default function CartItem({ item }) {
  const { deletecart } = useContext(ShopContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <span>${item.new_price.toFixed(2)}</span>
      <span>{item.quantity}</span>
      <div>${(item.new_price * item.quantity).toFixed(2)}</div>
      <button onClick={() => deletecart(item)} title="Remove item">
        ×
      </button>
    </div>
  );
}
