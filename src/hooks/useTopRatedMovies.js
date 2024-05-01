import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {  addTopRated } from "../utils/movieSlice";

const useTopRatedMovies = () => {

    const dispatch=useDispatch();

    useEffect(()=>{
        fetchTopRatedMovies();
    },[])

    const fetchTopRatedMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS)
        const json=await data.json();
        console.log("Top Rated Movies",json.results)
        dispatch(addTopRated(json.results));
    }
  
}


export default useTopRatedMovies