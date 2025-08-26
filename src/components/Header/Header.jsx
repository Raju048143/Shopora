import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../../Context/CartContext";
import {
  FaHome,
  FaPhoneAlt,
  FaAddressCard,
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import Logo from "../../assets/ShoporaLogo.png";
import useAuthStore from "../../store/useAuthstore";

function Header() {
  const user = useAuthStore((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const clearUser = useAuthStore((state) => state.clearUser);
  console.log("user data", user);
  const handleLogout = () => {
    clearUser();
    document.cookie = "token=; Max-Age=0";
    navigate("/");
  };
  const centerNav = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaAddressCard /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
    { name: "Login", path: "/login", icon: <FaSignInAlt /> },
    { name: "SignUp", path: "/signup", icon: <FaUserPlus /> },
  ];

  const rightNav = [
    { path: "/profile", icon: <FaUser /> },
    { path: "#", icon: <FaSearch /> },
    { path: "/wishlist", icon: <FaHeart /> },
    { path: "/cart", icon: <FaShoppingCart /> },
  ];

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Shopora Logo"
              className="h-10 w-auto rounded cursor-pointer"
            />
          </Link>
        </div>

        {/* Center nav (desktop) */}
        <nav className="hidden sm:flex items-center gap-6">
          {centerNav.map((item, index) => {
            if (user && (item.name === "SignUp" || item.name === "Login")) {
              return null;
            }

            return (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right nav (desktop) */}
        <nav className="hidden sm:flex items-center gap-6">
          { (!user || user?.role === "user" )&&
            rightNav.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <FaTachometerAlt /> Dashboard
            </Link>
          )}

          {user && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-300 hover:text-white ml-4"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-2xl text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile nav collapse */}
      {isOpen && (
        <nav className="sm:hidden flex flex-col gap-4 p-4 border-t border-gray-700 bg-gray-800">
          {centerNav.map((item, index) => {
            if (user && (item.name === "SignUp" || item.name === "Login")) {
              return null;
            }

            return (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

          {/* Right nav items */}
          {(!user || user?.role === "user") &&
            rightNav.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <FaTachometerAlt /> Dashboard
            </Link>
          )}

          {user && (
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white ml-4"
            >
              Logout
            </button>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
