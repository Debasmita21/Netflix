import {netflix_logo} from "../utils/constants"
const Header = () => {
  return (
    <div className="absolute z-20">
      <img className="w-52 h-24 saturate-100 brightness-100
      contrast-125 mx-4 my-1" src={netflix_logo} alt="Netflix_logo"/>
    </div>
  )
}

export default Header