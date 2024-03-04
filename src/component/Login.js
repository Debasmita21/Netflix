import Header from "./Header"
import { background_url } from "../utils/constants"
import { useRef, useState } from "react"
import {checkValidLoginFormData} from "../utils/validation"

const Login = () => {

  const [isSignInForm,setisSignInForm] =useState(true)
  const [errorMessage,seterrorMessage] = useState()

  const toggleSignIn = ()=>{
    setisSignInForm(!isSignInForm)

  }

  const email = useRef(null)
  const password = useRef(null)

  const handleBtnClick = ()=>{

    // validate login form data

    const message = checkValidLoginFormData(email.current.value,password.current.value);
    seterrorMessage(message)

  }

  

  return (
    <div>
      <Header />
      
      <div className="w-max absolute">
        <img className="brightness-50" src= {background_url} alt="background_img"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="bg-black px-16 absolute w-4/12 h-3/4
        my-32 mx-auto left-0 right-0 text-white bg-opacity-80">

        <h1 className="font-bold text-2xl my-6 p-3">{isSignInForm? "Sign In" :"Sign Up"}</h1>

        {!isSignInForm && <input type="text" placeholder="Full name" 
        className="p-3 my-3 w-full rounded-sm bg-[#333]" />}

        <input ref={email} type="text" placeholder="Email or phone number" 
        className="p-3 my-3 w-full rounded-sm bg-[#333]" />

        <input ref={password} type="password" placeholder="Password" 
        className="p-3 my-3 w-full rounded-sm bg-[#333]"/>

        <p className="text-red-600">{errorMessage}</p> 
        <div>
        <button className="p-2 my-8 w-full bg-red-800 rounded-sm" onClick={handleBtnClick}>{isSignInForm? "Sign In" :"Sign Up"}</button>
        </div>
        <span className="cursor-pointer" onClick={toggleSignIn}>{isSignInForm?"New to Netflix? Sign up now.":"Already registred. Sign in now."}</span>
      </form>
      
    </div>
  )
}

export default Login