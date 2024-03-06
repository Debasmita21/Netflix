import { useNavigate } from "react-router-dom";
import {netflix_logo} from "../utils/constants"
import { user_logo } from "../utils/constants"
import { auth } from "../utils/firebase"
import {signOut } from "firebase/auth";

const Header = () => {
const navigate = useNavigate()
const handleSignOut = ()=>{

  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/")
  }).catch((error) => {
    navigate("/error")
  });
}
  return (
    <div className="absolute px-4 w-screen z-20 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44 saturate-100 brightness-100
      contrast-125 " src={netflix_logo} alt="Netflix_logo"/>
      <div className="flex m-2 p-2">

        <img className="w-12 h-12" src= {user_logo} alt="User_logo"/>
        <button className="text-white font-bold" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Header