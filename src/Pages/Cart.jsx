import React, { useState } from "react";
import "./CSS/Cart.css";
import { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import CartItem from "../Components/CartItem/CartItem";
import CartBill from "../Components/CartBill";
import Coupon from "../Components/Coupon";

export default function Cart() {
  const { cart } = useContext(ShopContext);
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const subtotal = cart.reduce(
    (total, product) => total + product.new_price * product.quantity,
    0
  );

  const discount = couponApplied ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  const handleCouponApply = () => {
    if (couponCode.toLowerCase() === "save10") {
      setCouponApplied(true);
      setCouponMessage("Coupon applied successfully! 10% off");
    } else if (couponCode === "") {
      setCouponMessage("Please enter a coupon code");
    } else {
      setCouponMessage("Invalid coupon code");
    }
  };

  if (cart.length === 0) {
    return (
      <section className="cart">
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Add some items to your cart to get started!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      <div className="product-fields">
        <h4>Product</h4>
        <h4>Title</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Total</h4>
        <h4>Remove</h4>
      </div>

      <hr />

      <div className="cart-products">
        {cart.map((product) => (
          <CartItem key={product.id} item={product} />
        ))}
      </div>

      <CartBill
        subtotal={subtotal}
        couponApplied={couponApplied}
        discount={discount}
        total={total}
      />

      <Coupon
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        handleCouponApply={handleCouponApply}
        couponMessage={couponMessage}
        couponApplied={couponApplied}
      />
    </section>
  );
}
