/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { products } from "../assets/assets";
import {toast} from 'react-toastify'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "£";
  const delivery_fee = 10;
  const [search, setSearch] = useState(``);
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemid, size)  => {
    if (!size){
      toast.error('Select Product Size');
      return;
    }
    let cartData = structuredClone(cartItems);
    if(cartData[itemid]){
      if(cartData[itemid][size]){
        cartData[itemid][size] += 1;
      }
      else{
        cartData[itemid][size] = 1;
      }
    }
    else{
      cartData[itemid] = {}
      cartData[itemid][size] = 1;
    }
    setCartItems(cartData);
  }
const getCartCount = () => {
  let totalCount = 0;
  for(const items in  cartItems){
    for(const size in cartItems[items]){
        try {
          if(cartItems[items][size] > 0){
              totalCount += cartItems[items][size];
          }
        } catch (error) {
          console.error(error)
        }
    }
  }
  return totalCount
}
const UpdateQuantity = async (itemid, size, quantity) => {
  let cartData = structuredClone(cartItems);
  cartData[itemid][size] = quantity
  setCartItems(cartData);
}
const getCartAmount = () =>{
  let totalAmount = 0;
  for(const items in  cartItems){
    let itemInfo = products.find((product) => product._id === items)
    for(const item in cartItems[items]){
      try {
        if( cartItems[items][item] > 0){
          totalAmount += itemInfo.price * cartItems[items][item]
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
  return totalAmount;
}

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    UpdateQuantity,
    getCartAmount
  };
  return (
    //Wrapping: {props.children}
    // includes any components or elements that are nested inside ShopContextProvider.
    // These nested components will have access to the context values.
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
