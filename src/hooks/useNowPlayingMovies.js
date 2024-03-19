import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () =>{
    //Fetch data from TMDB API and update the redux store
    const dispatch = useDispatch(); 
    //api call
    const getNowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_options)
        const json = await data.json();
        //console.log(json.results)
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovies;