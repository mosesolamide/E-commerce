import React, { useState, useContext } from "react";
import { data } from './explores';
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

export default function Explore() {
  const { addCart, goToLogin, user, addWishList } = useContext(UserContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [allProductOpened, setAllProductOpened] = useState(false);

  // Logic for viewing more products   
  const numberOfPage = allProductOpened ? data.length : 5;
  const products = data.slice(0, numberOfPage);

  return (
    <section className="my-6 w-full max-w-7xl mx-auto "> 
      <div className="flex items-center gap-2">
        <div className="w-3 h-6 bg-red-600 rounded-sm"></div>
        <span className="text-red-600 font-medium text-sm">Our Products</span>
      </div>
      
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-lg md:text-2xl">Explore Our Products</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-5">
        {products.map((items, index) => (
          <article className="relative group" key={index}>
            <div 
              className="bg-gray-100 w-full py-6 rounded-sm mb-2 h-32 md:h-36 relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-center h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center">
                  <img 
                    src={`images/explore_product/${items.img}`} 
                    alt={items.name} 
                    className="w-full h-full object-contain" 
                  />  
                </div>
              </div>
              
              {/* Action buttons - right side */}
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button 
                  className="bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors"
                  onClick={() => addWishList(items, "explore_product")}
                >
                  <CiHeart size={14} className="hover:text-red-500"/>
                </button>
                <button className="bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors">
                  <FiEye size={14} className="hover:text-blue-500"/>
                </button>
              </div>

              {/* Add to cart button - bottom */}
              <button
                className={`absolute bottom-0 left-0 right-0 bg-black text-white text-xs w-full
                  py-2 rounded-b-sm transition-all duration-300 
                  ${hoveredIndex === index ? 'translate-y-0' : 'translate-y-full'}`}
                onClick={() => user ? addCart(items, "explore_product") : goToLogin()}
              >
                Add To Cart
              </button>
            </div>
            
            {/* Product info */}
            <div className="p-1">
              <h2 className="text-xs md:text-sm font-medium line-clamp-1">{items.name}</h2>
              <div className="flex gap-2 items-center mt-1">
                <span className="text-red-600 text-xs md:text-sm">
                  ${items.normalPrice || items.discountPrice}
                </span>
                {items.discountPrice && (
                  <span className="text-gray-400 text-xs line-through">
                    ${items.normalPrice}
                  </span>
                )}   
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View all products button */}
      <div className="flex justify-center mt-8">
        <button 
          className="bg-red-600 text-white text-xs md:text-sm py-2 px-6 rounded-sm
            hover:bg-red-700 transition-colors"
          onClick={() => setAllProductOpened(prev => !prev)}
        >
          {!allProductOpened ? "View All Products" : "Show Less"}
        </button>
      </div>
    </section>
  );
}