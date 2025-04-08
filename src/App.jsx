import React, {useState,createContext,useEffect} from 'react'
import { Route ,Routes, useNavigate } from 'react-router-dom'
import Layout from './layout/Layout'
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import Dashboard from './component/Dashboard'
import { auth,googleProvider } from './auth/firebase'
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

    //listening for any changes if the user login or logout and direct them
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
          setUser(user)
          if(user) {
            navigate("/")
          } 
        })
    },[navigate])

  
  // state hooks
  const [user,setUser] = useState(null)    
  const [userData,setUserData] = useState({
    name:"",
    password:"",
    email:""
  })
  const [isUserOpen,setIsUserOpen] = useState(true)

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
      // 1. Create user account
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        userData.email, 
        userData.password
      )
      
      // 2. Update profile with the user name (wait for this to complete)
      await updateProfile(auth.currentUser, {
        displayName: userData.name
      })
  
      // 3. Update state and show success
      setUser(auth.currentUser)
      alert("Account created successfully!")
  
    } catch (error) {
      console.error("Error:", error.message)
      alert(`Error: ${error.message}`);
    }
  }

  // sigin with email and password
  const signInWithEmail = async () =>{
    const result = await signInWithEmailAndPassword(auth,userData.email,userData.password)
    setUser(result.user)
    console.log(result.user.displayName)
    .then((userCredential) => {  
      alert("You have succesfully Login")
    })
    .catch((error) => {
        console.error(error.message) 
    })
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
      signInWithEmail,isUserOpen,setIsUserOpen
     }}
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </UserContext.Provider>
    
  )
}

export default App
