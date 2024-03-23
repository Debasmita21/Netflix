import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store) =>store.movies)
  return (
    <div className=" max-w-full md:max-w-full bg-black ">
     <div className="mt-0 md:-mt-52 relative z-20 p-0 md:p-8"> 
     <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
     <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
     <MovieList title={"Popular on Netflix"} movies={movies.popularMovies} />
     <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
     </div>
    </div>
  )
}

export default SecondaryContainer