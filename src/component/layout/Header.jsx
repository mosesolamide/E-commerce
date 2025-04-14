import React from "react"
import { IoCartOutline } from "react-icons/io5"
import { FaUserCircle } from "react-icons/fa"
import { IoMdArrowDropright } from "react-icons/io"
import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../../App'
import { IoIosLogOut } from "react-icons/io"
import { FiUser } from "react-icons/fi"
import { MdOutlineCancel } from "react-icons/md"
import { CiStar } from "react-icons/ci"
import { PiHandbagThin } from "react-icons/pi"
import { Link } from "react-router-dom"
import { CiHeart } from "react-icons/ci"


export default function Header(){
    const { user,signout,isUserOpen,setIsUserOpen } = useContext(UserContext)

    const menuBar = () =>{
        document.getElementById("menuDropBar").classList.toggle("hidden")
        document.getElementById("icon").classList.toggle("rotate-[90deg]")
    }

    return(
        <header className="flex justify-around text-xs items-center py-3 border-b-[1px] border-gray-300 relative">
            <h1 className="font-medium">Exclusive</h1>
            <nav className="flex gap-10 md:gap-20">
                <span 
                    className="md:hidden flex justify-center items-center"
                    onClick={menuBar}
                    id="icon"
                >
                    <IoMdArrowDropright size={15}/>
                </span>
                <ul 
                    className="hidden absolute top-8 md:top-0  px-2 py-1 rounded-[2px] 
                    bg-gray-100 md:bg-white md:sticky md:flex md:gap-6 md:items-center text-[9px] md:text-xs" 
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
                <ul className="flex gap-1 items-center">
                    <li><input type="search" className="bg-gray-100 text-[6px] md:text-[9px] py-[3px] w-[100px] md:w-[150px] rounded-[1px] indent-1.5" placeholder="What are you looking for?" /></li>
                    <li className="cursor-pointer">{user? <CiHeart size={15}/> : ""}</li>
                    <li className="cursor-pointer">{user? <IoCartOutline size={15}/> : ""}</li>
                    <li onClick={ () => setIsUserOpen(prev => !prev) } className="cursor-pointer text-[#DB4444]">
                        {
                            user && user.photoURL ? 
                            <img src={user.photoURL} alt="your image" className="rounded-[50%] w-[15px] h-[15px]" /> 
                            : user && !user.photoURL? <FaUserCircle size={15} /> : null
                        }
                    </li>
                </ul>
                <div className="relative">
                        <ul 
                            className={`absolute right-[3px] top-[39px] flex-col 
                            text-[0.5rem] md:text-[0.6rem] w-[115px] p-2 bg-black/30 backdrop-blur-md 
                            text-white rounded-[2px] z-50 ${isUserOpen? "hidden" : "" }`}
                        >
                            <li className="mb-3">
                                <Link
                                    className="flex gap-1 items-center"
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
                                    <IoIosLogOut size={13} />Logout
                                </Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </header>
    )
}