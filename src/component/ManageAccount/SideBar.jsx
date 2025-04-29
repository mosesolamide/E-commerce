import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBar(){
    return(
        <aside className='flex justify-around md:flex-col md:justify-center md:gap-5'>
            <ul className='text-xs md:text-sm flex flex-col gap-1'>
                <li className='font-medium'>Manage My Account</li>
                <li className='text-xs md:text-sm ml-5'>
                    <NavLink
                        className={({isActive}) => isActive ? 'text-red-600' : 'text-gray-500'}
                        to="/manageaccount"
                    >
                        My Profile
                    </NavLink>
                </li>
                <li className='text-xs md:text-sm ml-5'>
                    <NavLink
                        className={({isActive}) => isActive ? 'text-red-600' : 'text-gray-500'}
                        to="/addressbook"
                    >
                        Address Book
                    </NavLink>  
                </li>
                <li className='text-xs md:text-sm ml-5'>
                    <NavLink
                        className={({isActive}) => isActive ? 'text-red-600' : 'text-gray-500'}
                        to="/paymentoption"
                    >
                        My Payment Options
                    </NavLink>
                </li>
            </ul>

            <ul className='text-xs md:text-sm flex flex-col gap-1'>
                <li className='font-medium'>My Orders</li>
                <li className='text-xs md:text-sm ml-5'>
                    <NavLink
                        className={({isActive}) => isActive ? 'text-red-600' : 'text-gray-500'}
                        to="/myreturns"
                    >
                        My Returns
                    </NavLink>
                </li>
                <li className='text-xs md:text-sm ml-5'>
                    <NavLink
                        className={({isActive}) => isActive ? 'text-red-600' : 'text-gray-500'}
                        to="/mycancellation"
                    >
                        My Cancellations
                    </NavLink>  
                </li>
            </ul>
        </aside>
    )
}