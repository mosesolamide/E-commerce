import React, { memo } from "react";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

const Product = memo(({ 
  item, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave, 
  onAddCart, 
  user, 
  goToLogin, 
  addWishList 
}) => {
  return (
    <article className="relative group">
      <div 
        className="bg-gray-100 w-full py-6 rounded-sm mb-2 h-32 md:h-36 relative overflow-hidden"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Discount badge */}
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-sm z-10">
          {item.discount}%
        </span>

        {/* Product image */}
        <div className="flex justify-center h-full">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center">
            <img 
              src={`images/flash_sales/${item.img}`} 
              alt={item.name} 
              className="w-full h-full object-contain" 
              loading="lazy"
            />  
          </div>
        </div>

        {/* Action buttons - right side */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button 
            className="bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors"
            onClick={() => addWishList(item, "flash_sales")}
          >
            <CiHeart size={14} className="hover:text-red-500"/>
          </button>
          <button className="bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors">
            <FiEye size={14} className="hover:text-blue-500"/>
          </button>
        </div>

        {/* Add to cart button - slides up on hover */}
        <button
          className={`absolute bottom-0 left-0 right-0 bg-black text-white text-xs w-full
            py-2 rounded-b-sm transition-all duration-300
            ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
          onClick={() => user ? onAddCart(item, "flash_sales") : goToLogin()}
        >
          Add To Cart
        </button>
      </div>

      {/* Product info */}
      <div className="p-1">
        <h2 className="text-xs md:text-sm font-medium line-clamp-1">{item.name}</h2>
        <div className="flex gap-2 items-center mt-1">
          <span className="text-red-600 text-xs md:text-sm">
            ${item.discountPrice}
          </span>
          <span className="text-gray-400 text-xs line-through">
            ${item.normalPrice}
          </span>   
        </div>
      </div>
    </article>
  )
})

export default Product