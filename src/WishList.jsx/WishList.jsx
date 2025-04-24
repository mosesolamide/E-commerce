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
                        <p className='text-2xl font-medium'>Your WishList Is Empty</p>
                        <Link to="/" className='text-xs text-[#DB4444] underline'>Go Back to Shopping</Link>
                    </div>
                </div>
            ):(
                <>
                    <div className='mt-6 flex justify-between'>
                        <span>Wishlist({wishlist.length})</span>
                        <button onClick={moveAllToBag} className='py-1 px-2 border rounded-[2px] text-xs'>Move All To Bag</button>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6 mt-5">
                        {wishlist.map( (items,index) => (
                            <article className="relative" key={index}>
                                <div 
                                    className="bg-[#F5F5F5] w-full py-6 rounded-[3px] mb-1 h-[135px]"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="flex justify-center">
                                        <div className="w-[70px] h-[70px] mb-3">
                                            <img src={`images/${items.imagePath}/${items.product.img}`} alt="" className="w-full h-full object-contain" />  
                                        </div>
                                        <div className="flex justify-between w-[135px] md:w-[145px] absolute top-2">
                                            {items.product.discount &&
                                                <span className="text-[9px] bg-[#DB4444] px-[.3rem] py-[.2rem] text-white rounded-[2px] font-[200] h-[16px] flex items-center justify-center">
                                                    {items.product.discount}%
                                                </span>
                                            }
                                            <div>
                                                <span onClick={ () => deleteItem(items.id) }>
                                                    <MdOutlineDelete size={15} className='cursor-pointer' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                        <button
                                            className={`bg-black text-white text-[9px] w-full
                                            py-2 rounded-b-sm md:${hoveredIndex !== index ? "hidden" : "" }`}
                                            onClick={() => user? addCart(items,"explore_product"): goToLogin()}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div>
                                        <h2 className="text-[9px] font-medium">{items.product.name}</h2>
                                        <div className="flex gap-3 text-[8px]">
                                            <span className="text-[#DB4444]">${items.product.discountPrice || items.product.normalPrice}</span>
                                            <span className="line-through text-black/50">{!items.product.discountPrice? "" : `$${items.product.normalPrice}`}</span>   
                                        </div>
                                    </div>
                            </article>
                        ))}
                    </div>                
                </>
            )}
        </>
    )
}