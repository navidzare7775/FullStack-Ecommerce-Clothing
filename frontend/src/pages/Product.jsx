import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  /*Assuming a route pattern like /posts/:postId
   is matched by /posts/123 
   then params.postId will be "123".*/
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(item);
        setImage(item.image[0]);
        // Stop the Loop
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="bortder-t-2 pt-10 opacity-100 transition-opacity duration-500 ease-in">
      {/*----------------------- Product Data/Features -----------------------*/}
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-12">
        {/*----------------------- Product Images -----------------------*/}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex w-full justify-between overflow-x-auto sm:w-[18.7%] sm:flex-col sm:justify-normal sm:overflow-y-auto">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] flex-shrink-0 cursor-pointer sm:mb-3 sm:w-full"
                alt="Product Image"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="h-auto w-full" src={image} alt="Product Image" />
          </div>
        </div>
        {/* ----------------------- Product info    -----------------------*/}
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium">{productData.name}</h1>
          <div className="mt-2 flex items-center gap-1">
            <img src={assets.star_icon} alt="Rating Icon" className="w-3" />
            <img src={assets.star_icon} alt="Rating Icon" className="w-3" />
            <img src={assets.star_icon} alt="Rating Icon" className="w-3" />
            <img src={assets.star_icon} alt="Rating Icon" className="w-3" />
            <img
              src={assets.star_dull_icon}
              alt="Rating Icon"
              className="w-3"
            />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-2 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="my-8 flex flex-col gap-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => {
                return (
                  <button
                    onClick={() => setSize(item)}
                    className={`border bg-gray-200 px-2 py-2 ${item === size ? `border-orange-500` : ``}`}
                    key={index}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          {/* We Need to Add this to Global context - using global addToCart Function */}
          <button onClick={() => addToCart(productData._id, size)} className="bg-black px-8 py-3 text-sm text-white hover:bg-gray-900 active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="mt-5 flex flex-col gap-1 text-sm text-gray-500">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* ------------ Description & Review Section ------------*/}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An E-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      {/* ------------ Display related products ------------*/}
      <RelatedProducts
        id={productData._id}
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
