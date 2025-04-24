import React, { useState, useContext } from 'react';
import { data } from './BestProduct';
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { UserContext } from '../../App';

export default function BestProducts() {
    const { addCart, user, goToLogin, addWishList } = useContext(UserContext);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [allProductOpened, setAllProductOpened] = useState(false);

    // Logic for viewing more products
    const numberOfPage = allProductOpened ? data.length : 5;
    const products = data.slice(0, numberOfPage);

    return (
        <section className="w-full max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-6 bg-red-600 rounded-sm"></div>
                <span className="text-red-600 font-medium text-sm">This Month</span>
            </div>
            
            <div className="flex justify-between items-center mt-4 mb-6">
                <h1 className="text-xs md:text-2xl font-bold">Best Selling Products</h1>
                <button 
                    className="bg-red-600 text-white text-xs md:text-sm py-2 px-6 rounded-sm
            hover:bg-red-700 transition-colors"
                    onClick={() => setAllProductOpened(prev => !prev)}
                >
                    {!allProductOpened ? "View All Products" : "Show Less"}
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {products.map((items, index) => (
                    <article className="relative group" key={index}>
                        <div 
                            className="bg-gray-100 w-full py-6 rounded-sm mb-2 h-32 md:h-36 relative overflow-hidden"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Discount badge */}
                            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-sm z-10">
                                {items.discount}%
                            </span>

                            {/* Product image */}
                            <div className="flex justify-center h-full ">
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center">
                                    <img 
                                        src={`images/bestSell/${items.img}`} 
                                        alt={items.name} 
                                        className="w-full h-full object-contain" 
                                    />  
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="absolute top-2 right-2 flex flex-col gap-2">
                                <button 
                                    className="bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors"
                                    onClick={() => addWishList(items, "bestSell")}
                                >
                                    <CiHeart size={14} className="hover:text-red-500"/>
                                </button>
                                <button className="bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors">
                                    <FiEye size={14} className="hover:text-blue-500"/>
                                </button>
                            </div>

                            {/* Add to Cart button with slide animation */}
                            <button
                                className={`absolute bottom-0 left-0 right-0 bg-black text-white text-xs w-full
                                    py-2 rounded-b-sm transition-all duration-300
                                    ${hoveredIndex === index ? 'translate-y-0' : 'translate-y-full'}`}
                                onClick={() => user ? addCart(items, "bestSell") : goToLogin()}
                            >
                                Add To Cart
                            </button>
                        </div>

                        {/* Product info */}
                        <div className="p-1">
                            <h2 className="text-xs md:text-sm font-medium line-clamp-1">{items.name}</h2>
                            <div className="flex gap-2 items-center mt-1">
                                <span className="text-red-600 text-xs md:text-sm">
                                    ${items.discountPrice || items.normalPrice}
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
        </section>
    );
}