import React from "react";
import "./CSS/Cart.css";
import { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import CartItem from "../Components/CartItem/CartItem";

export default function Cart() {
  const { cart } = useContext(ShopContext);
  return (
    <div className="cart">
      <div className="product-fields">
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
        <h3>Remove</h3>
      </div>

      <hr></hr>

      <div className="cart-products">
        {cart.map((product) => (
          <CartItem key={product.id} item={product} />
        ))}
      </div>

      <div className="cart-totals-section">
        <h3>Cart Totals</h3>
        <div className="cart-subtotal">
          Subtotal
          <span>
            ${cart.reduce((total, product) => total + product.new_price, 0)}
          </span>
          <hr></hr>
          <div className="cart-shipping">Shipping Free</div>
          <hr></hr>
          <div className="cart-total">Total</div>
          <span>
            ${cart.reduce((total, product) => total + product.new_price, 0)}
          </span>
        </div>
      </div>

      <button className="checkout">PROCEED TO CHECKOUT</button>
    </div>
  );
}
