import React from "react"
import { TbTruckDelivery } from "react-icons/tb"
import { SiAdguard } from "react-icons/si"
import { MdSupportAgent } from "react-icons/md"

export default function Last(){
    return(
        <div className='my-15 flex flex-col sm:flex-row justify-center gap-7 sm:gap-20'>
            <div className='flex flex-col items-center gap-2'>
            <div className='rounded-[50%] bg-[#b8b8b8] w-[45px] h-[45px] flex justify-center items-center'>
                <div className='rounded-[50%] bg-black w-[35px] h-[35px] flex justify-center items-center'>
                <TbTruckDelivery size={20} className='text-white'/>
                </div>
            </div>
            <span className='text-xs md:text-sm font-medium'>FREE AND FAST DELIVERY</span>
            <p className='text-xs'>Free delivery for all orders over $140</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
            <div className='rounded-[50%] bg-[#b8b8b8] w-[45px] h-[45px] flex justify-center items-center'>
                <div className='rounded-[50%] bg-black w-[35px] h-[35px] flex justify-center items-center'>
                <MdSupportAgent size={20} className='text-white'/>
                </div>
            </div>
            <span className='text-xs md:text-sm font-medium'>24/7 CUSTOMER SERVICE</span>
            <p className='text-xs'>Friendly 24/7 customer support</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
            <div className='rounded-[50%] bg-[#b8b8b8] w-[45px] h-[45px] flex justify-center items-center'>
                <div className='rounded-[50%] bg-black w-[35px] h-[35px] flex justify-center items-center'>
                <SiAdguard size={20} className='text-white'/>
                </div>
            </div>
            <span className='text-xs md:text-sm font-medium'>MONEY BACK GUARANTEE</span>
            <p className='text-xs'>We return money within 30days</p>
            </div>
        </div>
    )
}