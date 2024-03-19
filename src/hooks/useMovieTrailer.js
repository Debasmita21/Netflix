import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { addTrailerVideo } from "../utils/moviesSlice"
import { api_options } from "../utils/constants"



const useMovieTrailer = (movieId) => {
    
  const dispatch = useDispatch();
  //fetch movie trailer
  const getMovieTrailer = async () =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',api_options);

    const json = await data.json();

    console.log(json);

    

    const filterTrailer =  json.results.filter(video=>video?.type==='Trailer'&& video?.name==='Official Trailer');
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

    //console.log(trailer)
    dispatch(addTrailerVideo(trailer));
}
useEffect(()=>{
  getMovieTrailer()
},[])
}

export default useMovieTrailer
