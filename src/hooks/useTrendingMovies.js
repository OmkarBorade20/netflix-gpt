import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopular, addTrendingMovies } from "../utils/movieSlice";


const useTrendingMovies = () => {

    const dispatch=useDispatch();

    useEffect(()=>{
        fetchTrendingMovies();
    },[])

    const fetchTrendingMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/trending/movie/week?region=IN",API_OPTIONS)
        const json=await data.json();
        //console.log("Popular Movies",json.results)
        dispatch(addTrendingMovies(json.results));
    }


}

export default useTrendingMovies;