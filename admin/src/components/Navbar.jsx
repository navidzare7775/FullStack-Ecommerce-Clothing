import { assets } from "../assets/assets";
const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img src={assets.logo} alt="Site Logo" className="w-[max(80px,6rem)]" />
      <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm" onClick={()=> setToken('')}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
