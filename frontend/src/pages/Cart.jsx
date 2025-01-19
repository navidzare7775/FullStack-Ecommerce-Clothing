import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, UpdateQuantity } =
    useContext(ShopContext);
  const [cartData, setCarData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCarData(tempData);
  }, [cartItems]);
  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <div>
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id,
          );
          return (
            <div
              key={item._id + index}
              className="grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 border-b border-t py-4 text-gray-700 sm:grid-cols-[4fr_2fr_0.5fr]"
            >
              <div className="flex items-start gap-5">
                <img
                  src={productData.image[0]}
                  alt="Product Image"
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-xs font-medium sm:text-lg">
                    <Link
                      className="cursor-pointer text-gray-700"
                      to={`/product/${productData._id}`}
                    >
                      {productData.name}
                    </Link>
                  </p>
                  <div className="mt-2 flex items-center gap-5">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="bg-slate-50 px-2 sm:px-3 sm:py-1">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : UpdateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value),
                      )
                }
                type="number"
                min={1}
                max={999}
                defaultValue={item.quantity}
                className="max-w-10 border px-1 py-1 sm:max-w-20 sm:px-2"
              />
              <img
                onClick={() => UpdateQuantity(item._id, item.size, 0)}
                className="mr-4 w-4 cursor-pointer sm:w-5"
                src={assets.bin_icon}
                alt="Delete"
              />
            </div>
          );
        })}
      </div>
      <div className="my-20 flex justify-end">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
