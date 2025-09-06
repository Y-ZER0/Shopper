import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="news-letter">
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newsletter to get exclusive offers and updates.</p>
      <form action="">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
