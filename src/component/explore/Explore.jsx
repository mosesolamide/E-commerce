import React,{ useState } from "react"
import { data } from './explores'
import { CiHeart } from "react-icons/ci"
import { FiEye } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function Explore(){
 const [hoveredIndex,setHoveredIndex] = useState(null)
 const [allProductOpened,setAllProductOpened] = useState(false)

  //logic for viewing more products   
  let numberOfPage = allProductOpened? data.length : 5
  const products = data.slice(0,numberOfPage)

    return (
        <section className="my-6"> 
            <div className="flex items-center gap-2">
                <div className="w-[13px] h-[27px] bg-[#DB4444] rounded-[2px]"></div>
                <span className="text-[#DB4444] font-medium text-sm">Our Products</span>
            </div>
            <h1 className="my-4 font-bold text-xs md:text-xl">Explore Our Products</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-6 mt-5">
                {products.map( (items,index) => (
                    <Link
                        to={`/previewProduct/${items.id}`}
                        state={items}
                        key={index}
                    >
                        <article className="relative">
                            <div 
                                className="bg-[#F5F5F5] w-full py-6 rounded-[3px] mb-1 h-[135px]"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="flex justify-center ">
                                    <div className="w-[70px] h-[70px] mb-3">
                                        <img src={`images/explore_product/${items.img}`} alt="" className="w-full h-full object-contain" />  
                                    </div>
                                    <div className="flex justify-between w-[135px] md:w-[145px] absolute top-2 left-[80%]">
                                        {/* <span  className="text-[9px] bg-[#DB4444] px-[.3rem] py-[.2rem] text-white rounded-[2px] font-[200] h-[16px] flex items-center justify-center">{items.discount}%</span> */}
                                        <div className="flex flex-col gap-1">
                                            <span className="bg-white rounded-[50%] p-[2px]"><CiHeart size={14}/></span>
                                            <span className="bg-white rounded-[50%] p-[2px]"><FiEye size={14} /></span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className={`bg-black text-white text-[9px] w-full
                                    py-2 rounded-b-sm md:${hoveredIndex !== index ? "hidden" : "" }`}
                                >
                                    Add To Cart
                                </button>
                            </div>
                            <div>
                                <h2 className="text-[9px] font-medium">{items.name}</h2>
                                <div className="flex gap-3 text-[8px]">
                                    <span className="text-[#DB4444]">${!items.discountPrice? items.normalPrice : items.discountPrice}</span>
                                    <span className="line-through text-black/50">{!items.discountPrice? "" : `$${items.normalPrice}`}</span>   
                                </div>
                            </div>
                        </article>
                    </Link>
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