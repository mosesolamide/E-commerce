import React from 'react'
import { RiFacebookLine } from "react-icons/ri"
import { CiTwitter } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"
import { RiLinkedinLine } from "react-icons/ri"

export default function Footer(){
    return(
        <footer className='bg-black text-white grid place-items-center py-4 px-3 w-full'>
           <div className='grid grid-cols-2 md:grid-cols-5 gap-8'>
                <ul>
                        <li className='font-medium text-xs mb-3'>Exclusive</li>
                        <li className='text-[0.5em] md:text-[0.5em] font-bold mb-2'>Subscribe</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>Get 10% off your first order</li>
                        <li><input type="text" placeholder='Enter your email' className='text-[0.4em] border px-1 py-2 indent-1 rounded-[2px]' /></li>
                    </ul>
                    <ul>
                        <li className='font-medium text-xs mb-3'>Support</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>exclusive@gmail.com</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>+88015-88888-9999</li>
                    </ul>
                    <ul>
                        <li className='font-medium text-xs mb-3'>Account</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>My Account</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>Login / Register</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>Cart</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>Wishlist</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>Shop</li>
                    </ul>
                    <ul>
                        <li className=' font-medium text-xs mb-3'>Quick Link</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>Privacy Policy</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>Terms Of Use</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>FAQ</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>Contact</li>
                    </ul>
                    <ul>
                        <li className=' font-medium text-xs mb-3'>Download App</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>Google</li>
                        <li className='text-[0.4em] md:text-[0.5em] mb-2'>Appstore</li>
                        <div className='flex gap-1'>   
                            <RiFacebookLine size={17} />
                            <CiTwitter size={17} />
                            <FaInstagram size={17}/>
                            <RiLinkedinLine size={17} />
                        </div>
                    </ul>
           </div>
        </footer>
    )
}