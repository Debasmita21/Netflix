import { useNavigate } from "react-router-dom";
import {netflix_logo,user_logo} from "../utils/constants"
import { auth } from "../utils/firebase";
import {signOut,onAuthStateChanged} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";


const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) =>store.user)
  const handleSignOut = ()=>{

    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));

          navigate("/browse");
          
        } 
        
        else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
        }
      });
      // Unsubscribe when component unmounts
      return ()=> unsubscribe();
  },[]);
  
  return (
    <div className="absolute px-4 w-screen z-20 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44 saturate-100 brightness-100
      contrast-125 " src={netflix_logo} alt="Netflix_logo"/>
      
      {user && (<div className="flex m-2 p-2">

        <img className="w-12 h-12" src= {user_logo} alt="User_logo"/>
        <button className="text-white font-bold" onClick={handleSignOut}>Sign Out</button>
      </div>)}
  
    </div>
  )
}

export default Header