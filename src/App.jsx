import React, {useState,createContext,useEffect,useMemo} from 'react'
import { Route ,Routes, useNavigate } from 'react-router-dom'
import Layout from './component/layout/Layout'
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import Dashboard from './component/Dashboard'
import PreviewProduct from './component/PreviewProduct'
import About from './component/About'
import ContactUs from './component/ContactUs'
import { auth,googleProvider } from './auth/firebase'
import { useLocation } from 'react-router-dom'
import Carts from './component/Carts'
import { 
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
  } from 'firebase/auth'

export const UserContext = createContext()

function App() {
  const navigate = useNavigate()
      // state hooks
  const [user,setUser] = useState(null) 
  const [errorMessage,setErrorMessage] = useState(null)   
  const [userData,setUserData] = useState({
    name:"",
    password:"",
    email:""
  })
  const [isUserOpen,setIsUserOpen] = useState(true)
  //listening for any changes if the user login or logout and direct them
  const location = useLocation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      const currentPath = location.pathname;
      if (currentUser && (currentPath === "/login" || currentPath === "/signup")) {
        navigate("/")
      }
    })
    return () => unsubscribe();
  }, [navigate, location.pathname])

  // signout
    const signout = () =>{
      signOut(auth)
      .then(() => {
        alert("You have successfully Logout")
        navigate("/login")
        setIsUserOpen(true)
      }).catch((error) => {
          console.error(error.message)
      })
    }

    //signup with google
    const signup = async () =>{
        try{
          const result = await signInWithPopup(auth, googleProvider)
          setUser (result.user)
        }catch(err){
          console.error(err)
        }
    }

    //signup with email and password
    const signUpWithEmail = async () => {
      try {
        setErrorMessage(null); // Clear previous errors
        // Validate inputs
        if (!userData.email || !userData.password || !userData.name) {
          throw new Error('All fields are required');
        }
    
        if (userData.password.length < 6) {
          throw new Error('Password must be at least 6 characters');
        }
        // 1. Create user account
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          userData.email, 
          userData.password
        )
        //Update profile with the user name
        await updateProfile(auth.currentUser, {
          displayName: userData.name
        })
        //Update state and show success
        setUser(auth.currentUser);
        setErrorMessage(null); // Clear any errors on success
    
      } catch (error) {
        let errorMessage = 'Signup failed'
        
        // Firebase specific errors
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'Email already in use'
            break
          case 'auth/invalid-email':
            errorMessage = 'Invalid email address'
            break
          case 'auth/weak-password':
            errorMessage = 'Password is too weak'
            break
          case 'auth/operation-not-allowed':
            errorMessage = 'Email/password accounts are not enabled'
            break
          default:
            errorMessage = error.message || 'Signup failed'
        }
        setErrorMessage(errorMessage)
      }
    }

    // signin with email and password
    const signInWithEmail = async () => {
      try {
        setErrorMessage(null) // Clear previous errors
        // Validate inputs
        if (!userData.email || !userData.password) {
          throw new Error('Email and password are required')
        }
        const userCredential = await signInWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        )
        setUser(userCredential.user)
        setErrorMessage(null); // Clear any errors on success
    
      } catch (error) {
        let errorMessage = 'Login failed'
        
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage = 'Invalid email address'
            break
          case 'auth/user-disabled':
            errorMessage = 'Account disabled'
            break
          case 'auth/user-not-found':
            errorMessage = 'User not found'
            break
          case 'auth/wrong-password':
            errorMessage = 'Incorrect password'
            break
          case 'auth/too-many-requests':
            errorMessage = 'Too many attempts. Try again later'
            break
          case 'auth/invalid-credential':
            errorMessage = 'User dont have an account'
            break
          default:
            errorMessage = error.message || 'Login failed'
        }
        setErrorMessage(errorMessage)
      }
    }


  //handleChange function
  const handleChange = (e) =>{
    const {name,value} = e.target
    setUserData((prev) => ({
      ...prev,
      [name]:value
    }))
}

  return (
    <UserContext.Provider value={{
      signup,signout,user,handleChange,userData,signUpWithEmail,
      signInWithEmail,isUserOpen,setIsUserOpen,errorMessage
     }}
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='previewProduct/:id' element={<PreviewProduct />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About/>} />
          <Route path='/carts' element={<Carts />} />
        </Route>
      </Routes>
    </UserContext.Provider>
    
  )
}

export default App
