import React, { useState, createContext, useEffect, useCallback, Suspense, useMemo } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { auth, googleProvider } from './auth/firebase'
import { useLocation } from 'react-router-dom'
import { 
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from './auth/firebase'

// Lazy load components
const Layout = React.lazy(() => import('./component/layout/Layout'))
const SignUp = React.lazy(() => import('./auth/SignUp'))
const Login = React.lazy(() => import('./auth/Login'))
const Dashboard = React.lazy(() => import('./component/Dashboard'))
const AccountLayout = React.lazy(() => import('./component/ManageAccount/AccounLayout'))
const About = React.lazy(() => import('./component/About'))
const ContactUs = React.lazy(() => import('./component/ContactUs'))
const Wishlist = React.lazy(() => import('./WishList.jsx/WishList'))
const Carts = React.lazy(() => import('./component/cart/Carts'))
const Payment = React.lazy(() => import('./component/Payment'))
const MyProfile = React.lazy(() => import('./component/ManageAccount/Myprofile'))

export const UserContext = createContext()

function App() {
  const navigate = useNavigate()
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null) 
  const [errorMessage, setErrorMessage] = useState(null)
  const [wishlist, setWishList] = useState([])  
  const [totalPrice, setTotalPrice] = useState(null) 
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: ""
  })
  const [isUserOpen, setIsUserOpen] = useState(true)
  const location = useLocation()

  const userMoreDeatils = async (detail) => {
    try {
      await addDoc(collection(db, "userMoreDetails"), {
        name: detail.displayName, 
        uid: detail.uid,
        address: "",
        email: detail.email,
        createdAt: new Date()
      })
    } catch (e) {
      console.error("Error adding to moreDetails:", e)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(auth.currentUser)
      const currentPath = location.pathname;
      if (currentUser && (currentPath === "/login" || currentPath === "/signup")) {
        navigate("/")
      }
    })
    return () => unsubscribe()
  }, [navigate, location.pathname])

  const signout = () => {
    signOut(auth)
      .then(() => {
        alert("You have successfully Logout")
        navigate("/login")
        setIsUserOpen(true)
      }).catch((error) => {
        console.error(error.message)
      })
  }

  const signup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      setUser(result.user)
      userMoreDeatils(auth.currentUser)
    } catch (err) {
      console.error(err)
    }
  }

  const signUpWithEmail = async () => {
    try {
      setErrorMessage(null)
      if (!userData.email || !userData.password || !userData.name) {
        throw new Error('All fields are required');
      }

      if (userData.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        userData.email, 
        userData.password
      )

      await updateProfile(auth.currentUser, {
        displayName: userData.name
      })
      setUser(auth.currentUser)
      userMoreDeatils(auth.currentUser)
      setErrorMessage(null)
    } catch (error) {
      let errorMessage = 'Signup failed'

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

  const signInWithEmail = async () => {
    try {
      setErrorMessage(null)
      if (!userData.email || !userData.password) {
        throw new Error('Email and password are required')
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      )
      setUser(userCredential.user)
      setErrorMessage(null)
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const addCart = useCallback(async (item, imagePath) => {
    if (!user) {
      navigate('/login')
      return
    }
    try {
      await addDoc(collection(db, "carts"), {
        product: item,
        uid: user.uid,
        imagePath: imagePath,
        quantity: 1,
        createdAt: new Date()
      })
      alert("Successfully Added To Cart")
    } catch (e) {
      console.error("Error adding to cart:", e)
    }
  }, [user, navigate])

  const addWishList = useCallback(async (item, imagePath) => {
    if (!user) {
      navigate('/login')
      return
    }
    try {
      await addDoc(collection(db, "wishlist"), {
        product: item,
        uid: user.uid,
        imagePath: imagePath,
        createdAt: new Date()
      })
      alert("Successfully Added To Wishlist")
    } catch (e) {
      console.error("Error adding to wishlist:", e)
    }
  }, [user, navigate])

  useEffect(() => {
    if (!user || !user.uid) {
      setCart([])
      setLoading(true)
      return
    }

    const cartsRef = collection(db, "carts")
    const q = query(cartsRef, where("uid", "==", user.uid))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cartItem = []
      querySnapshot.forEach((doc) => {
        cartItem.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setCart(cartItem)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user])

  useEffect(() => {
    if (!user || !user.uid) {
      setWishList([])
      setLoading(true)
      return
    }

    const wishListRef = collection(db, "wishlist")
    const q = query(wishListRef, where("uid", "==", user.uid))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const wishListItem = []
      querySnapshot.forEach((doc) => {
        wishListItem.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setWishList(wishListItem)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user])

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const price = item.product?.discountPrice || item.product?.normalPrice || 0
      const qty = item.quantity || 1
      return acc + price * qty
    }, 0)
    setTotalPrice(total)
  }, [cart])

  // context value
  const userContextValue = useMemo(() => ({
    signup,
    signout,
    user,
    handleChange,
    userData,
    signUpWithEmail,
    signInWithEmail,
    isUserOpen,
    setIsUserOpen,
    errorMessage,
    addCart,
    cart,
    loading,
    addWishList,
    wishlist,
    totalPrice,
    auth
  }), [user, cart, wishlist, loading, totalPrice])

  return (
    <UserContext.Provider value={userContextValue}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='login' element={<Login />} />
            <Route path='payment' element={<Payment />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/about' element={<About />} />
            <Route path='/carts' element={<Carts />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/manageaccount' element={<AccountLayout />} >
              <Route index element={<MyProfile />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </UserContext.Provider>
  )
}

export default App
