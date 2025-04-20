import React,{ useEffect, useState, useContext } from 'react'
import { collection, getDocs, query, where  } from "firebase/firestore"
import { db } from '../auth/firebase'
import { UserContext } from '../App'

export default function Carts(){
    const { user } = useContext(UserContext)
    const [cart,setCart] = useState([])

    const getData = async () =>{
        try{
            if (!user || !user.uid) {
                setCart([])
                return
            }

            const cartsRef = collection(db, "carts")
            const q = query(cartsRef, where("uid", "==" , user.uid))
            const querySnapshot = await getDocs(q)

            let cartItem = []
            querySnapshot.forEach((doc) => {
                cartItem.push({...doc.data()})
            })
            setCart(cartItem)
        }catch(e){
            console.error(e)
        }
    }

    useEffect( ()=>{
        getData()
    },[user])
     
    return(
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
                {cart.map( (item,index) =>(
                    <tr
                        className='w-[410px] sm:w-[580px] md:w-[620px] lg:w-[800px] grid grid-cols-4
                        justify-between place-items-center text-[9px] py-3 px-3 shadow-sm rounded-[2px] mt-6'
                        key={index}
                    >
                        <td className='flex items-center gap-1 text-[7px] sm:text-[8px] md:text-[9px]'>
                            <img src={`images/${item.imagePath}/${item.product.img}`} alt="image of product" className='w-[15px] sm:w-[17px] md:w-[20px]' />
                            {item.product.name}
                        </td>
                        <td>${item.product.discountPrice?item.product.discountPrice:item.product.normalPrice}</td>
                        <td>
                            <input 
                                type="number"
                                min="1"         // Ensures values start from 1
                                defaultValue="1" 
                                className='border border-black/50 rounded-[2px] w-[30px] py-1'
                            />
                        </td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}