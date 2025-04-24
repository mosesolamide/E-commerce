import React, { useState, useContext } from 'react'
import { data } from './BestProduct'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci"
import { FiEye } from "react-icons/fi"
import { UserContext } from '../../App'

export default function BestProducts(){
    const { addCart, user, goToLogin, addWishList } = useContext(UserContext)
    const [hoveredIndex,setHoveredIndex] = useState(null)
    const [allProductOpened,setAllProductOpened] = useState(false)

     //logic for viewing more products  
    let numberOfPage = allProductOpened? data.length : 5
    const products = data.slice(0,numberOfPage)

    return(
        <section className='w-full'>
            <div className="flex items-center gap-2">
                <div className="w-[13px] h-[27px] bg-[#DB4444] rounded-[2px]"></div>
                <span className="text-[#DB4444] font-medium text-sm">This Month</span>
            </div>
            <div className="mt-4 font-bold flex flex-col">   
                <div className='flex items-center mt-[-18px]'>
                    <h1 className="mr-14 text-xs md:text-xl mt-0">Best Selling Products</h1>
                    <button 
                        className="bg-[#DB4444] text-white text-[9px] md:text-xs py-2 md:py-3 rounded-[2px] 
                        flex justify-center w-[100px] md:w-[120px] ml-auto my-4 cursor-pointer"
                        onClick={() => setAllProductOpened(prev => !prev)}
                    >
                        {!allProductOpened? "View All Product" : "Close All Product"}
                    </button>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 mt-5">
                    {products.map( (items,index) => (
                            <article className="relative" key={index}>
                                <div 
                                    className="bg-[#F5F5F5] w-full py-6 rounded-[3px] mb-1 h-[135px]"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="flex justify-center ">
                                        <div className="w-[70px] h-[70px] mb-3">
                                            <img src={`images/bestSell/${items.img}`} alt="" className="w-full h-full object-contain" />  
                                        </div>
                                        <div className="flex justify-between w-[135px] md:w-[145px] lg:w-[170px] absolute top-2">
                                            <span  className="text-[9px] bg-[#DB4444] px-[.3rem] py-[.2rem] text-white rounded-[2px] font-[200] h-[16px] flex items-center justify-center">{items.discount}%</span>
                                            <div className="flex flex-col gap-1">
                                                <span 
                                                    className="bg-white rounded-[50%] p-[2px] cursor-pointer"
                                                    onClick={() => addWishList(items, "bestSell")}
                                                >
                                                    <CiHeart size={14}/>
                                                </span>
                                                <span className="bg-white rounded-[50%] p-[2px]"><FiEye size={14} /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className={`bg-black text-white text-[9px] w-full
                                        py-2 rounded-b-sm md:${hoveredIndex !== index ? "hidden" : "" }`}
                                        onClick={() => user? addCart(items,"bestSell"): goToLogin()}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div>
                                    <h2 className="text-[9px] font-medium">{items.name}</h2>
                                    <div className="flex gap-3 text-[8px]">
                                        <span className="text-[#DB4444]">${items.normalPrice || items.discountPrice}</span>
                                        <span className="line-through text-black/50">{!items.discountPrice? "" : `$${items.normalPrice}`}</span>   
                                    </div>
                                </div>
                            </article>
                    ))}
                </div>
            </div>
        </section>
    )
}