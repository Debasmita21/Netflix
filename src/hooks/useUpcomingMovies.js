import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () =>{
    //Fetch data from TMDB API and update the redux store
    const dispatch = useDispatch(); 
    //api call
    const getUpcomingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', api_options)
        const json = await data.json();
        //console.log(json.results)
        dispatch(addUpcomingMovies(json.results))
    }
    useEffect(()=>{
        getUpcomingMovies();
    },[null])
}
export default useUpcomingMovies;