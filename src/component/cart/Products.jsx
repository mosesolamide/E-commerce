import React, { memo, useCallback } from 'react'
import { doc, updateDoc } from "firebase/firestore"
import { db } from '../../auth/firebase'

const Product = memo(({item,id}) => {

    const updateQuantity = useCallback( async (newQuantity,docId) => {
        if (newQuantity < 1) return

        const updateRef = doc(db, "carts", docId)
            await updateDoc(updateRef, {
                quantity: newQuantity
        })
    },[item])

    return(
        <tr
            className=' grid grid-cols-4 justify-between place-items-center text-[7px] md:text-[9px] py-3 px-3 shadow-sm rounded-[2px] mt-6'
        >
            <td className='flex items-center gap-1'>
                <img src={`images/${item.imagePath}/${item.product.img}`} alt="image of product" className='w-[15px] sm:w-[17px] md:w-[20px]' />
                {item.product.name}
            </td>
            <td>${item.product.discountPrice || item.product.normalPrice}</td>
            <td className='border border-black/50 flex gap-2 px-2 py-1'>
                <button 
                    className='text-xs cursor-pointer' 
                    onClick={() => updateQuantity((item.quantity || 1) - 1,id)}
                >
                    -
                </button>
                <span className='text-xs'>{item.quantity || 1}</span>
                <button
                    className='text-xs cursor-pointer' 
                    onClick={() => updateQuantity((item.quantity || 1) + 1,id)}
                 >
                    +
                </button>
            </td>
            <td>${(item.product.discountPrice || item.product.normalPrice) * item.quantity}</td>
        </tr>
    )
})

export default Product