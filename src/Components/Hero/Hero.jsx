import React from "react";
import "./Hero.css";
import hero_image from "../assets/hero_image.png";

export default function Hero({ onScroll }) {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-left-content">
          new👋 <br /> collections <br />
          for everyone
        </div>
        <button onClick={onScroll}>latest collection &rarr;</button>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero Banner" />
      </div>
    </div>
  );
}
