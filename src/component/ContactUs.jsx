import React from "react"
import { LuPhone } from "react-icons/lu"
import { TbMessage } from "react-icons/tb"

export default function ContactUs(){
    return(
        <div className="flex flex-col md:flex-row gap-6 justify-center my-20 max-w-[800px] mx-auto">
            <div className="bg-white shadow-sm p-5">
                <ul className="flex flex-col gap-3">
                    <li className="flex gap-2 ">
                        <div className="bg-[#DB4444] w-[25px] h-[25px] rounded-full flex justify-center items-center">
                            <LuPhone size={15} className="text-white" />
                        </div>
                        <span className="font-medium">Call To Us</span>
                    </li>
                    <li className="text-xs">We are available 24/7, 7 days a week.</li>
                    <li className="text-xs">Phone: +8801611112222</li>
                </ul>
                <hr className="my-5 text-black/50"/>
                <ul className="flex flex-col gap-3">
                    <li className="flex gap-2 ">
                        <div className="bg-[#DB4444] w-[25px] h-[25px] rounded-full flex justify-center items-center">
                            <TbMessage size={15} className="text-white" />
                        </div>
                        <span className="font-medium">Write To Us</span>
                    </li>
                    <li className="text-xs">Fill out our form and we will contact you within 24 hours.</li>
                    <li className="text-xs">Emails: customer@exclusive.com</li>
                    <li className="text-xs">Emails: support@exclusive.com</li>
                </ul>
            </div>
            <div className="bg-white shadow-sm p-5">
                <form 
                    action="" 
                    className="grid grid-cols-1 sm:grid-cols-3 grid-rows-[repeat(3,minmax(50px,50px))] gap-4"
                >
                    <input type="text" className="bg-[#F5F5F5] indent-4 text-sm" placeholder="Your name" />
                    <input type="text" className="bg-[#F5F5F5] indent-4 text-sm" placeholder="Your Email" />
                    <input type="text" className="bg-[#F5F5F5] indent-4 text-sm" placeholder="Your Phone" />
                    <textarea name="" id="" className="bg-[#F5F5F5] sm:col-span-3 sm:row-span-3 indent-4 py-2 text-sm resize-none" placeholder="Your message"></textarea>
                </form>
                <button 
                    className="text-white bg-[#DB4444] rounded-xs mt-4 px-4 py-2"
                >
                    Send Message
                </button>
            </div>
        </div>
    )
}