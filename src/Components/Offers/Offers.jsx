import React from "react";
import "./Offers.css";
import hero_image from "../assets/hero_image2.png";

export default function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <div className="offers-left-content">
          Exclusive <br /> Offers For You <br />
        </div>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={hero_image} alt="Hero Banner" />
      </div>
    </div>
  );
}
