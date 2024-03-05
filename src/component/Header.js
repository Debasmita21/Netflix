import {netflix_logo} from "../utils/constants"
const Header = () => {
  return (
    <div className="absolute px-4 w-screen z-20 bg-gradient-to-b from-black">
      <img className="w-44 saturate-100 brightness-100
      contrast-125 " src={netflix_logo} alt="Netflix_logo"/>
    </div>
  )
}

export default Header