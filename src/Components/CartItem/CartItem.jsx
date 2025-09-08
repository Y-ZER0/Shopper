import React from "react";
import { useContext } from "react";
import ShopContext from "../../Context/ShopContext";

export default function CartItem({ item }) {
  const { deletecart } = useContext(ShopContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <span>${item.new_price}</span>
      <div>
        Quantity: <input type="number" readOnly value={item.quantity} />
      </div>
      <div>Total: ${item.new_price * item.quantity}</div>
      <button onClick={() => deletecart(item)}>X</button>
    </div>
  );
}
