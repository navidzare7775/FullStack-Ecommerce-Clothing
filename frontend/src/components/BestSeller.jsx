import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  // Only Run UseEffect When products is updated
  useEffect(() => {
    //  array.filter(function(currentValue, index, arr), thisValue)
    const bestproduct = products.filter((item) => {
      return item.bestseller === true;
    });
    setBestSeller(bestproduct.slice(0, 5));
  }, [products]);
  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Title text1={`BEST`} text2={`SELLERS`}></Title>
        <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
          Discover the top-selling items that our customers love! Shop our
          bestsellers now and find your new favorites among these highly-rated
          and popular picks.
        </p>
      </div>
      {/* Rendering BestSellers */}
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {/* Using Keys is a best practice for React for Performance Optimization */}
        {bestSeller.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
