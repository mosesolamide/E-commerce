import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../App'

export default function Login(){
    const { signup,handleChange,userData,signInWithEmail,errorMessage } = useContext(UserContext)
    const FcGoogle = lazy(() => import("react-icons/fc").then(module => ({ default: module.FcGoogle })))

    return(
        <form className='flex flex-col justify-center items-center mt-10'>
            <div className='mb-5'>
                <h1 className='font-medium'>Login into Exclusive</h1>
                <p className='text-xs md:text-sm'>Enter your details below</p>
            </div>
            <p className="my-2 text-red-600">{errorMessage}</p>
            <input 
                type="email" 
                placeholder='Email' 
                className='border-b-1 w-[200px] mb-4 border-gray-400 text-sm py-3 outline-0' 
                name="email"
                onChange={handleChange}
                value={userData.email}
            />
            <input 
                type="password" 
                placeholder='Password' 
                autoComplete="new-password" 
                className='border-b-1 w-[200px] mb-4 border-gray-400 text-sm py-3 outline-0' 
                name="password"
                onChange={handleChange}
                value={userData.password}
            />
            <button
                className='bg-red-600 cursor-pointer text-white w-[200px] py-2 mb-4 rounded-2'
                onClick={signInWithEmail}
                type="button"
             >
                Login
            </button>
            <button
                className='flex gap-4 items-center border-[1px] border-gray-300 
                justify-center py-2 w-[200px] cursor-pointer rounded-[2px]'
                onClick={signup}
                type='button'
            >
                 <Suspense fallback={<div>Loading.....</div>}>
                  <FcGoogle />
                </Suspense>
                <p>Sign in with Google</p>
            </button>
            <div className="flex justify-between w-[198px] items-center mt-1">
                 <Link to="/forgot" className='text-red-600 text-xs mt-1'>Forget Password?</Link>
                 <Link to="/signup" className='font-medium border-b-1 text-xs text-gray-500'>Signup</Link>
            </div>
        </form>
        )
}