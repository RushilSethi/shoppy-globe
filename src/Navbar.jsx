import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-opacity-30 backdrop-blur-lg shadow-md fixed top-0 w-full z-10 px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-primary">ShoppyGlobe</div>

      <div className="flex items-center md:hidden">
        {/* Hamburger Menu */}
        <svg
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 cursor-pointer"
          onClick={toggleMenu}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              d="M2 12.32H22"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 18.32H22"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 6.32001H22"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      <div
        className={`absolute md:static top-full left-0 w-full md:w-auto md:flex md:flex-row flex-col items-center 
              space-y-4 md:space-y-0 md:space-x-6
              bg-white bg-opacity-70 backdrop-blur-lg md:bg-transparent md:backdrop-blur-none 
              border-t-2 md:border-none border-border-color 
              ${isOpen ? "flex" : "hidden"}`}
      >
        <div className="text-primary hover:text-accentPrimary transition duration-200 ease-in cursor-pointer">
          <Link to="/">Home</Link>
        </div>
        <div className="text-primary hover:text-accentSecondary transition duration-200 ease-in cursor-pointer">
        <Link to="/cart">Cart</Link>
        </div>
        <div className="text-primary hover:text-accentPrimary transition duration-200 ease-in cursor-pointer">
        <Link to="/orders-list">My Orders</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
