import React from "react";

export default function Coupon({
  couponCode,
  setCouponCode,
  handleCouponApply,
  couponMessage,
  couponApplied,
}) {
  return (
    <div className="cart-bottom-section">
      <div className="coupon-section">
        <h3>Have a Coupon?</h3>
        <div className="coupon-input-group">
          <input
            type="text"
            className="coupon-input"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className="coupon-btn" onClick={handleCouponApply}>
            Apply
          </button>
        </div>
        {couponMessage && (
          <div
            className={`coupon-message ${
              couponApplied ? "coupon-success" : "coupon-error"
            }`}
          >
            {couponMessage}
          </div>
        )}
      </div>
    </div>
  );
}
