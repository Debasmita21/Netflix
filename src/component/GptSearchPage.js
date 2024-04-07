import { GPTSearchPageBackground_url } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="h-screen w-screen object-cover" src={GPTSearchPageBackground_url} alt="background logo"/>
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  )
}

export default GptSearchPage