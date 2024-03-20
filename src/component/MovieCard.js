import { cardImage_cdnURL } from "../utils/constants"
const MovieCard = ({posterPath}) => {
  return (
    <div className="w-36 pr-2">

        <img className="rounded-sm" alt ="movie card " 
        src={cardImage_cdnURL+posterPath}
         />
        
    </div>
  )
}

export default MovieCard