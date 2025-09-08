import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox() {
  return (
    <div className="description-box">
      <div className="description-tabs">
        <div className="description-tab">Description</div>
        <div className="reviews-tab">Reviews (122)</div>
      </div>
      <div className="description-content">
        Shopper is a contemporary online fashion destination that brings
        together style, quality, and convenience.
        <br />
        <br />
        Our platform offers a curated collection of trendy apparel for men,
        women, and children, featuring everything from casual everyday wear to
        premium fashion pieces.
      </div>
    </div>
  );
}
