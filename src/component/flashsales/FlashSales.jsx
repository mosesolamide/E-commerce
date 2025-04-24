import React, { useEffect, useState, useContext, useCallback, useMemo } from "react"
import { data } from './flashSale'
import { UserContext } from "../../App"
import Product from "./Product"


export default function FlashSale(){
    const { addCart, user, goToLogin,addWishList } = useContext(UserContext)
    const [hoveredIndex,setHoveredIndex] = useState(null)
    const [allProductOpened,setAllProductOpened] = useState(false)
    // Set the end date/time for the flash sale (e.g., 3 days from now)
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    //logic for viewing more products   
    const products = useMemo(() => {
        const count = allProductOpened ? data.length : 5;
        return data.slice(0, count);
    }, [allProductOpened])
    
    function calculateTimeLeft() {
    // Set your flash sale end date (year, month-1, day, hour, minute)
    const flashSaleEnd = new Date()
    flashSaleEnd.setDate(flashSaleEnd.getDate() + 3) // 3 days from now
    flashSaleEnd.setHours(23, 59, 59, 0) // End at 11:59:59 PM

    const difference = flashSaleEnd - new Date()
        
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            totalSeconds: Math.floor(difference / 1000)
        }
    }
        useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    // Format numbers to always show 2 digits
    const formatNumber = (num) => num.toString().padStart(2, '0')

    const handleMouseEnter = useCallback((index) => {
        setHoveredIndex(index);
      }, [])
    
      const handleMouseLeave = useCallback(() => {
        setHoveredIndex(null);
      }, [])

    return(
        <section className="my-4 w-full"> 
            <div className="flex items-center gap-2">
                <div className="w-[13px] h-[27px] bg-[#DB4444] rounded-[2px]"></div>
                <span className="text-[#DB4444] font-medium text-sm">Today's</span>
            </div>
            <div className="mt-4 font-bold flex items-center">
                <h1 className="mr-14 text-xs md:text-xl">Flash Sales</h1>
                <div className="flex items-center gap-2">
                    {timeLeft.days > 0 && (
                        <div className="flex flex-col items-center">
                            <span className="text-[7px] sm:text-[8px] md:text-[10px]">Days</span>
                            <span className="text-xs sm:text-sm md:text-md">{formatNumber(timeLeft.days)}</span>
                        </div>
                    )}
                    <span className="text-[#DB4444] font-medium">:</span>
                    <div className="flex flex-col items-center">
                        <span className="text-[7px] sm:text-[8px] md:text-[10px]">Hours</span>
                        <span className="text-xs sm:text-sm md:text-md">{formatNumber(timeLeft.hours)}</span>
                    </div>
                    <span className="text-[#DB4444] font-medium">:</span>
                    <div className="flex flex-col items-center">
                        <span className="text-[7px] sm:text-[8px] md:text-[10px]">Minutes</span>
                        <span className="text-xs sm:text-sm md:text-md">{formatNumber(timeLeft.minutes)}</span>
                    </div>
                    <span className="text-[#DB4444] font-medium">:</span>
                    <div className="flex flex-col items-center">
                        <span className="text-[7px] sm:text-[8px] md:text-[10px]">Seconds</span>
                        <span className="text-xs sm:text-sm md:text-md">{formatNumber(timeLeft.seconds)}</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-5">
                {products.map( (item,index) => (
                    <Product 
                        key={index}
                        item={item}
                        isHovered={hoveredIndex === index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onAddCart={addCart}
                        user={user}
                        goToLogin={goToLogin}
                        addWishList={addWishList}
                    />
                ))}
            </div>
            {/* View all flash sales products */}
            <button 
                className="bg-[#DB4444] text-white text-[9px] md:text-xs py-1 md:py-2 rounded-[2px] 
                flex justify-center w-[140px] mx-auto my-4 cursor-pointer"
                onClick={() => setAllProductOpened(prev => !prev)}
            >
                {!allProductOpened? "View All Product" : "Close All Product"}
            </button>
        </section>
    )
}