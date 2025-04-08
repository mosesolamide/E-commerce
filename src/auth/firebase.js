import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY27Bb4OXJF21zT5mltsLWgaY-jEGcZAY",
  authDomain: "e-commerce-40cb0.firebaseapp.com",
  projectId: "e-commerce-40cb0",
  storageBucket: "e-commerce-40cb0.firebasestorage.app",
  messagingSenderId: "715040681117",
  appId: "1:715040681117:web:c4d1bd1226086de40cb874"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()


