import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../App'
import { db } from '../../auth/firebase'
import { where, onSnapshot, collection, query, updateDoc, doc } from 'firebase/firestore';

export default function MyProfile() {
    const { auth, user } = useContext(UserContext);
    const [isUserGoogle, setIsUserGoogle] = useState(false)
    const [userDetails, setUserDetails] = useState([])
    const [ form, setForm ] = useState({
        email: "",
        address: "",
        firstName: "",
        lastName: ""
    })
  
    useEffect( ()=>{

        if (!user) {
            return
        }
        const detailsRef = collection(db, "userMoreDetails")
        const q = query(detailsRef, where("uid", "==", user.uid))
    
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const details = [];
          querySnapshot.forEach((doc) => {
            details.push({
              id: doc.id,
              ...doc.data()
            })
          })
          setUserDetails(details)

            if (details[0]) {
                const nameParts = details[0].name?.split(" ") || ["", ""]
                setForm({
                    email: details[0].email || "",
                    address: details[0].address || "",
                    firstName: nameParts[0],
                    lastName: nameParts[1]
                })
            }
        })
    
        // Cleanup listener on component unmount
        return () => unsubscribe()
    },[user])

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            // Check if user signed in with Google
            const isGoogleUser = currentUser.providerData.some(provider => provider.providerId === 'google.com')
            setIsUserGoogle(isGoogleUser)
        }
    }, [user])

    const handleChange = (e) =>{
        const { name, value  } = e.target
        setForm( prev => ({
            ...prev,
            [name]:value
        }))
    }

    const saveChanges = async (e) => {
        e.preventDefault()
        if (!user || !user.uid || !userDetails[0]?.id) return
        const fullName = `${form.firstName} ${form.lastName}`
        console.log(fullName)

        try {
            const changesRef = doc(db, "userMoreDetails", userDetails[0].id)
            await updateDoc(changesRef, {
            name: fullName,
            email: form.email,
            address: form.address,
            uid: user.uid
            });
            alert("Changes Saved!!!")
        } catch (e) {
            console.error("Error occurred: ", e);
        }
}


    if(!user){
        return (
            <div className='flex flex-col items-center'>
                <span 
                    className='w-[35px] h-[35px] border-[5px] border-black border-solid border-b-transparent rounded-[50%] 
                    inline-block box-border animate-spin'
                >
                </span> <br />
                <p>Loading...</p>
            </div>
        )
    }
    return (
        <div className='py-9 px-12 shadow-sm md:ml-[20%] '>
            <h1 className='text-red-600 text-xs md:text-sm font-medium'>Edit Your Profile</h1>
            <form className='mt-4'>        
                <div className={`grid grid-cols-2 ${isUserGoogle ? 'grid-rows-2' : 'grid-rows-4'} gap-7 text-sm`}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="firstName" className='text-xs md:text-sm'>First Name</label>
                        <input 
                            type="text" 
                            id="firstName"
                            className='outline-0 indent h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100'
                            value={form.firstName}
                            name='firstName'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="lastName" className='text-xs md:text-sm'>Last Name</label>
                        <input 
                            type="text" 
                            id="lastName"
                            className='outline-0 indent h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                            value={form.lastName}
                            onChange={handleChange}
                            name='lastName'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-xs md:text-sm'>Email</label>
                        <input 
                            type="email" 
                            className='outline-0 indent h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                            placeholder={userDetails[0]?.email || 'example@email.com'}
                            onChange={handleChange}
                            value={form.email}
                            name='email'
                        />  
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="address" className='text-xs md:text-sm'>Address</label>
                        <input 
                            type="text"
                            className='outline-0 indent h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                            onChange={handleChange}
                            name='address'
                            value={form.address}
                        />
                    </div>
                    <div className={`${isUserGoogle ? 'hidden' : 'col-span-2 row-span-2 flex flex-col gap-1'}`}>
                        <label htmlFor="" className='text-xs md:text-sm'>Password Changes</label>
                        <div className='flex flex-col gap-2'>
                            <input 
                                type="password" 
                                className='outline-0 indent h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                                placeholder='Current Password' 
                            />
                            <input 
                                type="password" 
                                className='outline-0 indent h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                                placeholder='New Password'
                            />
                            <input 
                                type="password" 
                                className='outline-0 indent h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                                placeholder='Confirm New Password'
                            />
                        </div>
                    </div>
                </div>
                <button 
                    onClick={saveChanges}
                    className='bg-red-600 hover:bg-red-700 cursor-pointer text-white 
                    text-xs w-30 h-8 rounded-sm mt-5'
                >Save Changes</button>
            </form>
        </div>
    );
}