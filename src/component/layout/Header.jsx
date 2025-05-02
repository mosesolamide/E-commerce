import React, { lazy, Suspense, memo, useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import { UserContext } from '../../App'

// Lazy load all icons
const IoIosMenu = lazy(() => import("react-icons/io").then(mod => ({ default: mod.IoIosMenu })))
const IoIosLogOut = lazy(() => import("react-icons/io").then(mod => ({ default: mod.IoIosLogOut })))
const IoCartOutline = lazy(() => import("react-icons/io5").then(mod => ({ default: mod.IoCartOutline })))
const FaUserCircle = lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaUserCircle })))
const FiUser = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiUser })))
const MdOutlineCancel = lazy(() => import("react-icons/md").then(mod => ({ default: mod.MdOutlineCancel })))
const CiStar = lazy(() => import("react-icons/ci").then(mod => ({ default: mod.CiStar })))
const CiHeart = lazy(() => import("react-icons/ci").then(mod => ({ default: mod.CiHeart })))
const PiHandbagThin = lazy(() => import("react-icons/pi").then(mod => ({ default: mod.PiHandbagThin })))

export default memo(function Header() {
    const { user, signout, isUserOpen, setIsUserOpen, cart, wishlist } = useContext(UserContext)

    const menuBar = () => {
        document.getElementById("menuDropBar").classList.toggle("hidden")
    };

    return (
        <header className="flex justify-around text-xs items-center py-3 border-b-[1px] border-gray-300 relative">
            <h1 className="font-medium text-xs md:text-sm">Exclusive</h1>
            <nav className="flex gap-10 md:gap-30">
                <span className="md:hidden flex justify-center items-center" onClick={menuBar} id="icon">
                    <Suspense fallback={<div>...</div>}>
                        <IoIosMenu size={15} />
                    </Suspense>
                </span>
                <ul className="hidden absolute top-8 md:top-0 px-2 py-1 rounded-2 bg-gray-100 md:bg-white md:sticky md:flex md:gap-6 md:items-center text-xs md:text-sm font-medium" id="menuDropBar">
                    <li className="mb-1 md:m-0">
                        <NavLink className={({ isActive }) => isActive ? 'md:border-b-[1.8px] border-gray-300' : ''} to="/">Home</NavLink>
                    </li>
                    <li className="mb-1 md:m-0">
                        <NavLink className={({ isActive }) => isActive ? 'md:border-b-[1.8px] border-gray-300' : ''} to="/contact">Contact</NavLink>
                    </li>
                    <li className="mb-1 md:m-0">
                        <NavLink className={({ isActive }) => isActive ? 'md:border-b-[1.8px] border-gray-300' : ''} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'md:border-b-[1.8px] border-gray-300' : ''} to="/signup">Signup</NavLink>
                    </li>
                </ul>
                <ul className="flex gap-2 items-center">
                    <li className="cursor-pointer">
                        {user && (
                            <div className="relative">
                                <Link to="/wishlist">
                                    <Suspense fallback={<div>...</div>}>
                                        <CiHeart className="text-[15px] sm:text-[20px] md:text-[25px]" />
                                    </Suspense>
                                    <span className="bg-[#DB4444] text-white text-[8px] md:text-[10px] rounded-[50%] w-[10px] md:w-[13px] h-[10px] md:h-[13px] absolute top-[-4px] md:top-0 right-[-2px] md:right-0 flex justify-center items-center">
                                        {wishlist.length}
                                    </span>
                                </Link>
                            </div>
                        )}
                    </li>
                    <li className="cursor-pointer relative">
                        {user && (
                            <div className="relative">
                                <Link to='/carts'>
                                    <Suspense fallback={<div>...</div>}>
                                        <IoCartOutline className="text-[15px] sm:text-[20px] md:text-[25px]" />
                                    </Suspense>
                                    <span className="bg-[#DB4444] text-white text-[8px] md:text-[10px] rounded-[50%] w-[10px] md:w-[13px] h-[10px] md:h-[13px] absolute top-[-4px] md:top-0 right-[-2px] md:right-0 flex justify-center items-center">
                                        {cart.length}
                                    </span>
                                </Link>
                            </div>
                        )}
                    </li>
                    <li onClick={() => setIsUserOpen(prev => !prev)} className="cursor-pointer text-[#DB4444]">
                        {
                            user && user.photoURL ? (
                                <img src={user.photoURL} alt="your image" className="rounded-[50%] w-[15px] sm:w-[20px] h-[15px] sm:h-[20px]" />
                            ) : user && !user.photoURL ? (
                                <Suspense fallback={<div>...</div>}>
                                    <FaUserCircle className="text-[15px] sm:text-[20px] md:text-[25px]" />
                                </Suspense>
                            ) : null
                        }
                    </li>
                </ul>
                <div className="relative">
                    <ul className={`absolute right-[3px] top-[39px] flex-col text-xs w-[130px] p-2 bg-black/30 backdrop-blur-md text-white rounded-2 z-50 ${isUserOpen ? "hidden" : ""}`}>
                        <li className="mb-3">
                            <Link className="flex gap-1 items-center" to="/manageaccount">
                                <Suspense fallback={<div>...</div>}>
                                    <FiUser size={13} />
                                </Suspense>
                                Manage Account
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link className="flex gap-1 items-center">
                                <Suspense fallback={<div>...</div>}>
                                    <PiHandbagThin size={13} />
                                </Suspense>
                                My Order
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link className="flex gap-1 items-center">
                                <Suspense fallback={<div>...</div>}>
                                    <MdOutlineCancel size={13} />
                                </Suspense>
                                My Cancellation
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link className="flex gap-1 items-center">
                                <Suspense fallback={<div>...</div>}>
                                    <CiStar size={13} />
                                </Suspense>
                                My Reviews
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="flex gap-1 items-center" onClick={signout}>
                                <Suspense fallback={<div>...</div>}>
                                    <IoIosLogOut size={13} />
                                </Suspense>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
});
