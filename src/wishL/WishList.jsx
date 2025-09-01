import React, { useState, useContext } from 'react'
import { deleteDoc, doc, addDoc, collection, onSnapshot } from "firebase/firestore"
import { db } from '../auth/firebase'
import { UserContext } from '../App'
import { MdOutlineDelete } from "react-icons/md"
import { CiHeart } from "react-icons/ci"
import { Link } from 'react-router-dom'

export default function Wishlist(){
    const { addCart, user, goToLogin, wishlist, loading } = useContext(UserContext)
    const [hoveredIndex,setHoveredIndex] = useState(null)

    const deleteItem = async (docId) =>{
        await deleteDoc(doc(db, "wishlist", docId))
    }

    const moveAllToBag = async () => {
        if (!user) {
            navigate('/login')
            return
        }
    
        try {
            // Move all items to cart at once
            const addPromises = wishlist.map(item =>
                addDoc(collection(db, "carts"), {
                    product: item.product,
                    uid: user.uid,
                    imagePath: item.imagePath,
                    quantity: 1,
                    createdAt: new Date()
                })
            )
            await Promise.all(addPromises)
    
            // Delete all wishlist items
            const deletePromises = wishlist.map(item =>
                deleteDoc(doc(db, "wishlist", item.id))
            )
            await Promise.all(deletePromises)
    
            alert("Successfully moved all items to cart!")
        } catch (e) {
            console.error("Error moving items to cart and deleting wishlist:", e)
        }
    }
    

return(
        <>
            {loading? (
                <div className='flex justify-center items-center h-[50vh] gap-2'>
                    <span className='w-[35px] h-[35px] border-[5px] border-black border-solid border-b-transparent rounded-[50%] inline-block box-border animate-spin'></span> <br />
                    <p className='text-sm sm:text-md md:text-2xl'>Hold While Your WishList is Loading...</p>
                </div>
            ): wishlist.length === 0 && user ? (
                <div className='flex flex-col justify-center items-center h-[50vh]'>
                    <CiHeart size={100} className='text-gray-400' />
                    <div className='flex gap-2 items-center my-3'>
                        <p className='text-xs sm:text-sm md:text-2xl font-medium'>Your WishList Is Empty</p>
                        <Link to="/" className='text-xs text-red-600 underline'>Go Back to Shopping</Link>
                    </div>
                </div>
            ):(
                <div className='w-full'>
                    <div className='mt-6 flex justify-between'>
                        <span className='text-xs sm:text-sm'>Wishlist({wishlist.length})</span>
                        <button onClick={moveAllToBag} className='py-1 px-2 cursor-pointer border rounded-sm text-xs sm:text-sm'>Move All To Bag</button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-5">
                        {wishlist.map((items, index) => (
                            <article className="relative group" key={index}>
                            {/* Product Card Container */}
                            <div 
                                className="bg-gray-100 w-full py-6 rounded-sm mb-2 h-32 md:h-36 relative overflow-hidden"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Product Image */}
                                <div className="flex justify-center h-full">
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center">
                                    <img 
                                    src={`images/${items.imagePath}/${items.product.img}`} 
                                    alt={items.product.name}
                                    className="w-full h-full object-contain" 
                                    />  
                                </div>
                                </div>

                                {/* Discount Badge & Delete Button */}
                                <div className="flex justify-between items-start absolute top-2 left-2 right-2 px-2">
                                {items.product.discount && (
                                    <span className="text-xs font-medium bg-red-600 px-2 py-1 text-white rounded-sm z-10">
                                    {items.product.discount}%
                                    </span>
                                )}
                                <button 
                                    onClick={() => deleteItem(items.id)}
                                    className="text-black hover:text-red-600 transition-colors z-10"
                                >
                                    <MdOutlineDelete size={18} className="cursor-pointer" />
                                </button>
                                </div>

                                {/* Add to Cart Button (Slide Up Effect) */}
                                <button
                                className={`absolute bottom-0 left-0 right-0 bg-black text-white text-xs w-full
                                    py-2 rounded-b-sm transition-all duration-300
                                    ${hoveredIndex === index ? 'translate-y-0' : 'translate-y-full'}`}
                                onClick={() => user ? addCart(items, "explore_product") : goToLogin()}
                                >
                                Add To Cart
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="p-1">
                                <h2 className="text-xs md:text-sm font-medium line-clamp-1">
                                {items.product.name}
                                </h2>
                                <div className="flex gap-2 items-center mt-1">
                                <span className="text-red-600 font-medium text-xs sm:text-sm">
                                    ${items.product.discountPrice || items.product.normalPrice}
                                </span>
                                {items.product.discountPrice && (
                                    <span className="line-through text-gray-500 text-xs">
                                    ${items.product.normalPrice}
                                    </span>
                                )}   
                                </div>
                            </div>
                            </article>
                        ))}
                    </div>               
                </div>
            )}
        </>
    )
}