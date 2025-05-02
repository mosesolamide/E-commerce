import React, { lazy, Suspense } from 'react'

// Lazy load each icon
const GiSmartphone = lazy(() => import('react-icons/gi').then(mod => ({ default: mod.GiSmartphone })))
const HiOutlineComputerDesktop = lazy(() => import('react-icons/hi2').then(mod => ({ default: mod.HiOutlineComputerDesktop })))
const BsSmartwatch = lazy(() => import('react-icons/bs').then(mod => ({ default: mod.BsSmartwatch })))
const FiHeadphones = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiHeadphones })))
const MdOutlineCameraAlt = lazy(() => import('react-icons/md').then(mod => ({ default: mod.MdOutlineCameraAlt })))
const IoGameControllerOutline = lazy(() => import('react-icons/io5').then(mod => ({ default: mod.IoGameControllerOutline })))


export default function Categories(){
    return(
        <section className='my-6 w-full max-w-7xl mx-auto '>
            <div className="flex items-center justify-center gap-2">
                <div className="w-[13px] h-[27px] bg-red-600 rounded-[2px]"></div>
                <span className="text-red-600 font-medium text-sm">Categories</span>
            </div>
            <div className="mt-4 font-bold flex flex-col">
                <h1 className="mr-14 text-xs md:text-xl">Browse By Categories</h1>
                <div className='flex flex-wrap justify-center items-center gap-3 mt-5'>
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <Suspense fallback={<div>...</div>}><GiSmartphone size={50} /></Suspense>
                    </div>
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <Suspense fallback={<div>...</div>}><HiOutlineComputerDesktop size={50} /></Suspense>
                    </div>
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <Suspense fallback={<div>...</div>}> <BsSmartwatch size={50} /></Suspense>
                    </div>
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <Suspense fallback={<div>...</div>}> <MdOutlineCameraAlt size={50} /></Suspense>
                    </div>
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <Suspense fallback={<div>...</div>}> <FiHeadphones size={50} /></Suspense>
                    </div >
                    <div className='border border-black/50 p-5 rounded-[2px] basis-[150px] sm:grow justify-items-center cursor-pointer'>
                        <Suspense fallback={<div>...</div>}> <IoGameControllerOutline size={50} /></Suspense>
                    </div>
                </div>
            </div>
        </section>
    )
}