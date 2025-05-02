import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../App'
import { db } from '../../auth/firebase'
import { 
    where, 
    onSnapshot, 
    collection, 
    query, 
    updateDoc, 
    doc
} from 'firebase/firestore'
import { 
    updatePassword, 
    EmailAuthProvider, 
    reauthenticateWithCredential, 
    updateEmail,
    sendEmailVerification 
} from 'firebase/auth'

export default function MyProfile() {
    const { auth, user } = useContext(UserContext)
    const [isUserGoogle, setIsUserGoogle] = useState(false)
    const [userDetails, setUserDetails] = useState([])
    const [form, setForm] = useState({
        email: "",
        address: "",
        firstName: "",
        lastName: ""
    })

    const [password, setPassword] = useState({
        current: "",
        new: "",
        confirm: ""
    })

    const currentUser = auth.currentUser
    console.log(currentUser.email)
  
    useEffect(() => {
        if (!user) return

        const detailsRef = collection(db, "userMoreDetails")
        const q = query(detailsRef, where("uid", "==", user.uid))
    
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const details = []
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
    
        return () => unsubscribe()
    },[user])

    useEffect(() => {
        if (!currentUser) return
        const isGoogleUser = currentUser.providerData.some(
            provider => provider.providerId === 'google.com'
        )
        setIsUserGoogle(isGoogleUser)
    }, [user, currentUser])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const savePassword = async () => {
        try {
            if (password.new !== password.confirm) {
                alert("New passwords don't match!")
                return
            }
    
            const credential = EmailAuthProvider.credential(
                currentUser.email,
                password.current
            )
            
            await reauthenticateWithCredential(currentUser, credential)
            await updatePassword(currentUser, password.new)
    
            alert("Password updated successfully!")
            setPassword({
                current: '',
                new: '',
                confirm: ''
            })
        } catch (error) {
            console.error("Password update error:", error)
            if (error.code === "auth/wrong-password") {
                alert("Current password is incorrect")
            } else if (error.code === "auth/too-many-requests") {
                alert("Too many attempts. Please try again later")
            } else if(error.code === "auth/invalid-credential"){
                alert("Incorrect Current Password")
            } else {
                alert(`Error: ${error.message}`)
            }
        }
    }

    const handlePasswordChange = (e) => {
        const { name, value } = e.target
        setPassword(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const saveChanges = async (e) => {
        e.preventDefault()
        
        if (!user || !user.uid || !userDetails[0]?.id) return
        const fullName = `${form.firstName} ${form.lastName}`
    
        try {
            // Check if email is being changed
            if (form.email !== currentUser.email) {
                // For non-Google users
                if (!isUserGoogle) {
                    // Verify current email is verified
                    if (!currentUser.emailVerified) {
                        await sendEmailVerification(currentUser)
                        alert("Please verify your current email first. Check your inbox")
                        return
                    }
    
                    // Reauthenticate
                    const currentPassword = prompt("Enter your current password to confirm email change:")
                    if (!currentPassword) {
                        alert("Email change cancelled")
                        return
                    }
    
                    const credential = EmailAuthProvider.credential(
                        currentUser.email,
                        currentPassword
                    )
                    await reauthenticateWithCredential(currentUser, credential)
    
                    // FIRST update Firestore with the new email
                    const changesRef = doc(db, "userMoreDetails", userDetails[0].id)
                    await updateDoc(changesRef, {
                        name: fullName,
                        email: form.email,  // Update Firestore first
                        address: form.address,
                        uid: user.uid
                    })
    
                    // THEN update auth email and send verification
                    await updateEmail(currentUser, form.email)
                    await sendEmailVerification(currentUser)
                    
                    alert("Profile saved! Please verify your new email address to complete the change")
                } else {
                    alert("Google-authenticated users must change email through Google")
                    return
                }
            } else {
                // If email isn't changing, just update other fields
                const changesRef = doc(db, "userMoreDetails", userDetails[0].id)
                await updateDoc(changesRef, {
                    name: fullName,
                    address: form.address,
                    uid: user.uid
                })
                alert("Profile changes saved successfully")
            }
        } catch (error) {
            console.error("Error saving changes:", error)
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use by another account")
            } else if (error.code === "auth/requires-recent-login") {
                alert("Session expired. Please log in again to make changes")
            } else if (error.code === "auth/operation-not-allowed") {
                alert("Please verify your new email first. Check your inbox")
            } else {
                alert(`Error: ${error.message}`)
            }
        }
    }

    if (!user) {
        return (
            <div className='flex flex-col items-center'>
                <span className='w-[35px] h-[35px] border-[5px] border-black border-solid border-b-transparent rounded-[50%] inline-block box-border animate-spin'></span>
                <br />
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className='py-9 px-5 md:px-12 shadow-sm md:ml-[20%]'>
            <h1 className='text-red-600 text-xs md:text-sm font-medium'>Edit Your Profile</h1>
            <form className='mt-4'>        
                <div className={`grid grid-cols-2 ${isUserGoogle ? 'grid-rows-2' : 'grid-rows-4'} gap-7 text-sm`}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="firstName" className='text-xs md:text-sm'>First Name</label>
                        <input 
                            type="text" 
                            id="firstName"
                            className='outline-0 indent-3 h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100'
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
                            className='outline-0 indent-3 h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                            value={form.lastName}
                            onChange={handleChange}
                            name='lastName'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-xs md:text-sm'>Email</label>
                        <input 
                            type="email"
                            id='email' 
                            className='outline-0 indent-3 h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
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
                            id='address'
                            className='outline-0 indent-3 h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                            onChange={handleChange}
                            name='address'
                            value={form.address}
                        />
                    </div>
                    <div className={`${isUserGoogle ? 'hidden' : 'col-span-2 row-span-2 flex flex-col gap-1'}`}>
                        <label htmlFor="password" className='text-xs md:text-sm'>Password Changes</label>
                        <div className='flex flex-col gap-2'>
                            <input 
                                type="password" 
                                id='password'
                                className='outline-0 indent-3 h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                                placeholder='Current Password' 
                                name='current'
                                value={password.current}
                                onChange={handlePasswordChange}
                            />
                            <input 
                                type="password" 
                                className='outline-0 indent-3 h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                                placeholder='New Password'
                                onChange={handlePasswordChange}
                                value={password.new}
                                name='new'
                            />
                            <input 
                                type="password" 
                                className='outline-0 indent-3 h-9 md:h-12 md:px-5 py-4 rounded-sm bg-gray-100' 
                                placeholder='Confirm New Password'
                                onChange={handlePasswordChange}
                                name='confirm'
                                value={password.confirm}
                            />
                        </div>  
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <button 
                        onClick={saveChanges}
                        className='bg-red-600 hover:bg-red-700 cursor-pointer text-white 
                        text-xs w-36 h-8 rounded-sm mt-3'
                    >
                        Save Profile Changes
                    </button>

                    {!isUserGoogle && (
                        <button 
                            type="button" 
                            onClick={savePassword}
                            className='bg-blue-600 hover:bg-blue-700 cursor-pointer text-white 
                            text-xs w-30 h-8 rounded-sm mt-3'
                        >
                            Update Password
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}