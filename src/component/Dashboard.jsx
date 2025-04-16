import React, { useState, useEffect } from 'react'
import FlashSale from './flashsales/FlashSales'
import Categories from './Categories'
import BestProducts from './best_product/BestProducts'
import Explore from './explore/Explore'
import NewArrival from './NewArrival'
import { TbTruckDelivery } from "react-icons/tb"
import { SiAdguard } from "react-icons/si"
import { MdSupportAgent } from "react-icons/md"

export default function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    { img: "images/ads.png", alt: "Advertisement" },
    { img: "images/ads2.png", alt: "Flash Sale" }
  ]

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 w-full'>
          <div className='flex'>
            <nav>
              <ul className='grid grid-cols-3 md:grid-cols-1 text-[0.5em] md:text-[0.5em] lg:text-[0.7em] gap-3 mt-2'>
                <li>Woman's Fashion</li>
                <li>Men's Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health Beauty</li>
              </ul>
            </nav>
            <div className='hidden md:block border-l border-solid border-gray-300 sm:h-[259px] md:h-[275px] ml-[20px]'></div>
          </div>
          
          <div className='relative w-[80vw] h-[140px] sm:h-[200px] md:h-[260px] mt-3 '>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-2000 ease-out  ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={slide.img} 
                  alt={slide.alt} 
                  className='w-full h-full'
                />
              </div>
            ))}
          </div>
        </div>
        <FlashSale />
        <hr className='my-7 md:my-14 text-black/50'/>
        <Categories />
        <hr className='my-7 md:my-14 text-black/50'/>
        <BestProducts />
        <div className='my-10 bg-black px-5 md:pl-20 pt-6 pb-10 w-full'>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
                 place-items-center gap-20 sm:gap-30 md:gap-0'
            >
                <div>
                    <b className='text-[#00FF66] text-xs'>Categories</b>
                    <h1 className='text-white text-2xl md:text-4xl font-medium my-4'>Enhance Your Music Experience</h1>
                    <div className='flex gap-2 mb-5'>
                        <div className='w-10 h-10 bg-white rounded-[50%] flex flex-col items-center 
                             justify-center'
                          >
                            <span className='text-[10px] font-bold'>23</span>
                            <span className='text-[6px] font-medium'>Hours</span>
                        </div>
                        <div className='w-10 h-10 bg-white rounded-[50%] flex flex-col items-center 
                             justify-center'
                        >
                            <span className='text-[10px] font-bold'>05</span>
                            <span className='text-[6px] font-medium'>Days</span>
                        </div>
                        <div className='w-10 h-10 bg-white rounded-[50%] flex flex-col items-center 
                             justify-center'
                        >
                            <span className='text-[10px] font-bold'>59</span>
                            <span className='text-[6px] font-medium'>Minutes</span>
                        </div>
                        <div className='w-10 h-10 bg-white rounded-[50%] flex flex-col items-center 
                             justify-center'
                        >
                            <span className='text-[10px] font-bold'>35</span>
                            <span className='text-[6px] font-medium'>Seconds</span>
                        </div>
                    </div>
                    <button 
                      className='bg-[#00FF66] rounded-[2px] text-white text-xs py-2 md:py-3 px-4 md:px-6 cursor-pointer'
                    >
                      Buy Now!
                    </button>
                </div>
              <div className='relative w-[250px] h-[250px]'>
                  <div className='w-full h-full rounded-[50%] bg-white p-5 opacity-[17%] blur-lg absolute right-[25px]'></div>
                  <img src="images/speaker.png" alt="ads" className='absolute top-10 bottom-0 right-[25px] sm:right-8 w-full' />
              </div>
            </div>
        </div>
        <Explore />
        <NewArrival />
        <div className='my-15 flex flex-col sm:flex-row justify-center gap-7 sm:gap-20'>
            <div className='flex flex-col items-center gap-2'>
              <div className='rounded-[50%] bg-[#b8b8b8] w-[45px] h-[45px] flex justify-center items-center'>
                <div className='rounded-[50%] bg-black w-[35px] h-[35px] flex justify-center items-center'>
                  <TbTruckDelivery size={20} className='text-white'/>
                </div>
              </div>
              <span className='text-[7px] font-bold'>FREE AND FAST DELIVERY</span>
              <p className='text-[6px]'>Free delivery for all orders over $140</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <div className='rounded-[50%] bg-[#b8b8b8] w-[45px] h-[45px] flex justify-center items-center'>
                <div className='rounded-[50%] bg-black w-[35px] h-[35px] flex justify-center items-center'>
                  <MdSupportAgent size={20} className='text-white'/>
                </div>
              </div>
              <span className='text-[7px] font-bold'>24/7 CUSTOMER SERVICE</span>
              <p className='text-[6px]'>Friendly 24/7 customer support</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <div className='rounded-[50%] bg-[#b8b8b8] w-[45px] h-[45px] flex justify-center items-center'>
                <div className='rounded-[50%] bg-black w-[35px] h-[35px] flex justify-center items-center'>
                  <SiAdguard size={20} className='text-white'/>
                </div>
              </div>
              <span className='text-[7px] font-bold'>MONEY BACK GUARANTEE</span>
              <p className='text-[6px]'>We return money within 30days</p>
            </div>
        </div>
    </>
  )
}