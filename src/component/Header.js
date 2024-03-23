import { useNavigate } from "react-router-dom";
import {netflix_logo,user_logo} from "../utils/constants"
import { auth } from "../utils/firebase";
import {signOut,onAuthStateChanged} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearchPageView } from "../utils/gptSlice";


const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) =>store.user)
  const showgptSearchPage = useSelector((store) => store.gpt.showgptSearchPage);
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

  const handleGptSearchClick =()=> {
    //toggle gpt search page
    dispatch(toggleGptSearchPageView());
    
  };
  
  return (
    <div className="absolute px-4 w-screen z-20 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img className=" w-32 md:w-44 mx-auto md:mx-0 saturate-100 brightness-100
      contrast-125 " src={netflix_logo} alt="Netflix_logo"/>
      
      {user && 
        (
          <div className="flex m-auto md:m-2 p-auto md:p-2">
             <button className=" p-1 md:p-2 mr-2 ms-2 text-sm font-medium flex text-white bg-blue-500 rounded-md "
              onClick={handleGptSearchClick}>
              <svg className="mt-1.5 w-3 md:w-4 h-3 md:h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
        
        <span className="ml-1 ">{showgptSearchPage ? "Homepage" : "Search"}</span>
    </button>
        <img className="hidden md:block w-8 md:w-12 h-8 md:h-12" src= {user_logo} alt="User_logo"/>
        <button className="text-red-700 font-bold m-1" onClick={handleSignOut}>Sign Out</button>
      </div>)}
  
    </div>
  )
}

export default Header