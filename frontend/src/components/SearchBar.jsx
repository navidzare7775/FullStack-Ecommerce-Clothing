import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [loc, setloc] = useState(useLocation());
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== loc.pathname) {
      setShowSearch(false);
      setloc(location);
    }
  }, [location]);
  return showSearch ? (
    <div className="border-b border-t bg-gray-50 text-center">
      <div className="mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-gray-400 px-5 py-2 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-inherit text-sm outline-none"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search_icon} alt="Search Icon" className="w-4" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt="Cancel Search"
        className="inline w-3 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
