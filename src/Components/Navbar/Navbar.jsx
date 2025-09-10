import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
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

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  display: "block",
  width: "100%",
  height: "100%",
};

function Navbar() {
  const { cart } = useContext(ShopContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Shop");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMenuOpen(false); // Close mobile menu on selection
    window.scrollTo(0, 0);
  };

  const cartItemCount = cart?.length || 0;

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src={logo} alt="Shopper logo" />
        <NavLink
          to="/"
          style={linkStyle}
          onClick={() => handleMenuClick("Shop")}
        >
          <p>SHOPPER</p>
        </NavLink>
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
          <li key={label} className={activeMenu === label ? "active" : ""}>
            <NavLink
              to={path}
              style={linkStyle}
              onClick={() => handleMenuClick(label)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Login & Cart Section */}
      <div className="nav-login-cart">
        <NavLink
          to="/login"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button onClick={() => handleMenuClick("Login")}>Login</button>
        </NavLink>

        <NavLink
          to="/cart"
          style={{ textDecoration: "none", color: "inherit" }}
          aria-label={`Shopping cart with ${cartItemCount} items`}
          onClick={() => handleMenuClick("Cart")}
          className="cart-container"
        >
          <img src={cart_icon} alt="Shopping cart" />
          {cartItemCount > 0 && (
            <div className="nav-cart-count">{cartItemCount}</div>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
