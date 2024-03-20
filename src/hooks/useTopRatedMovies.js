import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () =>{
    //Fetch data from TMDB "TopRated Movies API" and update the redux store
    const dispatch = useDispatch(); 
    //api call
    const getTopRatedMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', api_options)
        const json = await data.json();
        //console.log(json.results)
        dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
        getTopRatedMovies();
    },[null])
}
export default useTopRatedMovies;