import { useDispatch } from "react-redux";
import {  addUpcoming } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  

        const dispatch=useDispatch();
    
        useEffect(()=>{
            fetchUpcomingMovies();
        },[])
    
        const fetchUpcomingMovies=async()=>{
            const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?region=IN",API_OPTIONS)
            const json=await data.json();
            //console.log("Upcoming Movies",json.results)
            dispatch(addUpcoming(json.results));
        }
      
}

export default useUpcomingMovies