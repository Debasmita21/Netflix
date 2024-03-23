import { background_url } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="h-screen object-cover" src={background_url} alt="background logo"/>
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  )
}

export default GptSearchPage