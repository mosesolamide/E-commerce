import React from 'react'
import Last from './Last'
import { PiTwitterLogo } from "react-icons/pi"
import { LuInstagram } from "react-icons/lu"
import { RiLinkedinLine } from "react-icons/ri"
import { FaStore, FaDollarSign, FaGift } from 'react-icons/fa';
import { TbMoneybag } from "react-icons/tb"


export default function About(){
    return(
        <>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-6 '>
                <div className='w-[350px] md:w-[400px]'>
                    <h1 className='font-medium text-2xl md:text-4xl '>Our Story</h1>
                    <p className='text-[9px] sm:text-xs md:text-sm font-normal my-4'>
                         Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh.
                         Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands
                         and serves 3 millioons customers across the region. 
                    </p>
                    <p className='text-[9px] sm:text-xs md:text-sm font-normal'>
                        Exclusive has more than 1 Million products to offer, growing at a very fast.
                         Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className='w-[350px] md:w-[400px]'>
                    <img src="images/SideImage.png" alt="" />
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-3 mt-8 max-w-[800px] mx-auto'>
                <div 
                    className="border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer"
                >
                    <div className='rounded-[50%] bg-[#b8b8b8] w-[45px] h-[45px] flex justify-center items-center'>
                        <div className='rounded-[50%] bg-black w-[35px] h-[35px] flex justify-center items-center'>
                            <FaStore size={15} className="text-white"/>
                        </div>
                    </div>
                    <h2 className='font-medium mt-2 mb-[-7px]'>10.5k</h2>
                    <span className='text-[7px]'>Sallers active our site</span>
                </div>
                <div 
                    className="p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer bg-[#DB4444] text-white"
                >
                     <div className='rounded-[50%] bg-[#dd8b8b] w-[45px] h-[45px] flex justify-center items-center'>
                        <div className='rounded-[50%] bg-white w-[35px] h-[35px] flex justify-center items-center'>
                            <FaDollarSign size={15} className="text-black"/>
                        </div>
                     </div>
                     <h2 className='font-medium mt-2 mb-[-7px]'>33k</h2>
                     <span className='text-[7px]'>Monthly Produduct Sale</span>
                </div>
                <div 
                    className="border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer"
                >
                    <div className='rounded-[50%] bg-[#b8b8b8] w-[45px] h-[45px] flex justify-center items-center'>
                         <div className='rounded-[50%] bg-black w-[35px] h-[35px] flex justify-center items-center'>
                            <FaGift size={15} className="text-white"/>
                        </div>
                    </div>
                    <h2 className='font-medium mt-2 mb-[-7px]'>45.5k</h2>
                    <span className='text-[7px]'>Customer active in our site</span>
                </div>
                <div 
                    className="border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer"
                >
                    <div className='rounded-[50%] bg-[#b8b8b8] w-[45px] h-[45px] flex justify-center items-center'>
                        <div className='rounded-[50%] bg-black w-[35px] h-[35px] flex justify-center items-center'>
                            <TbMoneybag size={15} className="text-white"/>
                        </div>
                    </div>
                    <h2 className='font-medium mt-2 mb-[-7px]'>25k</h2>
                    <span className='text-[7px]'>Anual gross sale in our site</span>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-10'>
                <article className="rounded-[2px]">
                    <div className='bg-[#F5F5F5] w-[200px] h-[250px] lg:w-[300px] lg:h-[350px] pt-3 rounded-b-[2px]'>
                        <img src="images/tom.png" alt="" className="object-contain w-full h-full" />
                    </div>
                    <h2 className='font-medium text-sm md:text-lg mb-[-8px] mt-[13px]'>Tom Cruise</h2>
                    <span className='text-[9px]'>Founder & Chairman</span>
                    <div className='flex gap-1 mt-[5px]'>
                        <PiTwitterLogo />
                        <LuInstagram />
                        <RiLinkedinLine />
                    </div>
                </article>
                <article className="rounded-[2px]">
                    <div className='bg-[#F5F5F5] w-[200px] h-[250px] lg:w-[300px] lg:h-[350px] pt-3 rounded-b-[2px]'>
                        <img src="images/emma.png" alt="" className="object-contain w-full h-full" />
                    </div>
                    <h2 className='font-medium text-sm md:text-lg mb-[-8px] mt-[13px]'>Emma Watson</h2>
                    <span className='text-[9px]'>Managing Director</span>
                    <div className='flex gap-1 mt-[5px]'>
                        <PiTwitterLogo />
                        <LuInstagram />
                        <RiLinkedinLine />
                    </div>
                </article>
                <article className="rounded-[2px]">
                    <div className='bg-[#F5F5F5] w-[200px] h-[250px] lg:w-[300px] lg:h-[350px] pt-3 rounded-b-[2px]'>
                        <img src="images/will.png" alt="" className="object-contain w-full h-full" />
                    </div>
                    <h2 className='font-medium text-sm md:text-lg mb-[-8px] mt-[13px]'>Will Smith</h2>
                    <span className='text-[9px]'>Product Designer</span>
                    <div className='flex gap-1 mt-[5px]'>
                        <PiTwitterLogo />
                        <LuInstagram />
                        <RiLinkedinLine />
                    </div>
                </article>
            </div>
            <Last />
        </>
    )
}