import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import style from "./Collection.module.css";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value))
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value))
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyfilter = () => {
    // Deep Copy
    let productsCopy = structuredClone(products);
    if(showSearch && search){
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    // Deep Copy
    let filterproductsCopy = structuredClone(filterProducts);
    switch (sortType) {
      case "Low-High":
        /** Array.sort() -> FROM VS CODE DOC:
         * param compareFn
          Function used to determine the order of the elements.
          It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise.
          If omitted, the elements are sorted in ascending, ASCII character order.
          
          If the result is negative, a is sorted before b. (Ascending Order)
          If the result is positive, b is sorted before a. (Descending Order)
          If the result is 0, no changes are done with the sort order of the two values.
          [11,2,22,1].sort((a, b) => a - b)
         */
        setFilterProducts(filterproductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "High-Low":
        setFilterProducts(
          filterproductsCopy.sort((a, b) => a.price - b.price).reverse(),
        );
        break;
      default:
        applyfilter();
        break;
    }
  };

  // Use Effect Always runs on Component Mount so need for extra logic to load
  // Products when the page is loaded
  useEffect(applyfilter, [category, subCategory, products, showSearch, search]);
  useEffect(sortProduct, [sortType]);

  return (
    <div className="flex flex-col gap-1 border-t pt-10 sm:flex-row sm:gap-10">
      {/* Left Side */}
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 flex cursor-pointer items-center gap-2 text-xl"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="Dropdown"
          />
        </p>
        {/* Category Filter */}
        <div
          className={`mt-6 border border-gray-300 py-3 pl-5 ${showFilter ? `` : `hidden`} bg-gray-100 sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex items-center gap-2">
              <label className={`${style.checkbox} ${style.bounce}`}>
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCategory}
                />{" "}
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
              </label>
              Men
            </p>
            <p className="flex items-center gap-2">
              <label className={`${style.checkbox} ${style.bounce}`}>
                <input
                  className={`w-3 ${style.checkbox}`}
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCategory}
                />{" "}
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
              </label>
              Women
            </p>
            <p className="flex items-center gap-2">
              <label className={`${style.checkbox} ${style.bounce}`}>
                <input
                  className={`w-3 ${style.checkbox}`}
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCategory}
                />{" "}
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
              </label>
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div
          className={`my-5 border border-gray-300 py-3 pl-5 ${showFilter ? `` : `hidden`} bg-gray-100 sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex items-center gap-2">
              <label className={`${style.checkbox} ${style.bounce}`}>
                <input
                  className={`w-3 ${style.checkbox}`}
                  type="checkbox"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />{" "}
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
              </label>
              Topwear
            </p>
            <p className="flex items-center gap-2">
              <label className={`${style.checkbox} ${style.bounce}`}>
                <input
                  className={`w-3 ${style.checkbox}`}
                  type="checkbox"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />{" "}
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
              </label>
              Bottomwear
            </p>
            <p className="flex items-center gap-2">
              <label className={`${style.checkbox} ${style.bounce}`}>
                <input
                  className={`w-3 ${style.checkbox}`}
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />{" "}
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
              </label>
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      {/*In summary, flex: 1 1 0% makes the flex item fully flexible, allowing it to grow and shrink as needed within the container, starting with an initial basis of 0%.
       This means the item's size will be calculated based on its content, but the flexibility (grow and shrink) will take precedence. */}
      <div className="flex-1">
        <div className="mb-4 flex justify-between text-base sm:text-2xl">
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 px-2 text-sm"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="Low-High">Sort by: Low to High</option>
            <option value="High-Low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Show All Products - Map Products */}
        <div className="md:gird-cols-3 grid grid-cols-2 gap-4 gap-y-6 lg:grid-cols-4">
          {/* Using Keys is a best practice for React for Performance Optimization */}
          {filterProducts.map((item) => (
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
    </div>
  );
};

export default Collection;
