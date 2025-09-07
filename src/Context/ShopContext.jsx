import React from "react";
import { createContext } from "react";
import all_products from "../Components/assets/all_product.js";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const contextValue = { all_products };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContext;
