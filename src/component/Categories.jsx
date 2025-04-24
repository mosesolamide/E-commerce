import React from 'react'
import { GiSmartphone } from "react-icons/gi"
import { HiOutlineComputerDesktop } from "react-icons/hi2"
import { BsSmartwatch } from "react-icons/bs"
import { FiHeadphones } from "react-icons/fi"
import { MdOutlineCameraAlt } from "react-icons/md"
import { IoGameControllerOutline } from "react-icons/io5"


export default function Categories(){
    return(
        <section className='my-6 w-full max-w-7xl mx-auto '>
            <div className="flex items-center gap-2">
                <div className="w-[13px] h-[27px] bg-red-600 rounded-[2px]"></div>
                <span className="text-red-600 font-medium text-sm">Categories</span>
            </div>
            <div className="mt-4 font-bold flex flex-col">
                <h1 className="mr-14 text-xs md:text-xl">Browse By Categories</h1>
                <div className='flex flex-wrap justify-center gap-3 mt-5'>
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <GiSmartphone size={50} />
                    </div>
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <HiOutlineComputerDesktop size={50} />
                    </div>
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <BsSmartwatch size={50} />    
                    </div>
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <MdOutlineCameraAlt size={50} />
                    </div>
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <FiHeadphones size={50} />
                    </div >
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <IoGameControllerOutline size={50} />
                    </div>
                </div>
            </div>
        </section>
    )
}