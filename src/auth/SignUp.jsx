import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../App'

const FcGoogle = lazy(() => import("react-icons/fc").then(module => ({ default: module.FcGoogle })))
export default function SignUp() {
    const { signup,handleChange,userData,signUpWithEmail,errorMessage } = useContext(UserContext)

    return(
        <form className='flex flex-col justify-center items-center mt-10'>
            <div className='mb-5'>
                <h1 className='font-medium'>Create an account</h1>
                <p className='text-xs md:text-sm'>Enter your details below</p>
                <p className="my-2 text-red-600">{errorMessage}</p>
            </div>
            <input
                type="text" 
                placeholder='Fullname' 
                name='name'
                className='border-b-1 w-[200px] mb-4 border-gray-400 text-xs py-3 outline-0' 
                value={userData.name} 
                onChange={handleChange}
                required
             />
            <input 
                type="text" 
                placeholder='Email' 
                name='email'
                autoComplete="username" 
                className='border-b-1 w-[200px] mb-4 border-gray-400 text-xs py-3 outline-0' 
                value={userData.email} 
                onChange={handleChange}
                required
            />
            <input 
                type="password" 
                placeholder='Password' 
                name='password'
                autoComplete="new-password" 
                className='border-b-1 w-[200px] mb-4 border-gray-400 text-xs py-3 outline-0'
                value={userData.password} 
                onChange={handleChange}
                required
            />
            <button 
                className='bg-red-600 text-white w-[200px] py-2 mb-4 rounded-2 cursor-pointer'
                type='button'
                onClick={signUpWithEmail}
            >
                Create Account
            </button>
            <button
                className='flex gap-4 items-center border-[1px] border-gray-300 
                justify-center py-2 w-[200px] cursor-pointer rounded-2'
                onClick={signup}
                type='button'
             >
                <Suspense fallback={<div>Loading.....</div>}>
                  <FcGoogle />
                </Suspense>
                <p>Sign up with Google</p>
            </button>
            <div className='flex gap-2 text-xs text-gray-500 mt-2'>
                <p className=''>Already have an account?</p>
                <Link to="/login" className='font-medium border-b-1'>Login</Link>
            </div>
        </form>
    )
}