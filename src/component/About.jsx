import React from 'react'
import Last from './Last'

export default function About(){
    return(
        <>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-6'>
                <div className='w-[400px]'>
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
                <div className='w-[400px]'>
                    <img src="images/SideImage.png" alt="" />
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-3 mt-6 max-w-[800px] mx-auto'>
                <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'></div>
                <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'></div>
                <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'></div>
                <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'></div>
            </div>
            <Last />
        </>
    )
}