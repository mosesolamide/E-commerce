import React , { lazy, Suspense }from "react"
import { FaUserCircle } from "react-icons/fa"
import { NavLink,Link } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../../App'
import { FiUser } from "react-icons/fi"
import { MdOutlineCancel } from "react-icons/md"
import { CiStar,CiHeart } from "react-icons/ci"
import { PiHandbagThin } from "react-icons/pi"


export default function Header(){
    const { user,signout,isUserOpen,setIsUserOpen,cart,wishlist } = useContext(UserContext)
    const IoIosMenu = lazy(() => import("react-icons/io").then(module => ({ default: module.IoIosMenu })))
    const IoIosLogOut = lazy(() => import("react-icons/io").then(module => ({ default: module.IoIosLogOut })))
    const IoCartOutline = lazy(() => import("react-icons/io5").then(module => ({ default: module.IoCartOutline })))


    const menuBar = () =>{
        document.getElementById("menuDropBar").classList.toggle("hidden")
    }

    return(
        <header className="flex justify-around text-xs items-center py-3 border-b-[1px] border-gray-300 relative">
            <h1 className="font-medium text-xs md:text-sm">Exclusive</h1>
            <nav className="flex gap-10 md:gap-30">
                <span 
                    className="md:hidden flex justify-center items-center"
                    onClick={menuBar}
                    id="icon"
                >
                    <Suspense fallback={<div>....</div>}>
                     < IoIosMenu size={15}/>
                    </Suspense>
                </span>
                <ul 
                    className="hidden absolute top-8 md:top-0  px-2 py-1 rounded-2 
                    bg-gray-100 md:bg-white md:sticky md:flex md:gap-6 md:items-center text-xs md:text-sm font-medium" 
                    id="menuDropBar"
                >
                    <li className="mb-1 md:m-0">
                        <NavLink 
                            className={({ isActive }) => (isActive ? 'md:border-b-[1.8px] border-gray-300' : '')} 
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="mb-1 md:m-0">
                        <NavLink
                            className={({ isActive }) => (isActive ? 'md:border-b-[1.8px] border-gray-300' : '')} 
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                    
                    <li className="mb-1 md:m-0">
                         <NavLink 
                            className={({ isActive }) => (isActive ? 'md:border-b-[1.8px] border-gray-300' : '')} 
                            to="/about"
                         >
                            About
                         </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'md:border-b-[1.8px] border-gray-300' : '')} 
                            to="/signup"
                        >
                            Signup
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex gap-2 items-center">
                    <li className="cursor-pointer">
                        {user && (
                            <div className="relative">
                                <Link to="/wishlist">
                                    <CiHeart className="text-[15px] sm:text-[20px] md:text-[25px]"/>
                                    <span
                                        className="bg-[#DB4444] text-white text-[8px] md:text-[10px] rounded-[50%]
                                        w-[10px] md:w-[13px] h-[10px] md:h-[13px] absolute top-[-4px] md:top-0 right-[-2px] md:right-0 flex justify-center items-center"
                                    >
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
                                    <Suspense fallback={<div>....</div>}>
                                        <IoCartOutline className="text-[15px] sm:text-[20px] md:text-[25px]" />
                                    </Suspense>
                                    <span
                                        className="bg-[#DB4444] text-white text-[8px] md:text-[10px] rounded-[50%]
                                        w-[10px] md:w-[13px] h-[10px] md:h-[13px] absolute top-[-4px] md:top-0 right-[-2px] md:right-0 flex justify-center items-center"
                                    >
                                        {cart.length}
                                    </span>
                                </Link>
                            </div>
                            )}
                    </li>
                    <li onClick={ () => setIsUserOpen(prev => !prev) } className="cursor-pointer text-[#DB4444]">
                        {
                            user && user.photoURL ? 
                            <img src={user.photoURL} alt="your image" className="rounded-[50%] w-[15px] sm:w-[20px] h-[15px] sm:h-[20px]" /> 
                            : user && !user.photoURL? <FaUserCircle className="text-[15px] sm:text-[20px] md:text-[25px]" /> : null
                        }
                    </li>
                </ul>
                <div className="relative">
                        <ul 
                            className={`absolute right-[3px] top-[39px] flex-col 
                            text-xs w-[130px] p-2 bg-black/30 backdrop-blur-md 
                            text-white rounded-2 z-50 ${isUserOpen? "hidden" : "" }`}
                        >
                            <li className="mb-3">
                                <Link
                                    className="flex gap-1 items-center"
                                    to="/manageaccount"
                                >
                                    <FiUser size={13} /> Manage Account
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                className="flex gap-1 items-center"
                                >
                                    <PiHandbagThin size={13} />My Order
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    className="flex gap-1 items-center"
                                >
                                    <MdOutlineCancel size={13} />My Cancellation
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                className="flex gap-1 items-center"
                                >
                                    <CiStar size={13} />My Reviews
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link
                                    className="flex gap-1 items-center"
                                    onClick={signout}
                                >
                                    <Suspense fallback={<div>....</div>}>
                                         <IoIosLogOut size={13} />
                                    </Suspense>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </header>
    )
}