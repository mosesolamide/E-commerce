import React, { memo } from "react"
import { CiHeart } from "react-icons/ci"
import { FiEye } from "react-icons/fi"

const Product = memo(({ item, isHovered, onMouseEnter, onMouseLeave, onAddCart, user, goToLogin, addWishList }) => {
    return (
        <article className="relative">
            <div 
                className="bg-[#F5F5F5] w-full py-6 rounded-[3px] mb-1 h-[135px]"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className="flex justify-center">
                    <div className="w-[70px] h-[70px] mb-3">
                        <img 
                            src={`images/flash_sales/${item.img}`} 
                            alt={item.name} 
                            className="w-full h-full object-contain" 
                        />  
                    </div>
                    <div className="flex justify-between w-[135px] md:w-[140px] lg:w-[170px] absolute top-2">
                        <span className="text-[9px] bg-[#DB4444] px-[.3rem] py-[.2rem] text-white rounded-[2px] font-[200] h-[16px] flex items-center justify-center">
                            {item.discount}%
                        </span>
                        <div className="flex flex-col gap-1">
                            <span 
                                className="bg-white rounded-[50%] p-[2px] cursor-pointer shadow-sm"
                                onClick={ () => addWishList(item,"flash_sales")}
                            >
                                <CiHeart size={14}/>
                            </span>
                            <span className="bg-white rounded-[50%] p-[2px]">
                                <FiEye size={14} />
                            </span>
                        </div>
                    </div>
                </div>
                <button
                    className={`bg-black text-white text-[9px] w-full py-2 rounded-b-sm cursor-pointer md:${
                        !isHovered ? "hidden" : ""
                    }`}
                    onClick={() => user? onAddCart(item,"flash_sales"): goToLogin()}
                >
                    Add To Cart
                </button>
            </div>
            <div>
                <h2 className="text-xs md:text-sm font-medium line-clamp-1">{item.name}</h2>
                <div className="flex gap-3 text-[8px]">
                    <span className="text-red-600 text-xs md:text-sm">${item.discountPrice}</span>
                    <span className="text-gray-400 text-xs line-through">${item.normalPrice}</span>   
                </div>
            </div>
        </article>
    )
})

export default Product