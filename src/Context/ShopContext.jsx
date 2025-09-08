import React from "react";
import { createContext } from "react";
import all_products from "../Components/assets/all_product.js";
import { useState } from "react";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addcart = (product) => {
    setCart([...cart, product]);
  };

  const deletecart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const contextValue = { all_products, addcart, deletecart, cart };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContext;
