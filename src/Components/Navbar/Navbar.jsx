import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import ShopContext from "../../Context/ShopContext";

const NAVIGATION_ITEMS = [
  { label: "Shop", path: "/" },
  { label: "Men", path: "/men" },
  { label: "Women", path: "/women" },
  { label: "Kids", path: "/kids" },
];

const linkStyle = { textDecoration: "none", color: "inherit" };

function Navbar() {
  const { cart } = useContext(ShopContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Shop");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMenuOpen(false); // Close mobile menu on selection
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src={logo} alt="Shopper logo" />
        <Link to="/" style={linkStyle}>
          <p>SHOPPER</p>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
          />
        ))}
      </button>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
        {NAVIGATION_ITEMS.map(({ label, path }) => (
          <li key={label} onClick={() => handleMenuClick(label)}>
            <Link
              to={path}
              style={linkStyle}
              className={activeMenu === label ? "active" : ""}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login & Cart Section */}
      <div className="nav-login-cart">
        <Link to="/login" style={linkStyle}>
          <button onClick={() => handleMenuClick("Login")}>Login</button>
        </Link>

        <Link to="/cart" style={linkStyle} aria-label="Shopping cart">
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">{cart.length}</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
