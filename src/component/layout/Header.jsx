import React, { lazy, Suspense, memo, useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../../App";

// Lazy load icons
const IoIosMenu = lazy(() => import("react-icons/io").then(mod => ({ default: mod.IoIosMenu })));
const IoIosLogOut = lazy(() => import("react-icons/io").then(mod => ({ default: mod.IoIosLogOut })));
const IoCartOutline = lazy(() => import("react-icons/io5").then(mod => ({ default: mod.IoCartOutline })));
const FaUserCircle = lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaUserCircle })));
const FiUser = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiUser })));
const MdOutlineCancel = lazy(() => import("react-icons/md").then(mod => ({ default: mod.MdOutlineCancel })));
const CiStar = lazy(() => import("react-icons/ci").then(mod => ({ default: mod.CiStar })));
const CiHeart = lazy(() => import("react-icons/ci").then(mod => ({ default: mod.CiHeart })));
const PiHandbagThin = lazy(() => import("react-icons/pi").then(mod => ({ default: mod.PiHandbagThin })));

export default memo(function Header() {
  const { user, signout, cart, wishlist } = useContext(UserContext);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-10 py-4 border-b border-gray-300 relative">
      
      {/* Logo */}
      <Link to="/" className="font-bold text-base md:text-lg">
        Exclusive
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-gray-600" : ""}>Home</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "border-b-2 border-gray-600" : ""}>Contact</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "border-b-2 border-gray-600" : ""}>About</NavLink>
        {!user && <NavLink to="/signup" className={({ isActive }) => isActive ? "border-b-2 border-gray-600" : ""}>Signup</NavLink>}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Wishlist */}
        {user && (
          <Link to="/wishlist" className="relative">
            <Suspense fallback={<div>...</div>}>
              <CiHeart className="text-[20px] md:text-[24px]" />
            </Suspense>
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex justify-center items-center">
                {wishlist.length}
              </span>
            )}
          </Link>
        )}

        {/* Cart */}
        {user && (
          <Link to="/carts" className="relative">
            <Suspense fallback={<div>...</div>}>
              <IoCartOutline className="text-[20px] md:text-[24px]" />
            </Suspense>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex justify-center items-center">
                {cart.length}
              </span>
            )}
          </Link>
        )}

        {/* Profile */}
        {user && (
          <div className="relative">
            <button onClick={() => setIsUserOpen(prev => !prev)} className="cursor-pointer">
              {user.photoURL ? (
                <img src={user.photoURL} alt="profile" className="w-6 h-6 rounded-full" />
              ) : (
                <Suspense fallback={<div>...</div>}>
                  <FaUserCircle className="text-[22px] text-[#DB4444]" />
                </Suspense>
              )}
            </button>

            {/* Dropdown */}
            {!isUserOpen ? null : (
              <ul className="absolute right-0 top-6 flex-col text-xs w-[150px] p-2 bg-black/80 backdrop-blur-md text-white rounded z-50 space-y-2">
                <li>
                  <Link className="flex items-center gap-2" to="/manageaccount">
                    <Suspense fallback={<div>...</div>}><FiUser size={14} /></Suspense>
                    Manage Account
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to="/orders">
                    <Suspense fallback={<div>...</div>}><PiHandbagThin size={14} /></Suspense>
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to="/cancellations">
                    <Suspense fallback={<div>...</div>}><MdOutlineCancel size={14} /></Suspense>
                    My Cancellations
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to="/reviews">
                    <Suspense fallback={<div>...</div>}><CiStar size={14} /></Suspense>
                    My Reviews
                  </Link>
                </li>
                <li>
                  <button onClick={signout} className="flex items-center gap-2 w-full text-left">
                    <Suspense fallback={<div>...</div>}><IoIosLogOut size={14} /></Suspense>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}

        {/* Mobile Menu */}
        <button onClick={() => setIsMenuOpen(prev => !prev)} className="md:hidden">
          <Suspense fallback={<div>...</div>}>
            <IoIosMenu size={22} />
          </Suspense>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-100 p-4 flex flex-col gap-4 text-sm font-medium md:hidden">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          {!user && <NavLink to="/signup" onClick={() => setIsMenuOpen(false)}>Signup</NavLink>}
        </ul>
      )}
    </header>
  );
});
