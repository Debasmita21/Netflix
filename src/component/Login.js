import Header from "./Header"
import { background_url } from "../utils/constants"
import { useRef, useState } from "react"
import {checkValidLoginFormData} from "../utils/validation"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

  const [isSignInForm,setisSignInForm] =useState(true)
  const [errorMessage,seterrorMessage] = useState()
  const dispatch = useDispatch()
  const toggleSignIn = ()=>{
    setisSignInForm(!isSignInForm)

  }
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleBtnClick = ()=>{

    // validate login form data

    const message = checkValidLoginFormData(email.current.value,password.current.value);
    seterrorMessage(message)

    if(message) return;

    if(!isSignInForm){
      //Sign Up logic

      createUserWithEmailAndPassword(auth,
        email.current.value,
        password.current.value
        )
       .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;

       updateProfile(auth.currentUser, {
        displayName: name.current.value
      }).then(() => {
        const {uid,email,displayName} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        
      }).catch((error) => {
        seterrorMessage(error.message)
      });
       
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ "-" +errorMessage)
    
  });

    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth,
        email.current.value,
        password.current.value
        )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ "-" +errorMessage)
   
    

  });

    }

  }

  return (
    <div>
      <Header />
      
      <div className="w-max absolute">
        <img className="brightness-50" src= {background_url} alt="background_img"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="bg-black px-16 absolute w-4/12 h-3/4
        my-32 mx-auto left-0 right-0 text-white bg-opacity-80 flex-shrink-0">

        <h1 className="font-bold text-2xl my-6 p-3">{isSignInForm? "Sign In" :"Sign Up"}</h1>

        {!isSignInForm && <input type="text" placeholder="Full name" 
        className="p-3 my-3 w-full rounded-sm bg-[#333]" />}

        <input ref={email} type="text" placeholder="Email or phone number" 
        className="p-3 my-3 w-full rounded-sm bg-[#333]" />

        <input ref={password} type="password" placeholder="Password" 
        className="p-3 my-3 w-full rounded-sm bg-[#333]"/>

        <p className="text-red-600">{errorMessage}</p> 
        <div>
        <button type="submit" className="p-2 my-8 w-full bg-red-800 rounded-sm" onClick={handleBtnClick}>{isSignInForm? "Sign In" :"Sign Up"}</button>
        </div>
        <span className="cursor-pointer" onClick={toggleSignIn}>{isSignInForm?"New to Netflix? Sign up now.":"Already registred. Sign in now."}</span>
      </form>
      
    </div>
  )
}

export default Login