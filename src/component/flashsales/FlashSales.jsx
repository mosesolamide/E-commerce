import React,{useEffect,useState} from "react"
import {data} from './flashSale'
import { CiHeart } from "react-icons/ci"
import { FiEye } from "react-icons/fi"

export default function FlashSale(){

 // Set the end date/time for the flash sale (e.g., 3 days from now)
 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  
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
  const products = data.slice(0,5)

    return(
        <section className="my-4">
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
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-6 mt-5">
                {products.map( items => (
                    <article className="relative">
                        <div className="flex justify-center bg-[#F5F5F5] w-full py-6">
                            <div className="w-[70px] h-[70px] ">
                                <img src={`images/flash_sales/${items.img}`} alt="" className="w-full h-full object-contain" />  
                            </div>
                            <div className="flex justify-between w-[136px] absolute top-2">
                                <span  className="text-[9px] bg-[#DB4444] px-[.3rem] py-[.2rem] text-white rounded-[2px] font-[200] h-[16px] flex items-center justify-center">{items.discount}%</span>
                                <div className="flex flex-col gap-1">
                                    <span className="bg-white rounded-[50%] p-[2px]"><CiHeart size={14}/></span>
                                    <span className="bg-white rounded-[50%] p-[2px]"><FiEye size={14} /></span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[9px] font-medium">{items.name}</h2>
                            <div className="flex gap-3 text-[8px]">
                                <span className="text-[#DB4444]">${items.discountPrice}</span>
                                <span className="line-through text-black/50">${items.normalPrice}</span>   
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            {/* View all flash sales products */}
            <button className="bg-[#DB4444] text-white text-[9px] md:text-xs py-1 md:py-2 rounded-[2px] flex justify-center w-[140px] mx-auto my-4 cursor-pointer">View All Product</button>
        </section>
    )
}

// flex flex-wrap items-center justify-center