import { useState } from 'react';
import Headroom from 'react-headroom';
import {
  FaMoon,
  FaSearch,
  FaSmile,
  FaStar,
  FaSun,
  FaUser,
  FaUserAlt,
} from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Dropdown from 'rc-dropdown';
import { FaArrowDown, FaBagShopping } from 'react-icons/fa6';
import { GiSelfLove } from 'react-icons/gi';
import { IoIosLogOut } from 'react-icons/io';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(true);

  const menuItems1 = [
    <Link
      to="/manage-account"
      key="1"
      className="py-1 w-full px-12 hover:text-red-600 hover:underline duration-300 flex items-center gap-2"
    >
      <FaSmile className="text-slate-500 text-xl" /> Manage My Account
    </Link>,
    <Link
      to="/manage-account/my-orders"
      key="1"
      className="py-1 w-full px-12 hover:text-red-600 hover:underline duration-300 flex items-center gap-2"
    >
      {' '}
      <FaBagShopping className="text-slate-500 text-xl" />
      My Orders
    </Link>,
    <Link
      to="/manage-account/my-wishlist-store"
      key="1"
      className="py-1 w-full px-12 hover:text-red-600 hover:underline duration-300 flex items-center gap-2"
    >
      {' '}
      <GiSelfLove className="text-slate-500 text-xl" />
      My Wishlist stores
    </Link>,
    <Link
      to="/manage-account/my-reviews"
      key="1"
      className="py-1 w-full px-12 hover:text-red-600 hover:underline duration-300 flex items-center gap-2"
    >
      <FaStar className="text-slate-500 text-xl" />
      My Reviews
    </Link>,

    <button
      key="5"
      className="py-1 w-full px-12 hover:text-red-600 hover:underline duration-300 flex items-center gap-2"
      onClick={() => logOut()}
    >
      <IoIosLogOut className="text-slate-500 text-xl hover:-rotate-45" />
      Log out
    </button>,
  ];
  const menu1 = (
    <div className="flex flex-col rounded-xl items-center bg-gray-300 text space-y-2 py-4">
      {menuItems1}
    </div>
  );

  return (
    <div>
      <Headroom
        className="fixed w-full h-15 z-20"
        style={{
          webkitTransition: 'all .5s ease-in-out',
          mozTransition: 'all .5s ease-in-out',
          oTransition: 'all .5s ease-in-out',
          transition: 'all .5s ease-in-out',
        }}
      >
        {/* main div */}

        <div className="flex items-center justify-between px-4 lg:px-24 bg-rose-600 text-white font-nunito  py-2">
          <Link to="/" end={'true'}>
            <h1 className="font-sevilana text-2xl md:text-4xl  text-slate-100">
              Kitty-Shops
            </h1>
          </Link>
          <div className="flex items-center gap-0">
         <Input placeholder="Search Here*" />
            <Button className="pt-2">
              <FaSearch />
            </Button>
          </div>
          <div className="flex items-center">
            {user ? (
              <Dropdown overlay={menu1}>
                <button className="w-full flex md:px-5 px-2 py-1 rounded-full bg-slate-200/40 items-center gap-1">
                  <FaUser className="mr-2" />
                  <div className="text-balance flex flex-col justify-start text-[9px]">
                    <span>{user?.displayName}</span>
                    <span className="text-[10px]">order & Account.</span>
                  </div>
                  <span>
                    <FaArrowDown className="text-[10px]" />
                  </span>
                </button>
              </Dropdown>
            ) : (
              <div className="flex items-center">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex items-center gap-2 md:px-4 px-2 py-2 rounded-lg hover:bg-[#d8b1bd] duration-300'
                      : 'flex items-center gap-2 md:px-4 px-2 py-2 rounded-lg hover:bg-[#d8b1bd] duration-300'
                  }
                >
                  <FaUserAlt />{' '}
                  <span className="font-semibold text-sm font-nunito md:ml-2">
                    Login
                  </span>
                </NavLink>
                <div className="px-2">|</div>

                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex items-center gap-2 md:px-4 px-2 py-2 rounded-lg hover:bg-[#d8b1bd] duration-300'
                      : 'flex items-center gap-2 md:px-4 px-2 py-2 rounded-lg hover:bg-[#d8b1bd] duration-300'
                  }
                >
                  Register
                </NavLink>
              </div>
            )}

            <div className="text-xl mx-2" onClick={() => setTheme(!theme)}>
              {theme ? <FaSun /> : <FaMoon />}
            </div>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'duration-300 rounded-lg md:px-5 py-1 bg-slate-500/60 relative'
                  : 'duration-300 rounded-lg md:px-5 py-1 hover:bg-slate-500/60 relative'
              }
              to="/cart"
            >
              <HiOutlineShoppingCart className="text-2xl" />
              <span className="absolute -top-[5px] text-black right-[10px] text-[12px] border rounded-full p-[2px] h-5 w-5 items-center  bg-white font-bold">
                02
              </span>
            </NavLink>
          </div>
        </div>
      </Headroom>
    </div>
  );
};

export default Navbar;
