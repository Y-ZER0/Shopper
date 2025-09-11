import React from "react";

export default function WomenCollection() {
  return (
    <div className="women-coming-soon">
      <div className="coming-soon-container">
        <div className="coming-soon-icon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="#28a745"
            />
          </svg>
        </div>
        <h2>Women's Collection Coming Soon!</h2>
        <p>
          We're curating an amazing selection of women's fashion just for you.
        </p>
        <div className="coming-soon-features">
          <div className="feature">
            <span className="feature-icon">👗</span>
            <span>Latest Trends</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✨</span>
            <span>Premium Quality</span>
          </div>
          <div className="feature">
            <span className="feature-icon">💎</span>
            <span>Special Launch Offers</span>
          </div>
        </div>
        <div className="notify-me">
          <button className="notify-btn">Notify Me When Available</button>
          <p className="estimated-date">Expected Launch: Spring 2025</p>
        </div>
      </div>
    </div>
  );
}
