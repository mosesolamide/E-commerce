import React from 'react'
import { Link } from 'react-router-dom'

export default function NewArrival(){
    return(
        <section className="my-6 w-full"> 
            <div className="flex items-center gap-2">
                <div className="w-[13px] h-[27px] bg-[#DB4444] rounded-[2px]"></div>
                <span className="text-[#DB4444] font-medium text-sm">Featured</span>
            </div>
            <h1 className="my-4 font-bold text-xs md:text-xl">New Arrival</h1>
            <div className='grid grid-rows-[repeat(3,200px)] sm:grid-rows-[repeat(2,160px)] grid-cols-2 sm:grid-cols-4 gap-2 text-white max-w-[1050px] mx-auto'>
                <div className='bg-[#0D0D0D] pt-5 relative col-span-2 sm:row-span-2  rounded-[3px]'>
                    <img src="images/newArrival/one.png" alt="img of ps5" className='object-contain w-full h-full' />
                    <div className='w-[190px] absolute top-24 sm:top-48 right-0 left-8 bottom-0'>
                        <span>Playstation 5</span>
                        <p className='text-[0.5rem] font-light mt-1'>Black and White version of the PS5 coming out on sale.</p>
                        <Link className='text-[0.6rem] underline'>Shop Now</Link>
                    </div>
                </div>
                <div className='col-span-2 relative rounded-[3px]'>
                    <img src="images/newArrival/two.png" alt="" className='object-cover w-full h-full rounded-[3px]' />
                    <div className='w-[190px] absolute top-24 sm:top-15 right-0 left-8 bottom-0'>
                        <span>Women's Collection</span>
                        <p className='text-[0.5rem] font-light mt-1'>Featured woman collections that give you another vibe.</p>
                        <Link className='text-[0.6rem] underline'>Shop Now</Link>
                    </div>
                </div>
                <div className='col-span-1 bg-[#0D0D0D] relative flex justify-center items-center rounded-[3px]'>
                    <img src="images/newArrival/three.png" alt="" className='object-contain w-[70%] h-[70%]' />
                    <div className='w-[190px] absolute top-28 sm:top-18 left-4 right-0 bottom-0'>
                        <span>Speakers</span>
                        <p className='text-[0.5rem] font-light mt-1'>Amazon wireless speakers</p>
                        <Link className='text-[0.6rem] underline'>Shop Now</Link>
                    </div>
                </div>
                <div className='bg-[#0D0D0D] col-span-1 relative flex justify-center items-center rounded-[3px]'>
                <img src="images/newArrival/four.png" alt="" className='object-contain w-[70%] h-[70%]' />
                    <div className='w-[190px] absolute top-28 sm:top-18 left-4 bottom-0'>
                        <span>Perfume</span>
                        <p className='text-[0.5rem] font-light mt-1'>GUCCI INTENSE OUD EDP</p>
                        <Link className='text-[0.6rem] underline'>Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}