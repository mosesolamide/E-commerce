import React, { useState, useEffect } from 'react'
import FlashSale from './flashsales/FlashSales'
import Categories from './Categories'
import BestProducts from './best_product/BestProducts'

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
              <ul className='grid grid-cols-3 md:grid-cols-1 text-[0.5em] md:text-[0.6] lg:text-[0.8em] gap-3 mt-2'>
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
            <div className='hidden md:block border-l border-solid border-gray-300 h-[290px] ml-[20px]'></div>
          </div>
          
          <div className='relative w-[75vw] sm:w-[80vw] h-[30vh] sm:h-[39vh] md:h-[48vh] lg:h-[54vh] mt-3'>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-2000 ease-out ${
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
    </>
  )
}