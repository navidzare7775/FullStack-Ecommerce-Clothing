/* eslint-disable react/prop-types */
import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "£";
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
  };
  return (
    //Wrapping: {props.children}
    // includes any components or elements that are nested inside ShopContextProvider.
    // These nested components will have access to the context values.
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
