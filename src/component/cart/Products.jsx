import React, { memo, useCallback } from 'react'
import { doc, updateDoc ,deleteDoc } from "firebase/firestore"
import { db } from '../../auth/firebase'
import { MdOutlineDelete } from "react-icons/md"

const Product = memo(({item,id}) => {

    const updateQuantity = useCallback( async (newQuantity,docId) => {
        if (newQuantity < 1) return

        const updateRef = doc(db, "carts", docId)
            await updateDoc(updateRef, {
                quantity: newQuantity
        })
    },[item])

    const deleteItem = async (docId) =>{
        await deleteDoc(doc(db, "carts", docId))
    }

    return(
        <tr
            className=' grid grid-cols-4 justify-between place-items-center text-xs md:text-sm 
            font-medium py-3 px-3 shadow-sm rounded-[2px] mt-6'
        >
            <td className='flex items-center gap-1'>
                <img src={`images/${item.imagePath}/${item.product.img}`} alt="image of product" className='w-[15px] sm:w-[17px] md:w-[20px]' />
                {item.product.name}
            </td>
            <td>${item.product.discountPrice || item.product.normalPrice}</td>
            <td className='border border-black/50 flex gap-2 items-center px-2 py-1'>
                <button 
                    className='text-sm cursor-pointer font-medium' 
                    onClick={() => updateQuantity((item.quantity || 1) - 1,id)}
                >
                    -
                </button>
                <span className='text-xs'>{item.quantity || 1}</span>
                <button
                    className='text-sm cursor-pointer font-medium' 
                    onClick={() => updateQuantity((item.quantity || 1) + 1,id)}
                 >
                    +
                </button>
            </td>
            <td 
                className='flex items-center gap-2 ml-8'
            >
                ${(item.product.discountPrice || item.product.normalPrice) * item.quantity} 
                <span onClick={ () => deleteItem(id) }><MdOutlineDelete size={15} className='text-red-600 cursor-pointer' /></span>
            </td>
        </tr>
    )
})

export default Product