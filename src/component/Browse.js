import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () =>{
    const showgptSearchPage = useSelector((store)=>store.gpt.showgptSearchPage);

    useNowPlayingMovies();
    useTopRatedMovies();
    usePopularMovies();
    useUpcomingMovies();

    return(
        
      <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      
      {showgptSearchPage ? (
        <GptSearchPage />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
        
    
    )}
export default Browse