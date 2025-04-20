import React,{ useContext } from 'react'
import { UserContext } from '../../App'
import { GiShoppingCart } from "react-icons/gi"
import Product from './Products'
import { Link } from 'react-router-dom'

export default function Carts(){
    const { user, cart, loading } = useContext(UserContext)
    console.log(cart.length)
    return(
            loading ? (
                    <div className='flex justify-center items-center h-[50vh] gap-2'>
                        <span className='w-[35px] h-[35px] border-[5px] border-black border-solid border-b-transparent rounded-[50%] inline-block box-border animate-spin'></span> <br />
                        <p className='text-2xl'>Hold While Your Cart is Loading...</p>
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
                <table className='max-w-[800px] mx-auto mt-6'>
                    <thead className=''>
                        <tr 
                            className='w-[410px] sm:w-[580px] md:w-[620px] lg:w-[800px] grid grid-cols-4
                            justify-between place-items-center text-[9px] py-3 shadow-sm rounded-[2px]'
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
                </table>
            )
    )
}


// : cart.length === 0 ?(

// )
// :