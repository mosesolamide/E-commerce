import React,{ useContext, useState, useEffect } from 'react'
import { UserContext } from '../../App'
import { GiShoppingCart } from "react-icons/gi"
import Product from './Products'
import { Link } from 'react-router-dom'

export default function Carts(){
    const { user, cart, loading } = useContext(UserContext)
    const [ totalPrice,setTotalPrice ] = useState(null)

    useEffect(() => {
        const total = cart.reduce( (acc,item) => {
            const price = item.product?.discountPrice || item.product?.normalPrice || 0
            const qty = item.quantity || 1
            return acc + price * qty 
        },0)
        setTotalPrice(total)
      }, [cart])
    
    return(
        <>
            {loading ? (
                    <div className='flex justify-center items-center h-[50vh] gap-2'>
                        <span className='w-[35px] h-[35px] border-[5px] border-black border-solid border-b-transparent rounded-[50%] inline-block box-border animate-spin'></span> <br />
                        <p className='text-sm sm:text-md md:text-2xl'>Hold While Your Cart is Loading...</p>
                    </div>
            ): cart.length === 0 && user ? (
                <div className='flex flex-col justify-center items-center h-[50vh]'>
                    <GiShoppingCart size={100} className='text-gray-400' />
                    <div className='flex gap-2 items-center my-3'>
                        <p className='text-2xl font-medium'>Your Cart Is Empty</p>
                        <Link to="/" className='text-xs text-[#DB4444] underline'>Go Shopping</Link>
                    </div>
                </div>
            ) :(
                <div className='mx-auto max-w-[1000px] '>
                    <table className='mt-6 w-full'>
                        <thead className=''>
                            <tr 
                                className='grid grid-cols-4
                                justify-between place-items-center text-xs md:text-sm font-medium py-3 shadow-sm rounded-[2px]'
                            >
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map( (item,index) =>(
                                    <Product 
                                        key={index}
                                        item={item}
                                        id={item.id}
                                    />
                                ))
                            }
                        </tbody>
                        <button className='border border-black/50 rounded-[4px] text-xs px-4 py-2 mt-4'>Return To Shop</button>
                    </table>
                    <div className='mt-6 flex flex-col justify-center items-center md:flex-row md:justify-around gap-2 w-full'>
                        <div className='flex gap-3'>
                            <input type="text" placeholder='Coupon Code' className='border border-black/50 rounded-[2px] indent-2 w-[180px] h-[40px]' />
                            <button className='bg-red-600 px-4 py-2 text-white rounded-[4px] text-xs h-[40px]'>Apply Coupon</button>
                        </div>
                        <div className='mt-5 md:mt-0 w-[300px] sm:w-[350px]'>
                            <div className='border p-3 rounded-[2px] text-center'>
                                <h1 className='mb-3'>Cart Total</h1>
                                <div className='flex justify-between text-xs font-[400]'>
                                    <span>Subtotal:</span>
                                    <span>${totalPrice}</span>
                                </div>
                                <hr className='my-3 border-[1] border-black/50' />
                                <div className='flex justify-between text-xs font-[400]'>
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <hr className='my-3 border-[1] border-black/50' />
                                <div className='flex justify-between text-xs font-[400]'>
                                    <span>Total:</span>
                                    <span>${totalPrice}</span>
                                </div>
                                <button 
                                    className='bg-red-600 px-4 py-2 text-white rounded-[4px] text-xs h-[40px] mt-5'
                                >
                                    Process to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}