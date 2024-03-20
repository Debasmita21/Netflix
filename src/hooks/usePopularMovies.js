import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () =>{
    //Fetch data from TMDB API and update the redux store
    const dispatch = useDispatch(); 
    //api call
    const getPopularMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', api_options)
        const json = await data.json();
        //console.log(json.results)
        dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
        getPopularMovies();
    },[null])
}
export default usePopularMovies;