import React from "react";

export default function CartBill({ subtotal, couponApplied, discount, total }) {
  return (
    <div className="cart-totals-section">
      <h3>Cart Totals</h3>
      <div className="cart-subtotal">
        <div>
          Subtotal
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {couponApplied && (
          <div>
            Discount
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
        <hr />
        <div className="cart-shipping">
          Shipping <span>Free</span>
        </div>
        <hr />
        <div className="cart-total">
          Total
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="checkout">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}
