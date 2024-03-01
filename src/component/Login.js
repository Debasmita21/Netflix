import Header from "./Header"
import { background_url } from "../utils/constants"
import { useState } from "react"

const Login = () => {

  const [isSignInForm,setisSignInForm] =useState(true)
  const toggleSignIn = ()=>{
    setisSignInForm(!isSignInForm)

  }

  return (
    <div>
      <Header />
      
      <div className="w-max absolute">
        <img className="brightness-50" src= {background_url} alt="background_img"/>
      </div>
      <form className="bg-black px-16 absolute w-4/12 h-3/4
      my-32 mx-auto left-0 right-0 text-white bg-opacity-80">

        <h1 className="font-bold text-2xl my-6 p-3">{isSignInForm? "Sign In" :"Sign Up"}</h1>

        {!isSignInForm && <input type="text" placeholder="Full name" 
        className="p-3 my-3 w-full rounded-sm bg-[#333]" />}

        <input type="email" placeholder="Email or phone number" 
        className="p-3 my-3 w-full rounded-sm bg-[#333]" />

        <input type="password" placeholder="Password" 
        className="p-3 my-3 w-full rounded-sm bg-[#333]"/>
        <div>
        <button type="submit" className="p-2 my-8 w-full bg-red-800 rounded-sm">{isSignInForm? "Sign In" :"Sign Up"}</button>
        </div>
        <span className="cursor-pointer" onClick={toggleSignIn}>{isSignInForm?"New to Netflix? Sign up now.":"Already registred. Sign in now."}</span>
      </form>
      
    </div>
  )
}

export default Login