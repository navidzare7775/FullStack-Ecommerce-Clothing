import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const LatestCollection = () => {
  // Destructures the object passed as props and retrieves
  // the value associated with the key 'products'.
  // Input<key> = 'products', output<value> = products array or object
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  // Only Run UseEffect When products is updated
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Title text1={`LATEST`} text2={`COLLECTIONS`} />
        <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
          Explore our latest collections, featuring contemporary designs and
          timeless classics crafted with the finest materials to elevate your
          style. Don&apos;t miss out on the season&apos;s trends—shop now and
          find your next favorite outfit!
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {/* Using Keys is a best practice for React for Performance Optimization */}
        {latestProducts.map((item) => (
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

export default LatestCollection;
