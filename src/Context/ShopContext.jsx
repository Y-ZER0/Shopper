import React from "react";
import { createContext } from "react";
import all_products from "../Components/assets/all_product.js";
import { useState } from "react";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addcart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const deletecart = (product) => {
    if (product.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };

  const contextValue = { all_products, addcart, deletecart, cart };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContext;
