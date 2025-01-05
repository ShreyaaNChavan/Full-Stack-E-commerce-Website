import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets'; // Ensure assets file is correct
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false); // Sidebar visibility state
  const { setShowSearch, getCartCount ,navigate ,token ,setToken ,setCartItem } = useContext(ShopContext)

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItem({});
    
  };

  // Add or remove `overflow-hidden` class to the body based on sidebar visibility
  React.useEffect(() => {
    if (visible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [visible]);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo */}
      <Link to='/'><img src={assets.logo} className="w-36" alt="logo" /></Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="search" />

        {/* Profile Dropdown */}
        <div className="relative group">
          
          <img onClick={()=>token ? null : navigate('/login')} className="w-5 cursor-pointer" src={assets.profile_icon} alt="profile" />
          
          {/*Dropdown Menu */}
          {
            token &&
            <div className="absolute hidden group-hover:block right-0 pt-4 dropdown-menu">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 shadow-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
          }
        </div>

        {/* Cart Icon with Badge */}
        <Link to="/cart" className="relative group">
          {/* Cart Icon */}
          <img
            src={assets.cart_icon}
            className="w-8 min-w-8 transition-transform duration-200 ease-in-out group-hover:scale-110"
            alt="cart"
          />
          {/* Notification Badge */}
          <p
            className="absolute -top-2 -right-2 text-center bg-red-600 text-white text-[12px] font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md border-2 border-white group-hover:bg-red-700 transition-all"
          >
            {getCartCount()}
          </p>
        </Link>


        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu"
        />
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-transform duration-300 ease-in-out ${visible ? 'translate-x-0 w-2/3' : 'translate-x-full w-0'
          } overflow-hidden`}
      >
        <div className="flex flex-col p-5">
          {/* Close Button */}
          <button
            className="self-end mb-5 text-gray-700"
            onClick={() => setVisible(false)}
          >
            Close ✕
          </button>

          {/* Sidebar Links */}
          <NavLink
            to="/"
            className="mb-3 text-gray-700 hover:text-black"
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            className="mb-3 text-gray-700 hover:text-black"
            onClick={() => setVisible(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            className="mb-3 text-gray-700 hover:text-black"
            onClick={() => setVisible(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="mb-3 text-gray-700 hover:text-black"
            onClick={() => setVisible(false)}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
