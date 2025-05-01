import React, { useContext } from 'react'
import { UserContext } from '../App'

export default function Payment(){
    const { cart, loading, totalPrice } = useContext(UserContext)

    const product = cart.map( (item,index) => {
        return(
            <article key={index} className='flex mb-3'>
                <div className='flex gap-1.5'>
                    <div className='w-8 h-8 flex'>
                        <img 
                            src={`images/${item.imagePath}/${item.product.img}`} 
                            alt="image of product"
                            className='w-full h-full object-contain' 
                        />
                    </div>
                    <span className='text-xs md:text-sm font-medium'>{item.product.name}</span>
                </div>
                <span className='text-xs md:text-sm font-medium ml-auto'>${item.product.discountPrice || normalPrice}</span>
            </article>
        )
    })

    return(
        <section className='my-6 '>
            <h1 className='text-xs sm:text-sm md:text-2xl font-medium text-center'>Billing Details</h1>

            <div className='mt-6 flex flex-wrap justify-center gap-8 items-center'>
                {/* Billing Address Form*/}
                <div className='max-w-xl'>
                    <form action="" className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="firstName" className='text-gray-400 text-xs cursor-pointer '>First Name</label>
                            <input 
                                type="text" 
                                id='firstName' 
                                className='border-none bg-gray-100 outline-0 w-70 py-2 rounded-xs text-xs font-medium' 
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label 
                                htmlFor="streetAddress" 
                                className='text-gray-400 text-xs cursor-pointer '
                                >
                                    Street Address
                            </label>
                            <input 
                                type="text" 
                                id='streetAddress'
                                className='border-none bg-gray-100 outline-0 w-70 py-2 rounded-xs text-xs font-medium'
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label 
                                htmlFor="appNo" 
                                className='text-gray-400 text-xs cursor-pointer '
                                >
                                    Appartment No
                            </label>
                            <input 
                                type="number" 
                                id='appNo'
                                className='border-none bg-gray-100 outline-0 w-70 py-2 rounded-xs text-xs font-medium'
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label 
                                htmlFor="town" 
                                className='text-gray-400 text-xs cursor-pointer '
                                >
                                    Town/City
                            </label>
                            <input 
                                type="text" 
                                id='town'
                                className='border-none bg-gray-100 outline-0 w-70 py-2 rounded-xs text-xs font-medium'
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label 
                                htmlFor="phone" 
                                className='text-gray-400 text-xs cursor-pointer '
                                >
                                    Phone Number
                            </label>
                            <input 
                                type="number" 
                                id='phone'
                                className='border-none bg-gray-100 outline-0 w-70 py-2 rounded-xs text-xs font-medium'
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label 
                                htmlFor="email" 
                                className='text-gray-400 text-xs cursor-pointer '
                                >
                                    Email Address
                            </label>
                            <input 
                                type="email" 
                                id='email'
                                className='border-none bg-gray-100 outline-0 w-70 py-2 rounded-xs text-xs font-medium'
                            />
                        </div>

                        <div className='flex gap-2'>
                            <input type="checkbox"
                                id='checkbox'

                            />
                            <label htmlFor="checkbox" className='text-xs'>Save this information for faster check-out next time</label>
                        </div>
                    </form>
                </div>

                {/* order */}

                <div className='mt-10 md:mt-0'>
                        {loading ? 
                            <div className='flex justify-center items-center h-[50vh] gap-2'>
                                <span className='w-[35px] h-[35px] border-[5px] border-black border-solid border-b-transparent rounded-[50%] inline-block box-border animate-spin'></span> <br />
                            </div>
                            :(
                                <>
                                    {product}
                                    <div className='w-full'>
                                        <div className='flex text-xs font-medium'>
                                            <span>Subtotal:</span>
                                            <span className='ml-auto'>${totalPrice}</span>
                                        </div>
                                        <hr className='my-3 border-1 border-black/50 w-full' />
                                        <div className='flex text-xs font-medium'>
                                            <span>Shipping:</span>
                                            <span className='ml-auto'>Free</span>
                                        </div>
                                        <hr className='my-3 border-1 border-black/50 w-full' />
                                        <div className='flex text-xs font-medium'>
                                            <span>Total:</span>
                                            <span className='ml-auto'>${totalPrice}</span>
                                        </div>
                                        <div className='mt-2 flex'>
                                            <div className='flex gap-2'>
                                                <input type="radio" id='bank' name='paymentOption'  className='cursor-pointer' />
                                                <label htmlFor="bank">Bank</label>
                                            </div>
                                            <div className='flex gap-1 ml-auto'>
                                                <img src="images/Bkash.png" alt="image of card" />
                                                <img src="images/visa.png" alt="image of card" />
                                                <img src="images/Mastercard.png" alt="image of card" />
                                                <img src="images/Nagad.png" alt="image of card" />
                                            </div>
                                        </div>
                                        <div className='flex gap-2 mt-2'>
                                            <input type="radio" id='cashOnDelivery' name='paymentOption' className='cursor-pointer'/>
                                            <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                                        </div>
                                        <div className='flex gap-2 mt-2'>
                                            <input 
                                                type="text" 
                                                placeholder='Coupon Code' 
                                                className='indent-1.5 border py-1 w-40 rounded-sm' 
                                            />
                                            <button className='bg-red-600 hover:bg-red-700 cursor-pointer text-white text-xs font-medium px-4 rounded-sm'>Apply Coupon</button>
                                        </div>
                                        <button className='bg-red-600 hover:bg-red-700 cursor-pointer text-white text-xs font-medium px-4 py-2 mt-2 rounded-sm'>Place Order</button>
                                    </div>
                                </>
                            )
                        }
                </div>

            </div>
        </section>
    )
}